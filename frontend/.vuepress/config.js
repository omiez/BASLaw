// require('dotenv').config()
const webpack = require('webpack')

module.exports = {
  head: [
        // ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons'}]
        ['script', { type: 'text/javascript', src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBK-gnbwSx5IOZkx6BfbL7uniHqENz8F68&libraries=places'}]
    ],
  configureWebpack: (config) => {
    return { plugins: [
      new webpack.EnvironmentPlugin({ ...process.env })
    ]}
  }
}