module.exports = {
  presets: [
    ['@babel/preset-env', { useBuiltIns: 'entry', corejs: 3, targets: { ie: 9 } }],
    '@babel/preset-react'
  ],
  plugins: [
    ['@babel/plugin-transform-runtime', { corejs: 3 }],
    '@babel/plugin-transform-arrow-functions'
  ]
}