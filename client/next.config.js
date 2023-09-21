/** @type {import('next').NextConfig} */
const dns = require('dns');
dns.setDefaultResultOrder('ipv4first');
const { withKumaUI } = require('@kuma-ui/next-plugin');
const path = require('path');
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  webpack: (config) => {
    config.resolve.alias['@'] = path.join(__dirname, 'src');
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'maps.google.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: '*.googleusercontent.com',
        port: '',
      },
    ],
  },
};

module.exports = withKumaUI(nextConfig);
