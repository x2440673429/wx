// pages/highqualityorigin/highqualityorigin.js
const https = require('../../utils/https.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active:0,
    citys: ['北京市','天津市','上海市','重庆市','河北省','山西省','辽宁省','吉林省','黑龙江','江苏省','浙江省','安徽省','福建省','江西省','山东省','河南省','湖北省','湖南省','广东省','海南省','四川省','贵州省','云南省','陕西省','甘肃省','青海省','台湾省','内蒙古','广西','西藏','宁夏','新疆','香港','澳门'],
    product: [
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
    parameter: {
      class_id: '',
      search_key: '',
      type: '',
      page: '1',
      pagesize: '10',
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   // console.log(options)
    let obj = this.data.parameter
    obj.class_id = options.id
    obj.search_key = options.name
    obj.type = options.type
    this.setData({
      parameter: obj
    })
   
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
  // 获取地区产品列表
  getaddresslist(){
    var that = this
    https.request('/goods/searchClassGoods', this.data.parameter, '加载中...', function (res) {
      //console.log(res)
      that.setData({
        citys: res.data.top_info.place_info,
        product: res.data.list
      })
    }, function (err) {

    })
  }
})