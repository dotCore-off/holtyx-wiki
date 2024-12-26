import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import mainLogo from './public/banner.png'
import Image from 'next/image'

export default {
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Holtyx Wiki" />
      <meta property="og:description" content="Official knowledgebase of Holtyx Games community, powered by and for its members." />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <script defer src="https://cloud.umami.is/script.js" data-website-id="9a652323-3122-40ad-95fd-04e2e99b0c6b"></script>
    </>
  ),
  banner: {
    key: 'wiki-launch',
    text: (
      <a href="https://discord.gg/holtyx" target="_blank">
        🎉 We just launched our wiki, report any issue here →
      </a>
    )
  },
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
    content: (
      <span>
      </span>
    )
  },
  i18n: [
    { locale: 'en-US', text: 'English' },
    { locale: 'fr-FR', text: 'Français' },
    { locale: 'de-DE', text: 'Deutsch' },
    { locale: 'ru-RU', text: 'Pусский' },
    { locale: 'bg-BG', text: 'български' }
  ]
}