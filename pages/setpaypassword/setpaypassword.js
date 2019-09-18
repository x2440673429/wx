// pages/setpaypassword/setpaypassword.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value1:'',//原密码
    value2:'',//新密码
    value3:'',//再次新的
    oldassword:'',//原密码
  },
  // 忘记重置按钮
  reset:function(){
    wx.navigateTo({
      url: "/pages/resetpaypassword/resetpaypassword",
    })
  },
  // 监听input输入的值
  // 原密码
  handleInput1(e) {
    // 只能输入数字否者重新渲染
    let value = this.validateNumber(e.detail.value)
    this.setData({
      value1: value
    })
  },
  // 新密码
  handleInput2(e) {
    // 只能输入数字否者重新渲染
    let value = this.validateNumber(e.detail.value)
    this.setData({
      value2: value
    })
  },
  // 再次输入密码
  handleInput3(e) {
    // 只能输入数字否者重新渲染
    let value = this.validateNumber(e.detail.value)
    this.setData({
      value3: value
    })
  },
  // 正则表达式只能输入数字
  validateNumber(val) {
    return val.replace(/\D/g, '')
  },
  // 确认
  confirm(){
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  }
})