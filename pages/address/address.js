// pages/address/address.js
const https = require('../../utils/https.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addresslist:[],
    parameter:{
      page:1,
      pagesize: 10,
    }
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
    this.getaddresslist()
    // this.data.addresslist.map((val,key) => {
    //   var is_default = val.is_default
      
    // })
   
    
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
  //添加收货地址
  addaddress:function(e){
    var type = e.currentTarget.dataset.type
    var id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/addaddress/addaddress?type='+ type + '&id=' + id,
    })
  },
  // 获取收获地址列表
  getaddresslist(){
    var that = this
    https.request('/address/getaddresslist', this.data.parameter,'加载中',function(res){
      console.log(res)
     
      that.setData({
        addresslist: res.data.list
      })
      if (that.data.addresslist.length < 2) {
        var obj = that.data.addresslist
        obj[0].is_default = 1
        that.setData({
          addresslist: obj
        })
      }
    },function(err){

    }) 
    },
    // 设置默认
  setdefault(e){
    var obj = {
      is_default: 1,
      id: e.currentTarget.dataset.id,
    }
    var that = this
    https.request('/address/setdefaultaddress',obj,'',function(res){
      console.log(res)
      that.onShow();//刷新页面
    },function(err){

    })
  },
  // 删除地址
  deladdress(e){
    var that = this
    wx.showModal({
      title: '提示',
      content: '确定删除',
      success(res){
        if (res.confirm) {//点击了确定
          var id = Number(e.currentTarget.dataset.id)
          console.log(id)
          https.request('/address/deladdress', { id: id }, '', function (res) {
            console.log(res)
            if (res.code=='0000'){
              that.getaddresslist()
            }else{
              wx.showToast({
                title: res.msg,
                icon: 'none',
                duration: 2000
              })
            }  
            
          }, function (err) {
          })
        }
      } 
    })

  }
})