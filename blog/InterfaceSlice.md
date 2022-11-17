---
title: golang函数可变数量参数传参
date: 2022-08-04 17:15:26
tags: [golang]
description: golang函数可变数量参数传参
keywords: [可变数量参数传参, 函数]
---

# 函数可变数量参数传参
> 开发过程中发现 fun(opts...) 的用法，于是学习函数可变数量参数传参

```golang
package main

import (
	"fmt"
)

type Foo struct {
	Number int
	Text   string
	Name   string
}

func print(list ...int) {
	for index, a := range list {
		fmt.Printf("%d: %v \n", index, a)  // print 0:1  1:3  2:4
	}
}

func main() {
	arr := []int{1, 3, 4}
	print(arr...)
}
```
如果是复杂的多种类型入参

涉及知识点
1. 数组对象类型定义
2. interface用法
3. []interface{} 和 []T{}类型的区别

> notices: a variable with type []interface{} is not an interface!
> 注意: 变量类型[]interface{} 不是 一个interface

```go
package main

import (
	"fmt"
)

type Foo struct {
	Number int
	Text   string
	Name   string
}

func print(list ...interface{}) {
	for index, a := range list {
		fmt.Printf("%d: %v \n", index, a)
	}
}

func main() {
	arr := []Foo{{Number: 1, Text: "pie"}, {Name: "ssss", Number: 15, Text: "fish"}, {Number: 30, Text: "orange"}}
	print(arr...)  // compiler error: cannot use arr (variable of type []Foo) as []interface{} 
}
```
[]Foo 并不能当成[]interface{}类型, 原因是[]Foo长度不固定 []interface{}编译时并不知道参数数量

[参考文章1](https://github.com/golang/go/wiki/InterfaceSlice)

[参考文章2](https://github.com/guyan0319/golang_development_notes/blob/master/zh/9.1.md)

修改后
```go
package main

import (
	"fmt"
)

type Foo struct {
	Number int
	Text   string
	Name   string
}

func print(list ...interface{}) {
	for index, a := range list {
		fmt.Printf("%d: %v \n", index, a)
	}
}

func main() {
	arr := []Foo{{Number: 1, Text: "pie"}, {Name: "ssss", Number: 15, Text: "fish"}, {Number: 30, Text: "orange"}}
	var interfaceSlice []interface{} = make([]interface{}, len(arr)) // 增加[]interface{}类型变量，并确定长度
	for i, d := range arr {
		interfaceSlice[i] = d
	}
	print(interfaceSlice...)
}
```