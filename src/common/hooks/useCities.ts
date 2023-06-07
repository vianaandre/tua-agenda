import { useContextSelector } from 'use-context-selector';

import { HomeContext } from 'common/context/HomeContext';

export function useCities() {
  const onUpdateStateCities = useContextSelector(HomeContext, (home) => home.onUpdateStateCities);
  const onUpdateIsViewMore = useContextSelector(HomeContext, (home) => home.onUpdateIsViewMore);
  const onLoadServicesPerCity = useContextSelector(HomeContext, (home) => home.onLoadServicesPerCity);
  const cities = useContextSelector(HomeContext, (home) => home.cities);

  return {
    onUpdateStateCities,
    onUpdateIsViewMore,
    onLoadServicesPerCity,
    cities,
  };
}
