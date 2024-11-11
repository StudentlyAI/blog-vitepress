import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "StudentlyAI Blog",
  description: "Transform Your Academic Journey",
  
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'StudentlyAI Blog',
    
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/blog/' },
      { text: 'About', link: '/about' },
    ],

    sidebar: {
      '/blog/': [
        {
          text: 'Latest Posts',
          items: [
            { text: 'Getting Started with AI Learning', link: '/blog/ai-learning' },
            { text: 'Study Tips for Success', link: '/blog/study-tips' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/studentlyai' },
      { icon: 'twitter', link: 'https://twitter.com/studentlyai' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 StudentlyAI'
    }
  },

  appearance: {
    toggleSwitch: true,
  },
})