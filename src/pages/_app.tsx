import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { theme } from 'common/styles/theme';
import { GlobalStyles } from 'common/styles/globalStyles';
import { Header } from 'components/Header';
import { ToastProvider } from 'common/context/ToastContext';
import 'react-toastify/dist/ReactToastify.css';
import { LocationProvider } from 'common/context/LocationContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ToastProvider>
      <LocationProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Header />
          <Component {...pageProps} />
        </ThemeProvider>
      </LocationProvider>
    </ToastProvider>
  );
}

export default MyApp;
