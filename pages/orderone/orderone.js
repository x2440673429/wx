// pages/orderone/orderone.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderstate:'待收货',
    ordernumber:'131919017330992563',
    ordertime:'2019-07-09 17:30:30',
    Paymentmethod:'微信支付',
    username:'李思思',
    phone:'13646005163',
    productimg:'../../image/1首页/chanpin@2x.png',
    address: '福建省思明区软件园二期观日路30号之六508B',
    shopname:'原生态店铺',
    productname:'山东烟台大樱桃车厘子新鲜水果',
    text:'原生态无无污染蜂蜜',
    money:'280.00',
    number:1,
    allmoney: 280.00,
  },
  // 复制
  textPaste() {
    wx.showToast({
      title: '复制成功',
    })
    wx.setClipboardData({
      data: this.data.ordernumber,
      success: function (res) {
        wx.getClipboardData({ //这个api是把拿到的数据放到电脑系统中的
          success: function(res) {
            console.log(res) // data
          }
        })
      }
    })
  },
  // 查看物流
  viewlogistics(){
    wx.navigateTo({
      url: "/pages/viewlogistics/viewlogistics",
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