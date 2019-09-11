// pages/articledetails/articledetails.js
const https = require('../../utils/https.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    textlist:[],
    img:'../../image/3发现/wenzhangliebiao@2x.png',
    title:'全能仙女锅，小户型的厨房神器',
    txt:'品食材原味，享轻奢生活',
    text: '第一个是结实强壮的西瓜，它瓜绿囔红，外衣绿的就像地上青草做起来的大球，头上还有一根小小的辫子。把它切开，里面就是鲜红透亮的果实，如果一到炎热无比的夏天，你把它从冰箱里拿出来，咬上一口，就感觉既汁多味甜，又冰凉爽口，而且，它的营养价值很高呢，所以，它很受人的欢迎呢！',
    textid:{
      id:'',
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    let obj = this.data.textid
    obj.id=options.id
    this.setData({
      textid:obj
    })
    this.gettextcontent()
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
  // 获取文章详情
  gettextcontent(){
    var that = this
    https.request('/article/getOneArtic',this.data.textid,'加载中...',function(res){
      console.log(res)
      // console.log(888,res.data.list)
      // var newlist = that.data.textlist.push(res.data.list)
      // console.log(777,newlist)
      that.setData({
        //textlist: newlist
        textlist:res.data.list
      })
      
    },function(err){

    })
    console.log(999, that.data.textlist)
  }
})