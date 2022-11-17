---
title: git-reset
date: 2018-05-10 11:54:29
tags: [git]
description: git-reset用法
keywords: [快照, git-reset]
---

# git reset
## 三棵树
> Git 作为一个系统，是以它的一般操作来管理并操纵这三棵树的:

| 树                | 用途                                 |
| ----------------- | ------------------------------------ |
| HEAD              | 上一次提交的快照，下一次提交的父结点 |
| Index             | 预期的下一次提交的快照               |
| Working Directory | 沙盒                                 |

## HEAD
> HEAD 是当前分支引用的指针，它总是指向该分支上的最后一次提交。 这表示 HEAD 将是下一次提交的父结点。 通常，理解 HEAD 的最简方式，就是将它看做 你的上一次提交 的快照。

## 索引
> 索引是你的 预期的下一次提交。 我们也会将这个概念引用为 Git 的 “暂存区域”，这就是当你运行 git commit 时 Git 看起来的样子。

## 工作目录
> 最后，你就有了自己的工作目录。 另外两棵树以一种高效但并不直观的方式，将它们的内容存储在 .git 文件夹中。 工作目录会将它们解包为实际的文件以便编辑。 你可以把工作目录当做 沙盒。在你将修改提交到暂存区并记录到历史之前，可以随意更改。

### reset 命令会以特定的顺序重写这三棵树，在你指定以下选项时停止：
1. 移动 HEAD 分支的指向 （若指定了 --soft，则到此停止）

    ![reset 做的第一件事是移动 HEAD 的指向。](https://git-scm.com/book/en/v2/images/reset-soft.png)
2. 使索引看起来像 HEAD （若未指定 --hard，则到此停止）

    ![所以它本质上只是将 file.txt 从 HEAD 复制到索引中。](https://git-scm.com/book/en/v2/images/reset-mixed.png)
3. 使工作目录看起来像索引
    ![reset 要做的的第三件事情就是让工作目录看起来像索引。 如果使用 --hard 选项，它将会继续这一步。](https://git-scm.com/book/en/v2/images/reset-hard.png)