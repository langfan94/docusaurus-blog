---
title: promise.all
date: 2022-12-01 16:06:45
tags: [javascript]
---

# 手写Promise.all

1. Promise.all 返回的也是一个promise
2. Promise.all 其中有一个error，则直接返回reject
3. Promise.all 是并发执行的
4. Promise.then(value)
  * 如果value是promise， 则返回promise
  * 如果value是thenable，则在then()函数中，value准备好后，回掉两个callback
  * 否则，使用一个fulfilled状态的value作为promise返回

```js
function PromiseAll(arr) {
  return new Promise((resolve, reject) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      Promise.resolve(arr[i])
        .then(res => {
          result.push(res);
          if (i === arr.length - 1) {
            return resolve(result);
          }
        }).catch(err => reject(err))
    }
  });
};

function promise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('p1');
    }, 1000);
  });
}

function promise2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('p2');
    }, 1000);
  });
}

const p1 = promise();
const p2 = promise2();
const test = [1, p1, p2];
PromiseAll(test).then(res => console.log('res', res)).catch(err => console.log('kkk', err));
```

参考链接：

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve)

[面试官让我手写Promise.all](https://juejin.cn/post/7006200103157383175)