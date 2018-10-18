// pages/try/try.js
Page({
  onShow: function () {
    console.log(this.route)
  },
  /**
   * 页面的初始数据
   */
  data: {
    name: '测试点击事件',
    array: [1, 2, 3, 4, 5, 1, 2, 3, 4]
  },
  // 点击事件
  changeName: function (e) {
    // sent data change to view
    var appInstance = getApp()
    console.log(appInstance.globalData.name) ////这边就可以取到那个值了
    this.setData({
      name: appInstance.globalData.name,
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})