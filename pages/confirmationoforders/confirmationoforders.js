// pages/confirmationoforders/confirmationoforders.js
const time = require('../../utils/util.js')
const https = require('../../utils/https.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: '收货地址：福建省思明区软件园二期观日路30号之六508B',
    username: '李思思',
    phone: '13646005163',
    shop: [], // 商品信息
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
    goods_id:'',
    price: {
      
        coupon_id: '',
        goods_info: [
          {
            goods_id: '',
            num: '',
            attr_id: '',
          }
        ],
      // goods_info: {
      //   {
      //     goods: [{
      //       {
      //         goods_id: '',
      //         num: '',
      //         attr_id: '',
      //       }
      //     },
      //     coupon_id: '',
      //   },
      
      // }
    },
    show:false,
    amount:'',
    goods_amount:'',
    dispatch_price:'',
    coupon_money:'',
    pay_amount:'',
    yhq:[],// 优惠券
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var obj = this.data.parameter
    obj.num = options.number
    obj.goods_id = options.id
    obj.attr_id = options.attr
    // 计算价格
    var arr = this.data.price
    // arr.goods_info.map((val,key)=>{
    //   console.log(val)
    //   val.goods.map((txt,index)=>{
    //     console.log(txt)
    //     txt.goods_id = options.id
    //     txt.num = options.number
    //     txt.attr_id = options.attr
    //   })
    // })
    arr.goods_info[0].goods_id = options.id
    arr.goods_info[0].num = options.number
    arr.goods_info[0].attr_id = options.attr

    this.setData({
      parameter:obj,
      goods_id: options.id,
      price: arr
    })
    this.getcheckorderinof()

 

    this.calculatedprice()
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
      // console.log(res)
      that.setData({
        shop: res.data.goods_info,
        address_info: res.data.address_info
      })
    },function(err){

    },'GET')
  },
  // 点击选择付款方式
  payfor(){
   // console.log(11223)
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
    //console.log(e)
    this.setData({
      value:e.detail.value
    })
  },
  // 优惠券确认接口
  getyhqlist(sid,money){
    var that = this
    var pic = money.substr(-3,)
    var goods_ids=[]
    goods_ids.push(this.data.goods_id)
   var id =  sid.toString()
    let obj={
      sid: id,
      goods_ids: goods_ids,
      money: pic
    }
    console.log(999,obj)
    https.request('/order/getCouponList', obj,'加载中...',function(res){
      console.log(res)
      that.setData({
        yhq:res.data.list
      })
    },function(err){

    },'')
  },
  // 选择优惠券
  choice(e){
    this.setData({
      show:true
    })
    var sid = e.currentTarget.dataset.sid
    var money = e.currentTarget.dataset.money
    this.getyhqlist(sid,money)
  },
  // 关闭优惠券弹框
  onClose(){
    this.setData({
      show: false
    })
  },
  // 确认按钮
  confirm(){
    this.setData({
      show: false
    })

  },



  // 计算价格
  calculatedprice(){
    var that = this
    https.request('/order/calculateOrder', this.data.price,'加载中...',function(res){
      console.log(res)
      that.setData({
        amount: res.data.amount,// 订单总金额
        coupon_money: res.data.coupon_money,//优惠券抵扣金额
        dispatch_price: res.data.dispatch_price,//运费
        goods_amount: res.data.goods_amount,//商品总金额
        pay_amount: res.data.pay_amount,//应支付费用
      })
    },function(err){

    },'GET')
  },
  // 点击付款
  payment(){
    var time = time.formatTime(data())
    console.log(time)
    wx.requestPayment({
      timeStamp: '',
      nonceStr: '',
      package: '',
      signType: 'MD5',
      paySign: '',
      success(res) { },
      fail(res) { }
    })
  },
  // 点击选择优惠券
  choiceyhq(e){
    var yhqid = e.currentTarget.dataset.yhqid
  }
})