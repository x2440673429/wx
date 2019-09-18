// pages/confirmationoforders/confirmationoforders.js
const https = require('../../utils/https.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: '收货地址：福建省思明区软件园二期观日路30号之六508B',
    username: '李思思',
    phone: '13646005163',
    shop: {}, // 商品信息
    store_name: '', // 商户名称
    sid: '', // 商户id
    coupon_num:0, // 优惠卷数量
    calculate_info: '',// 例：共1件商品 合计：￥137", 
    address_info:{},// 收货地址
    allnumber:2,
    allmoney:280,
    parameter:{
      goods_id:'',
      num:'',
      attr_id:'',
    },
    wxpay:true,// 微信付款
    balance: false,// 余额付款
    value:'',//卖家留言
    goOrder:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var obj = this.data.parameter
    obj.num = options.number
    obj.goods_id = options.id
    obj.attr_id = options.attr
    this.setData({
      parameter:obj
    })
    this.getcheckorderinof()
    //
    console.log(option.query)
    const eventChannel = this.getOpenerEventChannel()
    eventChannel.emit('acceptDataFromOpenedPage', { data: 'confirmationoforders' });
    eventChannel.emit('someEvent', { data: 'confirmationoforders' });
    // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
    eventChannel.on('acceptDataFromOpenerPage', function (data) {
      console.log(data)
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
  // 选择收货地址
  getaddress(){
    wx.navigateTo({
      url: '/pages/address/address',
    })
  },
  // 确认订单列表
  getcheckorderinof(){
    var that = this 
    https.request('/Order/checkOrderInfo', this.data.parameter,'加载中...',function(res){
      console.log(res)
      that.setData({
        shop: res.data.goods_info,
        store_name: res.data.store_name,
        sid: res.data.sid,
        coupon_num: res.data.coupon_num,
        calculate_info: res.data.calculate_info,
        address_info: res.data.address_info
      })
    },function(err){

    },'GET')
  },
  // 点击选择付款方式
  payfor(){
    console.log(11223)
    if (this.data.wxpay){
      this.setData({
        wxpay: false,
        balance: true
      })
    }else{
      this.setData({
        wxpay: true,
        balance: false,
      })
    }
   
  },
  // 卖家留言
  txt(e){
    console.log(e)
    this.setData({
      value:e.detail.value
    })
  },
})