// pages/preferentialoffer/preferentialoffer.js
const https = require('../../utils/https.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    coupon: [
      {
        money: '20',
        coupon_name: '新人专享通用无门槛券',
        shopname: '李思思',
        usefulness: '全场通用',
        time: '2019.07.09 17:30-2019.08.08 17:30',
        is_expire:'',
        is_use: ''
      },
      {
        money: '20',
        coupon_name: '新人专享通用无门槛券',
        shopname: '李思思',
        usefulness: '全场通用',
        time: '2019.07.09 17:30-2019.08.08 17:30',
        is_expire: '',
        is_use:''
      },
    ],
<<<<<<< HEAD
    parameter: {
      page: '1',
      pagesize: '10',
    },
   
=======
    parameter:{
      page:'1',
      pagesize:'10',
    }
>>>>>>> 2827eceb8f03e01b0a5c5a7bec778c3d5b02aed9
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
<<<<<<< HEAD
    this.getdiscount()
=======
    this.getyhjlist()
>>>>>>> 2827eceb8f03e01b0a5c5a7bec778c3d5b02aed9
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
<<<<<<< HEAD
  // 获取页面内容
  getdiscount() {
    var that = this
    https.request('/User/getMyCouponList', this.data.parameter, '加载中...', function (res) {
      console.log(res)
      that.setData({
        coupon: res.data.list,
      })
    }, function (err) {

    }, 'GET')
=======
  // 获取优惠卷列表
  getyhjlist(){
    var that = this
    https.request('/User/getMyCouponList', this.data.parameter,'加载中',function(res){
      console.log(res)
    },function(err){

    },'GET')
>>>>>>> 2827eceb8f03e01b0a5c5a7bec778c3d5b02aed9
  }
})