// pages/search/search.js
const https = require('../../utils/https.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value:'',
    active: 0,
    productinof:[],
    parameter:{
      min_price:'',
      max_price:'',
      page:'1',
      pagesize:'10',
      is_new:'0',
      sales_num_type:'0',
      search_key:'',
      price_type:'0'
    },
    total:0,
  },
  // 改变Tab标签页
  onChange(event) {
    console.log(event)
    var obj = this.data.parameter
    if (event.detail.title =='销售'){
      obj.sales_num_type = '2'
      this.setData({
        parameter: obj,
        productinof: []
      })
    }  if (event.detail.title == '新品'){
      obj.is_new = '1'
      this.setData({
        parameter: obj,
        productinof: []
      })
    }  if (event.detail.title == '价格') {
      obj.price_type = '1'
      this.setData({
        parameter: obj,
        productinof: []
      })
    } 
    if (event.detail.title == '综合') {
      this.setData({
        productinof: []
      })
    }
    this.getsearchlist()
  },
  // 搜索内容
  getvalue(e){
    console.log(e)
    this.setData({
      value: e.detail.value
    })
  },
  // 搜索
  search(){
    var obj = this.data.parameter
    obj.search_key = this.data.value
    this.setData({
      parameter:obj,
      productinof:[]
    })

    this.getsearchlist()
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var obj = this.data.parameter
    obj.search_key = options.search_key
    this.setData({
      value: options.search_key,
      parameter:obj
    })
    this.getsearchlist()
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
  // 获取搜索产品列表
  getsearchlist(){
    var that = this
    https.request('/goods/searchGoods', this.data.parameter,'加载中...',function(res){
      console.log(res)
      var productinof = that.data.productinof.concat(res.data.list)
      that.setData({
        productinof: productinof,
        total: res.data.total
      })
    },function(err){

    })
  },
  // 上拉触底加载更多
  onReachBottom(){
    var obj = this.data.parameter
    obj.page++
    this.setData({
      parameter:obj
    })
    if (this.data.productinof.length == this.data.total){
      return
    }else{
      this.getsearchlist()
    }
    
  }
})