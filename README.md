#### react移动端项目
1.  npm install antd-mobile --save   安装antd-mobile
2.  入口页面 (html 或 模板) 相关设置：
3.  配置按需加载,
```
npm install react-app-rewired customize-cra --save-dev
npm install babel-plugin-import --save-dev
```
4. 配置装饰器  npm i   @babel/plugin-proposal-decorators
5. 配置别名@==src
```
const { override, fixBabelImports , addWebpackAlias, addDecoratorsLegacy } = require('customize-cra');
const {resolve} = require('path')
 module.exports = override(
    addDecoratorsLegacy(),
   fixBabelImports('import', {
     libraryName: 'antd',
     libraryDirectory: 'es',
     style: 'css',
   }),
    addWebpackAlias({
        '@': resolve('src')
    })
 );
```