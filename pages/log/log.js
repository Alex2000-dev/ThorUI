let globalData = getApp().globalData;
Page({
  data: {
    version: globalData.version,
    logList: [{
      version: "preface",
      date: "2019-06-01",
      log: ["本项目稳定后，会同步更新到uni-app，支付宝小程序，百度小程序，头条小程序等"]
    }, {
      version: "0.1.0",
      date: "2019-06-01",
      log: ["1.Thor UI代码片段整理", "2.bug修复，以及部分兼容问题修复，代码优化"]
    }, {
      version: "0.5.0",
      date: "2019-06-08",
      log: ["1.Thor UI第一版开始内测", "2.已知bug修复，以及部分兼容问题修复", "3.代码片段优化，封装部分组件"]
    }, {
      version: "1.0.0",
      date: "2019-06-15",
      log: ["1.【地图】新增拖拽定位功能", "2.【扩展】新增基础组件，包括：字体图标，按钮，Grid宫格，List列表，Card卡片...", "3.【扩展】新增数字键盘", "4.【扩展】新增时间轴", "5.完善thor(个人中心)功能，包括：关于Thor UI，模拟登录，GitHub地址复制，赞赏，反馈，更新日志等", "6.已知bug修复，以及部分功能优化"]
    }, {
      version: "1.1.0",
      date: "2019-06-24",
      log: ["1.将基础组件移出扩展，单独出来", "2.扩展改为单独tab bar选项extend", "3.新增滚动消息（extend=>滚动消息）：包括顶部通告栏，滚动新闻，以及搜索框中出现的热搜产品", "4.新增弹层下拉选择（extend=>弹层下拉选择）：包含顶部下拉选择列表、输入框下拉选择以及底部分享弹层", "5.新增ActionSheet操作菜单（extend=>ActionSheet）：可加入提示信息，可单独设置字体样式", "6.新增新闻模板（extend=>新闻模板）:包含新闻列表，新闻详情，评论等", "7.部分功能优化，修复已知bug"]
    }].reverse()
  },
  onLoad: function(options) {

  }
})