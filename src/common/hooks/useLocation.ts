import { useContextSelector } from 'use-context-selector';

import { LocationContext } from 'common/context/LocationContext';

export function useLocation() {
  const location = useContextSelector(LocationContext, (home) => home.location);
  const region = useContextSelector(LocationContext, (home) => home.region);
  const loadingGetLocation = useContextSelector(LocationContext, (home) => home.loadingGetLocation);
  const locationPerCityAndState = useContextSelector(LocationContext, (home) => home.locationPerCityAndState);
  const onChangeLocation = useContextSelector(LocationContext, (home) => home.onChangeLocation);
  const onChangeRegion = useContextSelector(LocationContext, (home) => home.onChangeRegion);
  const onGetLocationBrowser = useContextSelector(LocationContext, (home) => home.onGetLocationBrowser);

  return {
    location,
    region,
    locationPerCityAndState,
    loadingGetLocation,
    onChangeLocation,
    onChangeRegion,
    onGetLocationBrowser,
  };
}
