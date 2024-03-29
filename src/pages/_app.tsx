import React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import 'animate.css';
import { useRouter } from 'next/router';
import 'react-multi-carousel/lib/styles.css';

import { theme } from 'common/styles/theme';
import { GlobalStyles } from 'common/styles/globalStyles';
import { Header } from 'components/Header';
import { ToastProvider } from 'common/context/ToastContext';
import 'react-toastify/dist/ReactToastify.css';
import { LocationProvider } from 'common/context/LocationContext';
import { AnimationProvider } from 'common/context/AnimationContext';
import { AuthProvider } from 'common/context/AuthContext';
import { Footer } from 'components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();

  return (
    <ThemeProvider theme={theme}>
      <AnimationProvider>
        <ToastProvider>
          <LocationProvider>
            <GlobalStyles />
            <AuthProvider>
              {pathname !== '/login' && pathname !== '/register' ? <Header /> : null}
              <Component {...pageProps} />
              {pathname !== '/login' && pathname !== '/register' && pathname !== '/appointments' ? <Footer /> : null}
            </AuthProvider>
          </LocationProvider>
        </ToastProvider>
      </AnimationProvider>
    </ThemeProvider>

  );
}

export default MyApp;
