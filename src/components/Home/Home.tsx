import React from 'react';

import { SEO } from 'components/SEO';
import { useHome } from 'common/hooks/useHome';
import { Loading } from 'components/Loading';
import { ActionAPP } from './ActionAPP';
import { Banner } from './Banner';
import { Categories } from './Categories';
import { Cities } from './Cities';
import { CompanyHighlights } from './CompanyHighlights';
import { HomeProps } from './interface';
import { SearchResult } from './SearchResult';

export const Home: React.FC<HomeProps> = ({ categories, cities, services }) => {
  const { searchServices, loadingSearch } = useHome();

  return (
    <React.Fragment>
      <SEO
        nome={process.env.WEBSITE_NAME}
        description="Sistema de agendamento para demonstrar como será o sistema do cliente. Tua Agenda - Sua agenda sempre em mãos"
        pathname="/"
      />
      <Loading open={loadingSearch} />
      {searchServices ? (
        <SearchResult />
      ) : (
        <React.Fragment>
          <Banner />
          <Categories categories={categories} />
          <ActionAPP />
          <CompanyHighlights services={services} />
          <Cities cities={cities} />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};
