// pages/find/find.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nav: [
      {
        img: '../../image/3发现/xinpintiyanguan@2x.png',
        title: '新品体验馆',
      },
      {
        img: '../../image/3发现/benzhouzhidemai@2x.png',
        title: '本周值得买',
      },
      {
        img: '../../image/3发现/faxianhaohuo@2x.png',
        title: '发现好货',
      },
      {
        img: '../../image/3发现/yingxiaoyanjiuy@2x.png',
        title: '营销研究院',
      },
      {
        img: '../../image/3发现/funongshiyans@2x.png',
        title: '扶农实验室',
      },
    ],
    Articlelist:[
      {
        img:'../../image/3发现/wenzhangliebiao@2x.png',
        title:'全能仙女锅，小户型的厨房神器',
        txt:'品食材原味，享轻奢生活'
      },
      {
        img: '../../image/3发现/wenzhang2@2x.png',
        title: '全能仙女锅，小户型的厨房神器',
        txt: '品食材原味，享轻奢生活'
      },
    ],
   
  },
  // 跳转文章详情
  getArticle(){
    wx.navigateTo({
      url: '/pages/articledetails/articledetails',
    })
  },
  // 跳转营销研究院等
  getnav(e){
    var nav = e.currentTarget.dataset.number
    console.log(e)
    if (nav==3){
      wx.navigateTo({
        url: '/pages/marketing/marketing',
      })
    }else{
      return
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

  }
})