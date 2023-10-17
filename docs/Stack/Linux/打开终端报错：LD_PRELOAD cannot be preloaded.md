---
id: Linux-打开终端报错：LD_PRELOAD cannot be preloaded
slug: /Linux-打开终端报错：LD_PRELOAD cannot be preloaded
title: 打开终端报错：LD_PRELOAD cannot be preloaded
date: 2023/8/28
last_update: 
  date: 2023/8/28
sidebar_position: 8
keywords: [ubuntu, linux] 
---

啥也没干，右键打开终端的时候突然报错：...LD_PRELOAD cannot be preloaded...，具体信息如下：

![20231015235951](https://shake-picture.oss-cn-guangzhou.aliyuncs.com/Docusaurus/docs/Stack/Linux/20231015235951.png)

去网上搜了一下，有位网友说是钉钉更新后没装好搞得鬼，确实最近更新了钉钉，那就说得通了，执行命令

```bash
locate envlib.so
```

![20231016000216](https://shake-picture.oss-cn-guangzhou.aliyuncs.com/Docusaurus/docs/Stack/Linux/20231016000216.png)

重装钉钉，然后 reboot 就行了

## 参考与致谢

- **[LD_PRELOAD cannot be preloaded - xle97](https://www.cnblogs.com/xle97/p/17491173.html)**
