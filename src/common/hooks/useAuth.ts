import { AuthContext } from 'common/context/AuthContext';
import { useContextSelector } from 'use-context-selector';

export const useAuth = () => {
  const user = useContextSelector(AuthContext, (auth) => auth.user);
  const stepperTypeAuthPerPhone = useContextSelector(AuthContext, (auth) => auth.stepperTypeAuthPerPhone);
  const optionsCountry = useContextSelector(AuthContext, (auth) => auth.optionsCountry);
  const countrys = useContextSelector(AuthContext, (auth) => auth.countrys);
  const loadingAuthGoogle = useContextSelector(AuthContext, (auth) => auth.loadingAuthGoogle);
  const expirationMessageSMS = useContextSelector(AuthContext, (auth) => auth.expirationMessageSMS);
  const loadingAuthPerPhone = useContextSelector(AuthContext, (auth) => auth.loadingAuthPerPhone);
  const loadingLoginUser = useContextSelector(AuthContext, (auth) => auth.loadingLoginUser);
  const forgotPassword = useContextSelector(AuthContext, (auth) => auth.forgotPassword);
  const loadingSendForgotPassword = useContextSelector(AuthContext, (auth) => auth.loadingSendForgotPassword);
  const sendForgotPassword = useContextSelector(AuthContext, (auth) => auth.sendForgotPassword);
  const loadingUser = useContextSelector(AuthContext, (auth) => auth.loadingUser);
  const onLoginUser = useContextSelector(AuthContext, (auth) => auth.onLoginUser);
  const onNextAuthPerPhone = useContextSelector(AuthContext, (auth) => auth.onNextAuthPerPhone);
  const onFlowAuthPerPhone = useContextSelector(AuthContext, (auth) => auth.onFlowAuthPerPhone);
  const onLoadCountry = useContextSelector(AuthContext, (auth) => auth.onLoadCountry);
  const onBackStepperFlowAuthPerPhone = useContextSelector(AuthContext, (auth) => auth.onBackStepperFlowAuthPerPhone);
  const onLoginGoogle = useContextSelector(AuthContext, (auth) => auth.onLoginGoogle);
  const onRegisterUser = useContextSelector(AuthContext, (auth) => auth.onRegisterUser);
  const onForgotPassword = useContextSelector(AuthContext, (auth) => auth.onForgotPassword);
  const onSendEmailForForgotPassword = useContextSelector(AuthContext, (auth) => auth.onSendEmailForForgotPassword);

  return {
    user,
    stepperTypeAuthPerPhone,
    optionsCountry,
    countrys,
    loadingAuthGoogle,
    loadingAuthPerPhone,
    expirationMessageSMS,
    loadingLoginUser,
    forgotPassword,
    loadingSendForgotPassword,
    sendForgotPassword,
    loadingUser,
    onLoginUser,
    onNextAuthPerPhone,
    onLoadCountry,
    onFlowAuthPerPhone,
    onBackStepperFlowAuthPerPhone,
    onLoginGoogle,
    onRegisterUser,
    onForgotPassword,
    onSendEmailForForgotPassword,
  };
};
