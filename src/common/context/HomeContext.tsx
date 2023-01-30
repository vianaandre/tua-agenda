import { createContext } from 'use-context-selector';
import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';

import { ServiceProps } from 'common/interface/ServiceProps';
import { CityProps } from 'common/interface/CityProps';
import { CategoriesProps } from 'common/interface/CategoriesProps';
import { useToast } from 'common/hooks/useToast';
import api from 'services/api';
import { GET_SERVICES } from 'services/routes';

export interface HomeContextProps {
    services: ServiceProps[];
    cities: CityProps[];
    categories: CategoriesProps[];
    listCities: CityProps[];
    category?: CategoriesProps;
    searchServices?: ServiceProps[];
    loadingSearch: boolean;
    onUpdateStateServices: (data: ServiceProps[]) => void;
    onUpdateStateCategories: (data: CategoriesProps[]) => void;
    onUpdateStateCities: (data: CityProps[]) => void;
    onUpdateIsViewMore: (viewMore: boolean) => void;
    onChangeCaregory: (category: CategoriesProps) => void;
    onLoadServicesPerCategory: () => Promise<void>;
}

export const HomeContext = createContext({} as HomeContextProps);

export function HomeProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const { onToast } = useToast();
  const [isServices, setIsServices] = useState<ServiceProps[]>([]);
  const [isCities, setIsCities] = useState<CityProps[]>([]);
  const [isCategories, setIsCategories] = useState<CategoriesProps[]>([]);
  const [isViewMore, setIsViewMore] = useState<boolean>(false);
  const [isCategory, setIsCategory] = useState<CategoriesProps>();
  const [isSearchServices, setIsSearchServices] = useState<ServiceProps[]>();
  const [isLoadingSearch, setIsLoadingSearch] = useState<boolean>(false);

  const handleUpdateStateServices = useCallback((data: ServiceProps[]) => {
    setIsServices(data);
  }, []);

  const handleUpdateStateCities = useCallback((data: CityProps[]) => {
    setIsCities(data);
  }, []);

  const handleUpdateStateCategories = useCallback((data: CategoriesProps[]) => {
    setIsCategories(data);
  }, []);

  const handleUpdateIsViewMore = useCallback((viewMore: boolean) => {
    setIsViewMore(viewMore);
  }, []);

  const handleChangeCaregory = useCallback((category: CategoriesProps) => {
    setIsCategory(category);
  }, []);

  const handleLoadServicesPerCategory = useCallback(async () => {
    try {
      if (isCategory) {
        setIsLoadingSearch(true);
        const { data } = await api.post(GET_SERVICES, {
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

  return (
    <HomeContext.Provider value={{
      services: isServices,
      categories: isCategories,
      cities: isCities,
      listCities: isListCities,
      category: isCategory,
      searchServices: isSearchServices,
      loadingSearch: isLoadingSearch,
      onUpdateStateServices: handleUpdateStateServices,
      onUpdateStateCategories: handleUpdateStateCategories,
      onUpdateStateCities: handleUpdateStateCities,
      onUpdateIsViewMore: handleUpdateIsViewMore,
      onChangeCaregory: handleChangeCaregory,
      onLoadServicesPerCategory: handleLoadServicesPerCategory,
    }}
    >
      {children}
    </HomeContext.Provider>
  );
}
