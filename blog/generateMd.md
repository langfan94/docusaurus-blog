---
title: generate markdown 
date: 2022-09-28 16:39:22
tags: [javascript]
description: node generate markdown
keywords: [node, markdown]
---

# node generate markdown

template.md
```md
---
title: Title
date: 2018-06-06 11:32:22
tags: []
---

# Title
```

```js
#!/usr/bin/env node
const { program } = require('commander');
const fs = require('node:fs/promises');
const matter = require('gray-matter');
const moment = require('moment');
const { stringify } = require("yaml");

async function createFile() {
  const filename = 'file.md';
  let fh = await fs.open(filename, 'a');
  const { data: frontMatter, content } = matter.read('./template.md');
  const now = moment().format("YYYY-MM-DD HH:mm:ss");
  frontMatter.date = now;
  const newContent = `---\n${stringify(frontMatter)}---\n${content}`;
  fh.write(newContent);
  await fh.close();
}

program
  .option('--first')
  .action((commandAndOptions) => {
    createFile();
    if (commandAndOptions.debug) {
      console.error(`Called ${commandAndOptions.name()}`);
    };
  });

program.parse();

const options = program.opts();
const limit = options.first ? 1 : undefined;
```

[参考链接](https://www.anycodings.com/questions/nodejs-how-to-readwrite-a-markdown-file-changing-its-front-matter-metadata)