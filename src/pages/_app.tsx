import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import 'animate.css';
import { useRouter } from 'next/router';

import { theme } from 'common/styles/theme';
import { GlobalStyles } from 'common/styles/globalStyles';
import { Header } from 'components/Header';
import { ToastProvider } from 'common/context/ToastContext';
import 'react-toastify/dist/ReactToastify.css';
import { LocationProvider } from 'common/context/LocationContext';
import { AnimationProvider } from 'common/context/AnimationContext';
import { AuthProvider } from 'common/context/AuthContext';

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();

  return (
    <AnimationProvider>
      <ToastProvider>
        <LocationProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <AuthProvider>
              {pathname !== '/login' && pathname !== '/register' ? <Header /> : null}
              <Component {...pageProps} />
            </AuthProvider>
          </ThemeProvider>
        </LocationProvider>
      </ToastProvider>
    </AnimationProvider>
  );
}

export default MyApp;
