import React from 'react';
import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { theme } from 'common/styles/theme';

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
      });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [
          <React.Fragment key={initialProps.html}>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </React.Fragment>,
        ],
      };
    } finally {
      sheet.seal();
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="PT-BR">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <meta name="theme-color" content={theme.colors.PRIMARY[500]} />
          <meta name="language" content="" />
          <meta
            httpEquiv="Content-Type"
            content="text/html; charset=utf-8"
          />
          <meta property="og:title" content="" />
          <meta property="og:image" content="" />
          <meta property="og:image:type" content="" />
          <meta property="og:url" content="" />
          <meta
            property="og:site_name"
            content=""
          />
          <meta property="og:description" content="" />
          <meta property="og:type" content="website" />
          <meta property="og:locale:alternate" content="pt-BR" />
          <meta property="og:locale:alternate" content="en_US" />
          <meta property="og:locale:alternate" content="es-ES" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content="" />
          <meta name="twitter:title" content="" />
          <meta name="twitter:description" content="" />
          <meta name="twitter:image" content="" />
          <link
            rel="shortcut icon"
            href="favicon.png"
            type="image/x-icon"
          />
          <link href="https://fonts.cdnfonts.com/css/clash-display" rel="stylesheet" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Epilogue:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
