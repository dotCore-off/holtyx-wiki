import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import mainLogo from './public/banner.png'
import Image from 'next/image'

const config: DocsThemeConfig = {
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Holtyx Wiki" />
      <meta property="og:description" content="Official knowledgebase of Holtyx Games community, powered by and for its members." />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    </>
  ),
  logo: (
    <>
      <Image alt="Holtyx Games logo" src={ mainLogo } />
    </>
  ),
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
