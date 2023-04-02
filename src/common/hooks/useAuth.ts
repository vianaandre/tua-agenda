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
  const loadingUpdatedUser = useContextSelector(AuthContext, (auth) => auth.loadingUpdatedUser);
  const VIACEP = useContextSelector(AuthContext, (auth) => auth.VIACEP);
  const uploadPhoto = useContextSelector(AuthContext, (auth) => auth.uploadPhoto);
  const notifications = useContextSelector(AuthContext, (auth) => auth.notifications);
  const authPerScheduleFlow = useContextSelector(AuthContext, (auth) => auth.authPerScheduleFlow);

  const onLoginUser = useContextSelector(AuthContext, (auth) => auth.onLoginUser);
  const onNextAuthPerPhone = useContextSelector(AuthContext, (auth) => auth.onNextAuthPerPhone);
  const onFlowAuthPerPhone = useContextSelector(AuthContext, (auth) => auth.onFlowAuthPerPhone);
  const onLoadCountry = useContextSelector(AuthContext, (auth) => auth.onLoadCountry);
  const onBackStepperFlowAuthPerPhone = useContextSelector(AuthContext, (auth) => auth.onBackStepperFlowAuthPerPhone);
  const onLoginGoogle = useContextSelector(AuthContext, (auth) => auth.onLoginGoogle);
  const onRegisterUser = useContextSelector(AuthContext, (auth) => auth.onRegisterUser);
  const onForgotPassword = useContextSelector(AuthContext, (auth) => auth.onForgotPassword);
  const onSendEmailForForgotPassword = useContextSelector(AuthContext, (auth) => auth.onSendEmailForForgotPassword);
  const onLoadAddress = useContextSelector(AuthContext, (auth) => auth.onLoadAddress);
  const onUpdateUser = useContextSelector(AuthContext, (auth) => auth.onUpdateUser);
  const onUploadPhoto = useContextSelector(AuthContext, (auth) => auth.onUploadPhoto);
  const onLogoutUser = useContextSelector(AuthContext, (auth) => auth.onLogoutUser);
  const onAuthPerScheduleFlow = useContextSelector(AuthContext, (auth) => auth.onAuthPerScheduleFlow);

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
    VIACEP,
    loadingUpdatedUser,
    uploadPhoto,
    notifications,
    authPerScheduleFlow,
    onLoginUser,
    onNextAuthPerPhone,
    onLoadCountry,
    onFlowAuthPerPhone,
    onBackStepperFlowAuthPerPhone,
    onLoginGoogle,
    onRegisterUser,
    onForgotPassword,
    onSendEmailForForgotPassword,
    onLoadAddress,
    onUpdateUser,
    onUploadPhoto,
    onLogoutUser,
    onAuthPerScheduleFlow,
  };
};
