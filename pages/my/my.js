// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nickname:'李思思',
    balance:'0.00',
    number:16,
    items:[
      {
        img:'../../image/img/shenqingdianpu.png',
        title:'申请店铺',
        url: "/pages/applystore/applystore",
      },
      {
        img: '../../image/img/shehuizhuzhirenzheng.png',
        title: '社会组织认证',
        url: "/pages/socialorganization/socialorganization",
      },
      {
        img: '../../image/img/shehuizhuzhirenzheng.png',
        title: '代言中心',
        url: "/pages/endorsementcenter/endorsementcenter",
      },
      {
        img: '../../image/img/wodepingjia.png',
        title: '我的评价',
        url: "/pages/myevaluate/myevaluate",
      },
      {
        img: '../../image/img/wodehuodong.png',
        title: '我的活动',
        url: "/pages/myactivities/myactivities",
      },
      {
        img: '../../image/img/wodelibao.png',
        title: '我的礼包',
        url: "/pages/mygiftbag/mygiftbag",
      },
      {
        img: '../../image/img/wodeshoucang.png',
        title: '我的收藏',
        url: "/pages/collection/collection",
      },
      {
        img: '../../image/img/liulanjilu.png',
        title: '浏览记录',
        url: "/pages/browserecords/browserecords",
      },
    ],
    item2:[
      {
        title:'系统消息',
        img:'../../image/img/xx.png',
        url: "/pages/systemmessage/systemmessage",
      },
      {
        title: '问题反馈',
        img: '../../image/img/wentifankui.png',
        url: "/pages/feedback/feedback",
      },
      {
        title: '帮助中心',
        img: '../../image/img/wodekefu.png',
        url: "/pages/help/help",
      },
      {
        title: '关于我们',
        img: '../../image/img/guanyuwomen.png',
        url: "/pages/aboutus/aboutus",
      },
      {
        title: '设置中心',
        img: '../../image/img/shezhizhongxin.png',
        url: "/pages/setfocus/setfocus",
      },
    ],
    order:[
      {
        img:'../../image/img/quanbu.png',
        title:'全部',
      },
      {
        img: '../../image/img/daifukuan.png',
        title: '待付款',
      },
      {
        img: '../../image/img/daifahuo.png',
        title: '待发货',
      },
      {
        img: '../../image/img/daishouhuo.png',
        title: '待收货',
      },
      {
        img: '../../image/img/daipinjia.png',
        title: '待评价',
      },
    ]
  },
  // 跳转余额
  getbalance(){
    wx.navigateTo({
      url: '/pages/balance/balance?balance=' + this.data.balance,
    })
  },
  // 跳转优惠劵
  getyhj(){
    wx.navigateTo({
      url: "/pages/preferentialoffer/preferentialoffer",
    })
  },
  // 申请店铺浏览记录等页面
  gotopage(e){
    var url = e.currentTarget.dataset.item.url
    wx.navigateTo({
      url: url,
    })
 
  },
  // 跳转对应的页面
  getinfo(e){
    console.log(e)
    var url = e.currentTarget.dataset.item.url
    wx.navigateTo({
      url: url,
    })
  },
  // 订单
  order(e){
    console.log(e)
    var number = e.currentTarget.dataset.number
    wx.navigateTo({
      url: '/pages/myorder/myorder?number='+number,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中',
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 2000)
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
  // 点击获取个人资料
  getmyinfo(){
    wx.navigateTo({
      url: '/pages/accountsettings/accountsettings',
    })
  },
  // 点击去升级礼包
  getgift(){
    wx.navigateTo({
      url: '/pages/upgradepackage/upgradepackage',
    })
  }
})