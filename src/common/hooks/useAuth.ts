import { AuthContext } from 'common/context/AuthContext';
import { useContextSelector } from 'use-context-selector';

export const useAuth = () => {
  const user = useContextSelector(AuthContext, (auth) => auth.user);
  const stepperTypeAuthPerPhone = useContextSelector(AuthContext, (auth) => auth.stepperTypeAuthPerPhone);
  const optionsCountry = useContextSelector(AuthContext, (auth) => auth.optionsCountry);
  const countrys = useContextSelector(AuthContext, (auth) => auth.countrys);
  const onLoginUser = useContextSelector(AuthContext, (auth) => auth.onLoginUser);
  const onNextAuthPerPhone = useContextSelector(AuthContext, (auth) => auth.onNextAuthPerPhone);
  const onFlowAuthPerPhone = useContextSelector(AuthContext, (auth) => auth.onFlowAuthPerPhone);
  const onLoadCountry = useContextSelector(AuthContext, (auth) => auth.onLoadCountry);
  const onBackStepperFlowAuthPerPhone = useContextSelector(AuthContext, (auth) => auth.onBackStepperFlowAuthPerPhone);
  const onLoginGoogle = useContextSelector(AuthContext, (auth) => auth.onLoginGoogle);

  return {
    user,
    stepperTypeAuthPerPhone,
    optionsCountry,
    countrys,
    onLoginUser,
    onNextAuthPerPhone,
    onLoadCountry,
    onFlowAuthPerPhone,
    onBackStepperFlowAuthPerPhone,
    onLoginGoogle,
  };
};
