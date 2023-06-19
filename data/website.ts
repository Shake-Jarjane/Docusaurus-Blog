import { Friends } from './friend';

export interface Website {
  name: string;
  logo: string;
  desc: string;
  href: string;
  tags?: string[];
}

export interface WebsiteCategory {
  name: string;
  websites: Website[];
}

const friends: Website[] = Friends.map((f) => {
  return {
    ...f,
    name: f.title,
    desc: f.description,
    logo: f.avatar,
    href: f.website,
  };
});

export const websiteData: WebsiteCategory[] = [
  {
    name: '友链👨‍💻',
    websites: friends,
  },
  {
    name: '站点🖥️',
    websites: [
      {
        name: "Developer Roadmap",
        desc: "Roadmap to becoming a web developer.",
        logo: "https://roadmap.sh/logo.svg",
        href: "https://roadmap.sh/",
      },
      {
        name: 'Shields.io',
        desc: '为你的开源项目生成高质量小徽章图标',
        logo: '/img/website/shields.png',
        href: 'https://shields.io/',
        tags: ['图标', '首页'],
      },
      {
        name: 'NGINX 配置',
        desc: '配置高性能、安全、稳定的NGINX服务器的最简单方法',
        logo: '/img/website/digitalocean.png',
        href: 'https://www.digitalocean.com/community/tools/nginx',
        tags: ['nginx'],
      },
      {
        name: 'BootCDN',
        desc: '稳定、快速、免费的前端开源项目 CDN 加速服务',
        logo: 'https://www.bootcdn.cn/assets/ico/favicon.ico',
        href: 'https://www.bootcdn.cn/',
        tags: ['cdn'],
      },
      {
        name: '那些免费的砖',
        desc: '发现免费可商用的资源',
        logo: 'https://img.thosefree.com/static/logo.png',
        href: 'https://www.thosefree.com/',
        tags: [''],
      },
      {
        name: '正则大全',
        desc: '🦕 常用正则大全, 支持web / vscode / idea / Alfred Workflow多平台',
        logo: '/img/website/any-rule.ico',
        href: 'https://any-rule.vercel.app/',
        tags: [''],
      },
    ],
  },
  {
    name: '文档📘',
    websites: [
      {
        name: 'MDN',
        desc: '从2005年开始记录网络技术，包括 CSS、 HTML 和 JavaScript。',
        logo: '/img/website/mdn.png',
        href: 'https://developer.mozilla.org/zh-CN/',
        tags: ['Css', '教程'],
      },
      {
        name: 'ES6 入门教程',
        desc: '《ECMAScript 6 入门教程》是一本开源的 JavaScript 语言教程，全面介绍 ECMAScript 6 新引入的语法特性',
        logo: '/img/website/es6.png',
        href: 'https://es6.ruanyifeng.com/',
        tags: ['文档'],
      },
      {
        name: '深入理解 TypeScript',
        desc: '《TypeScript Deep Dive》 是一本很好的开源书，从基础到深入，很全面的阐述了 TypeScript 的各种魔法，不管你是新手，还是老鸟，它都将适应你',
        logo: 'https://jkchao.github.io//typescript-book-chinese/logo.png',
        href: 'https://jkchao.github.io/typescript-book-chinese/',
        tags: ['文档'],
      },
      {
        name: 'Rust语言圣经',
        desc: '一份高质量 Rust 教程',
        logo: '/img/website/rust.svg',
        href: 'https://course.rs',
        tags: ['文档'],
      },
    ],
  },
  {
    name: '工具🛠️',
    websites: [
      {
        name: '在线工具',
        desc: '在线工具,开发人员工具,代码格式化、压缩、加密、解密,下载链接转换,ico图标制作,字帖生成',
        logo: 'https://tool.lu/favicon.ico',
        href: 'https://tool.lu/',
        tags: ['工具'],
      },
      {
        name: '菜鸟工具',
        desc: '菜鸟工具，为开发设计人员提供在线工具，提供在线PHP、Python、 CSS、JS 调试，中文简繁体转换，进制转换等工具',
        logo: '/img/website/runoob.png',
        href: 'https://c.runoob.com/',
        tags: ['工具'],
      },
      {
        name: 'ProcessOn',
        desc: '免费在线流程图思维导图',
        logo: 'https://processon.com/favicon.ico',
        href: 'https://processon.com/',
        tags: ['工具', '思维导图'],
      },
      {
        name: 'Terminal Gif Maker',
        desc: '在线生成 Terminal GIF',
        logo: '/img/website/favicon.ico',
        href: 'https://www.terminalgif.com',
        tags: [],
      },
      {
        name: 'AST Explorer',
        desc: '一个 Web 工具，用于探索由各种解析器生成的 AST 语法树',
        logo: 'https://astexplorer.net/favicon.png',
        href: 'https://astexplorer.net/',
        tags: ['工具', '格式转换'],
      },
      {
        name: 'transform',
        desc: '各类数据格式与对象转换',
        logo: 'https://transform.tools/static/favicon.png',
        href: 'https://transform.tools',
        tags: ['工具', '格式转换'],
      },
      {
        name: 'Hoppscotch',
        desc: '开源 API 开发生态系统',
        logo: '/img/website/hoppscotch.png',
        href: 'https://hoppscotch.io/',
        tags: ['api'],
      },
      {
        name: 'JsonT.run',
        desc: '一个简洁的在线 JSON 解析器',
        logo: 'https://www.jsont.run/favicon.ico',
        href: 'https://www.jsont.run/',
        tags: ['工具'],
      },
      {
        name: 'Apifox',
        desc: 'API 文档、API 调试、API Mock、API 自动化测试',
        logo: '/img/website/apifox.png',
        href: 'https://www.apifox.cn/',
        tags: ['工具'],
      },
      {
        name: '迅捷PDF转换器',
        desc: '在线电子书格式转换PDF',
        logo: 'https://app.xunjiepdf.com/favicon.ico',
        href: 'https://app.xunjiepdf.com/eb2pdf/?zhljj01/',
        tags: ['工具'],
      },
      {
        name: 'DeepL 翻译',
        desc: '号称全世界最准的翻译',
        logo: 'https://static.deepl.com/img/logo/DeepL_Logo_darkBlue_v2.svg',
        href: 'https://www.deepl.com/translator/',
        tags: ['工具'],
      },
      {
        name: 'GeoGebra',
        desc: '数学教学软件，一个计算器套件',
        logo: 'https://www.geogebra.org/favicon.ico',
        href: 'https://www.geogebra.org/',
        tags: ['工具'],
      },
      {
        name: 'removebg',
        desc: '在线抠图软件，可以去除图片背景',
        logo: 'https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://www.remove.bg/zh&size=50',
        href: 'https://www.remove.bg/zh/',
        tags: ['工具','图片'],
      },
      {
        name: 'Unscreen',
        desc: '移除任何视频的背景 — — 100% 自动，在线且免费',
        logo: 'https://www.unscreen.com/favicon.ico',
        href: 'https://www.unscreen.com/',
        tags: ['工具','视频'],
      },
      {
        name: '音乐解锁',
        desc: '移除已购音乐的加密保护',
        logo: 'https://demo.unlock-music.dev/favicon.ico',
        href: 'https://demo.unlock-music.dev/',
        tags: ['音乐','工具'],
      },
    ],
  },

  {
    name: '规划控制',
    websites: [
      {
        name: 'PathFinding.js',
        desc: '一个的路径搜索的动态在线演示',
        logo: 'http://qiao.github.io/favicon.ico',
        href: 'http://qiao.github.io/PathFinding.js/visual/',
        tags: ['工具'],
      },
    ],
  },

  {
    name: '编程相关',
    websites: [
      {
        name: 'CMake 中文文档',
        desc: '热心网友根据官方教程翻译的文档',
        logo: 'https://sfumecjf.github.io/favicon.ico',
        href: 'https://sfumecjf.github.io/cmake-examples-Chinese/',
        tags: ['工具'],
      },
    ],
  },

  {
    name: '文字&图标',
    websites: [
      {
        name: 'iconify',
        desc: '数千个图标，一个统一的框架',
        logo: 'https://icon-sets.iconify.design/favicon.ico',
        href: 'https://icon-sets.iconify.design/',
        tags: ['图标'],
      },
      {
        name: 'icones',
        desc: 'Icon Explorer with Instant searching, powered by Iconify',
        logo: 'https://icones.js.org/favicon.svg',
        href: 'https://icones.js.org/',
        tags: ['图标'],
      },
      {
        name: 'iconfont',
        desc: 'iconfont-国内功能很强大且图标内容很丰富的矢量图标库，提供矢量图标下载、在线存储、格式转换等功能',
        logo: 'https://img.alicdn.com/imgextra/i4/O1CN01EYTRnJ297D6vehehJ_!!6000000008020-55-tps-64-64.svg',
        href: 'https://www.iconfont.cn/',
        tags: ['图标'],
      },
      {
        name: 'feathericons',
        desc: '简单美丽的开源图标',
        logo: 'https://feathericons.com/favicon.ico',
        href: 'https://feathericons.com/',
        tags: ['图标'],
      },
      {
        name: 'undraw',
        desc: '一个不断更新的设计项目与美丽的SVG图像，使用完全免费',
        logo: 'https://undraw.co/apple-touch-icon.png',
        href: 'https://undraw.co/',
        tags: ['插画', 'svg'],
      },
      {
        name: 'igoutu',
        desc: '图标、插图、照片、音乐和设计工具',
        logo: '/img/website/igoutu.png',
        href: 'https://igoutu.cn/',
        tags: ['插画', 'svg'],
      },
      {
        name: 'Emojiall',
        desc: 'Emoji表情大全',
        logo: 'https://www.emojiall.com/apple-touch-icon.png',
        href: 'https://www.emojiall.com/zh-hans',
        tags: ['图标', 'emoji'],
      },
      {
        name: 'EmojiXD',
        desc: 'Emoji百科全书',
        logo: 'https://emojixd.com/favicon.ico',
        href: 'https://emojixd.com/',
        tags: ['图标', 'emoji'],
      },
      {
        name: '渐变色网站',
        desc: '数百万个自动生成的渐变的网站',
        logo: 'https://gradihunt.com/favicon.ico',
        href: 'https://gradihunt.com/',
        tags: ['配色', '背景'],
      },
      {
        name: '谷歌字体',
        desc: '一个生成渐变色背景的网站',
        logo: '/img/website/google_fonts.ico',
        href: 'https://googlefonts.cn/',
        tags: ['字体'],
      },
      {
        name: 'Typing SVG',
        desc: '一个动态生成的可自定义 SVG 打字效果',
        logo: '/img/website/typing-svg.png',
        href: 'https://readme-typing-svg.herokuapp.com/demo/',
        tags: ['字体'],
      },
      {
        name: 'Hitokoto - 一言',
        desc: '随机分享一句话',
        logo: 'https://hitokoto.cn/favicon.ico',
        href: 'https://hitokoto.cn/',
        tags: ['文字'],
      },
      {
        name: '一句',
        desc: '汇聚有料文字',
        logo: 'http://yijuzhan.com/favicon.ico',
        href: 'http://yijuzhan.com/',
        tags: ['文字'],
      },
      {
        name: '今日诗句',
        desc: '每次返回一句诗词',
        logo: 'https://www.jinrishici.com/img/icon-small.png',
        href: 'https://www.jinrishici.com/',
        tags: ['文字'],
      },
      {
        name: 'Tabler Icons',
        desc: '免费和开源的图标，设计时注重细节，使您的设计脱颖而出',
        logo: 'https://tablericons.com/favicon.ico',
        href: 'https://tablericons.com/',
        tags: ['图标'],
      },
      {
        name: 'Open Doodles',
        desc: '一个免费供个人和商业使用的人物素描图库',
        logo: 'https://assets.website-files.com/5d5d5904f8a21bfe5ff69367/5da4e9a054896ed6d830e869_icon-32w.png',
        href: 'https://www.opendoodles.com/',
        tags: ['素材','图标'],
      },
      {
        name: 'DrawKit',
        desc: '免费的矢量 SVG 插图，供您在下一个项目中使用，不需要署名',
        logo: 'https://www.drawkit.io/favicon.ico',
        href: 'https://www.drawkit.io/',
        tags: ['素材','图标'],
      },
    ],
  },
  {
    name: 'CSS',
    websites: [
      {
        name: 'Bootstrap',
        desc: 'Bootstrap 是全球最受欢迎的前端开源工具库，它支持 Sass 变量和 mixin、响应式栅格系统、自带大量组件和众多强大的 JavaScript 插件。基于 Bootstrap 提供的强大功能，能够让你快速设计并定制你的网站',
        logo: 'https://img.kuizuo.cn/20210907055816.png',
        href: 'https://v5.bootcss.com/',
        tags: ['Css', '框架'],
      },
      {
        name: 'w3schools Css 教程',
        desc: 'w3schools 从基础到高级的CSS教程',
        logo: 'https://www.w3schools.com/favicon.ico',
        href: 'https://www.w3schools.com/css',
        tags: ['Css', '样式'],
      },
      {
        name: 'CSS-Inspiration',
        desc: 'CSS灵感',
        logo: '/img/website/css-inspiration.png',
        href: 'https://csscoco.com/inspiration',
        tags: ['Css', '样式'],
      },
      {
        name: 'CSS常用样式',
        desc: 'CSS常用样式',
        logo: 'https://tse1-mm.cn.bing.net/th?id=OIP-C.EgSPriuEnAtlIWJV8R_E1QHaGs&w=107&h=100&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
        href: 'https://github.com/QiShaoXuan/css_tricks',
        tags: ['Css', '样式'],
      },
      {
        name: 'CSSFX',
        desc: '一个精心制作的集合设计的重点是流动性，简单性和易用性。使用最小标记的 CSS 支持',
        logo: '/img/website/cssfx.png',
        href: 'https://cssfx.netlify.app/',
        tags: ['Css', '样式'],
      },
      {
        name: 'TailwindCSS',
        desc: 'Tailwind CSS 是一个功能类优先的 CSS 框架，它集成了诸如 flex, pt-4, text-center 和 rotate-90 这样的的类，它们能直接在脚本标记语言中组合起来，构建出任何设计',
        logo: 'https://www.tailwindcss.cn/favicon-32x32.png',
        href: 'https://www.tailwindcss.cn',
        tags: ['Css', '框架'],
      },
      {
        name: 'WindiCSS',
        desc: 'Windi CSS 是下一代工具优先的 CSS 框架',
        logo: 'https://windicss.org/assets/logo.svg',
        href: 'https://windicss.org',
        tags: ['Css', '框架'],
      },
      {
        name: 'Twind',
        desc: '现存最小、最快、功能最齐全的完整 Tailwind-in-JS 解决方案',
        logo: '/img/website/twind.svg',
        href: 'https://github.com/tw-in-js/twind',
        tags: ['Css', '框架'],
      },
      {
        name: 'UnoCSS',
        desc: '即时按需原子 CSS 引擎',
        logo: 'https://uno.antfu.me//favicon.svg',
        href: 'https://uno.antfu.me/',
        tags: ['Css', '框架'],
      },
      {
        name: 'NES.css',
        desc: '一个像素风格的CSS框架',
        logo: 'https://nostalgic-css.github.io/NES.css/favicon.png',
        href: 'https://nostalgic-css.github.io/NES.css/',
        tags: ['Css', '框架'],
      },
      {
        name: 'clay.css',
        desc: 'claymorphism 泥陶态风格CSS',
        logo: 'https://codeadrian.github.io/clay.css/apple-touch-icon.png',
        href: 'https://codeadrian.github.io/clay.css/',
        tags: ['Css', '框架'],
      },
      {
        name: 'loading.io',
        desc: 'Animation Made Easy',
        logo: '/img/website/loading.ico',
        href: 'https://loading.io/',
        tags: ['Css'],
      },
      {
        name: '神奇UI样式',
        desc: '我们赋予任何人创建、分享和使用用 CSS 和 HTML 制作的漂亮自定义元素的权力。',
        logo: '/img/website/uiverse.png',
        href: 'https://uiverse.io',
        tags: ['Css'],
      },
      {
        name: 'CodePen',
        desc: '一款前端所见即所得的工具，可以在线编辑制作前端页面。同时网站提供所有常见的 js、css 库，并且支持流行技术（如 SASS）',
        logo: 'https://codepen.io/favicon.ico',
        href: 'https://codepen.io/',
        tags: ['Css'],
      },
      {
        name: 'HYPE4',
        desc: '透明玻璃态生成器',
        logo: 'https://hype4.academy/_next/static/media/logorwd@2x.b40bc92c.png',
        href: 'https://hype4.academy/tools/glassmorphism-generator',
        tags: ['Css'],
      },
      {
        name: 'wweb.dev',
        desc: 'CSS 动画背景生成器',
        logo: 'https://ik.imagekit.io/wwebdev/tr:w-180/logo-text_51kQarOOiD-.png',
        href: 'https://wweb.dev/resources/animated-css-background-generator/',
        tags: ['Css'],
      },
      {
        name: 'Favicon.io',
        desc: '可以生成带有调整的网站图标 SVG 代码、生成基于文本的网站图标或生成基于表情符号的网站图标',
        logo: '/img/website/Favicon_io.png',
        href: 'https://favicon.io/',
        tags: ['Css'],
      },
      {
        name: 'Omatsuri',
        desc: '收集不同的发电机，让您的生活更轻松。',
        logo: 'https://omatsuri.app/assets/favicon.ico',
        href: 'https://omatsuri.app',
        tags: ['Css'],
      },
      {
        name: 'smooth shadow',
        desc: '快速轻松地实现基于 CSS 阴影的绝佳工具。您只需要指定一些阴影设置，代码就在您的路上。',
        logo: 'https://shadows.brumm.af/favicon.svg',
        href: 'https://shadows.brumm.af/',
        tags: ['Css'],
      },
      {
        name: 'FANCY-BORDER-RADIUS',
        desc: '花式边界半径,有助于创建 CSS 花式边框。',
        logo: 'https://9elements.github.io/fancy-border-radius/favicon-32x32.png',
        href: 'https://9elements.github.io/fancy-border-radius/',
        tags: ['Css'],
      },
      {
        name: 'Coolors',
        desc: '创建调色板',
        logo: 'https://coolors.co/assets/img/ios_icon.png',
        href: 'https://coolors.co/',
        tags: ['Css'],
      },
      {
        name: 'Get Waves',
        desc: '选择一些设置后，应用程序会为您的波形设计创建正确的 CSS 代码',
        logo: 'https://getwaves.io/favicon-32x32.png?v=f13a1a2e88a9720e746d5561039d3f5f',
        href: 'https://getwaves.io/',
        tags: ['Css'],
      },
      {
        name: 'CSS BUD',
        desc: '一些CSS文本样式',
        logo: 'https://cssbud.com/wp-content/uploads/2020/04/cssbud-logo.png',
        href: 'http://cssbud.com/',
        tags: ['Css'],
      },
    ],
  },
  {
    name: 'Github',
    websites: [
      {
        name: 'Gitstar Ranking',
        desc: '针对用户、组织和存储库的非官方 GitHub 星级排名',
        logo: '/img/website/github.ico',
        href: 'https://gitstar-ranking.com/',
        tags: [],
      },
      {
        name: 'Metrics',
        desc: 'Create your own metrics',
        logo: '/img/website/github.ico',
        href: 'https://metrics.lecoq.io/',
        tags: [],
      },
      {
        name: 'Github主页 README 生成器',
        desc: '一个Github 个人主页 README 生成器',
        logo: '/img/website/github.ico',
        href: 'https://rahuldkjain.github.io/gh-profile-readme-generator/',
        tags: [],
      },
      {
        name: 'Github 统计生成器',
        desc: 'Github 在你的 README 中获取动态生成的 GitHub 统计信息！',
        logo: '/img/website/github.ico',
        href: 'https://github.com/anuraghazra/github-readme-stats',
        tags: [],
      },
    ],
  },
  {
    name: '代码托管',
    websites: [
      {
        name: 'GitHub',
        desc: '全球最大的软件项目托管平台，发现优质开源项目',
        logo: 'https://github.githubassets.com/favicons/favicon.svg',
        href: 'https://github.com/',
        tags: ['GitHub', '代码托管'],
      },
      {
        name: 'Gitee',
        desc: '蚂蚁集团全新一代数据可视化解决方案',
        logo: '/img/website/gitee.ico',
        href: 'https://gitee.com/',
        tags: ['代码托管'],
      },
      {
        name: 'Gitlab',
        desc: '更快地交付安全代码，部署到任何云，并推动业务成果',
        logo: 'https://gitlab.com/uploads/-/system/group/avatar/6543/logo-extra-whitespace.png?width=64',
        href: 'https://gitlab.com/',
        tags: ['代码托管'],
      },
      {
        name: 'Gitea',
        desc: 'Gitea 是一个开源社区驱动的轻量级代码托管解决方案，后端采用 Go 编写，采用 MIT 许可证.',
        logo: 'https://gitea.io/images/favicon.png',
        href: 'https://gitea.io/',
        tags: ['代码托管'],
      },
      {
        name: "Coding",
        desc: "提供一站式研发管理平台及云原生开发工具，让软件研发如同工业生产般简单高效，助力企业提升研发管理效能",
        logo: "/img/website/coding.png",
        href: "https://coding.net/",
        tags: ["代码托管"],
      },
    ],
  },
  {
    name: '网站托管',
    websites: [
      {
        name: 'Vercel',
        desc: 'Vercel将最好的开发人员体验与对最终用户性能的执着关注相结合',
        logo: 'https://assets.vercel.com/image/upload/q_auto/front/favicon/vercel/57x57.png',
        href: 'https://vercel.com',
        tags: ['网站托管'],
      },
      {
        name: 'Netlify',
        desc: 'Netlify 是一家提供静态网站托管的云平台，支持从 Github, GitLab, Bitbucket 等代码仓库中自动拉取代码 然后进行项目打包和部署等功能',
        logo: 'https://www.netlify.com/v3/static/favicon/apple-touch-icon.png',
        href: 'https://www.netlify.com',
        tags: ['网站托管'],
      },
      {
        name: 'Coolify',
        desc: '一个开源和自我托管的 Heroku/Netlify 替代品',
        logo: '/img/website/coolify.png',
        href: 'https://coolify.io',
        tags: ['网站托管'],
      },
      {
        name: 'GitHub Codespace',
        desc: '全球最大的软件项目托管平台，发现优质开源项目',
        logo: 'https://github.githubassets.com/favicons/favicon.svg',
        href: 'https://github.com/codespaces',
        tags: ['网站托管'],
      },
      {
        name: 'railway',
        desc: '带上你的代码，剩下交给我们 ',
        logo: '/img/website/railway.png',
        href: 'https://railway.app/',
        tags: ['网站托管'],
      },

    ],
  },
  {
    name: '在线代码',
    websites: [
      {
        name: 'CodesandBox',
        desc: 'CodeSandbox是一个在线代码编辑器和原型工具，可以更快地创建和共享web应用程序',
        logo: 'https://codesandbox.io/favicon.ico',
        href: 'https://codesandbox.io/',
        tags: ['在线代码'],
      },
      {
        name: 'CodePen',
        desc: '是构建、测试和发现前端代码的最佳场所',
        logo: 'https://cpwebassets.codepen.io/assets/favicon/favicon-aec34940fbc1a6e787974dcd360f2c6b63348d4b1f4e06c77743096d55480f33.ico',
        href: 'https://codepen.io/',
        tags: ['在线代码'],
      },
      {
        name: 'Stackblitz',
        desc: 'Stackblitz在流程中保持即时的开发体验。没有更多的小时储存/拉/安装本地-只需点击，并开始编码',
        logo: '/img/website/stackblitz.png',
        href: 'https://stackblitz.com/',
        tags: ['在线代码'],
      },
      {
        name: 'vscode.dev',
        desc: 'vscode官方提供在线Web版vscode代码编写网站',
        logo: 'https://vscode.dev/static/stable/favicon.ico',
        href: 'https://vscode.dev/',
        tags: ['在线代码'],
      },
      {
        name: 'Sandpack',
        desc: '用于创建实时运行的代码编辑经验',
        logo: 'https://sandpack.codesandbox.io/favicon.ico',
        href: 'https://sandpack.codesandbox.io/',
        tags: ['在线代码'],
      },
    ],
  },

  {
    name: '设计',
    websites: [
      {
        name: 'Mastergo',
        desc: '面向团队的专业 UI/UX 设计工具，多人同时编辑、随时在线评审、设计一键交付，让想法更快实现',
        logo: 'https://mastergo.com/favicon.ico',
        href: 'https://mastergo.com/',
        tags: ['设计'],
      },
      {
        name: '即时设计',
        desc: '可云端编辑的专业级 UI 设计工具，为中国设计师量身打造，Windows 也能用的「协作版 Sketch」',
        logo: 'https://img.js.design/assets/webImg/favicon.ico',
        href: 'https://js.design/',
        tags: ['设计'],
      },
      {
        name: 'Figma',
        desc: 'Figma 是为 UI 设计而生的设计工具，除了有和 Sketch 一样基本的操作和功能，还有许多专为 UI 设计而生的强大功能。',
        logo: '/img/website/figma.png',
        href: 'https://www.figma.com/',
        tags: ['设计'],
      },
      {
        name: 'Pixso',
        desc: '一站式完成原型、设计、交互与交付，为数字化团队协作提效',
        logo: 'https://cms.pixso.cn/images/logo.svg',
        href: 'https://pixso.cn/',
        tags: ['设计'],
      },

    ],
  },
  {
    name: '站点生成',
    websites: [
      {
        name: 'VitePress',
        desc: 'Vue 驱动并使用Vite构建的静态网站生成器',
        logo: 'https://vuepress.vuejs.org/hero.png',
        href: 'https://vitepress.vuejs.org',
        tags: ['前端', 'Vue', '静态站点'],
      },
      {
        name: 'VuePress',
        desc: 'Vue 驱动的静态网站生成器',
        logo: 'https://vuepress.vuejs.org/hero.png',
        href: 'https://vuepress.vuejs.org',
        tags: ['前端', 'Vue', '静态站点'],
      },
      {
        name: 'Docusaurus',
        desc: '快速构建以内容为核心的最佳网站',
        logo: '/img/website/docusaurus.svg',
        href: 'https://docusaurus.io',
        tags: ['前端', 'React', '静态站点'],
      },
      {
        name: 'Hexo',
        desc: '快速、简洁且高效的博客框架',
        logo: 'https://hexo.io/favicon.ico',
        href: 'https://hexo.io',
        tags: ['前端', '静态站点'],
      },
      {
        name: 'GitBook',
        desc: 'GitBook帮助您为用户发布漂亮的文档，并集中您的团队的知识进行高级协作',
        logo: 'https://assets-global.website-files.com/600ead1452cf056d0e52dbed/6246d2036225eac4d74cff27_Favicon_Blue.png',
        href: 'https://www.gitbook.com/',
        tags: ['前端', '静态站点'],
      },
      {
        name: 'Docsify',
        desc: 'docsify 可以快速帮你生成文档网站',
        logo: 'https://docsify.js.org/_media/icon.svg',
        href: 'https://docsify.js.org',
        tags: ['前端', '静态站点'],
      },
      {
        name: 'WordPress',
        desc: 'WordPress是一款能让您建立出色网站、博客或应用程序的开源软件',
        logo: 'https://s.w.org/images/wmark.png',
        href: 'https://cn.wordpress.org/',
        tags: ['前端', '站点'],
      },
      {
        name: 'Halo',
        desc: '一款现代化的开源博客/CMS系统，值得一试',
        logo: 'https://halo.run/logo',
        href: 'https://halo.run/',
        tags: ['前端', '站点'],
      },
    ],
  },
  {
    name: '音乐',
    websites: [
      
    ]
  },
  {
    name: '学术',
    websites: [
      {
        name: '维普毕业论文管理系统',
        desc: '',
        logo: 'https://vgms.fanyu.com/favicon.ico',
        href: 'https://vgms.fanyu.com/',
        tags: ['学术'],
      },
    ]
  }
];
