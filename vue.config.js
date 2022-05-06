module.exports = {
  configureWebpack:{
    externals:{'jquery':'$'}
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  outputDir:'metrosexual',
  runtimeCompiler: true
};
