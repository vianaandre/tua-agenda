/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    WEBSITE_NAME: process.env.WEBSITE_NAME,
    URL_API_MOCK: process.env.URL_API_MOCK,
    GEOLOCATION_APPID: process.env.GEOLOCATION_APPID,
    NEXT_PUBLIC_APP_BACK_END_CLIENT: process.env.NEXT_PUBLIC_APP_BACK_END_CLIENT,
    REACT_APP_BACKEND_CLIENT: process.env.REACT_APP_BACKEND_CLIENT,
    REACT_APP_BACKEND_G_CLIENT: process.env.REACT_APP_BACKEND_G_CLIENT,
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID, 
    FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET, 
    FIREBASE_MESSAGE_ID: process.env.FIREBASE_MESSAGE_ID, 
    FIREBASE_APP_ID: process.env.FIREBASE_APP_ID, 
    FIREBASE_MEASURUMENT_ID: process.env.FIREBASE_MEASURUMENT_ID,
    APP_TOKEN: process.env.APP_TOKEN
  },
  compiler: {
    styledComponents: true,
  }
};

module.exports = nextConfig;
