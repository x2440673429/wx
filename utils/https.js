function request(url, params, message = '', success, fail, type = 'POST') {
  this.requestLoading(url, params, message, success, fail, type)
}
// 展示进度条的网络请求
// url:网络请求的url
// params:请求参数
// message:进度条的提示信息
// success:成功的回调函数
// fail：失败的回调

// 测试域名;
// const url ='http://www.yql.com/api.php';
// const url = 'http://192.168.2.197:8080/api.php';
const url = 'http://www.yql.com/api.php';
// websoketurl = 'wss://wss-tuya.chidouye.com',
//正式域名;
// const url='https://tuya.fengwankeji.com',
// websoketurl ='wss://wss-tuya.fengwankeji.com',
const From ='4';
function requestLoading(address, arrival, message, success, fail, type) {
  // wx.showNavigationBarLoading()
  if (message != "") {
    wx.showLoading({
      title: message,
      
    })
  }
  var inherent = {
    'access_token': '5b7f60aca7e7f6f8c680b1b219ad3ec6',
    'from': From,
    'user_token':  '' //'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1Njc2MDE2NTEsImRhdGEiOnsidWlkIjo3fX0.grEdRK9HyOsuoC1Vmw94U0oQlDnlsaEKqB5aY3GnpmE',
  }
  var params = Object.assign(inherent, arrival);//合并对象
  wx.request({
    url: url+address,
    data: params,
    header: {
      //'Content-Type': 'application/json'
      'content-type': 'application/x-www-form-urlencoded'
    },
    method: type,
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

}