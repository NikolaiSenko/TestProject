module.exports = {
  stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false,
      },
    },
    '@storybook/addon-interactions',
    'storybook-addon-themes',
    'storybook-addon-mock'
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  features: {
    storyStoreV7: false,
  },
  staticDirs: ['../../public'],
  docs: {
    autodocs: true,
  },
}

export {}
