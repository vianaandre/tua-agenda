import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { theme } from 'common/styles/theme';
import { GlobalStyles } from 'common/styles/globalStyles';
import { Header } from 'components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
