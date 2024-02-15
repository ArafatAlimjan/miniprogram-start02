// app.js
App({
  globalData: {},
  onLaunch() {
    // 使用 wx.getSystemInfoSync() 获取屏幕信息
    const systemInfo = wx.getSystemInfoSync();
    const res = wx.getMenuButtonBoundingClientRect();
    const statusHeight = res.top;
    const navHeight = res.height;

    // windowHeight 是屏幕的高度，单位是 px
    const windowHeight = systemInfo.windowHeight;
    // 计算内容区高度，考虑状态栏和导航栏的高度
    const contentHeight = windowHeight - (statusHeight + navHeight);
    console.log("statusHeight:", statusHeight + "px");
    console.log("navHeight:", navHeight + "px");
    console.log("contentHeight:", contentHeight + "px");

    // 保存状态栏高度、导航栏高度及内容区高度到 globalData
    this.globalData.statusBarHeight = statusHeight;
    this.globalData.navBarHeight = navHeight;
    this.globalData.contentHeight = contentHeight;
  },
})
