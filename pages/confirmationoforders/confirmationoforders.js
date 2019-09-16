// pages/confirmationoforders/confirmationoforders.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: '收货地址：福建省思明区软件园二期观日路30号之六508B',
    username: '李思思',
    phone: '13646005163',
    shop:[
      {
        shopimg:'../../image/1首页/chanpin@2x.png',
        shopname: '原生态店铺',
        productname: '山东烟台大樱桃车厘子新鲜水果',
        text: '原生态无无污染蜂蜜',
        money: '280.00',
        number: '1',
        mode: '免邮',
        allmoney: '280.00',
        jige:2,
      },
      {
        shopimg: '../../image/1首页/chanpin@2x.png',
        shopname: '原生态店铺',
        productname: '山东烟台大樱桃车厘子新鲜水果',
        text: '原生态无无污染蜂蜜',
        money: '280.00',
        number: '1',
        mode: '免邮',
        allmoney: '280.00',
        jige: 2,
      },
    ],
    allnumber:2,
    allmoney:280,
    parameter:{
      goods_id:'',
      num:'',
      attr_id:'',
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var obj = this.data.parameter
    obj.num = options.number
    obj.goods_id = options.attr_id
    this.setData({
      parameter:obj
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
  // 选择收货地址
  getaddress(){
    wx.navigateTo({
      url: '/pages/address/address',
    })
  },
  // 确认订单列表
  getcheckorderinof(){
    var that = this 
    https.request('/Order/checkOrderInfo','','',function(res){
      console.log(res)
    },function(err){

    },'GET')
  }
})