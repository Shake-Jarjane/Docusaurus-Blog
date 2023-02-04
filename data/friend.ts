export const Friends: Friend[] = [
  {
    title: '愧怍',
    description: '编程爱好者，编写所感兴趣的项目，现主攻js/ts全栈，希望能为开源社区做出一份贡献',
    website: 'https://kuizuon.cn',
    avatar: require('./avatar/kuizuo.png'),
  },
  {
    title: 'Roboxx',
    description: '徐玺',
    website: 'https://www.roboxx.ltd',
    avatar: 'https://www.roboxx.ltd/wp-content/uploads/2021/07/cropped-bea47563090f66cfc83f5996507fdaf3-2-270x270.jpeg',
  },
  {
    title: 'Rcxxx',
    description: '创新',
    website: 'https://sinnammanyo.cn/',
    avatar: 'https://sinnammanyo.cn/img/icons/game.png',
  },
  {
    title: "Power's wiki",
    description: '宇轩',
    website: 'https://wiki-power.com',
    avatar: 'https://wiki-power.com/img/logo-zip.png',
  },
  {
    title: "BOBIの小窝",
    description: 'bobi',
    website: 'https://bobi.site',
    avatar: 'https://bobi.site/wp-content/uploads/2020/02/cropped-bobi透明-192x192.png',
  },
  {
    title: "Papani's Home Page",
    description: '啊港',
    website: 'https://roboppn.top/',
    avatar: 'https://roboppn.top//img/黑猫柴鱼.png',
  },
  {
    title: "FQJun's Blog",
    description: '高佬',
    website: 'https://www.fqjun.xyz/',
    avatar: "https://www.fqjun.xyz/favicon.png",
  },
  {
    title: "阿囧",
    description: '马老师',
    website: 'https://www.yuque.com/ajiong-hwcyf',
    avatar: "https://cdn.nlark.com/yuque/0/2021/jpeg/anonymous/1615620609802-e6ae57ae-218f-4e64-ab39-12a64494f98b.jpeg?x-oss-process=image%2Fresize%2Cm_fill%2Cw_328%2Ch_328%2Fformat%2C.png",
  },
  {
    title: "GY`s blog",
    description: '郭烨',
    website: 'https://cvgy.top/',
    avatar: "https://cvgy.top/images/logo-ios.png",
  },
];

export type Friend = {
  title: string;
  description: string;
  website: string;
  avatar?: any;
};
