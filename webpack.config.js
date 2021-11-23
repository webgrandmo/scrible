const webpack = require('webpack')

module.exports = {
  mode: "none",
  entry: "./src/script.js",
  output: {
    filename: "./main.js"
  },
  resolve: {
    fallback: {
      fs: false
    }
  }
}