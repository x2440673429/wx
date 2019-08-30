//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    active:0,
    image:[
      '../../image/1首页/banner.png',
      '../../image/1首页/banner.png',
      '../../image/1首页/banner.png',
      '../../image/1首页/banner.png',
      '../../image/1首页/banner.png',

    ],
    indicatorDots: false,
    autoplay: true,
    interval: 4000,
    duration: 800,
    swiperCurrent: 0,
    active1:0,
    index:3,
    index1:4,
    nav: [
      {
        img: '../../image/1首页/xinrentehui.png',
        title: '新人特惠',
      },
      {
        img: '../../image/1首页/zhenxuanpintuan.png',
        title: '甄选拼团',
      },
      {
        img: '../../image/1首页/xianshiqianggou.png',
        title: '限时抢购',
      },
      {
        img: '../../image/1首页/zhongchouyushou.png',
        title: '众筹预售',
      },
      {
        img: '../../image/1首页/zhulimiandan.png',
        title: '助力免单',
      },
    ],
    specialty:[
      {
        city:'西藏',
        cityshi:'拉萨',
        specialtyname:'石城翻秋花生',
        img:'../../image/1首页/chanpin@2x.png'
      },
      {
        city: '西藏',
        cityshi: '拉萨',
        specialtyname: '石城翻秋花生',
        img: '../../image/1首页/chanpin@2x.png'
      },
      {
        city: '西藏',
        cityshi: '拉萨',
        specialtyname: '石城翻秋花生',
        img: '../../image/1首页/chanpin@2x.png'
      },
      {
        city: '西藏',
        cityshi: '拉萨',
        specialtyname: '石城翻秋花生',
        img: '../../image/1首页/chanpin@2x.png'
      },
      {
        city: '西藏',
        cityshi: '拉萨',
        specialtyname: '石城翻秋花生',
        img: '../../image/1首页/chanpin@2x.png'
      },
      
    ],
    product:[
      {
        banner:'../../image/1首页/zxbanner.png',
        child:[
          {
            money: 99,
            oldmoney: 100,
            img: '../../image/1首页/chanpin@2x.png',
          },
          {
            money: 99,
            oldmoney: 100,
            img: '../../image/1首页/chanpin@2x.png',
          },
          {
            money: 99,
            oldmoney: 100,
            img: '../../image/1首页/chanpin@2x.png',
          },
        ]
      },
      {
        banner: '../../image/1首页/zxbanner.png',
        child: [
          {
            money: 99,
            oldmoney: 100,
            img: '../../image/1首页/chanpin@2x.png',
          },
          {
            money: 99,
            oldmoney: 100,
            img: '../../image/1首页/chanpin@2x.png',
          },
          {
            money: 99,
            oldmoney: 100,
            img: '../../image/1首页/chanpin@2x.png',
          },
        ]
      },
      {
        banner: '../../image/1首页/zxbanner.png',
        child: [
          {
            money: 99,
            oldmoney: 100,
            img: '../../image/1首页/chanpin@2x.png',
          },
          {
            money: 99,
            oldmoney: 100,
            img: '../../image/1首页/chanpin@2x.png',
          },
          {
            money: 99,
            oldmoney: 100,
            img: '../../image/1首页/chanpin@2x.png',
          },
        ]
      },
    ],
    shop:[
      {
        title:'热卖店铺',
        txt:'长白山黑木耳￥389/1箱',
        img:'../../image/1首页/remaidianpu.png',
      },
      {
        title: '甄选砍价',
        txt: '鸭稻米10盒/9.9元',
        img: '../../image/1首页/zhenxuankanjia.png',
      },
      {
        title: '今日爆款',
        txt: '松长江稻米香[米]',
        img: '../../image/1首页/jinribaokuan.png',
      },
      {
        title: '每日精选',
        txt: '九间棚山野小菜[干粮]',
        img: '../../image/1首页/meirijingxuan.png',
      },
    ],
    sellwellbox:[
      {
        sellwelltitleimg:'../../image/1首页/remaibanner.png',
        sellwell:[
          {
            img:'../../image/1首页/chanpin@2x.png',
            producttitle:'手工麻薯小吃永春麻糍糯米',
            producttxt: '[扶农] [顺风配送]手工麻薯小吃永春麻糍糯米(4斤盒装 250 - 300g)',
            sellwellmoney:'150',
            sellwelljianmoney:'10',
            weight:'750/包',
          },
          {
            img: '../../image/1首页/chanpin@2x.png',
            producttitle: '手工麻薯小吃永春麻糍糯米',
            producttxt: '[扶农] [顺风配送]手工麻薯小吃永春麻糍糯米(4斤盒装 250 - 300g)',
            sellwellmoney: '150',
            sellwelljianmoney: '10',
            weight: '750/包',
          },
          {
            img: '../../image/1首页/chanpin@2x.png',
            producttitle: '手工麻薯小吃永春麻糍糯米',
            producttxt: '[扶农] [顺风配送]手工麻薯小吃永春麻糍糯米(4斤盒装 250 - 300g)',
            sellwellmoney: '150',
            sellwelljianmoney: '10',
            weight: '750/包',
          },
        ]
      },
      {
        sellwelltitleimg: '../../image/1首页/remaibanner.png',
        sellwell: [
          {
            img: '../../image/1首页/chanpin@2x.png',
            producttitle: '手工麻薯小吃永春麻糍糯米',
            producttxt: '[扶农] [顺风配送]手工麻薯小吃永春麻糍糯米(4斤盒装 250 - 300g)',
            sellwellmoney: '150',
            sellwelljianmoney: '10',
            weight: '750/包',
          },
          {
            img: '../../image/1首页/chanpin@2x.png',
            producttitle: '手工麻薯小吃永春麻糍糯米',
            producttxt: '[扶农] [顺风配送]手工麻薯小吃永春麻糍糯米(4斤盒装 250 - 300g)',
            sellwellmoney: '150',
            sellwelljianmoney: '10',
            weight: '750/包',
          },
          {
            img: '../../image/1首页/chanpin@2x.png',
            producttitle: '手工麻薯小吃永春麻糍糯米',
            producttxt: '[扶农] [顺风配送]手工麻薯小吃永春麻糍糯米(4斤盒装 250 - 300g)',
            sellwellmoney: '150',
            sellwelljianmoney: '10',
            weight: '750/包',
          },
        ]
      },
    ],
    sign: 0,
  },
  onChange(event){
    console.log(event)
    this.setData({
      active: event.detail.index
    })
  },
  // 轮播图下面白点改变
  swiperChange(e) {
    let current = e.detail.current;
    let that = this;
    that.setData({
      swiperCurrent: current,
    })
  },
  // 跳转新人特惠等
  getnav(e){
   var num = e.currentTarget.dataset.number
    if(num==0){
      wx.navigateTo({
        url: '/pages/Discount/Discount',
      })
    }else if(num==1){
      wx.navigateTo({
        url: '/pages/assemble/assemble',
      })
    } else if (num == 2) {
      wx.navigateTo({
        url: '/pages/flashsale/flashsale',
      })
    } else if (num == 3) {
      wx.navigateTo({
        url: '/pages/Discount/Discount',
      })
    } else if (num == 4) {
      wx.navigateTo({
        url: '/pages/assistancewaiver/assistancewaiver',
      })
    }
  },
  // 跳转热卖店铺等4个
  getshop(e){
    var num = e.currentTarget.dataset.number
    if (num == 0) {
      wx.navigateTo({
        url: '/pages/Discount/Discount',
      })
    } else if (num == 1) {
      wx.navigateTo({
        url: '/pages/Selection/Selection',
      })
    } else if (num == 2) {
      wx.navigateTo({
        url: '/pages/flashsale/flashsale',
      })
    } else if (num == 3) {
      wx.navigateTo({
        url: '/pages/Discount/Discount',
      })
    }
  },


  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
