// pages/bindphone/bindphone.js
const https = require('../../utils/https.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue:'',
    code:'',
    type:'获取验证码',
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

  },
  // 正则表达式只能输入数字
  validateNumber(val) {
    return val.replace(/\D/g, '')
  },
  // 获取手机号
  bindKeyInput: function (e) {
    let val = this.validateNumber(e.detail.value)
    this.setData({
      inputValue: val
    })
  },

  // 获取验证码
  getcode(){
    var that = this
    if (this.data.inputValue==''){
      wx.showToast({
        title: '手机号不能为空',
        icon: 'none',
        duration: 1000
      })
    } else if (this.data.inputValue.length<11){
      wx.showToast({
        title: '请输入正确的手机号',
        icon: 'none',
        duration: 1000
      })
    } else if ((/^1[3456789]\d{9}$/.test(this.data.inputValue))){
      https.request('/user/bindPhone', { mobile: this.data.phone, code: 'check_user' }, '正在发送', function (res) {
        console.log(res)
        wx.showToast({
          title: '发送成功',
          icon: 'none',
          duration: 1000
        })
        // that.setData({
        //   type: res.data.next_send_time
        // })
      }, function (err) {

      }, 'GET')
    } else {
      wx.showToast({
        title: '发送失败',
        icon: 'none',
        duration: 1000
      })
    }
  
  },
  // 输入验证码
  bindcode(){

  },
  // 确认绑定
  binding(){

  }
})
