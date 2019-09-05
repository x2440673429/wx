// pages/shop/shop.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    list: [
      ['../../image/1首页/chanpin@2x.png', '山东烟台大樱桃', '88.99', '99.99', '228'],
      ['../../image/1首页/chanpin@2x.png', '山东烟台大樱桃', '88.99', '99.99', '228'],
      ['../../image/1首页/chanpin@2x.png', '山东烟台大樱桃', '88.99', '99.99', '228'],
      ['../../image/1首页/chanpin@2x.png', '山东烟台大樱桃', '88.99', '99.99', '228'],
      ['../../image/1首页/chanpin@2x.png', '山东烟台大樱桃', '88.99', '99.99', '228'],
      ['../../image/1首页/chanpin@2x.png', '山东烟台大樱桃', '88.99', '99.99', '228'],
      ['../../image/1首页/chanpin@2x.png', '山东烟台大樱桃', '88.99', '99.99', '228'],
      ['../../image/1首页/chanpin@2x.png', '山东烟台大樱桃', '88.99', '99.99', '228'],
      ['../../image/1首页/chanpin@2x.png', '山东烟台大樱桃', '88.99', '99.99', '228'],
      ['../../image/1首页/chanpin@2x.png', '山东烟台大樱桃', '88.99', '99.99', '228'],
      ['../../image/1首页/chanpin@2x.png', '山东烟台大樱桃', '88.99', '99.99', '228']
    ],
    collection:'收藏'
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
    wx.showToast({
      title: `切换到标签 ${event.detail.index + 1}`,
      icon: 'none'
    });
  },
  // 点击收藏
  collection(){
    if (this.data.collection=='收藏'){
      this.setData({
        collection:'已收藏'
      })
    }else{
      this.setData({
        collection: '收藏'
      })
    }
  },
  // 点击返回按钮
  onClickLeft() {
    wx.navigateBack({
      delta:1
    })
    wx.showToast({ title: '点击返回', icon: 'none' });
  },
})