---
id: Linux-如何制作Ubuntu启动盘
slug: /Linux-如何制作Ubuntu启动盘
title: 如何制作 Ubuntu 启动盘
date: 2023/03/23
authors: Shake
sidebar_position: 1
last_update:
  date: 2023/02/23
---

**提前准备**

- 一个 8g 以上的 U 盘（不是空的也行，因为安装西东的时候会格式化，如有需要自行备份资料）

## 安装 UltraISO

**[下载链接](https://pan.baidu.com/s/1-8PChYpjEOZ0CMoBtOHPBw)**，提取码：**5xx5**<br/>

- 根据自己需求一路傻瓜式安装即可
- 安装完毕后输入下载文件夹里的**注册码**即可正常使用

## 下载 Ubuntu 镜像文件

这里以 18.04 版本为例，建议选择 **LTS(long-term support)**版本

- 前往[官网](http://releases.ubuntu.com/)下载
- 如果官网下载太慢的话可以用**国内镜像**进行下载
  
  - [阿里云](http://mirrors.aliyun.com/)
  - [清华](https://mirror.tuna.tsinghua.edu.cn/)
  - [中国科技大学](http://mirrors.ustc.edu.cn/)

## 制作系统启动盘

打开 UltraISO，插入 U 盘

选择刚才下载的镜像文件
![20230311190136](https://shake-picture.oss-cn-guangzhou.aliyuncs.com/Docusaurus/docs/Stack/Linux/20230311190136.png)

写入硬盘映像，注意不要选错成写入软盘映像
![20230311190218](https://shake-picture.oss-cn-guangzhou.aliyuncs.com/Docusaurus/docs/Stack/Linux/20230311190218.png)

提示框显示 自己的 U 盘之后点击写入即可，若没有显示 U 盘，关闭窗口再打开或者拔插 U 盘
![20230311190228](https://shake-picture.oss-cn-guangzhou.aliyuncs.com/Docusaurus/docs/Stack/Linux/20230311190228.png)

等待写入完毕，制作完成
