---
id: Tips-roslaunch时功能包与launch文件重名的问题
slug: /Tips-roslaunch时功能包与 aunch文件重名的问题
title: roslaunch 时功能包与 launch 文件重名的问题
author: Shake
date: 2023/4/16
last_update: 
  date: 2023/4/16
sidebar_position: 2
keywords:
  - ROS
---


![20230420140932](https://shake-picture.oss-cn-guangzhou.aliyuncs.com/Docusaurus/docs/Stack/ROS20230420140932.png)

如题，它提示  **multiple files named... Please specify full path instead**

原因很简单，就是我复制了一个功能包并粘贴到另一个工作空间导致的

可以直接删除多余的文件，也可以根据提示输入完整的路径来运行 launch 文件，如：

```xml
roslaunch ~/ros/shenlan/hw_02/src/grid_path_searcher/launch/demo.launch
```
