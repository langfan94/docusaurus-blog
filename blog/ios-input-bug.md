---
title: ios-input-bug
date: 2018-11-28 10:43:04
tags: [ios, bug]
description: ios下fixed失效的原因
keywords: [fixed失效, 软键盘]
---

# ios下fixed失效的原因

> 　软键盘唤起后，页面的 fixed 元素将失效（ios认为用户更希望的是元素随着滚动而移动，也就是变成了 absolute 定位），既然变成了absolute，所以当页面超过一屏且滚动时，失效的 fixed 元素就会跟随滚动了。
> 不仅限于 type=text 的输入框，凡是软键盘（比如时间日期选择、select 选择等等）被唤起，都会遇到同样地问题。

  ## 如何解决

  1. 既然会变成absolute，索性直接使用absolute算了。
  2. 不让页面滚动，而是让主体部分自己滚动




# ios下软键盘预测输入未完成之前点击完成,收起软键盘,软键盘隐藏之后,再次点击input框,点击事件触发,但是软键盘不再弹出问题....

  ## 如何解决

  这个问题暂时没有找到解决方案 