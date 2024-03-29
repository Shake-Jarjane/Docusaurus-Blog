/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  Blog_Building: [
    'Site/introduction',
    {
      label: 'Docusaurus',
      type: 'category',
      link: {
        type: 'doc',
        id: 'Site/Docusaurus/Docusaurus-guides'
      },
      items: [
        'Site/Docusaurus/Docusaurus-环境配置',
        'Site/Docusaurus/Docusaurus-部署',
        'Site/Docusaurus/Docusaurus-样式与页面',
        'Site/Docusaurus/Docusaurus-自定义组件',
        'Site/Docusaurus/Docusaurus-搜索配置',
        'Site/Docusaurus/Docusaurus-评论系统',
        'Site/Docusaurus/Docusaurus-图床配置',
        'Site/Docusaurus/Docusaurus-文档编辑指南',
        'Site/Docusaurus/Docusaurus-使用Hygen创建文章模板',
      ],
    },
    {
      label: 'Hexo',
      type: 'category',
      link: {
        type: 'doc',
        id: 'Site/Hexo/Hexo-guides'
      },
      items: [
        'Site/Hexo/Hexo-环境配置',
        'Site/Hexo/Hexo-部署',
        'Site/Hexo/Hexo-Vercel部署',
        'Site/Hexo/Hexo-主题安装',
      ],
    },
    {
      label: '网站小技巧',
      type: 'category',
      link: {
        // title: '',
        // description: '记录一些网站的使用小技巧',
        type: 'generated-index',
      },
      items: [
        { 
          type: 'autogenerated',
          dirName: 'Site/Tips',
        },
      ],
    },
    {
      label: 'Test',
      type: 'category',
      link: {
        type: 'doc',
        id: 'Site/Test/introduction',
        // title: '测试场地',
        // description: '这里是博客搭建过程的测试场地，请忽略本模块内容',
        // type: 'generated-index',
      },
      items: [
        { 
          type: 'autogenerated',
          dirName: 'Site/Test/docusaurus111',
        },
      ],
    },
  ],
  Stack: [
    'Stack/introduction',
    {
      label: 'C/C++',
      type: 'category',
      link: {
        title: 'C/C++',
        // description: 'C/C++笔记',
        type: 'generated-index',
      },
      items: [
        { 
          type: 'autogenerated',
          dirName: 'Stack/C_C++',
        },
      ],
    },
    {
      label: 'STM32',
      type: 'category',
      link: {
        title: 'STM32',
        // description: 'stm32笔记',
        type: 'generated-index',
      },
      items: [
        { 
          type: 'autogenerated',
          dirName: 'Stack/STM32',
        },
      ],
    },
    {
      label: 'Linux',
      type: 'category',
      link: {
        title: 'Linux',
        // description: 'Linux笔记',
        type: 'generated-index',
      },
      items: [
        { 
          type: 'autogenerated',
          dirName: 'Stack/Linux',
        },
      ],
    },
    {
      label: 'ROS',
      type: 'category',
      link: {
        title: 'ROS',
        // description: '',
        type: 'generated-index',
      },
      items: [
        {
          type: 'autogenerated',
          // title: '面对对象',
          dirName: 'Stack/ROS',
        },
        // {
        //   type: 'autogenerated',
        //   dirName: 'Stack/ROS',
        // },
      ],
    },
    {
      label: 'Motion Planning',
      type: 'category',
      link: {
        title: '规划控制',
        // description: '',
        type: 'generated-index',
      },
      items: [
        { 
          type: 'autogenerated',
          dirName: 'Stack/PlanningControl',
        },
      ],
    },
  ],
  tools: [
    // 'tools/introduction',
    // 'tools/everything-quick-search-local-files',
    // 'tools/wappalyzer-recognize-technology',
    // 'tools/windows-custom-right-click-menu',
    // 'tools/vscode-config',
    // 'tools/idea-config',
    // 'tools/vite-plugin',
    // 'tools/jetbrains-product-activation-method',
    // items: [
      { 
        type: 'autogenerated',
        dirName: 'tools',
      },

    // ]
  ],
  // Test: [
  //   'Test/introduction',
  //   {
  //     label: 'Docusaurus 主题魔改111',
  //     type: 'category',
  //     link: {
  //       // type: 'doc',
  //       // id: 'Test/docusaurus111/docusaurus111-guides',
  //       title: '主题魔改',
  //       description: '这里是主题魔改的介绍 然后来一个Github Action部署测试',
  //       type: 'generated-index',
  //     },
  //     items: [
  //       { 
  //         type: 'autogenerated',
  //         dirName: 'Test/docusaurus111',
  //       },
  //     ],
  //   },
  // ],
  WildWolf: [
    'WildWolf/introduction',
    {
      label: '留给机器人队',
      type: 'category',
      link: {
        // title: ' ',
        description: 'robot',
        type: 'generated-index',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'WildWolf/letter',
        },
      ],
    },
    // {
    //   type: 'autogenerated',
    //   dirName: 'WildWolf', // 从 docs/api 生成侧边栏切片
    // },
  ],
  LifeGuide: [
    'LifeGuide/introduction',
    {
      label: '生活指南',
      type: 'category',
      link: {
        // title: 'None',
        // description: ' ',
        type: 'generated-index',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'LifeGuide/shopping',
        },
      ],
    },
    // {
    //   type: 'autogenerated',
    //   dirName: 'WildWolf', // 从 docs/api 生成侧边栏切片
    // },
  ],
  EfficiencyGuide: [
    'EfficiencyGuide/introduction',
    {
      label: '工具',
      type: 'category',
      link: {
        // title: 'None',
        // description: ' ',
        type: 'generated-index',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'EfficiencyGuide/Tool',
        },
      ],
    },
  ]
}

module.exports = sidebars
