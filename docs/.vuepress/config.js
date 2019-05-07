module.exports = {
  title: 'Netlify CMS + VuePress',
  description: 'Netlify + VuePress',
  themeConfig: {
    docsDir: 'docs',
    repo: 'userabuser/vbc',
    sidebar: [
      '/',
      '/welcome',
      '/test'
    ],
    nav: [
      {
        text: 'Admin',
        link: '/admin/index.html',
      }
    ]
  }
}