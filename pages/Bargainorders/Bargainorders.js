// pages/Bargain-orders/Bargain-orders.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    order: [
      {
        shopname: '阿甘食品店',
        ordernumber: 'D12645189459',
        state: '待付款',
        img: '../../image/4我的/xiaotuop@2x.png',
        productname: '糍粑传统营养小食品',
        money: 100,
        number: 1,
        statentm1: '',
        statentm2: '去付款',
      },
      {
        shopname: '阿甘食品店',
        ordernumber: 'D12645189459',
        state: '待发货',
        img: '../../image/4我的/xiaotuop@2x.png',
        productname: '糍粑传统营养小食品',
        money:100,
        number: 1,
        statentm1: '',
        statentm2: '去付款',
      },
      {
        shopname: '阿甘食品店',
        ordernumber: 'D12645189459',
        state: '待收货',
        img: '../../image/4我的/xiaotuop@2x.png',
        productname: '糍粑传统营养小食品',
        money: 100,
        number: 1,
        statentm1: '',
        statentm2: '去付款',
        allmoney: 0,
      },
      {
        shopname: '阿甘食品店',
        ordernumber: 'D12645189459',
        state: '待评价',
        img: '../../image/4我的/xiaotuop@2x.png',
        productname: '糍粑传统营养小食品',
        money: 100,
        number: 1,
        statentm1: '',
        statentm2: '去付款',
        allmoney: 0,
      },
      {
        shopname: '阿甘食品店',
        ordernumber: 'D12645189459',
        state: '退款中',
        img: '../../image/4我的/xiaotuop@2x.png',
        productname: '糍粑传统营养小食品',
        money: 100,
        number: 1,
        statentm1: '',
        statentm2: '去付款',
        allmoney: 0,
      },
    ],
    btn: true,
    cancelbtn: true,
    statebtn: true,
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      active: options.number
    })
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

  },
  orderone:function(){
    wx.navigateTo({
      url: '/pages/orderone/orderone',
    })
  }
})