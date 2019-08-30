// pages/mygiftbag/mygiftbag.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    number:555555.55,
    active:0,
    giftbag:[
      {
        number:1,
        img:'../../image/4我的/xiaotuop@2x.png',
        productname:'糍粑传统营养小食品',
        state: '待激活',
        text: '描述...',
        time: '2019-07-30',
      },
      {
        number: 2,
        img: '../../image/4我的/xiaotuop@2x.png',
        productname: '糍粑传统营养小食品',
        state: '已激活',
        text: '描述...',
        time: '2019-07-30',
      },
      {
        number: 3,
        img: '../../image/4我的/xiaotuop@2x.png',
        productname: '糍粑传统营养小食品',
        state: '已接收',
        text: '描述...',
        time: '2019-07-30',
      },
    ]
  },
  // 点击赠送
  give(){
    wx.navigateTo({
      url: '/pages/give/give',
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