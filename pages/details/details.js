// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img:'../../image/1首页/morenshangpin@2x.png',
    shopname:'山东烟台大樱桃车厘子新鲜水果',
    text:'[扶农]民勤大樱桃',
    money:'99.98',
    oldmoney:'190.99',
    number:'4565',
    assemblename:'李思思',
    address:'福建省厦门市湖里区高薪技术园',
    show: false,
    pay:'',
    num:1
  },
  // 关闭弹框
  onClose() {
    this.setData({ show: false });
  },
  // 打开购买弹框
  selfpurchase:function(e){
    let pay=e.currentTarget.dataset.pay
    var that=this
    if(pay=='1'){
        that.setData({
          pay:'立即购买'
        })
    }else{
      that.setData({
        pay: '开团购买'
      })
    }
    this.setData({ show: true });
  },
  // 购买+1
  jia(){
    this.setData({ num: this.data.num+1 });
  },
  // 购买-1
  jian(){
    if (this.data.num>1){
      this.setData({ num: this.data.num - 1 });
    }else{
      return
    }
  },
  // 监听购买数量变化
  // 只能输入数字
  handleInput(e){
    let value = this.validateNumber(e.detail.value)
    this.setData({
      num: value
    })
  },
   // 正则表达式只能输入数字
  validateNumber(val) {
    return val.replace(/\D/g, '')
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