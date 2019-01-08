// pages/container/container.js

//引入数据模块
var outdata = require('../../data/data_containner.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {//数据访问要通过 this.data.xxx进行访问
    navTab: ["推荐", "趣事", "热门", "收藏"],
    data1:[],
    currentNavtab:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var a = outdata.containner.Recommend;
    this.setData({
      data1:a
    });
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
  switchTab: function (e) {
    this.setData({
      currentNavtab: e.currentTarget.dataset.idx
    });
  },
  // 查看用户详情
  bindItemTap: function () {
    //页面跳转
    wx.navigateTo({
      url: '../user/user'
    })
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