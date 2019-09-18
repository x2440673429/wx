// pages/flashsale/flashsale.js
const https = require("../../utils/https.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    limitedtime:[],
    product: [],
    total:0,
    parameter:{
      page:1,
      page_size:10,
      time_id:'',
    },

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getflashsalelist()
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
    if (this.data.total == this.data.product.length) {
      return
    } else {
      var obj = this.data.parameter
      obj.page++
      this.setData({
        parameter: obj
      })
      this.getflashsalelist()
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  // 点击抢购时间
  flashsale(e){
    var obj = this.data.parameter
    obj.time_id = e.currentTarget.dataset.timeid.toString()
    obj.page = 1
    this.setData({
      parameter:obj,
      product:[],
    }) 

    this.getflashsalelist()
  },
  //获取抢购产品列表
  getflashsalelist(){
    var that = this
    https.request('/goods/getFlashPointGoodslist', this.data.parameter,'加载中...',function(res){
      console.log(res)
      var product = that.data.product.concat(res.data.list)
      that.setData({
        limitedtime: res.data.time_info,//抢购时间
        product: product,//抢购商品内容
        total: res.data.total//抢购商品总数
      })
    },function(err){

    })
  },
 
})