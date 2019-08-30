// pages/viewlogistics/viewlogistics.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    productimg:'../../image/1首页/chanpin@2x.png',
    company:'韵达快运',
    ordernumber:'355463215643213',
    phone:'95546',
    active:0,
    steps:[
      {
        text: '在浙江台州分拨中心，进行装车扫描，即将发往：福建晋江分拨中心',
        desc: '2018-06-04 20:48:34'
      },
      {
        text: '在浙江台州分拨中心，在分拨中心进行称重扫描',
        desc: '2018-06-04 20:48:34'
      },
      {
        text: '在浙江台州路桥区公司，进行下级地点扫描，将发往厦门分拨中心',
        desc: '2018-06-04 20:48:34'
      },
      {
        text: '在浙江台州路桥区公司，进行揽件扫描',
        desc: '2018-06-04 20:48:34'
      },
    ]
  },
  // 拨打官方电话
  makephone(){
    var that=this
    wx.makePhoneCall({
      phoneNumber: that.data.phone //仅为示例，并非真实的电话号码
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