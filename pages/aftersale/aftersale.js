// pages/aftersale/aftersale.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img:'../../image/1首页/chanpin@2x.png',
    productname:'糍粑传统营养小食品',
    shopname:'阿甘食品店',
    money:'29.9',
    number:1,
    problem:'',
    problemnumber:0,
  },
  // 监听字数
  number(e){
    var length1=e.detail.cursor
    var problem = e.detail.value
    this.setData({
      problemnumber: length1,
      problem: problem
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