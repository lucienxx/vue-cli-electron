//electron-builder configuration
module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        "appId": "com.example.vue-cli-electron",
        "productName": "vue-cli-electron",
        "copyright": "Copyright © 2020",
        "mac": {
          "icon": "src/assets/icon.png"
        },
        "win": {
          "icon": "src/assets/icon.png"
        },
        "win": {
          "icon": "src/assets/icon.png"
        },
        "nsis": {
          "oneClick": false, // 是否一键安装
          "allowElevation": true, // 允许请求提升，如果为false，则用户必须使用提升的权限重新启动安装程序。
          "allowToChangeInstallationDirectory": true, // 允许修改安装目录
          //"installerIcon": "src/assets/icon.png", // 安装图标
          //"uninstallerIcon": "src/assets/icon.png", //卸载图标
          "installerHeaderIcon": "src/assets/icon.png", // 安装时头部图标
          "createDesktopShortcut": true, // 创建桌面图标
          "createStartMenuShortcut": true, // 创建开始菜单图标
          "shortcutName": "vue-cli-electron" // 图标名称 */
        }
      }
    }
  }
}
const webpack = require('webpack')
module.exports = {
  configureWebpack: {
    plugins: [
      // 支持 jquery
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "windows.jQuery": "jquery"
      })
    ],
  }
}
