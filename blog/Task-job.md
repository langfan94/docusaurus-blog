---
title: Task-job
date: 2022-06-23 15:19:31
tags: [javascript]
description: 什么是事件循环
keywords: [事件循环, 任务队列, 宏任务, 微任务]
---

```js
  一个task(宏任务) -- 队列中全部job(微任务) -- requestAnimationFrame -- 浏览器重排/重绘 -- requestIdleCallback
```

## setTimeout
如果运行死循环函数调用setTimeout会阻塞页面运行吗？

```js
  function loop() {
    setTimeout(loop, 0);
  }

  loop();
```

答案是不会阻塞页面正常运行，因为主线程会不断创建宏任务放进宏任务队列里面，而主线程都只会执行一个宏任务，然后进入下一次循环



## requestAnimationFrame

```js
  button.addEventListener('click', () => {
    box.style.display = 'none';
    box.style.display = 'block';
    box.style.display = 'none';
    box.style.display = 'block';
    box.style.display = 'none';
    box.style.display = 'block';
    box.style.display = 'none';
  });
```
主线程会执行修改box的样式，但是渲染的时候只有最后 box.style.display = 'none' 会生效



```js
  button.addEventListener('click', () => {
    box.style.transform = 'translateX(1000px)';
    box.style.transition = 'transform 1s ease-in-out';
    box.style.transform = 'translateX(500px)';
  })
```
浏览器渲染时会忽略初始值 translateX(1000px)，动画会从0-500px执行过渡动画。


```js
  button.addEventListener('click', () => {
    box.style.transform = 'translateX(1000px)';
    box.style.transition = 'transform 1s ease-in-out';

    requestAnimationFrame(() => {
      box.style.transform = 'translateX(500px)';
    });
  })
```
因为requestAnimationFrame会在浏览器渲染之前执行，所以动画还是会从0-500px 执行

```js
  button.addEventListener('click', () => {
    box.style.transform = 'translateX(1000px)';
    box.style.transition = 'transform 1s ease-in-out';

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        box.style.transform = 'translateX(500px)';
      })
    });
  })
```
只有在第二帧修改translate,动画才会从 1000px-500px执行


## Animation callbacks
Animation callbacks队列会一次性执行完成，执行过程中新增的任务会放到下一帧去执行。



## microtasks
```js
  for (let i=0; i < 100; i++) {
    const span = document.createElement('span');
    document.body.appendChild(span);
    span.textContent = 'Hello';
  }
```
document.body.appendChild(span); 会向微任务队列提供100条消息
span.textContent = 'Hello'; 会向微任务队列提供100条消息
所以一共会有200条微任务被添加

微任务执行过程会不断运行，直到所有微任务清空。
如果微任务执行过程中，不断新增微任务，会不断执行微任务，直到清空微任务队列，会阻塞后面线程任务。


## promise
```js
  button.addEventListener('click', () => {
    Promise.resolve().then(() => console.log('Microtask 1'));
    console.log('Listener 1');
  });

  button.addEventListener('click', () => {
    Promise.resolve().then(() => console.log('Microtask 2'));
    console.log('Listener 2');
  });
```
在页面上点击后 打印顺序是
Listener 1 => Microtask 1 => Listener 2 => Microtask 2

第一次 js stack 放入 Listener 1 执行输出 Listener 1 然后执行微任务 Microtask 1
第二次 js stack 放入 Listener 2 执行输出 Listener 2 然后执行微任务 Microtask 2

```js
  button.addEventListener('click', () => {
    Promise.resolve().then(() => console.log('Microtask 1'));
    console.log('Listener 1');
  });

  button.addEventListener('click', () => {
    Promise.resolve().then(() => console.log('Microtask 2'));
    console.log('Listener 2');
  });

  button.click();
```
用js执行点击
在页面上点击后 打印顺序是
Listener 1 => Listener 2 => Microtask 1 => Microtask 2

这里会同步派发button的点击事件执行Listener 1 => Listener 2,接下来才会执行微任务


参考视频链接：[Jake Archibald: 在循环 - JSConf.Asia](https://www.youtube.com/watch?v=cCOL7MC4Pl0)