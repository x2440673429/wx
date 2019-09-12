// pages/articledetails/articledetails.js
const https = require('../../utils/https.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    textlist:{},
    // img:'../../image/3发现/wenzhangliebiao@2x.png',
    // title:'全能仙女锅，小户型的厨房神器',
    // txt:'品食材原味，享轻奢生活',
    // text: '第一个是结实强壮的西瓜，它瓜绿囔红，外衣绿的就像地上青草做起来的大球，头上还有一根小小的辫子。把它切开，里面就是鲜红透亮的果实，如果一到炎热无比的夏天，你把它从冰箱里拿出来，咬上一口，就感觉既汁多味甜，又冰凉爽口，而且，它的营养价值很高呢，所以，它很受人的欢迎呢！',
    onchangecollect: {// 收藏
      fid: '',
      ftype: '2',
      handle_type: '',
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.id
    let obj = this.data.onchangecollect
    obj.fid = id
    this.setData({
      onchangecollect:obj
    })
 
    this.gettextcontent(id)
   
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
  gettextcontent(id){
    var that = this

    https.request('/article/getOneArtic', {id:id},'加载中...',function(res){
      console.log(555,res)
     
      that.setData({
        textlist:res.data.list
      })
      console.log(that.data.textlist)
    },function(err){

    })

  },
  //点击收藏
  collection(){
    if (this.data.textlist.collect==0){
      let obj = this.data.onchangecollect
      let add = this.data.textlist
      add.collect = 1
      obj.handle_type = '1'
      this.setData({
        textlist: add,
        onchangecollect:obj
      })
      console.log(this.data.onchangecollect)
      https.request('/user/usercollect', this.data.onchangecollect,'加载中...',function(res){
        console.log(res)
      },function(err){
        
      })
    }else{
      let obj = this.data.onchangecollect
      let add = this.data.textlist
      add.collect = 0
      obj.handle_type = '0'
      this.setData({
        textlist: add,
        onchangecollect: obj
      })
      https.request('/user/usercollect', this.data.onchangecollect, '加载中...', function (res) {
        console.log(res)
      }, function (err) {

      })
    }
  }
})