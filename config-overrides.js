const {override, addWebpackAlias, fixBabelImports} = require("customize-cra");
const path = require("path");
module.exports = override(
  addWebpackAlias({
    "@": path.resolve(__dirname, "src")
  }),
  // 针对antd实现按需打包: 根据import来打包(使用babel-plugin-import)
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  })
);
