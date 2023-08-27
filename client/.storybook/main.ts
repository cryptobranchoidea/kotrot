import KumaUIWebpackPlugin from '@kuma-ui/webpack-plugin';
import type { StorybookConfig } from '@storybook/nextjs';
const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {
      nextConfigPath: '../next.config.js',
    },
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: (config) => {
    config.plugins = [...(config.plugins ?? []), new KumaUIWebpackPlugin({})];
    return config;
  },
};
export default config;
