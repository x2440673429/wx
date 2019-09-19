// pages/addaddress/addaddress.js
const app = getApp()
const https = require("../../utils/https.js")

Page({

  /**
   * 页面的初始数据
   */
  
  data: {
    name:'',
    phone:'',
    addressxq:'',
    sheng:[],
    shi:[],
    qu:[],
    columns: [
      {
        values: [],
        defaultIndex:0
       
      },
      {
        values: [],
        defaultIndex: 0

      },
       {
         values: [],
         defaultIndex: 2
      }
    ],
    show:false,
    address:[{},{},{}],
    addresstxt:'',
    type: 1,// 1为新增，2为修改
    id:0,// 收货地址id
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
    
     this.getaddresslist();//这里是初始化获取省市区地址
    console.log(998,options)
    if (options.id && options.id !='undefined'){
      this.setData({
        type: options.type,
        id: options.id
      })
      setTimeout(()=>{
        this.editaddress()
      },1000)
      
    }
       
     
     
  },
  // 选择省市区
  onChange(event) {
    console.log(event)
     const { picker, value, index } = event.detail;
    // picker.setColumnValues(1, citys[value[0]]);
    if (index==0){//改动的是省
     
      var arr = this.data.address;
      this.data.sheng.map((val, key) => {
        console.log(value[0], val)
        if (value[0] == val.province_name) {
          arr[0] = val
        }
      })
     
    
      this.getshilist(arr[0].province_id)

    } else if (index == 1) {//改动的是市
      var arr = this.data.address;
      
      this.data.shi.map((val, key) => {
        if (value[1] == val.city_name) {
          arr[1] = val
        }
      })
      
      this.getqulist(arr[1].city_id)
    } else {//改动的是区

      var arr = this.data.address;
      this.data.qu.map((val, key) => {
        if (value[2] == val.district_name) {
          arr[2] = val
        }
      })
      
    }



    console.log(89898,arr)



    
    

  },
  //确认地区
  submitaddress(e){
    console.log(889,e,this.data.address)
    var arr = this.data.address;
    var value = e.detail.value;
    this.data.sheng.map((val, key) => {
      console.log(value[0], val)
      if (value[0] == val.province_name) {
        arr[0] = val
      }
    })
    this.data.shi.map((val, key) => {
      if (value[1] == val.city_name) {
        arr[1] = val
      }
    })
    this.data.qu.map((val, key) => {
      if (value[2] == val.district_name) {
        arr[2] = val
      }
    })
    var txt = arr[0].province_name + ',' + arr[1].city_name + ',' + arr[2].district_name;
    this.setData({
      addresstxt: txt,
      show: false,
      address:arr
    })

  },
  // 点击所在地区
  getaddress(){
    
    
    this.setData({
      show:true,
     
    })
    
  },

  // 关闭弹框
  onClose(){
    this.setData({
      show: false
    })
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
  // 获取省列表
  getaddresslist:function(){
    var that = this
    https.request('/common/getProvinceInfo', '', '加载中...', function (res) {
      console.log(res)
      var arr = [];
      res.data.info.map((val,key)=>{
        arr.push(val.province_name)
      })
      var col = that.data.columns;
      col[0].values = arr;
      var addressarr = that.data.address;
      addressarr[0] = res.data.info[0]
      console.log('省', res.data.info[0])
      that.setData({
        columns: col,
        sheng: res.data.info,
        address: addressarr
        
      })
      that.getshilist(res.data.info[0].province_id);//获取市的接口
    },function(err){

    })
  },
  //获取市级列表
  getshilist(id){
     var that = this
    https.request('/common/getCityInfo', { province_id: id } , '加载中...', function (res) {
      console.log(333,res)
      var arr = [];
      res.data.info.map((val, key) => {
        arr.push(val.city_name)
      })
      var col = that.data.columns;
      col[1].values = arr;
      var addressarr = that.data.address;
      addressarr[1] = res.data.info[0]
      that.setData({
        columns: col,
        shi: res.data.info
      })
      that.getqulist(res.data.info[0].city_id);//获取去的接口
    }, function (err) {

    })
  },
  //获取区级列表
  getqulist(id){
    var that = this
    https.request('/common/getDistrictInfo', { city_id: id }, '加载中...', function (res) {
      console.log(222, res)
      var arr = [];
      res.data.info.map((val, key) => {
        arr.push(val.district_name)
      })
      var col = that.data.columns;
      var addressarr = that.data.address;
      addressarr[2] = res.data.info[0]
      col[2].values = arr;
      that.setData({
        columns: col,
        qu: res.data.info
      })

    }, function (err) {

    })
  },
  bindNameInput(e){
    console.log(555,e)
    this.setData({
      name: e.detail.value
      })
  },
  bindPhoneInput(e){
    var phone = this.validateNumber(e.detail.value)
    this.setData({
      phone: phone
    })
   
  },
  bindTextAreaBlur(e){
    this.setData({
      addressxq: e.detail.value
    })
  },
  // 只能输入数字
  validateNumber(val) {
    return val.replace(/\D/g, '')
  },
  // 编辑收货地址
  editaddress(){
    var that = this
    https.request('/address/getAddressInfo',{id:this.data.id},'加载中...',function(res){
      console.log(res)
      var arr = JSON.parse(JSON.stringify(that.data.address))
      arr[0].province_name = res.data.info.address_province
      arr[0].province_id = res.data.info.province_id
      arr[1].city_name = res.data.info.address_city
      arr[1].city_id = res.data.info.city_id
      arr[2].district_name = res.data.info.address_county
      arr[2].district_id = res.data.info.county_id
      console.log('所在地区',arr)
      var txt = arr[0].province_name + ',' + arr[1].city_name + ',' + arr[2].district_name;
      that.setData({
        name: res.data.info.receiver_name,
        phone: res.data.info.receiver_phone,
        addressxq: res.data.info.detail_address,
        address: arr,
        addresstxt: txt,
      })
     
    },function(err){

    })
  },
  //提交信息
  submitinfo(){
    var obj={
      id: this.data.id,
      receiver_name:this.data.name,
      receiver_phone: this.data.phone,
      address_province: this.data.address[0].province_name,
      address_city: this.data.address[1].city_name,
      address_county: this.data.address[2].district_name,
      detail_address: this.data.addressxq,
      is_default:1,
      type: this.data.type,
      province_id: this.data.address[0].province_id,
      city_id: this.data.address[1].city_id,
      county_id: this.data.address[2].district_id,
    }
    var phonetest = /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/
    if (this.data.name.length<2){
      wx.showToast({
        title: '收货人长度为2-20个字符之间',
        icon: 'none',
        duration: 1000
      })
    } else if (this.data.phone == ''){
      wx.showToast({
        title: '手机号不能为空',
        icon: 'none',
        duration: 1000
      })
    } else if (phonetest.test(this.data.phone)==false) {
      wx.showToast({
        title: '手机号格式不正确',
        icon: 'none',
        duration: 1000
      })
    } else if (this.data.phone.length<11) {
      wx.showToast({
        title: '手机号码不能少于11位',
        icon: 'none',
        duration: 1000
      })
    } else if (this.data.addresstxt==''){
      wx.showToast({
        title: '请选择地址',
        icon: 'none',
        duration: 1000
      })
    } else if (this.data.addressxq == ''){
      wx.showToast({
        title: '详细地址不能为空',
        icon: 'none',
        duration: 1000
      })
    }else{
      https.request('/address/editaddress', obj, '加载中...', function (res) {
        console.log(6666, res)
        wx.navigateBack({
          delta: 1
        })

      }, function (err) {
        console.log('错误的', err)
      })
    }
    }
   
})