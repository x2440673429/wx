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
        img:'../../image/4我的/shenqingdianpu@2x.png',
        title:'申请店铺',
      },
      {
        img: '../../image/4我的/shehuizhuzhirenzheng@2x.png',
        title: '社会组织认证',
      },
      {
        img: '../../image/4我的/shehuizhuzhirenzheng@2x.png',
        title: '代言中心',
      },
      {
        img: '../../image/4我的/wodepingjia@2x.png',
        title: '我的评价',
      },
      {
        img: '../../image/4我的/wodehuodong@2x.png',
        title: '我的活动',
      },
      {
        img: '../../image/4我的/wodelibao@2x.png',
        title: '我的礼包',
      },
      {
        img: '../../image/4我的/wodeshoucang@2x.png',
        title: '我的收藏',
      },
      {
        img: '../../image/4我的/liulanjilu@2x.png',
        title: '浏览记录',
      },
    ],
    item2:[
      {
        title:'系统消息',
        img:'../../image/4我的/xiaoxi.png',
      },
      {
        title: '问题反馈',
        img: '../../image/4我的/wentifankui@2x.png',
      },
      {
        title: '帮助中心',
        img: '../../image/4我的/wodekefu@2x.png',
      },
      {
        title: '关于我们',
        img: '../../image/4我的/guanyuwomen@2x.png',
      },
      {
        title: '设置中心',
        img: '../../image/4我的/shezhizhongxin@2x.png',
      },
    ],
    order:[
      {
        img:'../../image/4我的/quanbu@2x.png',
        title:'全部',
      },
      {
        img: '../../image/4我的/daifukuan@2x.png',
        title: '待付款',
      },
      {
        img: '../../image/4我的/daifahuo@2x.png',
        title: '待发货',
      },
      {
        img: '../../image/4我的/daishouhuo@2x.png',
        title: '待收货',
      },
      {
        img: '../../image/4我的/daipinjia@2x.png',
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
    var num = e.currentTarget.dataset.number
    if (num == 0) {
      wx.navigateTo({
        url: "/pages/applystore/applystore",
      })
    } else if (num == 1){
      wx.navigateTo({
        url: "/pages/socialorganization/socialorganization",
      })
    }else if (num == 2) {
      wx.navigateTo({
        url: "/pages/endorsementcenter/endorsementcenter",
      })
    }else if (num == 3) {
      wx.navigateTo({
        url: "/pages/myevaluate/myevaluate",
      })
    }else if (num == 4) {
      wx.navigateTo({
        url: "/pages/myactivities/myactivities",
      })
    }else if (num == 5) {
      wx.navigateTo({
        url: "/pages/mygiftbag/mygiftbag",
      })
    }else if (num == 6) {
      wx.navigateTo({
        url: "/pages/socialorganization/socialorganization",
      })
    } else if (num == 7) {
      wx.navigateTo({
        url: "/pages/browserecords/browserecords",
      })
    }
  },
  // 跳转对应的页面
  getinfo(e){
    var num = e.currentTarget.dataset.number
    if (num == 0) {
      wx.navigateTo({
        url: "/pages/systemmessage/systemmessage" ,
      })
    } else if (num==4){
      wx.navigateTo({
        url: "/pages/setfocus/setfocus",
      })
    }
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

  }
})