// pages/cashwithdrawal/cashwithdrawal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value:'',
    money:0,
  },
  // 监听input输入的值
  handleInput(e) {
    // 只能输入数字否者重新渲染
    let value = this.validateNumber(e.detail.value)
    this.setData({
      value
    })
    var money;
    if (/^(\d?)+(\.\d{0,2})?$/.test(e.detail.value)) { //正则验证，提现金额小数点后不能大于两位数字
      money = e.detail.value;
    } else {
      money = e.detail.value.substring(0, e.detail.value.length - 1);
    }
    console.log(222,e.detail.value.length)
    this.setData({
      value: money,
    })
  },
  // 正则表达式只能输入数字
  validateNumber(val) {
    return val.replace(/\D/g, '')
  },
  // 确认提现
  cash(){
    if(this.data.money<this.data.value){
      wx.showToast({
        title: '输入金额超过余额',
        icon: 'none',
        duration: 2000
      })
    }
  },
  // 提现记录
  getrecord(){

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