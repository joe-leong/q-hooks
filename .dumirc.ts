import { defineConfig } from 'dumi';
export default defineConfig({
  title: 'q-hooks',
  favicons: ['/q-hooks/logo.png'],
  logo: '/q-hooks/logo.png',
  base: '/q-hooks/',
  publicPath: '/q-hooks/',
  history: {
    type: 'browser',
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
        link: '/hooks/use-mount',
      },
    ],
    socialLinks: {
      github: 'https://github.com/joe-leong/q-hooks',
    },
    footer: `Copyright (c) © ${new Date().getFullYear()} by joe, All Rights Reserved`,
  },
  resolve: {
    docDirs: ['docs'],
    atomDirs: [{ type: 'hook', dir: 'packages/hooks/src' }],
  },
  alias: {
    qHooks: process.cwd() + '/packages/hooks/src/index.ts',
    ['q-hooks']: process.cwd() + '/packages/hooks/src/index.ts',
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
