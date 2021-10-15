const {override, fixBabelImports} = require("customize-cra");
const { alias, configPaths } = require('react-app-rewire-alias');
module.exports = override(
  alias(configPaths('./paths.json')),
  // 针对antd实现按需打包: 根据import来打包(使用babel-plugin-import)
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  })
);
