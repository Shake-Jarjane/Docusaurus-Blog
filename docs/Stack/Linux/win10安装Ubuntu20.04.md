---
id: Linux-win10安装Ubuntu20.04
slug: /Linux-win10安装Ubuntu20.04
title: win10 安装 Ubuntu 20.04
date: 2023/03/23
authors: Shake
sidebar_position: 2
last_update:
  date: 2023/02/23
---

import HighLight from "@site/src/components/HighLight"

:::info 提示
本文是基于双系统的安装方案，需提前准备一个启动盘，参考<HighLight>[如何制作Ubuntu启动盘](/docs/Stack/Linux/如何制作Ubuntu启动盘.md)</HighLight>
:::
:::info 提示
因为我在安装的时候没有进行截图或拍照保存，所以部分图片选用了别人的，可能会有一点点不同，但大体的流程是一样的
:::

## 划分空间

打开磁盘管理
![20230311210520](https://shake-picture.oss-cn-guangzhou.aliyuncs.com/Docusaurus/docs/Stack/Linux/20230311210520.png)

选择一个充足的磁盘空间，右键选择压缩卷<br/>
如果确定预留多少空间的话，可以先选择预留 50GB 的大小，或者参考：

- 只是玩一玩 Linux 系统， 30GB
- 学习 ROS，80GB
- 深度学习、机器学习，100GB
- 软件开发，50GB
![20230311210641](https://shake-picture.oss-cn-guangzhou.aliyuncs.com/Docusaurus/docs/Stack/Linux/20230311210641.png)

压缩完之后会出现一块未分配的空间
![20230311210704](https://shake-picture.oss-cn-guangzhou.aliyuncs.com/Docusaurus/docs/Stack/Linux/20230311210704.png)

## 准备工作

### 关闭快速启动

![20230311210920](https://shake-picture.oss-cn-guangzhou.aliyuncs.com/Docusaurus/docs/Stack/Linux/20230311210920.png)

### 关闭 BitLocker

bitlocker 是微软出品的用于保护硬盘的加密系统，按下 `win+S` 搜索 BitLocker，点击进入后将其关闭，否则它将禁止任何非 windows 的系统或设备对硬盘进行写入操作。

**（这个过程比较耗时，需耐心等待）**

### 关闭安全启动

**不同品牌的电脑的界面不一样，自行根据提示自己的电脑界面进行设置**

- 重启电脑，进入 BIOS 界面（不同牌子的电脑按键不一样，DELL 是 F2）
- 在 boot 界面关闭安全启动（Secure boot）更改为 Disable
- 设置完成后保存设置并退出，等待电脑重新开机

### 进入高级启动

![20230311211144](https://shake-picture.oss-cn-guangzhou.aliyuncs.com/Docusaurus/docs/Stack/Linux/20230311211144.png)

点击**使用设备**，选择**启动盘**，可以根据自己的 U 盘类型判断
![20230311211210](https://shake-picture.oss-cn-guangzhou.aliyuncs.com/Docusaurus/docs/Stack/Linux/20230311211210.png)

![20230311211217](https://shake-picture.oss-cn-guangzhou.aliyuncs.com/Docusaurus/docs/Stack/Linux/20230311211217.png)

如果有其他的错题提示可以文章底部的[参考链接](#其他问题与参考)

## 开始安装

![20230311211230](https://shake-picture.oss-cn-guangzhou.aliyuncs.com/Docusaurus/docs/Stack/Linux/20230311211230.png)

![20230311211235](https://shake-picture.oss-cn-guangzhou.aliyuncs.com/Docusaurus/docs/Stack/Linux/20230311211235.png)

选择中文（简体）
![20230311211259](https://shake-picture.oss-cn-guangzhou.aliyuncs.com/Docusaurus/docs/Stack/Linux/20230311211259.png)

点击安装 Ubuntu
![20230311211310](https://shake-picture.oss-cn-guangzhou.aliyuncs.com/Docusaurus/docs/Stack/Linux/20230311211310.png)

选择键盘布局方式
![20230311211320](https://shake-picture.oss-cn-guangzhou.aliyuncs.com/Docusaurus/docs/Stack/Linux/20230311211320.png)

先不连接 网络，后续还有一些修改源的操作
![20230311211330](https://shake-picture.oss-cn-guangzhou.aliyuncs.com/Docusaurus/docs/Stack/Linux/20230311211330.png)

选择最小安装即可
![20230311211340](https://shake-picture.oss-cn-guangzhou.aliyuncs.com/Docusaurus/docs/Stack/Linux/20230311211340.png)

![20230311211346](https://shake-picture.oss-cn-guangzhou.aliyuncs.com/Docusaurus/docs/Stack/Linux/20230311211346.png)

![20230311211350](https://shake-picture.oss-cn-guangzhou.aliyuncs.com/Docusaurus/docs/Stack/Linux/20230311211350.png)

设置用户名和密码，秘密建议不要设置过长，除非你喜欢频繁的输入密码
![20230311211400](https://shake-picture.oss-cn-guangzhou.aliyuncs.com/Docusaurus/docs/Stack/Linux/20230311211400.png)

![20230311211405](https://shake-picture.oss-cn-guangzhou.aliyuncs.com/Docusaurus/docs/Stack/Linux/20230311211405.png)

![20230311211414](https://shake-picture.oss-cn-guangzhou.aliyuncs.com/Docusaurus/docs/Stack/Linux/20230311211414.png)

安装完毕

## 其他问题与参考

:::info 注意
安装完双系统之后，会出现两个系统的时间不同步的问题，原因是 Windows 和 Ubuntu 在默认情况下看待硬件时间（主板上的BOIS显示的时间）的方式不一样，通过以下命令可解决：

```bash
timedatectl set-local-rtc 1 --adjust-system-clock
```

初次切回 windows 系统的时候可能没生效，再重启一次就正常了
:::

:::info 备注
如果有其他疑难杂症，或者安装过程有部分错误提示，根据提示信息进行操作即可，可以参考以下链接
:::

- **[Ubuntu/Windows双系统安装巨详细——全面解决各种问题（疑难杂症），有手就行](https://blog.csdn.net/NeoZng/article/details/122779035?spm=1001.2014.3001.5506)**
- **[Ubuntu18.04 安装后应该做的事](https://blog.csdn.net/hymanjack/article/details/80285400?spm=1001.2014.3001.5506)**
