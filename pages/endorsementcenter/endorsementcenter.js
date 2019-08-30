// pages/endorsementcenter/endorsementcenter.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    money:300,
    number1:300,
    number2: 300,
    money1:300,
    money2:300,
    show: false,
  },
  // 打开规则弹框
  getrule(){
    this.setData({ show: true })
  },
  // 关闭规则弹框
  onClose(){
    this.setData({ show: false })
  },
  // 提现
  gotixian(){
    wx.navigateTo({
      url: '/pages/cashwithdrawal/cashwithdrawal',
    })
  },
  // 分享
  gotoshare(){
    wx.navigateTo({
      url: '/pages/Iwanttoshare/Iwanttoshare',
    })
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