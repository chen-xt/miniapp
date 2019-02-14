
var toast = require('../template/showToast');//引入消息提醒模板
const app = getApp();

Page({

  data: {
    nickName: "",
    avatarUrl: ""
  },

  onLoad: function () {
    var that = this;
    // 获取用户信息
    wx.getUserInfo({
      success: function (res) {
        app.globalData.userInfo = res.userInfo;
        that.setData({
          nickName: app.globalData.userInfo.nickName,
          avatarUrl: app.globalData.userInfo.avatarUrl
        })
      }
    });
   

  },

  // 测试用例
  try: function () {
    wx.navigateTo({
      url: '../try/try'
    })
  },

  // tab切换
  tab : function () {
    wx.navigateTo({
      url: '../tab/tab'
    })
  },

  // 扫码
  scan: function () {
    var that = this;
    var show;
    wx.scanCode({
      success: (res) => {
        // 扫码成功后的处理
        this.show = "--result:" + res.result + "--scanType:" + res.scanType + "--charSet:" + res.charSet + "--path:" + res.path;
        that.setData({
          show: this.show
        });
        wx.showToast({
          title: '成功',
          icon: 'success',
          duration: 2000
        })
      },
      fail: (res) => {
        wx.showToast({
          title: '扫码失败',
          duration: 2000,
          icon: "none"
        })
      },
    });
  },

  // 自定义showToast
  toast: function () {
    toast.showToast({
      title: '这是自定义showToast', // 提示的内容(必填)
      // icon: '/images/msg_info.png', // 图标(选填)
      duration: 1000,  //提示的延迟时间，单位毫秒，默认：1500(选填)
      mask: false,   // 是否显示透明蒙层，防止触摸穿透，默认：true(选填)
      // cb: function () {
      //   // 接口调用成功的回调函数(选填)
      //   console.log('提示成功')
      // }
    })
  },

})
