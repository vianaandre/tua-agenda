import type { GetStaticProps, NextPage } from 'next';

import { SEO } from 'components/SEO';
import { Banner } from 'components/Home/Banner';
import React from 'react';

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <SEO
        nome={process.env.WEBSITE_NAME}
        description="Sistema de agendamento para demonstrar como será o sistema do cliente. Tua Agenda - Sua agenda sempre em mãos"
        pathname="/"
      />
      <Banner />
    </React.Fragment>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: 'Tua Agenda',
    },
  };
};

export default Home;
