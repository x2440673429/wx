//index.js
//获取应用实例
const app = getApp()
const https = require("../../utils/https.js")

Page({
  data: {
    columnlist: ['column1', 'column2', 'column3', 'column4'],// 调接口传的值
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    active:0,// 首页顶部tab标签页的高光
    indicatorDots: false,// 轮播图白点不显示
    autoplay: true,//轮播图是否自动切换
    interval: 4000,//自动切换时间间隔
    duration: 800,//滑动动画时长
    swiperCurrent: 0,//白点显示高光
    active1:0,//精准抚农地区馆高光
    image: [],// 轮播图
    // 推荐
    nav: [],// 新人特惠nav tab页
    navurl: [ '/pages/Discount/Discount', 
              '/pages/assemble/assemble', 
              '/pages/flashsale/flashsale', 
              '/pages/povertyalleviation/povertyalleviation', 
              '/pages/assistancewaiver/assistancewaiver'],// 新人特惠nav tab跳转对应页面
    shop: [],//热卖店铺等
    jump: [ '/pages/shop/shop', 
            '/pages/Selection/Selection', 
            '/pages/flashsale/flashsale', 
            '/pages/Discount/Discount'],//热卖店铺等4个对应跳转的页面
    sellwellbox: [],//热销
    sign: 0,//购物车右上角红色标记显示
    // 精准抚农
    addressnva:[],//地区tab页
    activity:'',//地方特色扶农logo
    activitylist: [],//地方特色扶农广告
    specialty: [],//特色扶农馆产品
    //振兴乡村和品质生活
    product:[],
    // 推荐抢购时间
    limitedtime: [],
    limitedproduct: [],//推荐抢购产品
    parameter: {// 抢购时间参数
      page: 1,
      pagesize: 3,
      time_id: '',
    },
    placeinfo:{// 分馆信息参数
      place_id:'',
      page:'1',
      pagesize:'',
    },
    is_sale: 0,//抢购状态(0预热中1抢购中)
  },
  // Tab页改变
  onChange(event){
    //console.log(event)
    this.setData({
      active: event.detail.index
    });
    this.gettabtext();
  },
  // 轮播图下面白点改变
  swiperChange(e) {
    let current = e.detail.current;
    let that = this;
    that.setData({
      swiperCurrent: current,
    })
  },
  // 跳转新人特惠等
  getnav(e){
    let index = e.currentTarget.dataset.index
    console.log(e.currentTarget.dataset)
    wx.navigateTo({
      url: this.data.navurl[index],
    })
  },
  // 跳转热卖店铺等4个
  getshop(e){
    let index = e.currentTarget.dataset.index
    wx.navigateTo({
      url: this.data.jump[index],
    })
  },


  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  //获取首页tab选项内容
  gettabtext : function(){
    //console.log(https)
    var that=this;
    https.request('/index/index', { column_key: this.data.columnlist[this.data.active] },'加载中...', function (res) {//成功回调
       console.log(11110, res)
        that.setData({
          image: res.data[that.data.active].content[0].carousel,//所有tab轮播图（菜单通用）
        })
      if (that.data.active==0){//推荐
          that.setData({
            nav: res.data[that.data.active].content[1].middle_nav.list,//菜单nav
            shop: res.data[that.data.active].content[2].class_nav.list,//热卖店铺
            limitedtime: res.data[that.data.active].content[3].flash_sale.time_info,//抢购时间
            //is_sale: res.data[that.data.active].content[3].flash_sale.time_info.is_sale,// 抢购状态(0预热中1抢购中)
            limitedproduct: res.data[that.data.active].content[3].flash_sale.list,//抢购产品
            sellwellbox: res.data[that.data.active].content[4].hot_sale,//热销
           
          })
        }

      if (that.data.active == 1) {//精准抚农
        that.setData({
          addressnva: res.data[that.data.active].content[1].middle_nav.list,//地区nav
          activity: res.data[that.data.active].content[2].place_show.activity.place_logo,//地方特色扶农
          activitylist: res.data[that.data.active].content[2].place_show.activity.ad_list,//地方特色扶农广告
          specialty: res.data[that.data.active].content[2].place_show.goods.list,//特色扶农馆产品
        })
      }


      if (that.data.active == 2 || 3) {//振兴和品质生活
        that.setData({
          product: res.data[that.data.active].content[1].class_goods_show,//产品
        })
      }

    }, function (err) {//错误回调
      // console.log(11110, err)
    }
    )
  },

  onLoad: function () {
    this.gettabtext();//初始化获取tab接口

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
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
  
  //点击顶部搜索
  search(){
    wx.navigateTo({
      url: "/pages/searchpage/searchpage",
    })
  },
  // 跳转商品详情页
  getproductdetails(e){
    var id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/commoditydetails/commoditydetails?id='+id,
    })
  },


  // 获取不同时间抢购产品
  gettimelist(){
    var that = this 
    https.request('/goods/getFlashPointGoodslist',this.data.parameter,'加载中...',function(res){
      //console.log(res)
      that.setData({
        limitedproduct: res.data.list
      })
    },function(err){

    })
  },
  // 点击抢购时间
  flashsale(e) {
    var obj = this.data.parameter
    obj.time_id = e.currentTarget.dataset.timeid.toString()
    obj.page = 1
    this.setData({
      parameter: obj,
      limitedproduct: [],
    })
    this.gettimelist()
    console.log(this.data.limitedtime)
  },
  // 点击查看全部
  getall() {
    wx.navigateTo({
      url: "/pages/flashsale/flashsale",
    })
  },
  // 获取分馆信息
  getPlaceInfo(){
    var that = this
    https.request('/index/getPlaceInfo',this.data.placeinfo,'加载中...',function(res){
     // console.log(res)
      that.setData({
        activity: res.data.activity.place_logo,//地方特色扶农
        activitylist: res.data.activity.ad_list,//地方特色扶农广告
        specialty: res.data.goods.list,//特色扶农馆产品
      })
      
    },function(err){

    },'GET')
  },
  // 点击不同分馆
  changePlaceInfo(e){
    var index = e.detail.index
    var key = this.data.addressnva
    var place_id = key[index].place_id
    var obj = this.data.placeinfo
    obj.place_id = place_id
    this.setData({
      placeinfo: obj
    })
    this.getPlaceInfo()
  }
  // https.request('url地址', '参数（对象）', 'message加载信息', 'function成功方法回调','function失败方法回调','接口类型（get/post）不写默认post')

  
})
