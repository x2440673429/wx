// pages/applystore/applystore.js
const https = require('../../utils/https.js')
Page({
  "code": "0000",
  "msg": "操作成功", 

  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    phone:'',
    main_class_info:'',
    main_class_id:"",
    main_class_name:'',
  },
<<<<<<< HEAD
  "exe_time": "0.094005",
  // 手机号
  getphone(e){

  },
=======
 
>>>>>>> 2827eceb8f03e01b0a5c5a7bec778c3d5b02aed9
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getshop()
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
  //主营类型
  
=======
  // 申请店铺接口
  getshop(){
    var that = this
    https.request('/store/storeApplyView','','加载中',function(res){
      console.log(res)
    },function(err){

    })
  },
  // 获取手机号
  getphone(e) {
    console.log(e)
    this.setData({
      phone: e.detail.value,
      name: e.detail.value
    })
  },
  // 获取联系人姓名
  getname(e) {
    console.log(e)
  },
>>>>>>> 2827eceb8f03e01b0a5c5a7bec778c3d5b02aed9
})