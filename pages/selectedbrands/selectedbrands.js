// pages/selectedbrands/selectedbrands.js
const https = require('../../utils/https.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    product:[
      {
        productname: '手工麻薯小吃永春麻糍糯米',
        text: `[扶农][顺风配送]手工麻薯小吃永春麻糍糯米(4斤盒装 250- 300g)`,
        money: 99,
        addmoney: 10
      },
      {
        productname: '手工麻薯小吃永春麻糍糯米',
        text: `[扶农][顺风配送]手工麻薯小吃永春麻糍糯米(4斤盒装 250- 300g)`,
        money: 99,
        addmoney: 10
      },
      {
        productname: '手工麻薯小吃永春麻糍糯米',
        text: `[扶农][顺风配送]手工麻薯小吃永春麻糍糯米(4斤盒装 250- 300g)`,
        money: 99,
        addmoney: 10
      },
    ],
    brandname:  "雅诗兰黛/Estee Lauder",
    number:93,
    parameter:{
      class_id:'',
      search_key:'',
      type:'',
      page:'1',
      pagesize:'10',
    },
    title:'',
    top_info:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //console.log(options)
    let obj = this.data.parameter
    obj.class_id = options.id
    // obj.search_key = options.name
    obj.type = options.type
    this.setData({
      parameter:obj
    })
    this.getproductlist()
    
    
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
  // 获取产品列表内容
  getproductlist(){
    var that = this
    https.request('/goods/searchClassGoods', this.data.parameter, '加载中...', function (res) {
      console.log(res)
      for (var i = 0; i < res.data.list.length; i++) {
        var tag = res.data.list[i].customer_tag.split(',')
        res.data.list[i].customer_tag = tag
      }
      that.setData({
        total: res.data.total,
        title: res.data.top_title,
        product: res.data.list,
      })
      if (that.data.parameter.type==1){
        that.setData({
          top_info: res.data.top_info.brand_info 
        })
      }else{
        that.setData({
          top_info:  res.data.top_info.class_info
        })
      }
      // 标题名称
      wx.setNavigationBarTitle({
        title: that.data.title,
      })
      
    }, function (err) {

    })
  }
})