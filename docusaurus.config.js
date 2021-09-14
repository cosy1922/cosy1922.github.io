/* eslint-disable @typescript-eslint/no-var-requires */
const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Delbert의 블로그',
  tagline: '"배워서 남주자"',
  url: 'https://cosy1922.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'cosy1922', // <GITHUB_USERNAME>
  projectName: 'cosy1922.github.io', // <GITHUB_USERNAME>.github.io
  themeConfig: {
    hideableSidebar: true,
    navbar: {
      hideOnScroll: true,
      title: 'Delbert의 블로그',
      logo: {
        alt: 'Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          label: 'About',
          to: '/about',
          position: 'left',
        },
        {
          label: 'Portpolio',
          to: '/portpolio',
          position: 'left',
        },
        {
          label: 'Document',
          type: 'doc',
          docId: 'index',
          position: 'left',
        },
        {
          to: '/blog',
          label: 'Blog',
          position: 'left',
        },
        // {
        //   type: 'localeDropdown',
        //   position: 'right',
        // },
        {
          href: 'https://github.com/cosy1922',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub',
        },
      ],
    },
    footer: {
      style: 'dark',
      // links: [
      //   {
      //     title: 'More',
      //     items: [
      //       {
      //         label: 'GitHub',
      //         href: 'https://github.com/cosy1922',
      //       },
      //       {
      //         label: 'LinkedIn',
      //         href: 'https://www.linkedin.com/in/cosy1922/',
      //       },
      //       {
      //         label: 'HackerRank',
      //         href: 'https://www.hackerrank.com/cosy1922',
      //       },
      //       {
      //         label: 'Credly',
      //         href: 'https://www.credly.com/users/hyeonsoo-lee/badges',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'Contact',
      //     items: [
      //       {
      //         label: 'Email',
      //         href: 'mailto:hyeonsoo.david.lee@gmail.com',
      //       },
      //     ],
      //   },
      // ],
      // logo: {
      //   alt: 'Facebook Open Source Logo',
      //   src: 'img/oss_logo.png',
      //   href: 'https://opensource.facebook.com',
      // },
      copyright: `Copyright © ${new Date().getFullYear()} Delbert Jo. Powered by Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: [require.resolve('./src/css/custom.css')],
        },
      },
    ],
  ],
  stylesheets: ['https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'],
}
