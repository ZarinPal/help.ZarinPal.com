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
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#ffe75a' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#ffe75a' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
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
