---
title: ios-video-bug
date: 2022-05-18 16:52:59
tags: [ios, bug]
description: IOS 上1080p 高清视频无法播放
keywords: [高清视频无法播放, 编码解码]
---

问题：IOS 上1080p 高清视频无法播放

原因：转码码率太高 系统对手机内存调用有限制

解决办法：
  * 使用云服务的编码解码
  * 压缩并限制视频文件大小 