// pages/assistancewaiver/assistancewaiver.js
const https = require('../../utils/https.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    product: [],
    parameter:{
      page:1,
      pagesize:10,
    },
    total:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getexemptionlist()
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
    if (this.data.product.length == this.data.total){
      return
    }else{
      let obj = this.data.parameter
      obj.page++
      this.setData({
        parameter:obj
      })
      this.getexemptionlist()
    }
    console.log(this.data.parameter)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  // 免单列表
  getexemptionlist(){
    var that = this
   
    https.request('/goods/getExemptionGoodslist', this.data.parameter,'加载中...',function(res){
      console.log(res)
      let obj = that.data.product.concat(res.data.list)
      that.setData({
        total: res.data.total, // 总数
        product: obj

      })
    },function(err){

    })
  },
  
})