/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    WEBSITE_NAME: process.env.WEBSITE_NAME,
    URL_API_MOCK: process.env.URL_API_MOCK,
    GEOLOCATION_APPID: process.env.GEOLOCATION_APPID,
  },
  compiler: {
    styledComponents: true,
  }
};

module.exports = nextConfig;
