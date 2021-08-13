const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(createProxyMiddleware('/api', {
    target: 'https://localhost:3001',
    secure: false, //是否验证SSL证书
    changeOrigin: true, //将主机头的源更改为目标URL
    pathRewrite: {
      "^/api": "/"
    },
    logLevel: 'debug'
  }));
}

// ## Visual Studio Code配置React开发环境
//
// ### React集成VSCode测试
//
// 第一步:
//   首先安装：[`Debugger for Chrome`](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)插件。
// 第二步： 项目根目录下创建 `.vscode`文件夹。
// 第三步：创建`launch.json`文件
// 文件内容：
//
// ```json
// {
//   "version": "0.2.0",
//   "configurations": [
//     {
//       "name": "Chrome",
//       "type": "chrome",
//       "request": "launch",
//       "url": "http://localhost:3000",
//       "webRoot": "${workspaceFolder}/src",
//       "sourceMapPathOverrides": {
//         "webpack:///src/*": "${webRoot}/*"
//       }
//     }
//   ]
// }
