import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { theme } from 'common/styles/theme';
import { GlobalStyles } from 'common/styles/globalStyles';
import { Header } from 'components/Header';
import { ToastProvider } from 'common/context/ToastContext';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ToastProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </ToastProvider>
  );
}

export default MyApp;
