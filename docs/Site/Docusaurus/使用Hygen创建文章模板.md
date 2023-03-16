---
id: Docusaurus-使用Hygen创建文章模板
slug: /Docusaurus-使用Hygen创建文章模板
title: 使用 Hygen 创建文章模板
date: 2023/03/16
authors: Shake
last_update:
  date: 2023/03/16
keywords: [docusaurus, hygen]
---

import HighLight from "@site/src/components/HighLight"
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Docusaurus 目前并没有提供这样一种快速新建文章的方法，但 Markdown 需要设置一些前言字段或 import 一些组件，数据重复性的操作，每次写新文章的时候都要手动编写头部字段内容或者复制粘贴我嫌有点麻烦，于是引入了 <HighLight>Hygen</HighLight> 来解决这个问题。

<HighLight>Hygen</HighLight> 是一个简单、快速、可扩展的代码生成器，其用途是帮助开发者自动创建模板文件的工具，旨在提高开发效率。

## Hygen Start

### 安装

<Tabs
defaultValue="npm"
values={[
    {label: 'npm', value: 'npm'},
    {label: 'yarn', value: 'yarn'},
]}>
<TabItem value="npm">

```bash
npm i --save hygen
```

</TabItem>
<TabItem value="yarn">

```bash
yarn global add hygen
```

</TabItem>
</Tabs>

### 初始化

```bash
cd [项目根目录]
hygen init self
```

初始化完成后会在根目录下 生成 **_templates** 的文件夹，模板需要定义在该文件夹下，**generator** 是构建器文件夹（该文件夹不能删），**ejs.t** 文件则是模板文件

![20230316200957](https://shake-picture.oss-cn-guangzhou.aliyuncs.com/Docusaurus/docs/Blog_Building/Docusaurus/20230316200957.png)

**`_templates`** 文件夹下的目录会是 **Hygen 命令中的一部分**，比如我的文件目录为：

```bash
Shake-Blog
├── _templates
│   ├── blog
│   │   └── new
│   │   │   └── hello.ejs.t
│   └── docs
│   │   └── new
│   │   │   └── hello.ejs.t
```


### 创建模板

```bash
hygen generator new [模板名称] # 如blog
```

![20230316201411](https://shake-picture.oss-cn-guangzhou.aliyuncs.com/Docusaurus/docs/Blog_Building/Docusaurus/20230316201411.png)

### 自定义模板

**`<%=  %>`** 可以通过命令传递参数，以及赋值，如文件名、路径、日期等，比如根据我自己的需求所定义的模板

```bash
---
to: blog/<%= path %>/<%= title %>.md
---
---
slug: /<%= path %>-<%= title %>
title: <%= title %>
author: Shake
date: <%= h.getDate() %>
tags: []
keywords: [] 
---

<!-- truncate -->
```

Hygen 提供了一些默认的辅助函数和自定义辅助函数的拓展机制，可以更灵活地使用 Hygen 来生成模板。<br />在模板文件中，辅助函数和自定义函数通过 <HighLight>h</HighLight> 对象来调用，其中 <HighLight>h.getDate()</HighLight> 就是调用了自定义的 <HighLight>getDate</HighLight> 函数来生成一个日期格式的字符串，需要再根目录下创建 **`.hygen.js`** 文件，如下：

```javascript
module.exports = {
  helpers: {
    getDate: () => {
      let d = new Date()
      let year = d.getFullYear();
      let month = d.getMonth() + 1;
      let day = d.getDate();
      return `${year}/${month}/${day}`
    }
  }
}
```

### 使用模板新建文章

```bash
hygen blog new --path demo1/demo2 --title helloword
```
hygen 后面紧接着模板名称，参数（path、title）的顺序无固定要求，执行命令后就可以很方便地根据参数与模板来生成新的 Markdown 文件了

## 参考与致谢

- **[Hygen | Quick Start](https://www.hygen.io/docs/quick-start)**
- **[使用hygen快速创建文章模板](https://yleave.top/docs/%E5%8D%9A%E5%AE%A2%E5%BB%BA%E8%AE%BE/hygen/)**
- **[用hygen代码生成器优化效率](https://mzvast.github.io/posts/2020-06-30-hygen)**
- **[hygen 自动化创建模板文件神器](https://blog.csdn.net/Joe0217/article/details/103098448)**
