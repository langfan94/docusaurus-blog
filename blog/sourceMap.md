---
title: SourceMap原理
date: 2022-11-07 10:44:12
tags: [javascript]
description: SourceMap原理
keywords: [浏览器, SourceMap, 压缩, 混淆]
---

# SourceMap
在正式环境，前端代码一般做了压缩和混淆，debug比较困难，但是如果有sourceMap则更便于查找bug。

## Proposed Format
```json
{
  "version" : 3,
  "file": "out.js",
  "sourceRoot": "",
  "sources": ["foo.js", "bar.js"],
  "sourcesContent": [null, null],
  "names": ["src", "maps", "are", "fun"],
  "mappings": "A,AAAB;;ABCDE;"
}
```

* Line 1: The entire file is a single JSON object
* Line 2: File version (always the first entry in the object) and must be a positive integer.
* Line 3: An optional name of the generated code that this source map is associated with.
* Line 4: An optional source root, useful for relocating source files on a server or removing repeated values in the “sources” entry.  This value is prepended to the individual entries in the “source” field.
* Line 5: A list of original sources used by the “mappings” entry.
* Line 6: An optional list of source content, useful when the “source” can’t be hosted. The contents are listed in the same order as the sources in line 5. “null” may be used if some original sources should be retrieved by name.
* Line 7: A list of symbol names used by the “mappings” entry.
* Line 8: A string with the encoded mapping data.

## The “mappings” data is broken down as follows:
* each group representing a line in the generated file is separated by a ”;”
* each segment is separated by a “,”
* each segment is made up of 1,4 or 5 variable length fields.

mappings 内容表示
";"用来区分构建后的文件中的每一行
","用来区分构建后的文件中的每一个部分
每个部分由1,4,5个可变长度的字段构成

例如："mappings": "AAAAA,BBBBB;CCCCC;"

AAAAA 每一位都是使用`VLQ编码` 从左到右分别表示:

* 第一位，表示这个位置在（转换后的代码的）的第几列。

* 第二位，表示这个位置属于sources属性中的哪一个文件。

* 第三位，表示这个位置属于转换前代码的第几行。

* 第四位，表示这个位置属于转换前代码的第几列。

* 第五位，表示这个位置属于names属性中的哪一个变量。

index.js original

```js
  var name = 'ssss';
  var age = 'test';
  console.log(name, age);
```


index_bundle.js generated

```js
  console.log("ssss","test");
  //# sourceMappingURL=index_bundle.js.map
```


index_bundle.js.map
```json
  {
    "version": 3,
    "file": "index_bundle.js",
    "mappings": "AAGAA,QAAQC,IAHG,OACD",
    "sources": [
      "webpack://webpack-test/./src/index.js"
    ],
    "sourcesContent": [
      "var name = 'ssss';\nvar age = 'test';\n\nconsole.log(name, age);"
    ],
    "names": [
      "console",
      "log"
    ],
    "sourceRoot": ""
  }
```

利用在线网站转换[source-map-visualization](https://sokra.github.io/source-map-visualization/#custom)

"mappings": "AAGAA,QAAQC,IAHG,OACD" 转换成了

`0->4:0`  `8->4:8`  `12->1:11`  `19->2:10`  