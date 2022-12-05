import type { GetStaticProps, NextPage } from 'next';
import { ThemeProvider } from 'styled-components';

import { SEO } from 'components/SEO';
import { theme } from 'common/styles/theme';
import { GlobalStyles } from 'common/styles/globalStyles';

const Home: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <SEO
        nome={process.env.WEBSITE_NAME}
        description="Sistema de agendamento para demonstrar como será o sistema do cliente. Tua Agenda - Sua agenda sempre em mãos"
        pathname="/"
      />
    </ThemeProvider>
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
