import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Holtyx Games</span>,
  project: {
    link: 'https://github.com/dotCore-off/holtyx-wiki',
  },
  chat: {
    link: 'https://discord.com/holtyx',
  },
  docsRepositoryBase: 'https://github.com/dotCore-off/holtyx-wiki',
  footer: {
    text: 'Holtyx Wiki',
  },
  i18n: [
    { locale: 'en-US', text: 'English' },
    { locale: 'fr-FR', text: 'Français' },
    { locale: 'de-DE', text: 'Deutsch' },
    { locale: 'ru-RU', text: 'Pусский' },
    { locale: 'bg-BG', text: 'български' }
  ]
}

export default config
