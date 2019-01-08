module.exports = {
  dest: 'vuepress',
  locales: {
    '/': {
      lang: 'fa-IR',
      title: 'راهنمای زرین‌پال',
      description: 'به دنیای راهنما و پشتیبانی زرین‌پال خوش‌آمدید.'
    }
  },
  head: [
    ['link', { rel: 'icon', href: `https://www.zarinpal.com/icons/favicon.ico` }],
    ['link', { rel: 'manifest', href: 'https://www.zarinpal.com/icons/site.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['link', { rel: 'apple-touch-icon', href: `https://www.zarinpal.com/icons/apple-touch-icon.png` }],
    ['link', { rel: 'mask-icon', href: 'https://www.zarinpal.com/icons/safari-pinned-tab.svg', color: '#ffe75a' }],
    ['meta', { name: 'msapplication-TileColor', content: '#da532c' }]
  ],
  serviceWorker: true,
  theme: 'vue',
  themeConfig: {
    repo: 'ZarinPal/help.ZarinPal.com',
    editLinks: true,
    docsDir: 'docs',
    locales: {
      '/': {
        label: 'فارسی',
        selectText: 'زبان‌ها',
        editLinkText: 'ویرایش و اصلاح متن',
        nav: [
          {
            text: 'آزمایشگاه',
            link: 'https://www.zarinpal.com/lab',
          },
          {
            text: 'اپلیکیشن',
            link: 'https://www.zarinpal.com/application.html'
          },
          {
            text: 'بلاگ',
            link: 'https://www.zarinpal.com/blog/'
          },
        ],
        sidebar: {
          '/guide/': genSidebarConfig('راهنمایی')
        }
      }
    }
  }
}

function genSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'getting-started',
        'basic-webservice',
        'assets',
        'markdown',
        'using-vue',
        'custom-themes',
        'i18n',
        'deploy'
      ]
    }
  ]
}
