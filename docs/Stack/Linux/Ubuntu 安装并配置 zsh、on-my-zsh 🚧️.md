---
id: Linux-Ubuntu 安装并配置 zsh、on-my-zsh 🚧️
slug: /Linux-Ubuntu 安装并配置 zsh、on-my-zsh 🚧️
title: Ubuntu 安装并配置 zsh、on-my-zsh 🚧️
date: 2023/8/28
last_update: 
  date: 2023/8/28
sidebar_position: 9
keywords: [ubuntu, linux] 
---

## 安装 zsh

```bash
sudo apt install zsh
```

## 安装 onmyzsh

二选一即可

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

```bash
sh -c "$(wget https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)"
```

## 更改配置

查看当前默认终端

```bash
echo $SHELL
```

## 参考与致谢
