import React from 'react';
import type { NextPage } from 'next';

import api from 'services/api';
import { GET_SERVICES, GET_CATEGORIES, GET_CITIES } from 'services/routes';
import { ServiceProps } from 'common/interface/ServiceProps';
import { CityProps } from 'common/interface/CityProps';
import { CategoriesProps } from 'common/interface/CategoriesProps';
import { HomeProps } from 'common/interface/HomeProps';
import { HomeProvider } from 'common/context/HomeContext';
import { Home } from 'components/Home';

const HomePage: NextPage<HomeProps> = ({ services, categories, cities }) => {
  return (
    <HomeProvider>
      <Home
        categories={categories}
        cities={cities}
        services={services}
      />
    </HomeProvider>
  );
};

export async function getStaticProps() {
  const { data: services } = await api.get(GET_SERVICES) as { data: ServiceProps[] };
  const { data: categories } = await api.get(GET_CATEGORIES) as { data: CategoriesProps[] };
  const { data: cities } = await api.get(GET_CITIES) as { data: CityProps[] };

  return {
    props: {
      categories,
      cities,
      services,
    } as HomeProps,
  };
}

export default HomePage;
