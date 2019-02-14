Page({

  data: {
    navbar: ['tab1', 'tab2', 'tab3'],
    currentTab: 1
  },

  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },

 


})

