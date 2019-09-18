// pages/povertyalleviation/povertyalleviation.js
const https = require('../../utils/https.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    product:[],
    parameter:{
      page:'1',
      pagesize:'10',
      keywords:'1',
    },
    id:'',
    total:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getpovertyalleviationlist()

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

    if (this.data.product.length == this.data.total) {
      return
    } else {
      var obj = this.data.parameter
      obj.page++
      this.setData({
        parameter: obj,
      })
      this.getpovertyalleviationlist()
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  // 获取众筹扶贫详情页
  getpovertyalleviationpage(e){
    this.setData({
      id: e.currentTarget.dataset.id
    })
    var url = '/pages/padetailspage/padetailspage?id='+this.data.id
    wx.navigateTo({
      url: url,
    })
  },
  //获取众筹列表
  getpovertyalleviationlist(){
    var that = this 
    https.request('/Crowd/getGoodsList', that.data.parameter,'加载中...',function(res){
      console.log(res)
      var product = that.data.product.concat(res.data.list)
      that.setData({
        product: product,
        total: res.data.total
      })
    },function(err){

    },'GET')
  },
 
})