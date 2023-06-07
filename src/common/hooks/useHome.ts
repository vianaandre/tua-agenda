import { useContextSelector } from 'use-context-selector';

import { HomeContext } from 'common/context/HomeContext';

export function useHome() {
  const searchServices = useContextSelector(HomeContext, (home) => home.searchServices);
  const loadingSearch = useContextSelector(HomeContext, (home) => home.loadingSearch);
  const loading = useContextSelector(HomeContext, (home) => home.loadingHome);
  const onClearSearchServices = useContextSelector(HomeContext, (home) => home.onClearSearchServices);
  const onLoadServicePerServiceAndCity = useContextSelector(HomeContext, (home) => home.onLoadServicePerServiceAndCity);

  return {
    searchServices,
    loadingSearch,
    loading,
    onClearSearchServices,
    onLoadServicePerServiceAndCity,
  };
}
