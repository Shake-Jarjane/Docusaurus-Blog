---
id: docusaurus111-guides
slug: /docusaurus111-guides
title: README
authors: Shake
keywords: ['guides', 'docusaurus', 'docusaurus-guides']
---

<!-- import logo from "@site/static/img/favicon.png" -->
<!-- import visual_studio_code from "@site/static/img/icons/visual_studio_code.png" -->

import FeatureIcon from "@site/src/components/FeatureIcon"
import useBaseUrl from '@docusaurus/useBaseUrl';
import LinkList from "@site/src/components/LinkList"

<FeatureIcon src={useBaseUrl("/img/icons/visual_studio_code.png")} title="Visual Studio Code" />
<LinkList
  data={[
    {
      title: "Docusaurus 搜索",
      link: "/docs/docusaurus111-search",
    },
    {
      title: "Docusaurus 主题魔改2",
      link: "/docs/test/docusaurus111/search",
    },
  ]}
/>


1111这里是本人对 [Docusaurus](https://docusaurus.io/) 的魔改指南，帮助使用者更好使用 Docusaurus。

同时 [Docusaurus 2.0](https://docusaurus.io/zh-CN/blog/2022/08/01/announcing-docusaurus-2.0) 也正式发布了，顺带升级依赖与重构项目使其易懂易用。

也欢迎你使用本主题，如果你有任何问题，欢迎在 [GitHub Discussions](https://github.com/kuizuo/blog/discussions) 提出。

import DocCardList from '@theme/DocCardList'; import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
