function request(url, params, success, fail) {
  this.requestLoading(url, params, "", success, fail)
}
// 展示进度条的网络请求
// url:网络请求的url
// params:请求参数
// message:进度条的提示信息
// success:成功的回调函数
// fail：失败的回调

// 测试域名;
const url ='http://www.yql.com/api.php',
// websoketurl = 'wss://wss-tuya.chidouye.com',
//正式域名;
// const url='https://tuya.fengwankeji.com',
// websoketurl ='wss://wss-tuya.fengwankeji.com',
version ='1.3.3';
function requestLoading(address, arrival, message, success, fail) {
  // wx.showNavigationBarLoading()
  if (message != "") {
    wx.showLoading({
      title: message,
      
    })
  }
  var inherent = {
    'token': wx.getStorageSync('token'),
    'version': version
  }
  var params = Object.assign(inherent, arrival);
  wx.request({
    url: url+address,
    data: params,
    header: {
      //'Content-Type': 'application/json'
      'content-type': 'application/x-www-form-urlencoded'
    },
    method: 'POST',
    success: function (res) {
      // wx.hideNavigationBarLoading()
      if (message != "") {
        wx.hideLoading()
      }
      if (res.statusCode == 200) {
        if (res.data.code == 1001){
          wx.reLaunch({
            url: '/pages/index/index',
            success: function(res) {
              wx.clearStorageSync()
            },
            fail: function(res) {},
            complete: function(res) {},
          })
        }else{
          success(res.data)
        }
      } else {
        fail()
      }

    },
    fail: function (res) {
      // wx.hideNavigationBarLoading()
      if (message != "") {
        wx.hideLoading()
      }
      fail()
    },
    complete: function (res) {

    },
  })
}
module.exports = {
  request: request,
  requestLoading: requestLoading,
  url: url,
  // websoketurl: websoketurl,
  version: version
}