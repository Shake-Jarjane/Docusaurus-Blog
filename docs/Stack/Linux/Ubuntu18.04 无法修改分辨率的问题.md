---
id: Linux-Ubuntu 18.04 无法修改分辨率的问题
slug: /Linux-Ubuntu 18.04 无法修改分辨率的问题
title: Ubuntu 18.04 无法修改频率分辨率的问题
author: Shake
date: 2023/5/15
last_update: 
  date: 2023/5/15
sidebar_position: 4
keywords: [ubuntu, linux] 
---

> 如果在系统设置中无法进行屏幕分辨率的修改（即分辨率只有一个选项，我的情况是 640*480，显得及其老人机）
> 出现这种情况的话，有可能是没安装显卡驱动，安装完成之后，应该就有了，就可以忽略以下步骤

执行如下命令

```bash
sudo gedit /etc/default/grub
```

对文件进行修改，注释放开，根据自己的显示屏分辨率进行修改

![20231015233438](https://shake-picture.oss-cn-guangzhou.aliyuncs.com/Docusaurus/docs/Stack/Linux/20231015233438.png)

更新 grub 文件

```bash
sudo update-grub
```

然后重启即可
