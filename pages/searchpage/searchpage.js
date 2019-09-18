// pages/searchpage/searchpage.js
const https = require('../../utils/https.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr:[
      '樱桃新鲜 5斤',
      '紫薯干',
      '吊灯奢华大气',
      '三个少女家',
      '清风',
      '办公室零食',
      '欧式电视柜 1.8米',
      '空调帽子',
      '帽子室内',
    ],
    value:'',
    parameter:{//删除历史记录
      type:'',
      log_id:''
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.gethistory()
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
  // input数据绑定
  gettext(e){
    console.log(e)
    this.setData({
      value: e.detail.value
    })
  },
  // 获取搜索内容
  getsearchlist(){
    wx.navigateTo({
      url: "/pages/search/search?search_key="+this.data.value,
    })
    //  var histroy = this.data.value.concat(this.data.arr)
    // this.setData({
    //   arr: histroy
    // })
  },
  // 获取历史记录
  gethistory(){
    var that = this 
    https.request('/user/getSearchLog','','加载中...',function(res){
      console.log(res)
      that.setData({
        arr:res.data.list
      })
    },function(err){

    },)
  },
  // 点击删除全部历史记录
  deleteall(){
   
    var obj = this.data.parameter
    obj.type=2
    this.setData({
      parameter:obj
    })
    this.deletehistory()
    this.setData({
      arr:[]
    })
  },
  // 删除历史记录接口
  deletehistory(){
    var that = this
    https.request('/user/delSearchLog', this.data.parameter, '加载中...', function (res) {
      console.log(res)
      that.setData({
        // arr:res.data.list
      })
    }, function (err) {

    })
  },
  // 点击历史记录
  getlssearch(e){
    console.log(e)
    this.setData({
      value : e.currentTarget.dataset.content
    })
    this.getsearchlist()
  }
})