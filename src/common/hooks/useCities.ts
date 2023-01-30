import { useContextSelector } from 'use-context-selector';

import { HomeContext } from 'common/context/HomeContext';

export function useCities() {
  const onUpdateStateCities = useContextSelector(HomeContext, (home) => home.onUpdateStateCities);
  const onUpdateIsViewMore = useContextSelector(HomeContext, (home) => home.onUpdateIsViewMore);
  const cities = useContextSelector(HomeContext, (home) => home.cities);
  const listCities = useContextSelector(HomeContext, (home) => home.listCities);

  return {
    onUpdateStateCities,
    onUpdateIsViewMore,
    cities,
    listCities,
  };
}
