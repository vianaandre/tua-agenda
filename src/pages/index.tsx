import React from 'react';
import type { NextPage } from 'next';

import { apiMock } from 'services/api';
import { GET_CATEGORIES } from 'services/routes';
import { CategoriesProps } from 'common/interface/CategoriesProps';
import { HomeProps } from 'common/interface/HomeProps';
import { HomeProvider } from 'common/context/HomeContext';
import { Home } from 'components/Home';

const HomePage: NextPage<HomeProps> = ({ categories }) => {
  return (
    <HomeProvider>
      <Home
        categories={categories}
      />
    </HomeProvider>
  );
};

export async function getStaticProps() {
  const { data: categories } = await apiMock.get(GET_CATEGORIES) as { data: CategoriesProps[] };

  return {
    props: {
      categories,
    } as HomeProps,
  };
}

export default HomePage;
