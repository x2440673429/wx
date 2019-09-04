// pages/searchbar/searchbar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    key:0,
    items :[
      {
        text:'精选品牌',
      },
      {
        text: '优质产地',
      },
      {
        text: '美妆个护',
      },
      {
        text: '食品生鲜',
      },
      {
        text: '服饰配件',
      },
      {
        text: '鞋靴箱包',
      },
      {
        text: '家居生活',
      },
      {
        text: '数码家电',
      },
      {
        text: '滋补保健',
      },
      {
        text: '宠物生活', 
      },
    ],
    index:'0',
    product:[
      {
        title: "面部护肤",
        items:[
          {
            img:'../../image/2分类/yasilandai@2x.png',
            name:'雅诗兰黛',
          },
          {
            img: '../../image/2分类/lankou.png',
            name: '兰蔻',
          },
          {
            img: '../../image/2分类/jiemian.png',
            name: '洁面',
          },
          {
            img: '../../image/2分类/lankou.png',
            name: '兰蔻',
          },
          {
            img: '../../image/2分类/jiemian.png',
            name: '洁面',
          },
        ]
      },
      {
        title: "面部护肤",
        items: [
          {
            img: '../../image/2分类/yasilandai@2x.png',
            name: '雅诗兰黛',
          },
          {
            img: '../../image/2分类/lankou.png',
            name: '兰蔻',
          },
          {
            img: '../../image/2分类/jiemian.png',
            name: '洁面',
          },
        ]
      },
    ]
    
  },
  // tab左侧切换标签页
  qiehuan(e){
    console.log(e)
    this.setData({
      key: e.currentTarget.dataset.index
    })
  },
  // 获取图片大小
  getimg(){
    
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