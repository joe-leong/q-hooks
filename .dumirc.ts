import { defineConfig } from 'dumi';
export default defineConfig({
  title: 'q-hooks',
  favicons: ['/q-hooks/logo.png'],
  logo: '/q-hooks/logo.png',
  publicPath: '/q-hooks/',
  history: {
    type: 'hash',
  },
  links: [
    {
      rel: 'stylesheet',
      href: 'https://unpkg.com/@alifd/theme-design-pro@0.6.2/dist/next-noreset.min.css',
    },
    { rel: 'stylesheet', href: '/q-hooks/style.css' },
  ],
  themeConfig: {
    name: 'q-hooks',
    prefersColor: { default: 'auto' },
    nav: [
      {
        title: '指南',
        link: '/guide',
      },
      {
        title: 'Hooks',
        link: '/hooks/use-toggle',
      },
    ],
    sidebar: {
      '/hooks': [
        {
          title: '状态',
          children: [{ title: 'useToggle', link: '/hooks/use-toggle' }],
        },
      ],
    },
    footer: `Copyright (c) © ${new Date().getFullYear()} by joe, All Rights Reserved`,
  },
  resolve: {
    docDirs: ['docs'],
    atomDirs: [{ type: 'hooks', dir: 'packages/hooks/src' }],
  },
  alias: {
    qHooks: process.cwd() + '/packages/hooks/src/index.ts',
  },
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: '@alifd/next',
        style: false,
      },
      'fusion',
    ],
  ],
});
