module.exports = {
  plugins: { 
    'tailwindcss': {},
    ...
  process.env.NODE_ENV === "production"
  ? {
      "@fullhuman/postcss-purgecss" :
      {
        content: [
          './src/**/*.ts', './src/**/*.tsx', './public/**/*.html'
        ],
        defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
      },
  }
  : undefined,
  }
};
