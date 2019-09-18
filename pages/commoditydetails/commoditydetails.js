// pages/commoditydetails/commoditydetails.js
const https = require('../../utils/https.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgs:[],
    typeimg: ['../../image/img/m.png','../../image/img/pin.png'],
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
    autoplay: true,//轮播图是否自动切换
    interval: 4000,//自动切换时间间隔
    duration: 800,//滑动动画时长
    share:[
      {
        img:'../../image/img/weixin.png',
        title:'微信',
      },
      {
        img: '../../image/img/pengyouquan.png',
        title: '微信朋友圈',
      },
      {
        img: '../../image/img/fuzhilianjie.png',
        title: '复制连接',
      },
      {
        img: '../../image/img/erweima.png',
        title: '二维码',
      },
    ],
    show: false,// 分享弹框
    showpay: false,// 立即购买弹框
    goods_id:'0',// 商品id
    specifications:[],// 商品规格
    attr:[],//存商品规格信息
    gradeinof:false,// 
    key:0,
    value:1,
    addshopping:{
      goods_id:'',
      num:'',
      attr_id:'',
    },
    shopinfo: [],//商品价格信息,规格详情
    is_exemption:1,// 是否为免单
    goods_type:1,// 是否贫困 1显示贫图
    
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
      parameter:obj,
      goods_id: id,
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
        goods_type: res.data.goods_info.goods_type,// 是否贫困
        is_exemption: res.data.goods_info.is_exemption,// 是否为免单
      })
    },function(err){

    },'GET')
  },
  // 获取店铺详情
  getshoping(){
    wx.navigateTo({
      url: '/pages/shoping/shoping?sid='+this.data.sid,
    })
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
    
  },
  // 点击分享
  share(){
    this.setData({
      show:true
    })
  },
  // 关闭分享弹框和购买弹框
  onClose(){
    this.setData({
      show: false,
      showpay: false,
      specifications:[],
      attr:[],
      gradeinof:false
    })
  },
  // 获取规格接口
  getgoodsattr(){
    var that = this
    https.request('/Goods/getGoodsAttr', { goods_id: this.data.goods_id},'',function(res){
      console.log(res)
      that.setData({
        specifications: res.data.attrs_list
      })
    },function(err){

    },'GET')
  },
  // 规格详情接口
  getgoodsattrinfo(){
    var that = this;
    var arr=[];
    that.data.attr.map((val,key)=>{
      arr.push(val.zid)
    })
    var obj={
      goods_id: that.data.goods_id,
      attr_ids: arr
    }
    https.request('/Goods/getGoodsAttrInfo', obj, '', function (res) {
      //console.log(res)
      that.setData({
        shopinfo: res.data.info
      })
    }, function (err) {

    }, 'GET')
  },
  //点击购物车
  selfpurchase() {
    this.setData({
      showpay: true
    })
    this.getgoodsattr()
    this.getgoodsattrinfo()
  },
  // 选择规格
  getgrade(e){
    //console.log(e)
    var id = e.currentTarget.dataset.id;//子集id
    var fid = e.currentTarget.dataset.ids;//父级id
    var items = e.currentTarget.dataset.items;//父级item
    var arr = this.data.attr;//存进去的规格数组
    if (arr.length>0){
        var bol =true;
      arr.map((val,key)=>{
        if (val.id == fid){//如果当前父级规格存在数组里
          val.zid = id;
          bol=false
        }
      })

      if (bol) {//如果为true说明fid是新的
        items.zid = id;
        arr.push(items)
        this.setData({gradeinof:true})
      }
    }else{//第一次点击规格
      items.zid = id;
      arr.push(items)
    }
   

    //为了把attr数组里每项的zid赋值到对应specifications数字里的每项zid(按钮高亮部分)
    var arr1 = this.data.specifications;
    arr.map((valc,keyc)=>{
      arr1.map((valD,keyD)=>{
        if (valc.id == valD.id){
          valD.zid = valc.zid
        }
      })
    })
    //console.log('attr数组',arr)
    //console.log('specifications数组', arr1)
    this.setData({
      attr: arr,
      specifications: arr1
      })
   
    this.getgoodsattrinfo();
    
  },
  // 购买数量
  onChange(e){
    this.setData({
      value: e.detail
    })
  },
  // 点击确定
  getorder(){
    if (this.data.shopinfo.length==0){//如果为空数组说明没值返回
       
      return;
   }

    wx.navigateTo({
      url: '/pages/confirmationoforders/confirmationoforders?number=' + this.data.value + '&id=' + this.data.goods_id + '&attr=' + this.data.shopinfo.id,
    })
  },
  // 加入购物车
  addshopping(){
    var addshopping = this.data.addshopping
    addshopping.num = this.data.value
    addshopping.attr_id = this.data.shopinfo.id
    console.log(addshopping)
    addshopping.goods_id = this.data.goods_id
    this.setData({
      addshopping: addshopping,
      show: false,

    })
    https.request('/order/joinCart', this.data.addshopping,'',function(res){
      console.log(res)
    },function(err){

    },'GET')
  }
  
})