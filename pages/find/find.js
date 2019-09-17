// pages/find/find.js
const https = require('../../utils/https.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    content:{
      page:1,
      page_size:10,
    },
    indicatorDots: false,// 轮播图白点不显示
    autoplay: true,//轮播图是否自动切换
    interval: 4000,//自动切换时间间隔
    duration: 800,//滑动动画时长
    swiperCurrent: 0,//白点显示高光
    banner:[],// 轮播图
    nav: [],// 新品体验馆等nav
    articlelis:[],// 文章列表
    total:0,// 列表总数
  },
  // 跳转文章详情
  getArticle(e){
    var to_url = e.currentTarget.dataset.tourl
    var id = e.currentTarget.dataset.id
    var url = '/pages/articledetails/articledetails' + '?id=' + id
    wx.navigateTo({
      url: url,
    })
  },
  // 跳转营销研究院等
  getnav(e){
    var to_url = e.currentTarget.dataset.tourl
    var id = e.currentTarget.dataset.id
    var url = '/pages/marketing/marketing' + '?id=' + id
    //console.log(e)
      wx.navigateTo({
        url: url
      })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getfindlist()
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
    let obj = this.data.content
    
    obj.page++
    this.setData({
      content:obj
    })
    if (this.data.articlelis.length==this.data.total){
      return
    }else{
      this.getfindlist()
    }
   
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  // 获取发现页面内容
  getfindlist(){
    var that = this 
    https.request('/article/getFindArticle', this.data.content, '加载中...', function (res) {
      console.log(res)
      var newlist = that.data.articlelis.concat(res.data.list)
      that.setData({
        banner:res.data.banner, // 轮播图
        articlelis: newlist,// 文章列表
        nav: res.data.picList,// 新品体验馆
        total:res.data.total
      })
    }, function (err) {
      //console.log(err)
    })
  },
  // 获取分页内容
  getnextpage(){

    this.getfindlist()
  },
})