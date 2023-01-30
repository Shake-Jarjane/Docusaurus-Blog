export const Friends: Friend[] = [
  {
    title: '愧怍',
    description: '编程爱好者，编写所感兴趣的项目，现主攻js/ts全栈，希望能为开源社区做出一份贡献',
    website: 'https://kuizuon.cn',
    avatar: require('./avatar/kuizuo.png'),
  },
  {
    title: '徐玺',
    description: '',
    website: 'https://www.roboxx.ltd',
    avatar: require('./avatar/No_avatar.png'),
  },
];

export type Friend = {
  title: string;
  description: string;
  website: string;
  avatar?: any;
};
