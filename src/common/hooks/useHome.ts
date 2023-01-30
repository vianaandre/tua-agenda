import { useContextSelector } from 'use-context-selector';

import { HomeContext } from 'common/context/HomeContext';

export function useHome() {
  const searchServices = useContextSelector(HomeContext, (home) => home.searchServices);
  const loadingSearch = useContextSelector(HomeContext, (home) => home.loadingSearch);

  return {
    searchServices,
    loadingSearch,
  };
}
