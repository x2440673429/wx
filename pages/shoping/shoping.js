// pages/shop/shop.js
const https = require('../../utils/https.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    shopingname:'',//店铺名称
    shopnumber: '',//销售量
    scnumber: '',//收藏量
    notice: '',//店铺公告
    pic: '',//店铺logo
    business_logo: '',//店铺营业执照
    contacts_phone: '',//店铺电话
    address:'',//店铺地址
    list: [],
    total:'',//商品总数
    collect:0,//是否收藏
    is_self:0,// 是否本人店铺
    parameter:{// 店铺详情页
      sid:'',
      user_token:'',
    },
    parameterpage:{//店铺商品列表
      page:'1',
      pagesize:'10',
    },
    onchangecollect:{// 收藏
      fid:'',
      ftype:'1',
      handle_type:'',
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var obj = this.data.parameter
    obj.sid = options.sid
    var arr = this.data.onchangecollect
    arr.fid = options.sid
    this.setData({
      parameter: obj,
      onchangecollect:arr
    })
    this.getshopinginfo()
    this.getshopinglist()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  onChange(event) {
    wx.showToast({
      title: `切换到标签 ${event.detail.index + 1}`,
      icon: 'none'
    });
  },
  // 点击收藏
  collection(){
    if (this.data.collect==0){
      var obj = this.data.onchangecollect
      obj.handle_type = '1'
      this.setData({
        collect:1,
        onchangecollect:obj
      })
      https.request('/user/usercollect', this.data.onchangecollect, '加载中...', function (res) {
        console.log(res)
      }, function (err) {
      })
    }else{
      var obj = this.data.onchangecollect
      obj.handle_type = '0'
      this.setData({
        collect: 0,
        onchangecollect: obj
      })
      https.request('/user/usercollect', this.data.onchangecollect, '加载中...', function (res) {
        console.log(res)
      }, function (err) {
      })
    }
  },
  // 点击返回按钮
  onClickLeft() {
    wx.navigateBack({
      delta:1
    })
    wx.showToast({ title: '点击返回', icon: 'none' });
  },
  // 获取店铺详情
  getshopinginfo(){
    var that = this
    console.log(this.data.parameter)
    https.request('/store/storeInfo', this.data.parameter,'加载中...',function(res){
      console.log(res)
      that.setData({
        shopingname: res.data.info.name,//店铺名称
        shopnumber: res.data.info.sale_num,//销售量
        scnumber: res.data.info.collect_num,//收藏量
        notice: res.data.info.notice,//店铺公告
        pic: res.data.info.pic,//店铺logo
        business_logo: res.data.info.business_logo,//店铺营业执照
        address: res.data.info.address,//店铺地址
        contacts_phone: res.data.info.contacts_phone,//店铺电话
        collect: res.data.is_collect,//是否收藏
        is_self: res.data.is_self,//是否是自己的店铺
      })
    },function(err){

    },'GET')
  },
  //获取店铺商品列表
  getshopinglist(){
    var that = this
    var data = this.data.parameter
    var data1 = this.data.parameterpage
    var params = Object.assign(data, data1);//合并对象
    https.request('/store/storeGoodsList', params, '加载中...', function (res) {
      console.log(res)
      var list = res.data.list
      var lists = that.data.list.concat(list)
      that.setData({
        list: lists,
        total: res.data.total
      })
    }, function (err) {

    }, 'GET')
  },
  //上拉触底加载更多
  onReachBottom(){
    var obj = this.data.parameterpage
    obj.page++
    this.setData({
      parameterpage:obj
    })
    if (this.data.list.length == this.data.total){
      return
    }else{
      this.getshopinglist()
    }
    
    
  }
  
})