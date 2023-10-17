---
id: Linux-Ubuntu 安装 glog 与 gflag
slug: /Linux-Ubuntu 安装 glog 与 gflag
title: Ubuntu 安装 glog 与 gflag
author: Shake
date: 2023/6/5
last_update: 
  date: 2023/6/5
sidebar_position: 5
keywords: [ubuntu, linux, peek, glog, gflag] 
---


在编译工程的时候发现编译失败，提示的内容忘记截图保存了，大致就是说缺少某些依赖而造成函数未定义，上网搜索了一下是缺少了 **glog** 与 **gflag**

## 安装

### 包管理器安装（已测试且推荐）

```bash
sudo apt-get install libgoogle-glog-dev libgflags-dev
```

如果是卸载，执行如下命令

```bash
sudo apt-get purge libgoogle-glog-dev libgflags-dev
```

### 源码安装（未测试）

> TODO

## 参考与致谢

- **[glog+gflag的安装](https://www.cnblogs.com/chrislzy/p/14928315.html)**