---
id: Hexo-guides
slug: /Hexo-guides
title: Hexo 的简单搭建
authors: Shake
date: 2022/12/14
last_update:
  date: 2023/12/14
keywords: ['guides', 'Hexo']
---

import LinkList from "@site/src/components/LinkList"

- 这里记录着搭建 [Hexo](https://hexo.io/zh-cn/) 博客的一些过程，主题选的是 [butterfly](https://butterfly.js.org/)

- 搭博客之初我选择的是 [Hexo](https://hexo.io/zh-cn/)，但是搭了个雏形之后发现太折腾，样式也太花了，有点违背我搭博客的初衷，于是舍弃了 Hexo，投入到 Docusaurus 的怀抱当中

**👇 主要参考了以下内容**
<LinkList
  data={[
    {
      title: "Hexo 文档",
      link: "https://hexo.io/zh-cn/docs/",
    },
    {
      title: "Butterfly 安装文档",
      link: "https://butterfly.js.org/posts/21cfbf15/",
    },
    {
      title: "Hexo 博客搭建基础教程",
      link: "https://www.fomal.cc/posts/e593433d.html",
    },
  ]}
/>


import DocCardList from '@theme/DocCardList'; import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
