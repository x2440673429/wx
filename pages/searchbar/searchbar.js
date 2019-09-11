// pages/searchbar/searchbar.js
  const https = require('../../utils/https.js')


Page({

  /**
   * 页面的初始数据
   */
  data: {
    obj:{
      class_id: '9999',
      type:'0',
    },
    key:0,
    items :[],
    product:[],
    isshow:true,
    type:'1',
  },
  // tab左侧切换标签页
  qiehuan(e){
    //console.log(e)
    var obj=this.data.obj
    obj.class_id = e.currentTarget.dataset.id
    this.setData({
      key: e.currentTarget.dataset.index,
      obj: obj
    })
    let bol = false
    if (e.currentTarget.dataset.id==9998){
      this.setData({
        isshow: bol,
        type:'2'
      })
    } else if (e.currentTarget.dataset.id == 9999){
      this.setData({
        isshow: true,
        type:'1'
      })
    }else{
      this.setData({
        isshow: true,
        type: '0'
      })
    }
   
    this.getclassification()


  },

   
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getclassification()
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
  // 获取分类内容
  getclassification(){
    var that = this 
    https.request('/classify/goodsClassView', this.data.obj,'加载中...',function(res){
      //console.log(res)
      that.setData({
        items: res.data.list,// 分类页面所有参数
        product: res.data.list[that.data.key].two_list
     }) 
      //console.log(that.data.items)

    },function(err){
      // console.log(0000,err)
    })
  },
  // 品牌等
  getselectedbrands(e){
    // console.log(e)
    let id = e.currentTarget.dataset.id
    let name = e.currentTarget.dataset.name
    let type = e.currentTarget.dataset.type
    let url = '/pages/selectedbrands/selectedbrands' + '?id=' + id + '&name=' + name + '&type=' + type
    wx.navigateTo({
      url: url,
    })
  },
  //优质地产
  gethighqualityorigin(e){
    let id = e.currentTarget.dataset.id
    let name = e.currentTarget.dataset.name
    let type = e.currentTarget.dataset.type
    let url =  '/pages/highqualityorigin/highqualityorigin' + '?id=' + id + '&name=' + name + '&type=' + type
    wx.navigateTo({
      url:url
    })
  }
})