---
date: 2023-02-23 16:13:05
tags: [antd design, async-validator, javascript]
---

# antd design Form表单如何校验数组

```js
const config = {
  label: '',
  fields: 'datas',
  Component: <Component />,
  rules: [
    {
      required: true,
      message: '请选择数据',
    }
  ],
  initialValue: [],
}
```

这种情况下type默认是string不会校验数组，应该改成
```js
const config = {
  label: '',
  fields: 'datas',
  Component: <Component />,
  rules: [
    {
      type: 'array',
      required: true,
      message: props.t('请选择成员'),
      transform(value) {
        if (value) {
          return JSON.parse(value);
        }

        return value;
      }
    }
  ],
  initialValue: [],
}
```

type: 'array'
transform 则是校验之前转换成数组再进行校验