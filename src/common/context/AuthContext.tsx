import React, { useCallback, useState } from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

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
import { auth, saveUser } from 'services/firebase';
import { MethodLoginProps } from 'common/interface/MethodLoginProps';

interface AuthContextProps {
    user?: UserProps;
    stepperTypeAuthPerPhone?: StepperProps;
    optionsCountry: OptionSelectProps<string, string>[];
    countrys: CountryProps[];
    onLoginUser: (user: UserProps) => void;
    onNextAuthPerPhone: (data: AuthPerPhoneProps) => void;
    onFlowAuthPerPhone: () => void;
    onLoadCountry: () => Promise<void>;
    onBackStepperFlowAuthPerPhone: () => void;
    onLoginGoogle: () => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { location } = useLocation();
  const { onToast } = useToast();
  const [isUser, setIsUser] = useState<UserProps>();
  const [isStepperTypeAuthPerPhone, setIsStepperTypeAuthPerPhone] = useState<StepperProps>();
  const [isOptionsCountry, setIsOptionCountry] = useState<OptionSelectProps<string, string>[]>([]);
  const [isCountrys, setIsCountrys] = useState<CountryProps[]>([]);

  const handleLoginUser = useCallback((user: UserProps) => {
    setIsUser(user);
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

  const handleNextAuthPerPhone = useCallback((data: AuthPerPhoneProps) => {
    if (data && data.phone && data.country) {
      setIsStepperTypeAuthPerPhone({
        stepper: stepperAuthPerPhone[1].stepper,
        stage: stepperAuthPerPhone[1].stage,
      });
    }
  }, []);

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
        message: 'Houve um problema de comunicação.',
        type: 'error',
      });
    }
  }, [location, onToast]);

  const handleLoginGoogle = useCallback(async () => {
    try {
      const googleProvider = new GoogleAuthProvider();
      const { user } = await signInWithPopup(auth, googleProvider);

      const result = await saveUser(user, MethodLoginProps.GOOGLE);

      console.log(result);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <AuthContext.Provider value={{
      user: isUser,
      onLoginUser: handleLoginUser,
      onNextAuthPerPhone: handleNextAuthPerPhone,
      stepperTypeAuthPerPhone: isStepperTypeAuthPerPhone,
      onLoadCountry: handleLoadCountry,
      optionsCountry: isOptionsCountry,
      countrys: isCountrys,
      onFlowAuthPerPhone: handleFlowAuthPerPhone,
      onBackStepperFlowAuthPerPhone: handleBackStepperFlowAuthPerPhone,
      onLoginGoogle: handleLoginGoogle,
    }}
    >
      {children}
    </AuthContext.Provider>
  );
}
