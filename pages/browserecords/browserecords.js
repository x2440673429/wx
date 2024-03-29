// pages/browserecords/browserecords.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    browserecords:[
      {
        data:'7月23日',
        product:[
          {

            productname: "手工麻薯小吃永春麻糍糯米糍驴打滚干吃汤圆",
            money: '36',
            display: true,
          },
          {
            productname: "手工麻薯小吃永春麻糍糯米糍驴打滚干吃汤圆",
            money: '36',
            display: false,
          },
          {
            productname: "手工麻薯小吃永春麻糍糯米糍驴打滚干吃汤圆",
            money: '36',
            display: false,
          },
        ]
       
      },
      {
        data: '7月20日',
        product: [
          {
            productname: "手工麻薯小吃永春麻糍糯米糍驴打滚干吃汤圆",
            money: '36',
            display: false,
          },
          {
            productname: "手工麻薯小吃永春麻糍糯米糍驴打滚干吃汤圆",
            money: '36',
            display: false,
          },
          {
            productname: "手工麻薯小吃永春麻糍糯米糍驴打滚干吃汤圆",
            money: '36',
            display: false,
          },
        ]

      },
    ],
    editName: '编辑',
    edit: false,//是否是编辑模式
    selectAll: false,//是否全选
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
  // 点击编辑
  isedit(){
    let that = this;
    if (that.data.edit) {
      that.setData({
        edit: false,
        editName: '编辑'
      })
    } else {
      that.setData({
        edit: true,
        editName: '完成'
      })
    }
  },
  // 是否全选
  selectallbtm() {
    var obj = this.data.browserecords


    if (this.data.selectAll){
      obj.map(function (val) {

      
        for (var i in val.product) {

          val.product[i].display=false
        }
      })
      this.setData({
        browserecords: obj,
        selectAll: false,
      })
    }else{
      obj.map(function (val) {


      for (var i in val.product) {

        val.product[i].display = true
      }
    })
      this.setData({
        browserecords: obj,
        selectAll: true,
      })
    }
  },
  // 单选是否选择
  select(e){
    let index = e.currentTarget.dataset.index
    let idx = e.currentTarget.dataset.idx
    let display =  this.data.browserecords[index].product[idx].display
    var obj = this.data.browserecords
    if (display) {
    obj[index].product[idx].display = false
          
    }else{
      obj[index].product[idx].display = true
    }
    this.setData({
      browserecords: obj
    }) 
  }
})