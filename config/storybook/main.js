module.exports = {
  stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false, // 👈 disable the backgrounds addon
      },
    },
    '@storybook/addon-interactions',
    'storybook-react-i18next',
    'storybook-addon-mock',
    'storybook-addon-themes',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  staticDirs: ['../../public'],
}
