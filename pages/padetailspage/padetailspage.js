// pages/padetailspage/padetailspage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopname:'手工麻薯小吃永春麻糍糯米',
    shoptext: '[扶农][顺风配送]手工麻薯小吃永春麻糍糯米(4斤盒装 250 - 300g)',
    supportnumber:'90',
    moneynumber:'10233',
    reachnumber:'22',
    time:13,
    username:'昵***称',
    text:'很甜很大个，很满意',
    commenttime:'2018-05-30',
    allnumber:32,
    show:false,
    items:[
      '￥65', '￥69', '￥130', '￥600','￥590','打赏'
    ]
  },
  // 去支付按钮
  gotopay(){
    this.setData({
      show:true,
    })
  },
  // 关闭弹窗
  onClose(){
    this.setData({
      show: false,
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