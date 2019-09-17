// pages/resetpaypassword/resetpaypassword.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value:'',
    value1:'',
    value2:'',
    value3:'',
  },
  // 监听input输入的值
  // 短信验证码
  handleInput1(e) {
    // 只能输入数字否者重新渲染
    let value = this.validateNumber(e.detail.value)
    this.setData({
      value1: value
    })
    
  },
  // 登陆新密码
  handleInput2(e) {
    // 只能输入数字否者重新渲染
    let value = this.validateNumber(e.detail.value)
    this.setData({
      value2: value
    })
  },
  // 再次输入登陆新密码
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
  // 获取验证码
  getverification(){

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