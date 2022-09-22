---
nav:
  path: /components
---

## Demo

[更多技巧](https://d.umijs.org/guide/demo-principle)

<code
src='./demo/A/index.tsx'
title='demo'
desc='测试demo'>
</code>

## API

| 参数  | 说明     | 类型                      | 默认值 |
| ----- | -------- | ------------------------- | ------ |
| key   | 字段     | `string`                  | -      |
| value | 值       | `ReactNode`               | -      |
| list  | 列表配置 | [listProps](#listprops)[] | -      |

## listProps

| 参数  | 说明               | 类型                | 默认值 |
| ----- | ------------------ | ------------------- | ------ |
| key   | 字段               | `string`            | -      |
| type  | 类型               | `input` \| `select` | input  |
| style | 定义容器类名的样式 | `CSSProperties`     | -      |
