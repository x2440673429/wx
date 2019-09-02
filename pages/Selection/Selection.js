// pages/Selection/Selection.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    productinof:[
      {
        image:'../../image/4我的/xiaotuop@2x.png',
        name:'手工麻薯小吃永春麻糍糯米',
        text:`[扶农] [顺风配送]手工麻薯小吃永春麻糍糯米(4斤盒装 250-300g)`,
        number:'13',
      },
       {
        image: '../../image/4我的/xiaotuop@2x.png',
        name: '手工麻薯小吃永春麻糍糯米',
        text: `[扶农] [顺风配送]手工麻薯小吃永春麻糍糯米(4斤盒装 250-300g)`,
        number: '13',
      },
      {
        image: '../../image/4我的/xiaotuop@2x.png',
        name: '手工麻薯小吃永春麻糍糯米',
        text: `[扶农] [顺风配送]手工麻薯小吃永春麻糍糯米(4斤盒装 250-300g)`,
        number: '13',
      },
      {
        image: '../../image/4我的/xiaotuop@2x.png',
        name: '手工麻薯小吃永春麻糍糯米',
        text: `[扶农] [顺风配送]手工麻薯小吃永春麻糍糯米(4斤盒装 250-300g)`,
        number: '13',
      },
    ],
    hour:23,
    Minute:22,
    second:22,
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
  // 点击免费拿
  getproduct() {
    wx.navigateTo({
      url: '/pages/Bargain/Bargain',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  }
})
