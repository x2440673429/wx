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
    value:'',//卖家留言
    goods_id:'',
    show:false,
    amount:'',
    goods_amount:'',
    dispatch_price:'',
    coupon_money:'',
    pay_amount:'',
    yhq:[],// 优惠券
    paytype:'wx',// 支付方式
    choiceyhq:'',
    shopindex:'',
    num:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('数据',options)
    var obj = this.data.parameter
    obj.num = options.number
    obj.goods_id = options.id
    obj.attr_id = options.attr
    this.setData({
      parameter:obj,
      goods_id: options.id,
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
    this.getcheckorderinof()
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
      console.log(that.data.parameter)
      that.setData({
        shop: res.data.goods_info,
        address_info: res.data.address_info
      })
      that.calculatedprice();//计算价格
      that.getnumber()// 计算数量
    },function(err){

    },'GET')
  },


// 计算数量
getnumber(){
  var num = 0
  this.data.shop.map((val,key) => {
    console.log('数量',val)
    val.goods_info.map((value,index) => {
      
      var number = Number(value.num)
      console.log(number)

      num += number
    })
  })
  this.setData({
    num: num
  })
},



  // 点击选择付款方式
  payfor(e){
    var type = e.currentTarget.dataset.type
   // console.log(11223)
  //   if (type == this.data.paytype){
  //     type=''
  //  }
   this.setData({
     paytype: type
   })
    // if (this.data.wxpay){
    //   this.setData({
    //     wxpay: false,
    //     balance: true
    //   })
    // }else{
    //   this.setData({
    //     wxpay: true,
    //     balance: false,
    //   })
    // }
   
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
    var sid = e.currentTarget.dataset.sid
    var money = e.currentTarget.dataset.money
    var key = e.currentTarget.dataset.key
    this.setData({
      show:true,
      shopindex: key
    })
   
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
    var  couponid =''
    if (this.data.yhq[this.data.choiceyhq]){
       couponid = this.data.yhq[this.data.choiceyhq].id;
    }else{
      this.setData({
        show: false,
   
      })
    }
   
    
      var arr = this.data.shop;
      arr[this.data.shopindex].coupon_id = couponid
      console.log(couponid)
      this.setData({
        show: false,
        shop: arr
      })
      this.calculatedprice()
  
    
  },



  // 计算价格
  calculatedprice(){
    var obj = { 
        goods_info:[],//所有商品信息集合
      }
    this.data.shop.map((val,key)=>{//遍历所有门店
      var shoparr=[];
      val.goods_info.map((valC,keyC)=>{//遍历某个商店所有商品
          var comobj={};
          comobj.goods_id = valC.goods_id;
          comobj.num = valC.num;
          comobj.attr_id = valC.attr_id;
        shoparr.push(comobj)
      })
      obj.goods_info.push({ goods: shoparr, coupon_id: val.coupon_id ? val.coupon_id:''})
    })
    var that = this
    console.log(8989898, obj)
    https.request('/order/calculateOrder', obj,'加载中...',function(res){
      //console.log(res)
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
    var type = e.currentTarget.dataset.index
    if (type === this.data.choiceyhq){
      this.setData({
        choiceyhq: '',
      })
    }else{

      this.setData({
        choiceyhq: type,
      })
    }
  }
})