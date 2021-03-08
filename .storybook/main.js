const { defaultBuildConfig } = require('@component-controls/core');

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  siteUrl: 'https://tailwind-gatsby-controls-starter.netlify.app',
  pages: {
    story: {
      tabs: {
        ...defaultBuildConfig.pages.story.tabs,
        test: '@component-controls/pages/TestingPage',
      },
    },
  },
  loaders: {
    'css-loader': {
      modules: {
        //prevent encoding of exported names
        localIdentName: '[local]',
      },
    },
  },
};
