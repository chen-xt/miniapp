Page({

  data:{
    showModal: false, //默认标记点弹框隐藏
    modelOne: 'true', //授权弹框
  },

  onReady: function (e) {
    var that = this;
    this.mapCtx = wx.createMapContext('map');
    // 获取当前位置的经纬度
    that.longitude();
  },

  // 获取经纬度
  longitude: function () {
    var that = this;
    //获取当前位置
    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        that.setData({
          longitude: res.longitude,
          latitude: res.latitude,
          markers: [
            {
              id: 0,
              iconPath: "../../images/marker.png",
              longitude: res.longitude,
              latitude: res.latitude,
              width: 32,
              height: 32,
              address: "福建泉州丰海路2号"
            },
          ]
        })
      },
      fail: function () {
        that.setData({
          modelOne: false
        })
      }
    })
  },

  // 标注点的点击事件 
  markerClick: function () {
    // 显示弹框
    this.showModal();
  },

  // 显示弹框
  showModal: function () {
    this.setData({
      showModal: true
    })
  },

  // 隐藏弹框(点击地图的任何地方隐藏弹框)
  hideModal: function () {
    this.setData({
      showModal: false
    })
  },
  
  // 移动到当前位置
  moveToLocation: function () {
    this.mapCtx = wx.createMapContext('map');
    this.mapCtx.moveToLocation();
  },

  // 个人中心
  toPersonCenter: function () {
    wx.navigateTo({
      url: '../my/my'
    })
  },
  
  // 导航
  toGuide: function () {
    wx.openLocation({
      longitude: 118.5828,
      latitude: 24.8771,
      address: "福建泉州东湖公园"
    })
  },

  //授权用户信息回调
  bindgetuserinfo: function (e) {
    var that = this;
    if (e.detail.userInfo) {
      //用户点击了允许授权按钮
      that.setData({
        modelOne: true,
      })
    } else {
      //用户点击了拒绝按钮
      wx.showToast({
          title: '授权失败',
          duration: 2000
      });
    }
    ;
  },


  //页面加载监听
  onLoad: function () {
    var that = this;
    wx.getSetting({
      success: function (res) {
        if (!res.authSetting['scope.userInfo']) {
          that.setData({
            modelOne: false
          })
        }
      }
    })
  }

})
