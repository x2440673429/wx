// pages/order/order.js
const https = require('../../utils/https.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: '收货地址：福建省思明区软件园二期观日路30号之六508B',
    username:'李思思',
    phone:'13646005163',
    value:'',
    shop:{},
    read:0,// 协议 1未选中。0 选中
    paytype:'wx',
    arrival:{},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      arrival: options
    })
    this.getorderinfo(options)
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
  // 点击是否选中协议
  getread(){
    if (this.data.read){
      this.setData({
        read:0
      })
    }else{
      this.setData({
        read: 1
      })
    }
  },
  // 付款方式
  paymentmethod(e){
    this.setData({
      paytype: e.currentTarget.dataset.paytype
    })
  
  },
  //选择收货地址
  getaddress(){
    wx.navigateTo({
      url: '/pages/address/address',
    })
  },
  // 获取订单详情
  getorderinfo(parameter){
    var that = this
    https.request('/Crowd/checkOrderInfo', parameter,'加载中...',function(res){
      console.log(res)
      that.setData({
        shop:res.data,
      })
    },function(err){

    },'GET')
  },
  // 卖家留言
  txt(e){
    console.log(e)
    this.setData({
      value: e.detail.value
    })
  },
  // 付款
  payment(){
    if (this.data.read==1){
      wx.showToast({
        title: '请阅读并同意《支持者协议》',
        icon: 'none',
        duration: 1000
      })
    } else if (this.data.shop.address_info.has_address==0){
      wx.showToast({
        title: '请添加收货地址',
        icon: 'none',
        duration: 1000
      })
    }else{
      this.addOrder()
    }

    
    
  },
  // 付款接口
  addOrder(){
    var that = this 
    var obj = {
      address_id: this.data.shop.address_info.address.id,
      remark:this.data.value,
    }
    var params = Object.assign(obj, this.data.arrival);//合并对象
    https.request('/crowd/addOrder', params,'加载中...',function(res){
      console.log(res)
    },function(err){

    },'GET')
  }
  
})