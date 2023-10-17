---
id: Linux-Ubuntu 使用命令行挂载、弹出U盘
slug: /Linux-Ubuntu 使用命令行挂载、弹出U盘
title: Ubuntu 使用命令行挂载、弹出U盘
date: 2023/8/28
last_update: 
  date: 2023/8/28
sidebar_position: 12
keywords: [ubuntu, linux] 
---

## 挂载

```bash
sudo fdisk -l
```

![20231017221503](https://shake-picture.oss-cn-guangzhou.aliyuncs.com/Docusaurus/docs/Stack/Linux/20231017221503.png)
从输出信息可知 U 盘的路径为：**/dev/sda1**，类型为：**exFAT**

挂载 U 盘至 /media 目录下

```bash
sudo mount -t vfat /dev/sda1 /media/
```

![20231017221558](https://shake-picture.oss-cn-guangzhou.aliyuncs.com/Docusaurus/docs/Stack/Linux/20231017221558.png)

进入挂载 U 盘的主目录，即可查看 U 盘文件

```bash
cd /media
ls
```

## 弹出

```bash
#  卸载，并提示信息
sudo umount  -v /dev/sda1
# 弹出
sudo eject -s /dev/sda1
```

![20231017221650](https://shake-picture.oss-cn-guangzhou.aliyuncs.com/Docusaurus/docs/Stack/Linux/20231017221650.png)

## 参考与致谢

- **[ubuntu（linux）命令行模式下如何挂载U盘](https://blog.csdn.net/zsgcsdn/article/details/78909672?spm=1001.2014.3001.5506)**
