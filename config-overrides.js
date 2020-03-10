const { override, fixBabelImports ,addWebpackAlias,addDecoratorsLegacy} = require('customize-cra');
const {resolve} = require('path')
 
module.exports = override(
    addDecoratorsLegacy(),
   fixBabelImports('import', {
     libraryName: 'antd-mobile',
     style: 'css',
   }),
   addWebpackAlias({
    '@': resolve('src')
    })
 );