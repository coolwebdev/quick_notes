const path = require('path')

module.exports = {
  resolve: {
    alias: {
      components: path.resolve('src/components/'),
      containers: path.resolve('src/containers/')
    }
  }
}