import { useContextSelector } from 'use-context-selector';

import { HomeContext } from 'common/context/HomeContext';

export function useServices() {
  const onUpdateStateServices = useContextSelector(HomeContext, (home) => home.onUpdateStateServices);
  const onLoadServicesAll = useContextSelector(HomeContext, (home) => home.onLoadServicesAll);
  const services = useContextSelector(HomeContext, (home) => home.services);

  return {
    onUpdateStateServices,
    onLoadServicesAll,
    services,
  };
}
