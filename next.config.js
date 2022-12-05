/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    WEBSITE_NAME: process.env.WEBSITE_NAME,
  },
};

module.exports = nextConfig;
