/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: { appDir: true }, //para trabajar con la version 13, y poder tener app/pages
};

module.exports = nextConfig;
