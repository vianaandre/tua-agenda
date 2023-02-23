import React, { useCallback, useEffect, useState } from 'react';
import {
  GoogleAuthProvider, signInWithPopup,
} from 'firebase/auth';
import { getCookie, deleteCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import axios from 'axios';
import { createContext } from 'use-context-selector';

import { StepperProps } from 'common/interface/StepperProps';
import { UserProps } from 'common/interface/UserProps';
import { api } from 'services/api';
import { stepperAuthPerPhone } from 'utils/stepper';
import { GET_COUNTRY, VIACEP } from 'services/routes';
import { useLocation } from 'common/hooks/useLocation';
import { OptionSelectProps } from 'common/interface/OptionSelectProps';
import { CountryProps } from 'common/interface/CountryProps';
import { useToast } from 'common/hooks/useToast';
import { AuthPerPhoneProps } from 'common/interface/AuthPerPhoneProps';
import {
  saveUser, verifyPhone, validatorCode, loginUser, registerUser, forgotPassword, findUser, updateUser, uploadPhoto,
} from 'services/modules/user';
import { MethodLoginProps } from 'common/interface/MethodLoginProps';
import { formatPhone } from 'utils/format';
import { ResponseProps } from 'common/interface/ResponseProps';
import { auth } from 'services/firebase';
import { UseFormSetValue } from 'react-hook-form';
import { AddressVIACEPProps } from 'common/interface/AddressVIACEPProps';

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
    loadingUser: boolean;
    VIACEP: {
        sucess: boolean;
        loading: boolean
    };
    loadingUpdatedUser: boolean;
    uploadPhoto?: string | ArrayBuffer | null | undefined;
    onLoginUser: (user: UserProps) => void;
    onNextAuthPerPhone: (data: AuthPerPhoneProps) => void;
    onFlowAuthPerPhone: () => void;
    onLoadCountry: () => Promise<void>;
    onBackStepperFlowAuthPerPhone: () => void;
    onLoginGoogle: () => Promise<void>;
    onRegisterUser: (user: UserProps) => Promise<void>;
    onForgotPassword: (forgotPassword: boolean) => void;
    onSendEmailForForgotPassword: (user: UserProps) => Promise<void>;
    onLoadAddress: (cep: string, setValue: UseFormSetValue<UserProps>) => Promise<void>;
    onUpdateUser: (user: UserProps) => Promise<void>;
    onUploadPhoto: (inputFile: React.ChangeEvent<HTMLInputElement>) => void;
    onLogoutUser: () => void;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { location } = useLocation();
  const { onToast } = useToast();
  const { push } = useRouter();

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
  const [isLoadingUser, setIsLoadingUser] = useState<boolean>(true);
  const [isVIACEP, setIsVIACEP] = useState<{
    sucess: boolean;
    loading: boolean
  }>({
    loading: false,
    sucess: false,
  });
  const [isLoadingUpdatedUser, setIsUpdatedUser] = useState<boolean>(false);
  const [isUploadPhoto, setIsUploadPhoto] = useState<string | ArrayBuffer | null | undefined>();

  const handleLoadUser = useCallback(async () => {
    try {
      setIsLoadingUser(true);
      const isToken = getCookie('@Auth:token') as string;
      const isIdUser = getCookie('@Auth:id') as string;

      if (isToken && isIdUser) {
        const isUser = await findUser(isIdUser, isToken) as ResponseProps<UserProps>;

        if (isUser.obj) {
          setIsUser(isUser.obj);
        } else {
          onToast({
            message: 'Usuário não encontrado.',
            type: 'error',
          });
        }
      }
      setIsLoadingUser(false);
    } catch (err: any) {
      setIsLoadingUser(false);
      onToast({
        message: err.message || 'Ocorreu um erro de comunicação.',
        type: 'error',
      });
    }
  }, [onToast]);

  const handleLoginUser = useCallback(async (user: UserProps) => {
    try {
      setIsLoadingLoginUser(true);
      if (user && user.email && user.senha) {
        const result = await loginUser(user.senha, user.email, user.keepConnected);

        setIsUser(result);
        push('/');
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
  }, [onToast, push]);

  const handleRegisterUser = useCallback(async (user: UserProps) => {
    try {
      setIsLoadingLoginUser(true);
      if (user && user.email && user.senha && user.nome) {
        const result = await registerUser(user);

        setIsUser(result);
        push('/');
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
  }, [onToast, push]);

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

      const result = await saveUser(user, tokenId, MethodLoginProps.GOOGLE, undefined, true) as ResponseProps<UserProps>;

      if (result && !result.ok) {
        throw new Error(result.mensagem);
      }
      if (result && result.obj) {
        setIsUser(result.obj);
        push('/');
        onToast({
          message: 'Sessão iniciada com sucesso.',
          type: 'success',
        });
      }
      setIsLoadingAuthGoogle(false);
    } catch (err: any) {
      onToast({
        message: err && err.mensagem ? err.mensagem : 'Falha ao iniciar a sessão.',
        type: 'error',
      });
      setIsLoadingAuthGoogle(false);
    }
  }, [onToast, push]);

  const handleLoadAddress = useCallback(async (cep: string, setValue: UseFormSetValue<UserProps>) => {
    try {
      setIsVIACEP((current) => ({
        ...current,
        loading: true,
      }));
      const { data } = await axios.get(`${VIACEP}/${cep}/json`) as { data: AddressVIACEPProps };

      if (data.erro) {
        onToast({
          message: 'CEP não encontrado.',
          type: 'info',
        });
      } else {
        setValue('rua', data.bairro);
        setValue('complemento', data.complemento);
        setValue('estado', data.uf);
        setValue('cidade', data.localidade);
      }

      setIsVIACEP(() => ({
        sucess: true,
        loading: false,
      }));
    } catch (err: any) {
      onToast({
        message: 'CEP não encontrado.',
        type: 'info',
      });
      setIsVIACEP(() => ({
        sucess: true,
        loading: false,
      }));
    }
  }, [onToast]);

  const handleFormatDataUser = useCallback((userNew: UserProps, userOld?: UserProps) => {
    return {
      ...userOld,
      ...userNew,
      dtNascimento: userNew.dtNascimento ? userNew.dtNascimento.split('/').reverse().join('-') : null,
      telefone: userNew.phone ? formatPhone(userNew.phone) : undefined,
      telefone1: userNew.phone ? formatPhone(userNew.phone) : undefined,
    } as UserProps;
  }, []);

  const handleUpdateUser = useCallback(async (user: UserProps) => {
    try {
      setIsUpdatedUser(true);
      const isUserFormatted = handleFormatDataUser(user, isUser);

      if (isUploadPhoto && isUserFormatted.id) {
        await uploadPhoto({
          base64: (isUploadPhoto as string).split('base64,')[1],
          extension: 'png',
          name: isUserFormatted.id,
        }, isUserFormatted.id) as ResponseProps<UserProps>;
      }

      const isUserUpdated = await updateUser({
        ...isUserFormatted,
      }) as ResponseProps<UserProps>;

      if (!isUserUpdated.ok || !isUserUpdated.obj) {
        onToast({
          message: 'Não foi possível atualizar seu Usuário.',
          type: 'error',
        });
      } else {
        setIsUser({
          ...isUserUpdated.obj,
        });
        onToast({
          message: 'Usuário atualizado com sucesso.',
          type: 'success',
        });
      }

      setIsUpdatedUser(false);
    } catch (err: any) {
      onToast({
        message: err.message || 'Não foi possível atualizar seu Usuário.',
        type: 'error',
      });
      setIsUpdatedUser(false);
    }
  }, [onToast, handleFormatDataUser, isUser, isUploadPhoto]);

  const handleUploadPhoto = useCallback((inputFile: React.ChangeEvent<HTMLInputElement>) => {
    if (inputFile.target && inputFile.target.files && inputFile.target.files.length > 0) {
      const isFile = inputFile.target.files[0];
      const isReader = new FileReader();
      isReader.onload = (e) => {
        setIsUploadPhoto(e.target?.result);
      };
      isReader.onerror = () => {
        onToast({
          message: 'Não foi possível abrir a imagem.',
          type: 'info',
        });
      };
      isReader.readAsDataURL(isFile);
    }
  }, [onToast]);

  const handleLogoutUser = useCallback(() => {
    deleteCookie('@Auth:id');
    window.location.reload();
  }, []);

  useEffect(() => {
    if (!isUser) handleLoadUser();
  }, [handleLoadUser, isUser]);

  useEffect(() => {
    handleLoadCountry();
  }, [handleLoadCountry]);

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
      loadingUser: isLoadingUser,
      VIACEP: isVIACEP,
      loadingUpdatedUser: isLoadingUpdatedUser,
      uploadPhoto: isUploadPhoto,
      onFlowAuthPerPhone: handleFlowAuthPerPhone,
      onBackStepperFlowAuthPerPhone: handleBackStepperFlowAuthPerPhone,
      onLoginGoogle: handleLoginGoogle,
      onRegisterUser: handleRegisterUser,
      onForgotPassword: handleForgotPassword,
      onSendEmailForForgotPassword: handleSendEmailForForgotPassword,
      onLoadAddress: handleLoadAddress,
      onUpdateUser: handleUpdateUser,
      onUploadPhoto: handleUploadPhoto,
      onLogoutUser: handleLogoutUser,
    }}
    >
      {children}
    </AuthContext.Provider>
  );
}
