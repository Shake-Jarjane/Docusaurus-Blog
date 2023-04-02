---
id: Linux-Ubuntu录制GIF
slug: /Linux-Ubuntu录制GIF
title: Ubuntu 录制 GIF
author: Shake
date: 2023/3/17
last_update: 
  date: 2023/3/17
sidebar_position: 3
keywords: [ubuntu, linux, peek] 
---

import HighLight from "@site/src/components/HighLight"

这里推荐一款 Ubuntu 里简单好用的 GIF 录制软件：<HighLight>Peek</HighLight><br/>
如果是 win 系统，推荐使用<HighLight>ScreenToGif</HighLight>，参考[这篇文章](docs/tools/win系统录制GIF.md)

**获取 Peek app 源**

```bash
sudo add-apt-repository ppa:peek-developers/stable
```

**更新源**

```bash
sudo apt-get update
```

**安装 Peek**

```bash
sudo apt-get install peek
```

使用方式很简单，打开 Peek，可以设置保存文件格式，调整窗口区域及大小即可点击左上角开始录制，或者在首选项里自定义快捷键

![20230317224615](https://shake-picture.oss-cn-guangzhou.aliyuncs.com/Docusaurus/docs/Stack/Linux20230317224615.png)

### 参考与致谢

- **[Ubuntu下的录GIF神器——Peek](https://zhuanlan.zhihu.com/p/74926901)**
