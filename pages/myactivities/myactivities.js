// pages/myactivities/myactivities.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activity:[
      {
        leftimg:'../../image/img/pintuandingdan.png',
        leftname:'拼团订单',
        lefturl: '/pages/clusterorder/clusterorder',
        rightimg:'../../image/img/kanjiadingdan.png',
        rightname:'砍价订单',
        righurl:"/pages/Bargainorders/Bargainorders"
      },
      {
        leftimg: '../../image/img/zhongchoudingdan.png',
        leftname: '众筹订单',
        lefturl: '/pages/Theraiseorders/Theraiseorders',
        rightimg: '../../image/img/quanfandingdan.png',
        rightname: '全返订单',
        righurl: "/pages/myorder/myorder"
      },
    ]
  },
  getorder(e){
    console.log(e)
    var url = e.currentTarget.dataset.url
    wx.navigateTo({
      url: url,
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