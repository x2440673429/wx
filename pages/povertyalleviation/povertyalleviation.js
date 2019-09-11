// pages/povertyalleviation/povertyalleviation.js
const https = require('../../utils/https.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    product:[
      {
        image: '../../image/1首页/chanpin@2x.png',
        name: '手工麻薯小吃永春麻糍糯米',
        text: `[扶农][顺风配送]手工麻薯小吃永春麻糍糯米(4斤盒装 250- 300g)`,
        money: 9.9,
      },
      {
        image: '../../image/1首页/chanpin@2x.png',
        name: '手工麻薯小吃永春麻糍糯米',
        text: `[扶农][顺风配送]手工麻薯小吃永春麻糍糯米(4斤盒装 250- 300g)`,
        money: 9.9,
      },
      {
        image: '../../image/1首页/chanpin@2x.png',
        name: '手工麻薯小吃永春麻糍糯米',
        text: `[扶农][顺风配送]手工麻薯小吃永春麻糍糯米(4斤盒装 250- 300g)`,
        money: 9.9,
      },
    ],
    parameter:{
      page:'1',
      pagesize:'10',
      keywords:'1',
    },
    id:'',
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
      that.setData({
        product:res.data.list
      })
    },function(err){

    },'GET')
  }
})