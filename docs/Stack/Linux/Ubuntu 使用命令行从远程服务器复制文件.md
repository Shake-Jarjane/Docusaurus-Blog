---
id: Linux-Ubuntu 使用命令行从远程服务器复制文件
slug: /Linux-Ubuntu 使用命令行从远程服务器复制文件
title: Ubuntu 使用命令行从远程服务器复制文件
author: Shake
date: 2023/7/10
last_update: 
  date: 2023/7/10
sidebar_position: 7
keywords: [ubuntu, linux] 
---

import HighLight from "@site/src/components/HighLight"

使用 <HighLight>scp</HighLight> 命令

例如将远程主机的文件复制到本地

```bash
scp remote_name@xxx.xxx.xxx.xxx:path/filename local_path
scp ubuntu@111.111.1.111:/home/temp.txt /doc
```

如果是将本地文件复制到远程主机，将目标数据路径与数据源路径调换即可

## 参考与致谢

- **[Ubuntu从远程服务器复制文件_ubuntu如何垮服务取文件_Tender_Li的博客-CSDN博客](https://blog.csdn.net/Tender_Li/article/details/125757090)**