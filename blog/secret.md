---
title: 加密
date: 2022-08-22 17:05:26
tags: [加密]
---

# 加密
> 数据加密 的基本过程，就是对原来为 明文 的文件或数据按 某种算法 进行处理，使其成为 不可读 的一段代码，通常称为 “密文”。通过这样的途径，来达到 保护数据 不被 非法人窃取、阅读的目的。

## 对称加密和非对称加密
对称加密: DES、3DES、AES
非对称加密: RSA、DSA
散列算法: SHA-1、MD5

## MAC和HMAC的区别
1. HMAC技术可是说是MAC技术的一种，HMAC使用两轮散列而MAC只使用一轮散列
2. HMAC比MAC更安全。 使用哈希函数，更改消息（不知密钥）并获得另一个有效的MAC相对容易，我们称此为长度扩展攻击。 但没有针对当前HMAC规范的已知扩展攻击

## AES/DES/3DES算法
AES、DES、3DES 都是 对称 的 块加密算法，加解密 的过程是 可逆的。常用的有 AES128、AES192、AES256 

## RSA算法
RSA 加密算法是目前最有影响力的 公钥加密算法，并且被普遍认为是目前 最优秀的公钥方案 之一。RSA 是第一个能同时用于 加密 和 数字签名 的算法，它能够 抵抗 到目前为止已知的 所有密码攻击，已被 ISO 推荐为公钥数据加密标准。

## RSA加密原理

使用M和C分别表示明文和密文，则RSA加密、解密过程如下：

$C = M^e mod \, n$

$M = C^e mod \, n$

由于公钥公开，即e、n公开。

　　因此破解RSA私钥，即为已知e、n情况下求d。

　　因ed mod (p-1)(q-1) = 1，且n=pq，因此该问题演变为：对n质因数分解求p、q。

　　目前已被证明，已知e、n求d和对n质因数分解求p、q两者是等价的。实际中n长度为2048位以上，而当n>200位时分解n是非常困难的，因此RSA算法目前仍被认为是安全实用的。