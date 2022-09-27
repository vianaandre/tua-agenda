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
          <meta name="theme-color" content="" />
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
            href="favicon.svg"
            type="image/x-icon"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
