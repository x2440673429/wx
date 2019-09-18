// pages/padetailspage/padetailspage.js
const https = require('../../utils/https.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopname:'手工麻薯小吃永春麻糍糯米',
    shoptext: '[扶农][顺风配送]手工麻薯小吃永春麻糍糯米(4斤盒装 250 - 300g)',
    surplus_time:'',//众筹剩余时间
    supportnumber:'90',
    moneynumber:'10233',//以筹金额
    reachnumber:'22',// 达成率
    details:'',//众筹故事
    username:'昵***称',
    text:'很甜很大个，很满意',
    commenttime:'2018-05-30',
    allnumber:32,
    show:false,
    grade_count:'',//档位总数
    goods_grade:[],//档位信息
    indicatorDots: false,// 轮播图白点不显示
    autoplay: true,//轮播图是否自动切换
    interval: 4000,//自动切换时间间隔
    duration: 800,//滑动动画时长
    banner: [],// 轮播图
    goods_id:'',// 调接口传值商品id是不是冲上个页面传过来的嗯
    value:0,
    key:0,
  },
  // 去支付按钮
  gotopay(){
    this.setData({
      show:true,
    })
  },
  // 关闭弹窗
  onClose(){
    this.setData({
      show: false,
    })
  },
  //  支持数量
  onChange(e){
    this.setData({
      value: e.detail
    })
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getpadetailspage(options.id)
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
  // 获取商品详情
  getpadetailspage(id){
    var that = this
    https.request('/Crowd/getGoodsDetail', { goods_id: id},'加载中...',function(res){
      console.log(res)
      that.setData({
        shopname: res.data.goods_info.title,
        shoptext: res.data.goods_info.short_title,
        surplus_time: res.data.goods_info.surplus_time,
        moneynumber: res.data.goods_info.crowd_funding_money,
        reachnumber: res.data.goods_info.crowd_rate,
        details: res.data.goods_info.details,
        banner: res.data.goods_info.pics,
        grade_count: res.data.goods_info.grade_count,
        goods_grade: res.data.goods_info.goods_grade
      })
    },function(err){

    },'GET')
  },
  // 选择档位
  getgrade(e){
    this.setData({
      key: e.currentTarget.dataset.index
    })
  },
  // 点击去支持，获得订单
  getorder(){
    wx.navigateTo({
      url: '/pages/order/order?number=' + this.data.value,
    })
  },
  // 评论
  iwantsay(){
    wx.navigateTo({
      url: '/pages/evaluate/evaluate',
    })
  }
})