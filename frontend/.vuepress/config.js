// require('dotenv').config()
const webpack = require('webpack')
const path = require("path")
// const AliasPlugin = require('enhanced-resolve/lib/AliasPlugin');

module.exports = {
  head: [
        // ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons'}],
        ['script', { type: 'text/javascript', src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBK-gnbwSx5IOZkx6BfbL7uniHqENz8F68&libraries=places'}]
    ],
    // plugins: ['@vuepress/active-header-links'],
  plugins: [
  //     [
  //     'register-components',
  //     {
  //       components: [
  //         {
  //           name: 'AccessibilityToolbar',
  //           path: '../node_modules/vue-accessibility-toolbar/src'
  //         }
  //       ]
  //     }
  //     ],
  ],
  configureWebpack: (config) => { 
  	return {

     plugins:
			[
      	new webpack.EnvironmentPlugin({ ...process.env }),
        new webpack.NormalModuleReplacementPlugin(
         /\@theme\/components\/Navbar/,
         path.resolve(__dirname, './components/Navbar.vue')
        ),
        new webpack.NormalModuleReplacementPlugin(
         /\@theme\/components\/Footer/,
         path.resolve(__dirname, './components/Footer.vue')
        ),
        new webpack.NormalModuleReplacementPlugin(
         /\@theme\/components\/Sidebar/,
         path.resolve(__dirname, './components/Sidebar.vue')
        ),
        new webpack.NormalModuleReplacementPlugin(
         /\@theme\/components\/Page/,
         path.resolve(__dirname, './components/Page.vue')
        ),
        new webpack.NormalModuleReplacementPlugin(
         /\@theme\/helpers\/utils/,
         path.resolve(__dirname, './helpers/utils.js')
        )
  		],

    }
  },
  theme:'reco',
  locales: {
    '/': {
      lang: 'עברית'
    },
    '/en/': {
      lang: 'English'
    }
  },
  themeConfig: {
    authorAvatar: '/logo-big.svg',
    type: 'BASHome',
    mode: 'light', 
    modePicker: false,
    noFoundPageByTencent: false,
    sidebar: [
      ['/' ,'home'],
      ['/attorneys/', 'הצוות'],
      ['/contact/', 'צורו קשר']
    ],
    logo: '/logo.svg',
         // Blog configuration
    blogConfig: {
      category: {
        location: 2,     // The position occupied in the navigation bar menu, default to 2
        text: 'תחומי עיסוק' // Text default to "Category"
      },
      tag: {
        location: 3,     // The position occupied in the navigation bar menu, default to 3
        text: 'פרסומים'      // Text default to "Tag"
      }
    },

    locales: {
      '/': {
        nav: [
          { text: 'הצוות', link: '/attorneys/' },
          { text: 'תחומי עיסוק', link: '/categories/commercial/' },
          { text: 'פרסומים', link: '/tag/' },
          { text: 'ניוזלטר', link: '/newsletter/' },
          { text: 'צור קשר', link: '/contact/' },
          { text: 'English', link: '/en/' },
        ],
        recoLocales: {
          homeBlog: {
            article: 'כתבות',
            tag: 'תגיות',
            category: 'תחומים'
          },
          pagation: {
            prev: 'הקודם',
            next: 'הבא',
            go: 'צא לדרך',
            jump: 'קפוץ אל'
          }
        }
      },
      '/en/': {
        nav: [
          { text: 'Attorneys', link: '/attorneys/' },
          { text: 'Legal Practices', link: '/categories/category1/' },
          { text: 'Press', link: '/tag/' },
          { text: 'Newsletter', link: '/en/newsletter/' },
          { text: 'Contact', link: '/en/contact/' },
          { text: 'עברית', link: '/' },
        ],
        recoLocales: {
          homeBlog: {
            article: 'Article',
            tag: 'Tag',
            category: 'Category'
          },
          pagation: {
            prev: 'Prev',
            next: 'Next',
            go: 'Go',
            jump: 'Jump To'
          }
        }
      }
    }
  }
}
