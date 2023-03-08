import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { ISEO } from './interface';

export const SEO: React.FC<ISEO> = ({
  description, image, nome, pathname,
}) => {
  const [isUrlOrigin, setIsUrlOrigin] = useState('');

  useEffect(() => {
    if (pathname) setIsUrlOrigin(`${window.location.origin}/${pathname}`);

    setIsUrlOrigin(window.location.origin);
  }, [pathname]);

  return (
    <Head>
      <title>
        {nome}
      </title>
      <meta name="description" content={description} />
      <meta name="application-name" content="Uzer Ticket" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={nome} />
      <meta name="description" content={description} />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="msapplication-TileColor" content="#05B59D" />
      <meta name="msapplication-tap-highlight" content="no" />
      <meta name="theme-color" content="#05B59D" />
      <link rel="apple-touch-icon" sizes="152x152" href="/assets/logo-192.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/assets/logo-384.png" />
      <link rel="apple-touch-icon" sizes="167x167" href="/assets/logo-512.png" />
      <link rel="icon" sizes="32x32" href="favicon.svg" />
      <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#05B59D" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={isUrlOrigin} />
      <meta property="og:title" content={nome} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:secure_url" content={image} />
      <meta property="og:site_name" content={nome} />
      <meta
        httpEquiv="Content-Type"
        content="text/html; charset=utf-8"
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content={isUrlOrigin} />
      <meta name="twitter:title" content={nome} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
};
