import { defineConfig } from 'dumi';

// more config: https://d.umijs.org/config
const repo = 'melons';

export default defineConfig({
  title: repo,
  logo:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  locales: [
    ['zh-CN', '中文'],
    ['en-US', 'English'],
  ],
  mode: 'site',
  menus: {
    '/components': [
      {
        title: '组件',
        path: '/components',
        children: ['Aoo/index.md', 'Button/index.md'],
      },
    ],
    '/en-US/components': [
      {
        title: '组件',
        path: '/components',
        children: ['Aoo/index.md', 'Button/index.md'],
      },
    ],
  },
  navs: [
    null, // null 值代表保留约定式生成的导航，只做增量配置
    {
      title: 'GitHub',
      path: 'https://github.com/xg-jxk/melons',
    },
  ],
  hash: true,
  outputPath: 'docs-dist',
  // Because of using GitHub Pages
  base: `/${repo}/`,
  publicPath: `/${repo}/`,
});
