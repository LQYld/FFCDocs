import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "FFC",
  description: "Comparison of Grammar Sugar",
  titleTemplate: ':title: Front-end Framework Converter',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' },],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },
    logo: '/logo.png',
    nav: [
      {text: 'Home', link: '/'},
      {text: 'Web Site', link: '/web-site/declare-state'},
      {text: 'v0.0.1-beta.1', link: 'https://github.com/LQYld/FFCDocs/releases'}
    ],
    sidebar: {
      '/web-site': [
        {
          text: 'Reactivity',
          items: [
            {
              text: 'Declare state',
              link: '/web-site/declare-state',
            },
            {
              text: 'Update state',
              link: '/web-site/update-state'
            },
            {
              text: 'Computed state',
              link: '/web-site/computed-state'
            }
          ]
        },
        {
          text: 'Templating',
          items: [
            {
              text: 'Minimal template',
              link: '/web-site/minimal-template'
            },
            {
              text: 'Styling',
              link: '/web-site/styling'
            }
          ]
        }
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/LQYld/FFCDocs' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Qingyun119'
    }
  }
})
