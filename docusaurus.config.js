const { ALL } = require('dns')
const path = require('path')
const beian = 'XICP备20200XXXX号-2'
const license = 'CC BY-NC 4.0'

const announcementBarContent = `Hi~ Welcome to my Blog 👋`

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Shake-Blog',
  titleDelimiter: '🦖',
  url: 'https://Shaking.site',            // 网站的 url 地址
  baseUrl: '/',                           // 解析后的地址，如果设为 wsite，则 url 解析为https://xxx.xx/site
  projectName: 'Shake-Jarjane.github.io', // {username}.github.io
  organizationName: 'Shake-Jarjane',      // username
  deploymentBranch: 'main',               // 部署的默认分支,如果部署到同一个仓库下则可不指定
  onBrokenLinks: 'ignore',                // 编译遇到死链怎么处理

  favicon: 'img/head.jpg',
  tagline: '世界继续热闹，愿你不变模样，勇敢且自由😃',
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  themeConfig: {
    image: 'img/head.jpg',
    announcementBar: {
      id: 'announcementBar-3',
      content: announcementBarContent,
    },
    metadata: [
      {
        name: 'keywords',
        content:'Shake'
      },
      {
        name: 'keywords',
        content: 'blog',
      },
      {
        name: 'keywords',
        content: '在嵌入式开发的道路上奔跑中',
      },
    ],
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    navbar: {
      title: '加减',
      logo: {
        alt: '加减',
        src: 'img/head.jpg',
        srcDark: 'img/head.jpg',
      },
      /* 滚动隐藏导航栏 */
      hideOnScroll: true,
      items: [
        {
          label: '✒ Notes',
          position: 'left',
          items: [
            {
              label: 'Blog Building', to: 'docs/Blog_Building/',
            },
            {
              label: '笔记', to: 'docs/skill/',
            },
            {
              label: '工具推荐', to: 'docs/tools/',
            },
            {
              label: 'Test', to: 'docs/Test',
            }
          ],
        },
        {
          label: '🗺 Blog',
          position: 'left',
          to: '/',
          items: [
            {
              label: '🏷 博文&分类', to: 'tags',
            },
            {
              label: '⏰ 时间轴', to: 'archive',
            },
          ],
        },
        {
          label: '🔗 友链&导航', to: 'website',
          position: 'right',
        },
        {
          href: 'https://github.com/Shake-Jarjane', className: 'header-github-link',
          position: 'right',
        },
        // 注释就是去掉导航栏的语言下拉选择栏
        //  {
        //   type: 'localeDropdown',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        // {
        //   title: '学习',
        //   items: [
        //     {
        //       label: '标签',
        //       to: 'tags',
        //     },
        //     {
        //       label: '归档',
        //       to: 'archive',
        //     },
        //     {
        //       label: '技术笔记',
        //       to: 'docs/skill',
        //     },
        //     {
        //       label: '实战项目',
        //       to: 'project',
        //     },
        //     {
        //       label: '前端示例',
        //       to: 'https://example.kuizuo.cn',
        //     },
        //   ],
        // },
        // {
        //   title: '社交媒体',
        //   items: [
        //     {
        //       label: '关于我',
        //       to: '/about',
        //     },
        //     {
        //       label: 'GitHub',
        //       href: 'https://github.com/kuizuo',
        //     },
        //     {
        //       label: '掘金',
        //       href: 'https://juejin.cn/user/1565318510545901',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discord.gg/M8cVcjDxkz',
        //     }
        //   ],
        // },
        {
          title: 'More',
          items: [
          // {
          //   label: '友链',
          //   position: 'right',
          //   to: 'friends',
          // }, {
          //   label: '导航',
          //   position: 'right',
          //   to: 'website',
          // },
          {
            html: `<a href="https://docusaurus.io/zh-CN/" target="_blank"><img style="height:40px" src="/img/buildwith.png" /><a/>`
          },
        ],
        },
      ],
      // copyright: `Copyright © 2022 - ${new Date().getFullYear()} By Shake. Built with Docusaurus. | <a href="http://beian.miit.gov.cn/" >${beian}</a> | <a href="https://creativecommons.org/licenses/by/4.0/deed.zh">${license}</a>`
      copyright: `Copyright © 2022 - ${new Date().getFullYear()} By Shake 🎶 | <a href="https://creativecommons.org/licenses/by/4.0/deed.zh">${license}</a>`
      // copyright: `Copyright © 2022-${new Date().getFullYear()}. <br>Built with Docusaurus.| <a href="http://beian.miit.gov.cn/" >${beian}</a> | <a href="https://creativecommons.org/licenses/by/4.0/deed.zh">${license}</a> <a target="_blank" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img src="https://img.shields.io/badge/Copyright-BY--NC--SA%204.0-d42328?style=flat&logo=Claris"></a></p> `
    
    },
    prism: {
      theme: require('prism-react-renderer/themes/vsDark'),
      darkTheme: require('prism-react-renderer/themes/vsDark'),
      additionalLanguages: ['java', 'php', 'rust', 'toml', 'cpp'],
      defaultLanguage: 'javascript',
      magicComments: [
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: {start: 'highlight-start', end: 'highlight-end'},
        },
        {
          className: 'code-block-error-line',
          line: 'This will error',
        },
      ],
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
    algolia: {
      appId: 'HUN3GEQ3OZ',
      apiKey: '0ef3c1157ca45bf16c97b628397016ee',
      indexName: 'Shake',
    },
    zoom: {
      selector: '.markdown :not(em) > img',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(50, 50, 50)'
      },
      config: {}
    },
    // matomo: {
    //   matomoUrl: 'https://matomo.kuizuo.cn/',
    //   siteId: '1',
    //   phpLoader: 'matomo.php',
    //   jsLoader: 'matomo.js',
    // },
    giscus: {
      repo: 'Shake-Jarjane/Docusaurus-Blog',
      repoId: 'R_kgDOIyryJA',
      category: 'General',
      categoryId: 'DIC_kwDOIyryJM4CTqoJ',
      mapping: 'title',
      lang: 'zh-CN',
    },
    liveCodeBlock: {
      playgroundPosition: 'top',
    },
    socials: {
      github: 'https://github.com/Shake-Jarjane',
      qq: 'http://wpa.qq.com/msgrd?v=3&uin=2531535061&site=qq&menu=yes',
      wechat: 'https://cdn-us.imgs.moe/2023/01/17/63c66e6fe7adf.jpg',
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          sidebarPath: 'sidebars.js',
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: [require.resolve('./src/css/custom.scss')],
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
        },
        gtag: {
          trackingID: "G-S4SD5NXWXF",
          anonymizeIP: true,
        },
        // debug: true,
      }),
    ],
  ],
  // themes: ['@docusaurus/theme-live-codeblock'],
  plugins: [
    // 'docusaurus-plugin-matomo',
    'docusaurus-plugin-image-zoom',
    'docusaurus-plugin-sass',
    path.resolve(__dirname, './src/plugin/plugin-baidu-tongji'),
    path.resolve(__dirname, './src/plugin/plugin-baidu-push'),
    [
      path.resolve(__dirname, './src/plugin/plugin-content-blog'), {
        path: 'blog',
        routeBasePath: '/',
        
        editUrl: ({ locale, blogDirPath, blogPath, permalink }) =>
        // `https://github.com/kuizuo/blog/edit/main/${blogDirPath}/${blogPath}`,
        `https://github.com/Shake-Jarjane/Docusaurus-Blog/edit/main/${blogDirPath}/${blogPath}`,
        editLocalizedFiles: false,
        blogSidebarTitle: 'Blog List 🛴',
        blogSidebarCount: ALL,
        /* 首页博文每页显示的文章数 */
        postsPerPage: 8,
        showReadingTime: true,
        readingTime: ({ content, frontMatter, defaultReadingTime }) =>
        frontMatter.hide_reading_time ? 
        undefined :
        defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
        feedOptions: {
          type: 'all',
          title: '加减',
          description: '',
          copyright: `Copyright © ${new Date().getFullYear()} Shake Built with Docusaurus.<p><a href="http://beian.miit.gov.cn/" class="footer_lin">${beian}</a></p>`,
        },
      }
    ],
    [
      '@docusaurus/plugin-ideal-image', {
        disableInDev: false,
      }
    ],
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: ['appInstalled', 'standalone', 'queryString'],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/logo.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(61 139 255)',
          },
        ],
      },
    ],
  ],
  stylesheets: [],
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      },
    },
  },
}

module.exports = config
