// pages/index/index.js
const app = getApp();

Page({
  data: {
    statusBarHeight: 0,
    navBarHeight: 0,
    contentHeight: 0,
  },
  onLoad() {
    // 在 onLoad 方法中更新视图数据
    this.setData({
      statusBarHeight: app.globalData.statusBarHeight,
      navBarHeight: app.globalData.navBarHeight,
      contentHeight: app.globalData.contentHeight
    });
  }
});
