---
title: react-component复用逻辑
date: 2022-10-27 10:48:00
tags: [javascript]
---

问题:
```js
  const TooltipWrap = (props) => {
    const { value } = props;
    if (value === 1) {
      return <Tooltip type="type1" />;
    }
    return <Tooltip type="type2" />;
  };
```
上述代码在入参value变化时,Tooltip是否会重新初始化？
  在实际运行中会发现Tooltip只会被初始化一次
  根据react的VirtualDom Diff算法
```js
ReactElement.createElement = function(type, config, children) {
  var propName;
  var props = {};
  var key = null;
  var ref = null;
  var self = null;
  var source = null;
  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }
    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source;

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) &&
          !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  }
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    if (__DEV__) {
      // ...
    }
    props.children = childArray;
  }
  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;
    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }
  if (__DEV__) {
    // ...
  }
  return ReactElement(
    type, // 组件type
    key, // 组件key
    ref,
    self,
    source,
    ReactCurrentOwner.current,
    props
  );
};
```


virtualDom diff算法 针对key和type判断是否能复用组件的逻辑
1. key不同,重新初始化组件
2. key相同,type不同,重新初始化组件
3. key相同,type相同,组件可以复用