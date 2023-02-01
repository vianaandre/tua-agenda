import React, {
  useCallback,
  useEffect, useState,
} from 'react';
import axios from 'axios';

import { createContext } from 'use-context-selector';
import { IntlProvider } from 'react-intl';
import { messages } from 'common/localization';
import { LOCALES } from 'common/localization/locales';
import { LanguageProps } from 'common/interface/LanguageProps';
import { RegionProps } from 'common/interface/RegionProps';
import { GET_LOCATION } from 'services/routes';
import { LocationCityStateProps } from 'common/interface/LocationCityStateProps';
import { useToast } from 'common/hooks/useToast';

export interface LocationContextProps {
  location: LanguageProps;
  region: RegionProps;
  locationPerCityAndState?: LocationCityStateProps;
  loadingGetLocation: boolean;
  onChangeLocation: (location:LanguageProps) => void;
  onChangeRegion: (region: RegionProps) => void;
  onGetLocationBrowser: () => void;
}

export const LocationContext = createContext({} as LocationContextProps);

export const LocationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { onToast } = useToast();
  const [isLocation, setIsLocation] = useState<LanguageProps>(LOCALES.PORTUGUES);
  const [isRegion, setIsRegion] = useState<RegionProps>('BRASIL');
  const [isLocationPerCityAndState, setIsLocationPerCityAndState] = useState<LocationCityStateProps>();
  const [isLoadingGetLocation, setisLoadingGetLocation] = useState<boolean>(false);

  const handleChangeLocation = useCallback((location: LanguageProps) => {
    setIsLocation(location);
  }, []);

  const handleChangeRegion = useCallback((region: RegionProps) => {
    setIsRegion(region);
  }, []);

  const handleLoadLocationPerCoordinates = useCallback(async (lat: number, long: number) => {
    setisLoadingGetLocation(true);
    const { data } = await axios.get(GET_LOCATION, {
      params: {
        lat,
        lon: long,
        lang: 'pt_br',
        appid: process.env.GEOLOCATION_APPID,
      },
    }) as { data: Array<{ name: string; state: string }> };

    if (data && data.length > 0) {
      setIsLocationPerCityAndState({
        city: data[0].name,
        state: data[0].state,
      });
    } else {
      onToast({
        message: 'Não foi possível achar sua localização.',
        type: 'error',
      });
    }
    setisLoadingGetLocation(false);
  }, [onToast]);

  const handleGetLocationBrowser = useCallback(async () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        handleLoadLocationPerCoordinates(lat, long);
      }, () => {
        onToast({
          message: 'Permita que nós consigamos ter acesso a sua localização para darmos continuidade.',
          type: 'info',
        });
      });
    } else {
      onToast({
        message: 'Seu navegador não possuí funcionalidade de localização.',
        type: 'info',
      });
    }
  }, [handleLoadLocationPerCoordinates, onToast]);

  useEffect(() => {
    let isLocale: LanguageProps = 'pt';

    if (navigator?.language === 'en' || navigator?.language === 'en-US') {
      isLocale = 'en';
    }
    if (navigator?.language === 'es') {
      isLocale = 'es';
    }

    setIsLocation(isLocale);
  }, []);

  useEffect(() => {
    if ('geolocation' in navigator) {
      if (!isLocationPerCityAndState) {
        navigator.geolocation.getCurrentPosition((position) => {
          handleLoadLocationPerCoordinates(position.coords.latitude, position.coords.longitude);
        });
      }
    }
  }, [handleLoadLocationPerCoordinates, isLocationPerCityAndState]);

  return (
    <IntlProvider locale={isLocation} messages={messages[isLocation]} defaultLocale="pt-BR">
      <LocationContext.Provider value={{
        location: isLocation,
        region: isRegion,
        loadingGetLocation: isLoadingGetLocation,
        locationPerCityAndState: isLocationPerCityAndState,
        onChangeLocation: handleChangeLocation,
        onChangeRegion: handleChangeRegion,
        onGetLocationBrowser: handleGetLocationBrowser,
      }}
      >
        {children}
      </LocationContext.Provider>
    </IntlProvider>
  );
};
