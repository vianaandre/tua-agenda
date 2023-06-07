import { createContext } from 'use-context-selector';
import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';

import { ServiceProps } from 'common/interface/ServiceProps';
import { CityProps } from 'common/interface/CityProps';
import { CategoriesProps } from 'common/interface/CategoriesProps';
import { useToast } from 'common/hooks/useToast';
import { apiMock } from 'services/api';
import { GET_SERVICES } from 'services/routes';
import { SearchServiceFormProps } from 'common/interface/Form/SearchServiceFormProps';
import { useLocation } from 'common/hooks/useLocation';
import { findAllCompanies } from 'services/modules/company ';
import { CompanyAlternativeProps } from 'common/interface/CompanyAlternativeProps';
import { findCities } from 'services/modules/cities/findCities';
import { CitiesProps } from 'common/interface/CitiesProps';
import { LoadingHomeProps } from 'common/interface/LoadingHomeProps';

export interface HomeContextProps {
    services: ServiceProps[];
    categories: CategoriesProps[];
    listCities: CityProps[];
    category?: CategoriesProps;
    searchServices?: CompanyAlternativeProps[];
    loadingSearch: boolean;
    companies: CompanyAlternativeProps[];
    cities: CitiesProps[];
    loadingHome: LoadingHomeProps;
    onUpdateStateServices: (data: ServiceProps[]) => void;
    onUpdateStateCategories: (data: CategoriesProps[]) => void;
    onUpdateStateCities: (data: CitiesProps[]) => void;
    onUpdateIsViewMore: (viewMore: boolean) => void;
    onChangeCaregory: (category: CategoriesProps) => void;
    onLoadServicesPerCategory: () => Promise<void>;
    onClearSearchServices: () => void;
    onLoadServicePerServiceAndCity: ({ name, city }: SearchServiceFormProps) => Promise<void>;
    onLoadServicesPerCity: (city: string) => Promise<void>;
    onLoadServicesAll: () => Promise<void>;
}

export const HomeContext = createContext({} as HomeContextProps);

export function HomeProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const { onToast } = useToast();
  const { locationPerCityAndState } = useLocation();
  const [isServices, setIsServices] = useState<ServiceProps[]>([]);
  const [isCities] = useState<CityProps[]>([]);
  const [isCategories, setIsCategories] = useState<CategoriesProps[]>([]);
  const [isViewMore, setIsViewMore] = useState<boolean>(false);
  const [isCategory, setIsCategory] = useState<CategoriesProps>();
  const [isSearchServices, setIsSearchServices] = useState<CompanyAlternativeProps[]>();
  const [isLoadingSearch, setIsLoadingSearch] = useState<boolean>(false);
  const [companies, setCompanies] = useState<CompanyAlternativeProps[]>([]);
  const [cities, setCities] = useState<CitiesProps[]>([]);
  const [loadingHome, setLoadingHome] = useState<LoadingHomeProps>(undefined);

  const handleUpdateStateServices = useCallback((data: ServiceProps[]) => {
    setIsServices(data);
  }, []);

  const handleUpdateStateCities = useCallback((data: CitiesProps[]) => {
    setCities(data);
  }, []);

  const handleUpdateStateCategories = useCallback((data: CategoriesProps[]) => {
    setIsCategories(data);
  }, []);

  const handleUpdateIsViewMore = useCallback(async (viewMore: boolean) => {
    try {
      if (viewMore) {
        setLoadingHome('cities');
        const cities = await findCities(50);

        if (cities) {
          setCities(cities);
          setIsViewMore(viewMore);
        }
        setLoadingHome(undefined);
      } else {
        setCities((current) => current.splice(0, 4));
      }
    } catch (err: any) {
      setLoadingHome(undefined);
      onToast({
        message: err.message ?? 'Ocorreu um erro de comunicação.',
        type: 'error',
      });
    }
  }, [onToast]);

  const handleChangeCaregory = useCallback((category: CategoriesProps) => {
    setIsCategory(category);
  }, []);

  const handleLoadServicesPerCategory = useCallback(async () => {
    try {
      if (isCategory) {
        setIsLoadingSearch(true);
        const { data } = await apiMock.post(GET_SERVICES, {
          category: isCategory.type,
        });

        setTimeout(() => {
          setIsSearchServices(data);
          setIsLoadingSearch(false);
        }, 2000);
      } else {
        onToast({
          message: 'Selecione uma categoria.',
          type: 'info',
        });
      }
    } catch (err) {
      setIsLoadingSearch(false);
      onToast({
        message: 'Houve um problema de comunicação.',
        type: 'error',
      });
    }
  }, [onToast, isCategory]);

  const handleLoadServicePerServiceAndCity = useCallback(async ({ name, city }: SearchServiceFormProps) => {
    try {
      setIsLoadingSearch(true);
      const { data } = await apiMock.post(GET_SERVICES, {
        service: name,
        city,
      });

      setIsSearchServices(data);
      setIsLoadingSearch(false);
    } catch (err) {
      setIsLoadingSearch(false);
      onToast({
        message: 'Houve um problema de comunicação.',
        type: 'error',
      });
    }
  }, [onToast]);

  const handleLoadServicesPerCity = useCallback(async (city: string) => {
    try {
      setIsLoadingSearch(true);
      const { data } = await apiMock.post(GET_SERVICES, {
        city,
      });

      setIsSearchServices(data);
      setIsLoadingSearch(false);
    } catch (err) {
      setIsLoadingSearch(false);
      onToast({
        message: 'Houve um problema de comunicação.',
        type: 'error',
      });
    }
  }, [onToast]);

  const handleClearSearchServices = useCallback(() => {
    setIsSearchServices(undefined);
  }, []);

  const handleLoadServicesAll = useCallback(async () => {
    try {
      setIsLoadingSearch(true);
      const companies = await findAllCompanies(locationPerCityAndState?.lat, locationPerCityAndState?.long, 200.00, 50);

      if (companies) {
        setIsSearchServices(companies);
      }
      setIsLoadingSearch(false);
    } catch (err) {
      setIsLoadingSearch(false);
      onToast({
        message: 'Houve um problema de comunicação.',
        type: 'error',
      });
    }
  }, [onToast, locationPerCityAndState]);

  const handleLoadCompanies = useCallback(async () => {
    try {
      const companies = await findAllCompanies(locationPerCityAndState?.lat, locationPerCityAndState?.long, 200.00, 4);
      if (companies) {
        setCompanies(companies);
      }
    } catch (err: any) {
      onToast({
        message: err.message ?? 'Ocorreu um erro de comunicação.',
        type: 'error',
      });
    }
  }, [onToast, locationPerCityAndState]);

  const handleLoadCities = useCallback(async () => {
    try {
      const cities = await findCities(4);

      if (cities) {
        setCities(cities);
      }
    } catch (err: any) {
      onToast({
        message: err.message ?? 'Ocorreu um erro de comunicação',
        type: 'error',
      });
    }
  }, [onToast]);

  const isListCities = useMemo((): CityProps[] => {
    if (isViewMore) {
      return isCities;
    }
    return isCities.slice(0, 4);
  }, [isCities, isViewMore]);

  useEffect(() => {
    if (isCategories && isCategories.length > 0) {
      handleChangeCaregory(isCategories[0]);
    }
  }, [isCategories, handleChangeCaregory]);

  useEffect(() => {
    handleLoadCompanies();
  }, [handleLoadCompanies]);

  useEffect(() => {
    handleLoadCities();
  }, [handleLoadCities]);

  return (
    <HomeContext.Provider value={{
      services: isServices,
      categories: isCategories,
      cities,
      listCities: isListCities,
      category: isCategory,
      searchServices: isSearchServices,
      loadingSearch: isLoadingSearch,
      companies,
      loadingHome,
      onUpdateStateServices: handleUpdateStateServices,
      onUpdateStateCategories: handleUpdateStateCategories,
      onUpdateStateCities: handleUpdateStateCities,
      onUpdateIsViewMore: handleUpdateIsViewMore,
      onChangeCaregory: handleChangeCaregory,
      onLoadServicesPerCategory: handleLoadServicesPerCategory,
      onClearSearchServices: handleClearSearchServices,
      onLoadServicePerServiceAndCity: handleLoadServicePerServiceAndCity,
      onLoadServicesPerCity: handleLoadServicesPerCity,
      onLoadServicesAll: handleLoadServicesAll,
    }}
    >
      {children}
    </HomeContext.Provider>
  );
}
