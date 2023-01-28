---
id: Docusaurus-获取网站 favicon 图标
slug: /Docusaurus-获取网站 favicon 图标
title: 获取网站 favicon 图标
date: 2023/01/27
authors: Shake
last_update:
  date: 2023/01/27
---

## 1. 直接访问 favicon 地址获取

熟悉网站开发的很多人都知道（当然我不是），网站的 favicon 就是把一个名为 **favicon.ico**  图片文件上传到网站根目录，然后浏览器会自动识别其为网站的标签页图标。

则可以通过 **`域名+/favicon.ico`** 直接访问图标<br />比如 Google 的图标：**`https://www.google.com/favicon.ico`**

## 2. 使用 favicon 下载网站获取

[Favicon Grabber](https://favicongrabber.com/)

[The Favicon Finder](https://favicongrabber.com/)

## 3. 使用 API 获取

一些网站还提供专门的API给其他的开发者或者特殊用途使用，可以更快捷的获取到网站图标。

### Google 的 API

大小 为16*16 像素

```bash
https://www.google.com/s2/favicons?domain=example.com
// 例： https://www.google.com/s2/favicons?domain=google.com
```

### The Favicon Finder 的 API

大小根据 size 来定

```bash
https://besticon-demo.herokuapp.com/icon?url=example.com&size=80..120..200
// 例： https://besticon-demo.herokuapp.com/icon?url=google.com&size=120
```

更多信息可以去官方的 [Github 文档](https://github.com/mat/besticon/blob/master/Readme.markdown)查看

### getFavicon 的 API

```bash
http://www.getfavicon.org/?url=example.com
```

## 参考与致谢

- **[如何下载网站favicon图标 分享3个方法](https://www.v1tx.com/post/how-to-get-favicon/)**
- **[如何获取不同网站的favicon默认图标](https://www.cnblogs.com/zhangwei595806165/p/4984912.html)**
