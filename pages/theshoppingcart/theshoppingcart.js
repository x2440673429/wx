// pages/theshoppingcart/theshoppingcart.js
const https = require('../../utils/https.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: '收货地址：福建省思明区软件园二期观日路30号之六508B',
    username: '李思思',
    phone: '13646005163',
    carisShow: false, //购物车是否有商品
    isChecked: true, //全选状态设置
    isEdit: true, //是否编辑状态
    isSettlementRed: true, //红色结算按钮状态
    idDeteleRed: false, //红色删除按钮
    isSelect: false, //是否为编辑状态
    goodsCar: [], //用来接收接口返回数据
    goodsCar: [{
      id: 1, //购物车id
        sid: 1, //商铺ID
        goods_pic: '../../image/4我的/dingdanxiaotupian@2x.png', //商品图片地址
        store_name: "商铺", //商品名称和描述
        goods_price: 45, //商品最新价格
        num: 1, //商品数量
        goods_id: 0, //商品id
        selected: true, //商品是否为被选中状态，购物车首页默认全选
        attr_id: 0, //商品规格
        goods_title: "糍粑传统营养小食品"
      },
      {
        goods_pic: "../../image/4我的/dingdanxiaotupian@2x.png",
        goods_price: 45,
        num: 1,
        goods_id: 1,
        selected: true,
        attr_id: 0,
        goods_title: "糍粑传统营养小食品"
      }
    ],

    parameter: {
      page: '1',
      pagesize: '10',
      sid:'1'
    },
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    this.totalPrice();
    // this.goOrder()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getcontainer()
  },
  // 编辑事件
  editGood: function() {
    this.setData({
      isEdit: false,
      isSelect: false,
      isSettlementRed: false,
      idDeteleRed: true,
      idDetel: false
    });
  },
  // 完成事件
  editComplete: function() {
    this.setData({
      isEdit: true,
      isSettlementRed: true,
      isSettlement: false,
      idDeteleRed: false,
      idDetel: false
    });
  },

  // 全选事件
  checkAll: function() {
    let isChecked = this.data.isChecked; //获取全选状态
    let isSettlementRed = this.data.isSettlementRed; //获取红色结算按钮的状态
    let isSettlement = this.data.isSettlement;
    isChecked = !isChecked;
    isSettlementRed = isSettlementRed;
    isSettlement = !isSettlement;
    let list = this.data.goodsCar;
    if (this.data.isSelect) {
      // 设置全选状态
      for (let i = 0; i < list.length; i++) {
        list[i].selected = isChecked;
        // 判断是否全选中
        if (list[i].selected) {
          console.log(1)
          this.data.isChecked = false;
          isSettlementRed = true;
          isSettlement = false;
        }
      }
      this.setData({
        isChecked: isChecked,
        goodsCar: list,
        isSettlementRed: true, //隐藏红色结算
        idDeteleRed: false,
      });
    } else {
      // 设置全选状态
      for (let i = 0; i < list.length; i++) {
        list[i].selected = isChecked;
        // 判断是否全选中
        if (list[i].selected) {
          console.log(1)
          this.data.isChecked = false;
          isSettlementRed = true;
          isSettlement = false;
        }
      }
      this.setData({
        isChecked: isChecked,
        goodsCar: list,
        isSettlementRed: isSettlementRed, //显示灰色结算
        idDeteleRed: false,
        idDetel: false
      });
    }

    this.totalPrice();
  },
  //单选事件
  selectShop: function(e) {
    let _this = this;
    // 获取当前选项的索引
    let index = e.currentTarget.dataset.index;
    // 获取商品列表
    let list = this.data.goodsCar;
    // 默认全选
    this.data.isChecked = true;
    // 操作当前选项
    list[index].selected = !list[index].selected;
    var isUncheck = true;
    // 当前为删除操作状态时
    if (this.data.isSelect) {
      for (var i = list.length - 1; i >= 0; i--) {
        // 判断是否全选中
        if (!list[i].selected) {
          this.data.isChecked = false;
        }
        //判断是否全没选
        else if (list[i].selected) {
          isUncheck = false;
        }
      }
      this.setData({
        goodsCar: list,
        isChecked: false,
        isSettlement: false,
        isSettlementRed: true,
        idDeteleRed: !isUncheck,
        idDetel: isUncheck
      })
    } else {
      for (var i = list.length - 1; i >= 0; i--) {
        // 判断是否全选中
        if (!list[i].selected) {
          this.data.isChecked = false;
        }
        //判断是否全没选
        else if (list[i].selected) {
          this.data.isSettlementRed = true; //红色结算按钮状态
          this.data.isSettlement = false; //灰色结算按钮状态
          this.data.idDeteleRed = false; //红色删除按钮
          this.data.idDetel = false; //灰色删除按钮
          isUncheck = false;
        }
      }
      // 重新渲染数据
      this.setData({
        goodsCar: list,
        isChecked: this.data.isChecked,
        isSettlement: isUncheck,
        isSettlementRed: !isUncheck
      })
    }
    this.totalPrice();
  },
  // //减少数量
  minus: function(e) {
    // 获取点击的索引
    const index = e.currentTarget.dataset.index;
    // 获取商品数据
    let list = this.data.goodsCar;
    // 获取商品数量
    let num = list[index].num;
    // 点击递减
    num = num - 1;
    list[index].num = num;
    console.log(111, list);
    // 重新渲染 ---显示新的数量
    this.setData({
      goodsCar: list
    });
    this.totalPrice();
  },
  //增加数量
  plus: function(e) {
    // 获取点击的索引
    const index = e.currentTarget.dataset.index;
    // 获取商品数据
    let list = this.data.goodsCar;
    // 获取商品数量
    let num = list[index].num;
    // 点击递增
    num = num + 1;
    list[index].num = num;
    console.log(list);
    // 重新渲染 ---显示新的数量
    this.setData({
      goodsCar: list
    });
    this.totalPrice();
  },

  // 计算金额
  totalPrice: function() {
    let list = this.data.goodsCar;
    let total = 0;
    // 循环列表得到每个数据
    for (let i = 0; i < list.length; i++) {
      // 判断选中计算价格
      if (list[i].selected) {
        // 所有价格加起来 count_money
        total += list[i].num * list[i].goods_price;
      }
    }
    // 最后赋值到data中渲染到页面
    this.setData({
      goodsCar: list,
      totalPrice: total.toFixed(2)
    });
  },
  //购物车删除
  // 批量删除
  deteleMore: function() {
    var _this = this;
    let list = this.data.goodsCar;
    wx.showModal({
      title: '提示',
      content: '确认删除这些商品吗',
      success: function(res) {
        if (res.confirm) {
          for (let i = list.length - 1; i >= 0; i--) {
            if (list[i].selected) {
              list.splice(i, 1);
              _this.setData({
                goodsCar: list
              });
              // 如果数据为空
              if (!list.length) {
                _this.setData({
                  carisShow: true
                });
              } else {
                // 调用金额渲染数据
                _this.totalPrice();
              }
            } else {
              console.log(res);
            }
          }
        }
      }
    })
  },
  //删除单个商品
  deteleMo: function(e) {
    var that = this;
    // 获取索引
    const index = e.currentTarget.dataset.index;
    // 获取商品列表数据
    let list = this.data.goodsCar;
    wx.showModal({
      title: '提示',
      content: '确认删除吗',
      success: function(res) {
        if (res.confirm) {
          // 删除索引从1
          list.splice(index, 1);
          // 页面渲染数据
          that.setData({
            goodsCar: list
          });
          // 如果数据为空
          if (!list.length) {
            that.setData({
              carisShow: true
            });
          } else {
            // 调用金额渲染数据
            that.totalPrice();
          }
        } else {
          console.log(res);
        }
      },
      fail: function(res) {
        console.log(res);
      }
    })
  },
  // 结算生成订单
  // goOrder: function() {
  //   let _this = this;
  //   wx.showModal({
  //     title: '提示',
  //     content: '确认生成订单？',
  //     success: function(res) {
  //       if (res.confirm) {
  //         // 携带订单信息生成订单
  //         let list = _this.data.goodsCar;
  //         wx.navigateTo({
  //           url: 'confirmationoforders?key=goodsCar'
  //         })
  //       } else {
  //         console.log(11, res);
  //       }
  //     }
  //   })
  // },
  // 获取页面内容
  getcontainer() {
    var that = this
    https.request('/order/cartList', this.data.parameter, '加载中...', function (res) {
      console.log(res)
      that.setData({
        goodsCar: res.data.list,
      })
    }, function (err) {

    }, 'GET')
  }

})