// pages/shop/shop.js
const https = require('../../utils/https.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value:'',
    shop:[],
    parameter:{// 获取店铺列表
      search_key:'',
      page:'1',
      pagesize:'10',
    },
    total:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getshoplist()
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
  // input值
  getinput(e){
    console.log(e)
    this.setData({
      value: e.detail.value
    })
  },
  // 点击搜索店铺
  getshop(){
    var obj = this.data.parameter
    obj.search_key = this.data.value
    this.setData({
      parameter:obj
    })
    this.getshoplist()
  },
  // 点击进店
  entershop(e){
    console.log(e)
    var sid = e.currentTarget.dataset.sid
    wx.navigateTo({
      url: "/pages/shoping/shoping?sid="+sid,
    })
  },
  // 获取店铺列表
  getshoplist(){
    var that = this 
    https.request('/store/storeList', this.data.parameter,'加载中...',function(res){
      console.log(res)
      var shop = that.data.shop.concat(res.data.list)
      that.setData({
        shop: shop,
        total: res.data.total
      })
    },function(err){

    })
  },
  // 上拉触底加载更多
  onReachBottom(){
    
    if(this.data.shop.length==this.data.total){
      return
    }else{
      var obj = this.data.parameter
      obj.page++
      this.setData({
        shop: obj
      })
      this.getshoplist()
    }
  
  }
})