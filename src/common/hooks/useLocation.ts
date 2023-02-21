import { useContextSelector } from 'use-context-selector';

import { LocationContext } from 'common/context/LocationContext';

export function useLocation() {
  const location = useContextSelector(LocationContext, (location) => location.location);
  const region = useContextSelector(LocationContext, (location) => location.region);
  const loadingGetLocation = useContextSelector(LocationContext, (location) => location.loadingGetLocation);
  const locationPerCityAndState = useContextSelector(LocationContext, (location) => location.locationPerCityAndState);
  const onChangeLocation = useContextSelector(LocationContext, (location) => location.onChangeLocation);
  const onChangeRegion = useContextSelector(LocationContext, (location) => location.onChangeRegion);
  const onGetLocationBrowser = useContextSelector(LocationContext, (location) => location.onGetLocationBrowser);
  const onUpdatedLocation = useContextSelector(LocationContext, (location) => location.onUpdatedLocation);

  return {
    location,
    region,
    locationPerCityAndState,
    loadingGetLocation,
    onChangeLocation,
    onChangeRegion,
    onGetLocationBrowser,
    onUpdatedLocation,
  };
}
