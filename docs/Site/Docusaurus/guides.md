---
id: Docusaurus-guides
slug: /Docusaurus-guides
title: Docusaurus 养成记录
authors: Shake
date: 2023/01/21
last_update:
  date: 2023/01/21
keywords: ['guides', 'Docusaurus', 'Docusaurus-guides']
---

import LinkList from "@site/src/components/LinkList"

- 这里记录着我搭建 [Docusaurus](https://docusaurus.io/) 的部分踩坑过程，希望能够给正在搭建 Docusaurus 的小伙伴一些帮助，可行性均进行过验证，可放心食用。（只是一个针对自己个人的记录，严格意义上并不算是教学文档）  

- 本博客使用的是 [Docusaurus 2.x](https://docusaurus.io/zh-CN/blog/2022/08/01/announcing-docusaurus-2.0) 版本，是基于 [kuizuo](https://kuizuo.cn/) 博主的源码基础上进行修改。

- 如果你喜欢我这个主题，源码是开源的，可以到我的 [Github](https://github.com/Shake-Jarjane/Docusaurus-Blog/) 仓库直接 fork 或者 git clone 均可，也可以通过 [Vercel](https://vercel.com/new/clone?repository-url=https://github.com/Shake-Jarjane/Docusaurus-Blog/tree/main&project-name=blog&repo-name=blog) 一键部署

**👇 建议多翻阅文官文档，或许会有你需要的答案**
<LinkList
  data={[
    {
      title: "Docusaurus 中文",
      link: "https://docusaurus.io/zh-CN/docs",
    },
  ]}
/>

import DocCardList from '@theme/DocCardList'; import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
