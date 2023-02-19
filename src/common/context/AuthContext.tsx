import React, { useCallback, useState } from 'react';
import {
  GoogleAuthProvider, signInWithPopup,
} from 'firebase/auth';

import { StepperProps } from 'common/interface/StepperProps';
import { UserProps } from 'common/interface/UserProps';
import { api } from 'services/api';
import { createContext } from 'use-context-selector';
import { stepperAuthPerPhone } from 'utils/stepper';
import { GET_COUNTRY } from 'services/routes';
import { useLocation } from 'common/hooks/useLocation';
import { OptionSelectProps } from 'common/interface/OptionSelectProps';
import { CountryProps } from 'common/interface/CountryProps';
import { useToast } from 'common/hooks/useToast';
import { AuthPerPhoneProps } from 'common/interface/AuthPerPhoneProps';
import {
  saveUser, verifyPhone, validatorCode, loginUser, registerUser, forgotPassword,
} from 'services/modules/user';
import { MethodLoginProps } from 'common/interface/MethodLoginProps';
import { formatPhone } from 'utils/format';
import { ResponseProps } from 'common/interface/ResponseProps';
import { auth } from 'services/firebase';

interface AuthContextProps {
    user?: UserProps;
    stepperTypeAuthPerPhone?: StepperProps;
    optionsCountry: OptionSelectProps<string, string>[];
    countrys: CountryProps[];
    loadingAuthGoogle: boolean;
    expirationMessageSMS?: number;
    loadingAuthPerPhone: boolean;
    loadingLoginUser: boolean;
    forgotPassword: boolean;
    loadingSendForgotPassword: boolean;
    sendForgotPassword?: string;
    onLoginUser: (user: UserProps) => void;
    onNextAuthPerPhone: (data: AuthPerPhoneProps) => void;
    onFlowAuthPerPhone: () => void;
    onLoadCountry: () => Promise<void>;
    onBackStepperFlowAuthPerPhone: () => void;
    onLoginGoogle: () => Promise<void>;
    onRegisterUser: (user: UserProps) => Promise<void>;
    onForgotPassword: (forgotPassword: boolean) => void;
    onSendEmailForForgotPassword: (user: UserProps) => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { location } = useLocation();
  const { onToast } = useToast();
  const [isUser, setIsUser] = useState<UserProps>();
  const [isStepperTypeAuthPerPhone, setIsStepperTypeAuthPerPhone] = useState<StepperProps>();
  const [isOptionsCountry, setIsOptionCountry] = useState<OptionSelectProps<string, string>[]>([]);
  const [isCountrys, setIsCountrys] = useState<CountryProps[]>([]);
  const [isLoadingAuthGoogle, setIsLoadingAuthGoogle] = useState<boolean>(false);
  const [isLoadingAuthPerPhone, setIsLoadingAuthPerPhone] = useState<boolean>(false);
  const [isExpirationMessageSMS, setIsExpirationMessageSMS] = useState<number>();
  const [isLoadingLoginUser, setIsLoadingLoginUser] = useState<boolean>(false);
  const [isForgotPassword, setIsForgotPassword] = useState<boolean>(false);
  const [isSendForgotPassword, setIsSendForgotPassword] = useState<string>();
  const [isLoadingSendForgotPassword, setIsLoadingSendForgotPassword] = useState<boolean>(false);

  const handleLoginUser = useCallback(async (user: UserProps) => {
    try {
      setIsLoadingLoginUser(true);
      if (user && user.email && user.senha) {
        const result = await loginUser(user.senha, user.email);

        setIsUser(result);
        onToast({
          message: 'Sessão iniciada com sucesso.',
          type: 'success',
        });
      } else {
        onToast({
          message: 'Insira seu e-mail e senha.',
          type: 'info',
        });
      }
      setIsLoadingLoginUser(false);
    } catch (err: any) {
      setIsLoadingLoginUser(false);
      onToast({
        message: err.message || 'Ocorreu um erro de comunicação.',
        type: 'error',
      });
    }
  }, [onToast]);

  const handleRegisterUser = useCallback(async (user: UserProps) => {
    try {
      setIsLoadingLoginUser(true);
      if (user && user.email && user.senha && user.nome) {
        const result = await registerUser(user);

        setIsUser(result);
        onToast({
          message: 'Sessão iniciada com sucesso.',
          type: 'success',
        });
      } else {
        onToast({
          message: 'Insira seu nome, e-mail e senha.',
          type: 'info',
        });
      }
      setIsLoadingLoginUser(false);
    } catch (err: any) {
      setIsLoadingLoginUser(false);
      onToast({
        message: err.message || 'Ocorreu um erro de comunicação.',
        type: 'error',
      });
    }
  }, [onToast]);

  const handleSendEmailForForgotPassword = useCallback(async (user: UserProps) => {
    try {
      setIsLoadingSendForgotPassword(true);
      if (user.email) {
        const isSuccess = await forgotPassword(user.email);

        if (isSuccess) {
          setIsSendForgotPassword(user.email);
        }
      } else {
        onToast({
          message: 'Insira um e-mail válido.',
          type: 'warning',
        });
      }
      setIsLoadingSendForgotPassword(false);
    } catch (err: any) {
      setIsLoadingSendForgotPassword(false);
      onToast({
        message: err.message || 'Ocorreu um erro de comunicação.',
        type: 'error',
      });
    }
  }, [onToast]);

  const handleForgotPassword = useCallback((forgotPassword: boolean) => {
    setIsForgotPassword(forgotPassword);
    if (!forgotPassword) {
      setIsSendForgotPassword(undefined);
    }
  }, []);

  const handleBackStepperFlowAuthPerPhone = useCallback(() => {
    if (isStepperTypeAuthPerPhone && isStepperTypeAuthPerPhone.stepper === 0) {
      setIsStepperTypeAuthPerPhone(undefined);
    } else if (isStepperTypeAuthPerPhone) {
      setIsStepperTypeAuthPerPhone(stepperAuthPerPhone[isStepperTypeAuthPerPhone.stepper - 1]);
    }
  }, [isStepperTypeAuthPerPhone]);

  const handleFlowAuthPerPhone = useCallback(() => {
    setIsStepperTypeAuthPerPhone({
      stepper: stepperAuthPerPhone[0].stepper,
      stage: stepperAuthPerPhone[0].stage,
    });
  }, []);

  const handleNextAuthPerPhone = useCallback(async (data: AuthPerPhoneProps) => {
    try {
      setIsLoadingAuthPerPhone(true);
      const phoneFormatted = formatPhone(data.phone);
      if (isStepperTypeAuthPerPhone && isStepperTypeAuthPerPhone.stepper === 0 && data && phoneFormatted && data.country) {
        const phoneFormatted = formatPhone(data.phone);
        const result = await verifyPhone(phoneFormatted, data.country, location) as ResponseProps<{
            expirationTimestamp: number;
            expirationDateFmt: string;
        }>;

        if (result.obj && result.ok) {
          setIsStepperTypeAuthPerPhone({
            stepper: stepperAuthPerPhone[1].stepper,
            stage: stepperAuthPerPhone[1].stage,
          });
          setIsExpirationMessageSMS(result.obj.expirationTimestamp);
        }

        if (!result.ok) {
          throw new Error(result.mensagem);
        }
      }
      if (isStepperTypeAuthPerPhone && isStepperTypeAuthPerPhone.stepper === 1 && data && data.code && phoneFormatted && data.country) {
        const result = await validatorCode(phoneFormatted, data.country, data.code, location);

        if (result) {
          setIsUser(result);
          onToast({
            message: 'Sessão iniciada com sucesso.',
            type: 'success',
          });
        }
      }
      setIsLoadingAuthPerPhone(false);
    } catch (err: any) {
      setIsLoadingAuthPerPhone(false);
      onToast({
        message: err.message || 'Ocorreu um erro de comunicação.',
        type: 'error',
      });
    }
  }, [location, onToast, isStepperTypeAuthPerPhone]);

  const handleLoadCountry = useCallback(async () => {
    try {
      const { data } = await api.get(`${GET_COUNTRY}${location}`) as { data: CountryProps[] };

      const options = [] as OptionSelectProps<string, string>[];

      data.forEach((item) => {
        options.push({
          innerText: `${item.flag} +${item.countryCode}`,
          value: item.countryCode,
        });
      });

      setIsOptionCountry(options);
      setIsCountrys(data);
    } catch (err) {
      onToast({
        message: 'Ocorreu um erro de comunicação.',
        type: 'error',
      });
    }
  }, [location, onToast]);

  const handleLoginGoogle = useCallback(async () => {
    try {
      setIsLoadingAuthGoogle(true);
      const googleProvider = new GoogleAuthProvider();
      const { user } = await signInWithPopup(auth, googleProvider);
      const tokenId = await user.getIdToken();

      const result = await saveUser(user, tokenId, MethodLoginProps.GOOGLE) as ResponseProps<UserProps>;

      if (result && !result.ok) {
        throw new Error(result.mensagem);
      }
      if (result && result.obj) {
        setIsUser(result.obj);

        onToast({
          message: 'Sessão iniciada com sucesso.',
          type: 'success',
        });
      }
      setIsLoadingAuthGoogle(false);
    } catch (err: any) {
      onToast({
        message: err && err.mensagem ? err.mensagem : 'Ocorreu um erro de comunicação.',
        type: 'error',
      });
      setIsLoadingAuthGoogle(false);
    }
  }, [onToast]);

  return (
    <AuthContext.Provider value={{
      user: isUser,
      onLoginUser: handleLoginUser,
      onNextAuthPerPhone: handleNextAuthPerPhone,
      stepperTypeAuthPerPhone: isStepperTypeAuthPerPhone,
      onLoadCountry: handleLoadCountry,
      optionsCountry: isOptionsCountry,
      countrys: isCountrys,
      loadingAuthGoogle: isLoadingAuthGoogle,
      loadingAuthPerPhone: isLoadingAuthPerPhone,
      expirationMessageSMS: isExpirationMessageSMS,
      loadingLoginUser: isLoadingLoginUser,
      forgotPassword: isForgotPassword,
      loadingSendForgotPassword: isLoadingSendForgotPassword,
      sendForgotPassword: isSendForgotPassword,
      onFlowAuthPerPhone: handleFlowAuthPerPhone,
      onBackStepperFlowAuthPerPhone: handleBackStepperFlowAuthPerPhone,
      onLoginGoogle: handleLoginGoogle,
      onRegisterUser: handleRegisterUser,
      onForgotPassword: handleForgotPassword,
      onSendEmailForForgotPassword: handleSendEmailForForgotPassword,
    }}
    >
      {children}
    </AuthContext.Provider>
  );
}
