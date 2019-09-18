// pages/help/help.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeNames: [0],
    list: [
      ['为什么提现还没到账？', '亲，如果您出现长时间还没到账，可能系统延迟，亲，如果您'],
      ['为什么提现还没到账？', '亲，如果您出现长时间还没到账，可能系统延迟，亲，如果您'],
      ['为什么提现还没到账？', '亲，如果您出现长时间还没到账，可能系统延迟，亲，如果您'],
      ['为什么提现还没到账？', '亲，如果您出现长时间还没到账，可能系统延迟，亲，如果您'],
      ['为什么提现还没到账？', '亲，如果您出现长时间还没到账，可能系统延迟，亲，如果您'],
      ['为什么提现还没到账？', '亲，如果您出现长时间还没到账，可能系统延迟，亲，如果您'],
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  onChange(event) {
    console.log(event)
    this.setData({
      activeNames: event.detail
    });
  }
})