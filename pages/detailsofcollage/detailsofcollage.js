// pages/detailsofcollage/detailsofcollage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hours:22,
    minute:33,
    second:44,
    text: `[扶农] [顺风配送]手工麻薯小吃永春麻糍糯米(4斤盒装 250-300g)`,
    productname:'手工麻薯小吃永春麻糍糯米',
    money:9.9,
    onemoney:9,
    show:false,
  },
  // 打开规则弹框
  getrule:function(){
    this.setData({
      show:true,
    })
  },
  // 关闭规则弹框
  onClose() {
    this.setData({ show: false });
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