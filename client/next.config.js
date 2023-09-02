/** @type {import('next').NextConfig} */
const { withKumaUI } = require('@kuma-ui/next-plugin');
const path = require('path');
const nextConfig = {
  output: 'standalone',
  webpack: (config, { isServer }) => {
    config.resolve.alias['@'] = path.join(__dirname, 'src');
    return config;
  },
};

module.exports = withKumaUI(nextConfig);
