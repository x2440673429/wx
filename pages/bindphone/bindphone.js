// pages/bindphone/bindphone.js
const https = require('../../utils/https.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
<<<<<<< HEAD
    name: '',//姓名
    phone: '',//手机号
    code: '',//验证码
    iscode: null,//用于存放验证码接口里获取到的code
    codename: '获取验证码'
=======
    inputValue:'',
    code:'',
    type:'获取验证码',
>>>>>>> 2827eceb8f03e01b0a5c5a7bec778c3d5b02aed9
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

<<<<<<< HEAD
  // 手机号验证
  //获取input输入框的值
  getNameValue: function (e) {
    this.setData({
      name: e.detail.value
    })
  },
  getPhoneValue: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },
  getCodeValue: function (e) {
    this.setData({
      code: e.detail.value
    })
  },
  getCode: function () {
    var a = this.data.phone;
    var _this = this;
    var myreg = /^(14[0-9]|13[0-9]|15[0-9]|17[0-9]|18[0-9])\d{8}$$/;
    if (this.data.phone == "") {
=======
  // 获取验证码
  getcode(){
    var that = this
    if (this.data.inputValue==''){
>>>>>>> 2827eceb8f03e01b0a5c5a7bec778c3d5b02aed9
      wx.showToast({
        title: '手机号不能为空',
        icon: 'none',
        duration: 1000
      })
<<<<<<< HEAD
      return false;
    } else if (!myreg.test(this.data.phone)) {
=======
    } else if (this.data.inputValue.length<11){
>>>>>>> 2827eceb8f03e01b0a5c5a7bec778c3d5b02aed9
      wx.showToast({
        title: '请输入正确的手机号',
        icon: 'none',
        duration: 1000
      })
<<<<<<< HEAD
      return false;
    } else {
      wx.request({
        data: {},
        'url': "common/sendCode",
        success(res) {
          console.log(res.data.data)
          _this.setData({
            iscode: res.data.data
          })
          var next_send_time = 121;
          var timer = setInterval(function () {
            next_send_time--;
            if (next_send_time <= 0) {
              clearInterval(timer);
              _this.setData({
                codename: '重新发送',
                disabled: false
              })

            } else {
              _this.setData({
                codename: next_send_time + "s"
              })
            }
          }, 1000)
        }
      })

    }


  },
  //获取验证码
  getVerificationCode() {
    this.getCode();
    var _this = this
    _this.setData({
      disabled: true
    })
  },
  //提交表单信息
  save: function () {
    var myreg = /^(14[0-9]|13[0-9]|15[0-9]|17[0-9]|18[0-9])\d{8}$$/;
    if (this.data.phone == "") {
      wx.showToast({
        title: '手机号不能为空',
        icon: 'none',
        duration: 1000
      })
      return false;
    } else if (!myreg.test(this.data.phone)) {
      wx.showToast({
        title: '请输入正确的手机号',
        icon: 'none',
        duration: 1000
      })
      return false;
    }
    if (this.data.code == "") {
      wx.showToast({
        title: '验证码不能为空',
        icon: 'none',
        duration: 1000
      })
      return false;
    } else if (this.data.code != this.data.iscode) {
      wx.showToast({
        title: '验证码错误',
        icon: 'none',
        duration: 1000
      })
      return false;
    } else {
      wx.setStorageSync('phone', this.data.phone);
      wx.redirectTo({
        url: '../bindphone/bindphone',
      })
    }
  },
})
=======
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
>>>>>>> 2827eceb8f03e01b0a5c5a7bec778c3d5b02aed9
