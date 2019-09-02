// pages/collection/collection.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 1,
    list:[
      ['../../image/my/chanpin@2x.png', '手工麻薯小吃永春麻糍糯米糍驴打滚干吃汤圆', '36', '2019-07-30',true],
      ['../../image/my/chanpin@2x.png', '手工麻薯小吃永春麻糍糯米糍驴打滚干吃汤圆', '36', '2019-07-30',false],
      ['../../image/my/chanpin@2x.png', '手工麻薯小吃永春麻糍糯米糍驴打滚干吃汤圆', '36', '2019-07-30',false]
    ],
    edit: false, //是否是编辑模式
    editName: '编辑',
    selectAll: false
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
  onChange(event) {
    wx.showToast({
      title: `切换到标签 ${event.detail.index + 1}`,
      icon: 'none'
    });
  },
  isedit(){
    let that = this;
    if(that.data.edit){
      that.setData({
        edit: false,
        editName: '编辑'
      })
    }else{
      that.setData({
        edit: true,
        editName: '完成'
      })
    }
  },
  select(e){
    let idx = e.currentTarget.dataset.idx
    let that = this;
    that.data.list[idx][4] = !that.data.list[idx][4]
    let isall = true
    for(let i of that.data.list){
      if(!i[4]){
        isall = false
        break
      }
    }
    that.setData({
      list: that.data.list,
      selectAll: isall
    })
  },
  selectallbtm(){
    let that = this;
    if (that.data.selectAll){
      for(let i of that.data.list){
        i[4] = false
      }
      that.setData({
        selectAll:false,
        list: that.data.list
      })
    }else{
      for (let i of that.data.list) {
        i[4] = true
      }
      that.setData({
        selectAll: true,
        list: that.data.list
      })
    }
  }
})