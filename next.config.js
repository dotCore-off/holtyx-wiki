const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

module.exports = withNextra({
  i18n: {
    locales: ['en-US', 'fr-FR', 'de-DE', 'ru-RU'],
    defaultLocale: 'en-US'
  }
})
