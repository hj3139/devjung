const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  features: {
    storyStoreV7: true
  },
  framework: '@storybook/react',
  core: {
    builder: 'webpack5'
  },
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.less$/,
      use: ['style-loader', 'css-loader', 'less-loader'],
      include: path.resolve(__dirname, '../')
    });

    // Return the altered config
    return config;
  }
};
