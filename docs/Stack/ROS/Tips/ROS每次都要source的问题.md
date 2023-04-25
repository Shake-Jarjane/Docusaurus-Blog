---
id: Tips-ROS每次都要source的问题
slug: /Tips-ROS每次都要source的问题
title: ROS 每次都要 source 的问题
author: Shake
date: 2023/4/16
last_update: 
  date: 2023/4/16
sidebar_position: 1
keywords:
  - ROS
---

<!-- truncate -->

配置工作空间时，`source devel/setup.bash` 命令用于刷新环境，虽然敲习惯了，也就一两秒的事情，但是我个人有点懒，所以将这个命令添加到了`.bashrc` 文件中，让系统自动刷新工作空间环境，执行如下命令：

```bash
echo “source ~/xxx/devel/setup.bash” >> ~/.bashrc
```

意思是把 **source ~/xxx/devel/setup.bash** 添加到 **~/.bashrc** 脚本的最后面

打开 .bashrc 文件查看是否添加成功

```bash
gedit ~/.bashrc
```

修改玩之后 source 一下 .bashrc 文件，否则不会生效

```bash
source ~/.bashrc
```

## 参考与致谢

- **[解决ROS工作空间每次使用都要source的问题](https://blog.csdn.net/weixin_42508641/article/details/123696379)**
