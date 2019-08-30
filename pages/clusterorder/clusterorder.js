// pages/clusterorder/clusterorder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    items:[
      {
        state: 1,
        ordertime:'2019-07-30',
        state:'拼团中',
        productname:'糍粑传统营养小食品',
        money:'9.9',
        onemoney:'24.9',
        img:'../../image/4我的/dingdanxiaotupian@2x.png',
      },
      {
        state: 1,
        ordertime: '2019-07-30',
        state: '拼团成功',
        productname: '糍粑传统营养小食品',
        money: '9.9',
        onemoney: '24.9',
        img: '../../image/4我的/dingdanxiaotupian@2x.png',
      },
      {
        state: 0,
        ordertime: '2019-07-30',
        state: '拼团失败',
        productname: '糍粑传统营养小食品',
        money: '9.9',
        onemoney: '24.9',
        img: '../../image/4我的/dingdanxiaotupian@2x.png',
      },
    ]
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