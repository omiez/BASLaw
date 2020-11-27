// require('dotenv').config()
const webpack = require('webpack')
const path = require("path")
// const AliasPlugin = require('enhanced-resolve/lib/AliasPlugin');

module.exports = {
  head: [
        // ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons'}],
        ['script', { type: 'text/javascript', src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBK-gnbwSx5IOZkx6BfbL7uniHqENz8F68&libraries=places'}]
    ],
    // plugins: [
    //   '@vuepress/blog',
    //   {
    //     directories: [
    //       {
    //         // Unique ID of current classification
    //         id: 'post',
    //         // Target directory
    //         dirname: '_posts',
    //         // Path of the `entry page` (or `list page`)
    //         path: '/',
    //       },
    //     ],
    //   },
    // ],
  // plugins: ['@vuepress/active-header-links'],
  configureWebpack: (config) => { 
  	return {

     plugins:
			[
      	new webpack.EnvironmentPlugin({ ...process.env }),
        new webpack.NormalModuleReplacementPlugin(
         /\@theme\/components\/Navbar/,
         path.resolve(__dirname, './components/Navbar.vue')
        )
  		],

    }
  },
  theme:'reco',
  themeConfig: {
    type: 'blog',
    noFoundPageByTencent: false,
    // sidebar: [
    //   ['/contact/', 'Contact']
    // ],
    nav: [
      { text: 'בית', link: '/' },
      { text: 'צור קשר', link: '/contact/' },
      { text: 'פרסומים', link: '/tag/' }
    ],
    logo: '/logo.svg',
         // Blog configuration
    blogConfig: {
      category: {
        location: 2,     // The position occupied in the navigation bar menu, default to 2
        text: 'תחומי עיסוק' // Text default to "Category"
      },
      tags: {
        location: 3,     // The position occupied in the navigation bar menu, default to 3
        text: 'Tag'      // Text default to "Tag"
      }
    }
  }
}
