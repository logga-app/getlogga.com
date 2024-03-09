import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/blog',
  sitemap: {
    hostname: 'https://getlogga.com/blog',
  },
  rewrites: {
    'articles/(.*)': 'blog/articles/(.*)',
  },
  cleanUrls: true,
  transformHead: ({ pageData }) => {
    const head = []
    head.push(['meta', { property: 'og:title', content: pageData.frontmatter.title }])
    head.push(['meta', { property: 'og:description', content: pageData.frontmatter.description }])
    head.push(['meta', { property: 'description', content: pageData.frontmatter.description }])
    return head
  },
  head: [
    ['link', { rel: 'icon', href: '/assets/favicon.ico' }],
    ['meta', { property: 'og:image', content: 'https://getlogga.com/blog_pages/assets/logo.png' }],
    ['meta', { property: 'og:image:secure_url', content: 'https://getlogga.com/blog_pages/assets/logo.png' }],
    ['meta', { property: 'og:image:alt', content: 'logga' }],
    ['meta', { property: 'og:image:width', content: '256' }],
    ['meta', { property: 'og:image:height', content: '256' }],
    ['meta', { property: 'twitter:card', content: 'summary' }],
    ['link', { rel: 'canonical', href: 'https://getlogga.com/blog' }],
    ['meta', { name: 'keywords', content: 'audit log, access log, macOS, system extension, security blog, log forwarding, mac audit log, macos audit logs' }],
    ['meta', { name: 'author', content: 'Peter Hasko-Nagy' }],
    ['meta', { name: 'robots', content: 'index, archive, follow' }],
    ['meta', { name: 'googlebot', content: 'index, follow' }],
    ['meta', { property: 'og:site_name', content: 'logga' }],
    ['meta', { name: 'twitter:site', content: '@getlogga' }],
    ['meta', { name: 'twitter:creator', content: '@getlogga' }],
    ['meta', { name: 'theme-color', content: '#000000' }],
    ['meta', { name: 'twitter:image', content: 'https://getlogga.com/blog_pages/assets/logo.png' }],
  ],
  title: "(b)logga",
  description: "A combination of our changelog, marketing content and other posts, where we talk about logga, macos audit logging, and other macos security or log related topics.",
  themeConfig: {
    logo: "/assets/logo.png",
    nav: [
      { text: 'home', link: 'https://getlogga.com' },
      { text: 'docs', link: 'https://docs.getlogga.com' }
    ],

    sidebar: [
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/logga-app' }
    ]
  }
})
