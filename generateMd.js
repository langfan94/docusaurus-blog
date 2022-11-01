#!/usr/bin/env node
const path = require('path');
const { program } = require('commander');
const fs = require('node:fs/promises');
const matter = require('gray-matter');
const moment = require('moment');
const { stringify } = require("yaml");

async function fileIsExist(fileName) {
  try {
    const res = await fs.access(fileName, fs.constants.F_OK);
    return true;
  } catch (error) {
    return false;
  }
}

async function createFile(fileName) {
  const blogPath = path.resolve(__dirname, 'blog');
  const filename = `${blogPath}/${fileName}.md`;
  try {
    const isExist = await fileIsExist(filename);
    if (isExist) {
      // 文件存在 先删除原文件
      await fs.unlink(filename);
    }
    let fh = await fs.open(filename, 'a');
    const { data: frontMatter, content } = matter.read('./template.md');
    const now = moment().format("YYYY-MM-DD HH:mm:ss");
    frontMatter.date = now;
    const newContent = `---\n${stringify(frontMatter)}---\n${content}`;
    await fh.write(newContent);
    await fh.close();
  } catch (error) {
    console.error(error);
  }
}

program
  .option('-cr, --create <fileName>')
  .action((commandAndOptions) => {
    if (!commandAndOptions.create) {
      console.error(`created fileName isRequired`);
    }
    createFile(commandAndOptions.create);
    if (commandAndOptions.debug) {
      console.error(`Called ${commandAndOptions.name()}`);
    };
  });

program.parse();

const options = program.opts();
const limit = options.first ? 1 : undefined;
