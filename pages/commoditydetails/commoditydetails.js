// pages/commoditydetails/commoditydetails.js
const https = require('../../utils/https.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgs:[],
    typeimg: ['../../image/1首页/m.png','../../image/1首页/pin@2x.png'],
    img: '../../image/1首页/morenshangpin@2x.png',
    shopname: '山东烟台大樱桃车厘子新鲜水果',
    text: '[扶农]民勤大樱桃',
    money: '99.98',
    oldmoney: '190.99',
    number: '4565',
    address: '福建省厦门市湖里区高薪技术园',
    sid:'',//店铺id
    join_cart: 0,//是否抢购
    house_id:0,
    is_flash_sale:0,
    flash_sale_time:0,
    evaluate_info:[],
    evaluate_total:0,
    is_collect:0,
    details: '',// 商品详情
    parameter:{
      fid:'',
      ftype:'0',
      handle_type:'1',
    },
   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    var id = options.id
    this.geiproductinfo(id)
    //this.geiproductattrs(id)
    var obj = this.data.parameter
    obj.fid = id
    this.setData({
      parameter:obj
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
  // 获取商品详情内容
  geiproductinfo(id){
    var that = this
    https.request('/Goods/getGoodsDetail', { goods_id: id},'加载中...',function(res){
      console.log(res)
      that.setData({
        shopname: res.data.goods_info.title,//商品名称
        money: res.data.goods_info.price,//商品售价
        oldmoney: res.data.goods_info.original_price,//商品原价
        text: res.data.goods_info.short_title,//商品详细信息
        sid: res.data.goods_info.sid,//店铺id
        img: res.data.goods_info.pic,//封面图
        imgs: res.data.goods_info.pics,//轮播图
        number: res.data.goods_info.stock,//库存
        join_cart: res.data.goods_info.join_cart,//是否允许加入购物车
        min_buy: res.data.goods_info.min_buy,//单次对少购买量
        max_buy: res.data.goods_info.max_buy,//单次购买最高数量
        house_id: res.data.goods_info.house_id,//商品所属馆id
        quality_type: res.data.goods_info.quality_type,//商品品质：1-精准扶农 2-振兴乡村 3-品质生活
        is_flash_sale: res.data.goods_info.is_flash_sale,//是否正进行限时抢购(0否1是)
        flash_sale_time: res.data.goods_info.flash_sale_time,//抢购剩余时间(时间戳形式)
        evaluate_info: res.data.goods_info.evaluate_info.list,//评价总数
        evaluate_total: res.data.goods_info.evaluate_info.total,//评价列表
        is_collect: res.data.goods_info.is_collect,//是否收藏
        details: res.data.goods_info.details,// 商品详情
        // shopname: res.data.goods_info.title,//商品名称
        // shopname: res.data.goods_info.title,//商品名称
        // shopname: res.data.goods_info.title,//商品名称
        // shopname: res.data.goods_info.title,//商品名称
      })
    },function(err){

    },'GET')
  },
  // 获取商品规格
  // geiproductattrs(id){
  //   var that = this
  //   https.request('/Goods/getGoodsAttr',{goods_id:id},'加载中...',function(res){
  //     console.log(res)
      
  //   },function(err){

  //   },'GET')
  //},
  // 获取店铺详情
  getshoping(){
    wx.navigateTo({
      url: '/pages/shoping/shoping?sid='+this.data.sid,
    })
  },
  //点击购物车
  selfpurchase(){
    
  },
  // 点击收藏
  collection(){
     var that = this
    if (this.data.is_collect==0){
      let obj = that.data.parameter
      obj.handle_type = '1'
      that.setData({
        is_collect:1,
        parameter: obj
      })

      https.request('/user/usercollect', that.data.parameter, '加载中...', function (res) {
        console.log(res)
      }, function (err) {

      })
     }else{
      let obj = that.data.parameter
      obj.handle_type = '0'
      that.setData({
        is_collect: 0,
        parameter: obj
      })

      https.request('/user/usercollect', that.data.parameter, '加载中...', function (res) {
        console.log(res)
      }, function (err) {

      })
     }
    
  }
})