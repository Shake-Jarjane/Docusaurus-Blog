---
id: docusaurus111-style
slug: /docusaurus111-style
title: 样式与页面
date: 2023/01/12
authors: Shake

sidebar_position: 2
# sidebar_label: 样式与页面
# sidebar_class_name: green

last_update:
  date: 2023/04/12
#   author: Shake
---

人麻了测试当中111

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrowserWindow from '@site/src/components/BrowserWindow';
import BVideo from "@site/src/components/BVideo";
import BookParagraph from '@site/src/components/BookParagraph';import Origin from '@site/src/components/BookParagraph/Origin';
import DisplayFlex from '@site/src/components/DisplayFlex'

## [样式和布局](https://docusaurus.io/zh-CN/docs/styling-layout#styling-your-site-with-infima)

Docusaurus 网站是一个 React 单页应用。 你可以像一般的 React 应用一样给网站提供样式，想 tailwindCSS 与 组件库都是支持的。不过引入这些会带来一定的体积，因此我常用的是全局样式与 CSS 模块。

## 修改主题色

可以在 [这里](https://docusaurus.io/zh-CN/docs/styling-layout#styling-your-site-with-infima) 设置主色调与背景色来查看浅色与深色模式下的效果，例如我的主题色是 <font color="#12AFFA">#12AFFA</font>

`@docusaurus/preset-classic` 用 [Infima](https://infima.dev/) 作为底层样式框架。 Infima 提供了灵活的布局，以及常见的 UI 组件样式，适用于以内容为中心的网站（博客、文档、首页）。想要了解更多详情，请查看 [Infima 网站](https://infima.dev/)。

## 主页 {#homepage}

因为设置了[仅博客模式](https://docusaurus.io/zh-CN/docs/blog#blog-only-mode)，没有专门编写的首页，而是将博文列表设置为首页。需要将 `src/pages/index.tsx` 文件给删除（或者改个名），否则会导致首页路径冲突。当然你也可以专门搞一个主页，就像 docusaurus 那样，然后跳转至博文列表页。

所以博客页面，也就是首页。但仅仅只有博客是远远不够的，所以便添加了 Hero 组件，也就是首次访问博客的样子。

主页右侧 SVG 背景文件地址: `src/components/Hero/img/hero_main.svg`, 插画来源于 [unDraw](https://undraw.co/illustrations)，在这个网站可以找到这类插画风格的背景。或者你可以找专门设计插画的人为你设计。

## 自定义页面

[友链](/friends)、[导航](/website)、[项目](/project)以及[关于我](/about)页面都在 `src/pages` 目录下定义，根据文件名映射对应路由。页面的创建可以查看 [创建页面 | Docusaurus](https://docusaurus.io/zh-CN/docs/creating-pages)

<Tabs
defaultValue="apple"
values={[
    {label: 'Apple', value: 'apple'},
    {label: 'Orange', value: 'orange'},
    {label: 'Banana', value: 'banana'},
]}>
<TabItem value="apple">This is an apple 🍎
<details>
  <summary>Toggle me!</summary>
  <div>
    <div>This is the detailed content</div>
    <br/>
    <details>
      <summary>
        Nested toggle! Some surprise inside...
      </summary>
      <div>
        😲😲😲😲😲
      </div>
    </details>
  </div>
</details>
</TabItem>
<TabItem value="orange">This is an orange 🍊<br/>
          阿巴阿巴阿巴
</TabItem>
<TabItem value="banana">This is a banana 🍌<br/><br/><br/>ye~~</TabItem>
</Tabs>


<BrowserWindow minHeight={240} url="http://localhost:3000">

# 这是一个浏览器窗口 

</BrowserWindow>

````diff
module.exports = {
+  themeConfig: {
-    algolia: {
      appId: 'YOUR_APP_ID',          // Application ID
      apiKey: 'YOUR_SEARCH_API_KEY', // Search-Only API Key
      indexName: 'YOUR_INDEX_NAME'   // Index name
    }
  }
};
````

import HyperLink from "@site/src/components/HyperLink";

- <HyperLink type="external" link="https://www.cordcloud.biz/">
    CordCloud &nbsp;
  </HyperLink>

- <HyperLink type="external" link="https://cyoooo.co/">
    KuLi &nbsp;
  </HyperLink>
  （从 2022/6/10 使用至 2022/7/20）

<BVideo src="//player.bilibili.com/player.html?aid=379284479&bvid=BV17f4y1M7mq&cid=445379085&page=1" width="100%" height="360" frameborder="no" scrolling="no" allowfullscreen="allowfullscreen"bsrc="https://www.bilibili.com/video/BV17f4y1M7mq/"/>

跳到 [主页](#homepage) 

import Shortcut from "@site/src/components/Shortcut/index";

<div>
  <Shortcut>ctrl</Shortcut> + <Shortcut>C</Shortcut>
</div>

<!-- <iframe width="900" height="515" src="https://www.bilibili.com/video/BV1rg411x7Z8/?spm_id_from=333.1007.tianma.9-1-31.click&vd_source=e08c248aced8612d6c81f01b1dad03c3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->

<BookParagraph section="四">

&emsp;&emsp;到了冬天，那个圮坍了的白塔，又重新修好了。可是那个在月下唱歌，使翠翠在睡梦里为歌声把灵魂轻轻浮起的年青人，还不曾回到茶峒来。

&emsp;&emsp;&emsp;……

&emsp;&emsp;这个人也许永远不回来了，也许“明天”回来！

<Origin book_name="《book》" author="author" />

</BookParagraph>

<DisplayFlex>

![1](https://shake-picture.oss-cn-guangzhou.aliyuncs.com/Docusaurus/docs/Blog_Building/Docusaurus/20230125010816.png)

![2](https://shake-picture.oss-cn-guangzhou.aliyuncs.com/Docusaurus/docs/Blog_Building/Docusaurus/20230125010903.png)

</DisplayFlex>
