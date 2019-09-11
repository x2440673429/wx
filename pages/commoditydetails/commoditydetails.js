// pages/commoditydetails/commoditydetails.js
const https = require('../../utils/https.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    typeimg: ['../../image/1首页/m.png','../../image/1首页/pin@2x.png'],
    img: '../../image/1首页/morenshangpin@2x.png',
    shopname: '山东烟台大樱桃车厘子新鲜水果',
    text: '[扶农]民勤大樱桃',
    money: '99.98',
    oldmoney: '190.99',
    number: '4565',
    assemblename: '李思思',
    address: '福建省厦门市湖里区高薪技术园',
    comment_time:'2018-05-30',
    comment_content:'很甜很大个，很满意',
    comment_name:'昵***称',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var type = options.type
    var id = options.id
    this.geiproductinfo(id)
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
  // 获取商品详情内容
  geiproductinfo(id){
    var that = this
    https.request('/Goods/getGoodsDetail', { goods_id: id},'加载中...',function(res){
      console.log(res)
      that.setData({
        shopname: res.data.goods_info.title,//商品名称
        money: res.data.goods_info.price,//商品售价
        oldmoney: res.data.goods_info.original_price,//商品原价
        text: res.data.goods_info.details,//商品详细信息
        // shopname: res.data.goods_info.stock,//商品库存
        // shopname: res.data.goods_info.title,//商品名称
        // shopname: res.data.goods_info.title,//商品名称
        // shopname: res.data.goods_info.title,//商品名称
        // shopname: res.data.goods_info.title,//商品名称
      })
    },function(err){

    },'GET')
  },
  // 获取店铺详情
  getshoping(){
    wx.navigateTo({
      url: '/pages/shoping/shoping',
    })
  }
})