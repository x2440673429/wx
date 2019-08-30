// pages/marketing/marketing.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active:1,
    titleimg: '../../image/1首页/difangtesefunong.png',
    list:[
      {
        img:'../../image/3发现/morentouxiang@2x.png',
        name:'益齐来商城',
        number:'999',
        title:"逻辑狗有什么用？",
        text:'通过逻辑狗系统训练可以帮助孩子形成良好的思维逻辑能力 观察能力 分类能力 推理能力 想象能力 空间方位能力 语言运用能力 手眼协调能力 数学逻辑能力。知识迁移能力！...',
        image:[
          '../../image/1首页/jinribaokuan.png',
          '../../image/1首页/jinribaokuan.png',
          '../../image/1首页/jinribaokuan.png',
          '../../image/1首页/jinribaokuan.png',
          '../../image/1首页/jinribaokuan.png',
          '../../image/1首页/jinribaokuan.png',
        ],
        shopimg:'../../image/1首页/jinribaokuan.png',
        shopname:'【逻辑狗 儿童思维升级训练系统】',
        shoptext:'幼儿家庭版玩具教具早教教材',
        money:'124',
        addmoney:'10',
        time:'8.20',
        bigimg: '../../image/4我的/xiaotuop@2x.png'
      },
      {
        img: '../../image/3发现/morentouxiang@2x.png',
        name: '益齐来商城',
        number: '999',
        title: "逻辑狗有什么用？",
        text: '通过逻辑狗系统训练可以帮助孩子形成良好的思维逻辑能力 观察能力 分类能力 推理能力 想象能力 空间方位能力 语言运用能力 手眼协调能力 数学逻辑能力。知识迁移能力！...',
        image: [
          '../../image/1首页/jinribaokuan.png',
          '../../image/1首页/jinribaokuan.png',
          '../../image/1首页/jinribaokuan.png',
          '../../image/1首页/jinribaokuan.png',
          '../../image/1首页/jinribaokuan.png',
          '../../image/1首页/jinribaokuan.png',
        ],
        shopimg: '../../image/1首页/jinribaokuan.png',
        shopname: '【逻辑狗 儿童思维升级训练系统】',
        shoptext: '幼儿家庭版玩具教具早教教材',
        money: '124',
        addmoney: '10',
        time: '8.20',
        bigimg:'../../image/4我的/xiaotuop@2x.png'
      },
    ],
    value:5
  },
  // 点击改变顶部俩标签
  onChange(event){
   var that=this
   var txt = this.data.list[0].text
   if(event.detail.index==1){
     that.setData({
       [txt]:'人生是一场漫长的竞赛，有人笑在开始，有人却赢在最后！'
     })
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