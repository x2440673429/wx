// pages/evaluate/evaluate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value:0,
    img:'../../image/1首页/kajiatouxiang@2x.png',
    text:'',
    parameter:{
      order_goods_id:'',
      img_ids:'',
      content:'',
      scores:'',
      type:'',
      log_id:'',
    },
    imgs:[]
  },
  onChange(event) {
    this.setData({
      value: event.detail
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  // 发表评价
  evaluate(){
    var parameter = this.data.parameter
    parameter.scores=this.data.value
    parameter.content = this.data.text
    parameter.img_ids = this.data.imgs
    this.setData({
      parameter: parameter
    })
    this.goodsevaluate(parameter)
  },
  // 发表评价接口
  goodsevaluate(parameter){
    https.requset('/user/goodsEvaluate', parameter,'',function(res){
      console.log(res)
    },function(res){

    })
  },
  // 拍照
  getchooseImage(){
    var that = this
    wx.chooseImage({
      count:9,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        console.log(res)
        var img = that.data.imgs
        img.push(tempFilePaths[0]) 
        that.setData({
          imgs: img
        })
        console.log(that.data.imgs)
      }
    })
  }
})