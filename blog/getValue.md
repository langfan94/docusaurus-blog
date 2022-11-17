---
title: js面试题 读取target[0].a
date: 2022-05-18 16:51:59
tags: [javascript]
description: js面试题 读取target[0].a
keywords: [面试题, 正则匹配]
---

## 题目
const obj = {
  obj: { name: 123 },
  target: [{a: 111}],
};

使用字符串 'obj.target[0].a' 读取value


## 分析
题目的关键点是考察从字符串中读取关键词
可以使用正则匹配实现

```js
const str = 'target[0].a';
const arr = str.split('.');
let params = [];
for (let i=0; i< arr.length; i++) {
  const arrMatch = arr[i].match(/\[\d+\]/);
  if (!!arrMatch) {
    const numStr = arrMatch[0];
    const index = arrMatch.index;
    params.push(arrMatch.input.slice(0, index));
    params.push(numStr.match(/\d+/)[0]);
  } else {
    params.push(arr[i]);
  }
}

console.log(params);
```