const path = require('path')
const Dotenv = require('dotenv-webpack')

const isDev = process.env.NODE_ENV === 'develop'

console.log('NODE_ENV', process.env.NODE_ENV)

module.exports = {
  webpack: (config) => {
    config.plugins = config.plugins || []

    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, isDev ? '.env' : '.env.prod'),
        systemvars: true,
      }),
    ]

    // config.resolve.alias = {
    //   'react-native$': 'react-native-web',
    // }
    config.resolve.extensions = [
      '.web.js',
      '.web.ts',
      '.web.tsx',
      ...config.resolve.extensions,
    ]

    return config
  },
}
