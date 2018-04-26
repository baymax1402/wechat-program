//index.js
import API from '../../service/api/index.js'
//获取应用实例
const app = getApp()
const order = ['red', 'yellow', 'blue', 'green', 'red']

Page({
  data: {
      imgUrls: [{
          url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
      }, {
          url: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg'
      }, {
          url: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
      }],
      questions:[{
          id: 1,
          headerImg: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
          answerName: '李生论金',
          type: '已认证',
          createTime: '48分钟前',
          question: '老师，现在可以买纸原油吗？',
          message: '我不关注纸原油，目前美原油偏震荡，交易方向暂时不明朗。'
      },{
          id: 2,
          headerImg: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
          answerName: '通汇国际',
          type: '已认证',
          createTime: '14小时前',
          question: '老师白银还会跌一点吗',
          message: '会，但是趋势看涨，我说的趋势是指今年的目标，如果做纸白银的话，可以随时买'
      },{
          id: 3,
          headerImg: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
          answerName: '悦华交易学院',
          type: '已认证',
          createTime: '14小时前',
          question: '老师，黄金已经破位，可以追空吗',
          message: '不可以，直接介入无法控制风险，可以等明天。'
      },{
          id: 4,
          headerImg: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
          answerName: '李生论金',
          type: '已认证',
          createTime: '48分钟前',
          question: '老师，现在可以买纸原油吗？',
          message: '我不关注纸原油，目前美原油偏震荡，交易方向暂时不明朗。'
      },{
          id: 5,
          headerImg: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
          answerName: '通汇国际',
          type: '已认证',
          createTime: '14小时前',
          question: '老师白银还会跌一点吗',
          message: '会，但是趋势看涨，我说的趋势是指今年的目标，如果做纸白银的话，可以随时买'
      },{
          id: 6,
          headerImg: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
          answerName: '悦华交易学院',
          type: '已认证',
          createTime: '14小时前',
          question: '老师，黄金已经破位，可以追空吗',
          message: '不可以，直接介入无法控制风险，可以等明天。'
      }],
      bg: './image/banner.png',
      userLeft: '',
      userRight: '',
      showLeftIcon: true,
      showRightIcon: true,
      indicatorDots: false,
      autoplay: false,
      interval: 5000,
      duration: 1000,
      toView: 'red',
      scrollTop: 100
  },
  changeIndicatorDots: function(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function(e) {
    this.setData({
      duration: e.detail.value
    })
  },
  onLoad: function () {
      // this.initSliders();
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
  },
  upper: function(e) {
    console.log(e)
  },
  lower: function(e) {
    console.log(e)
  },
  scroll: function(e) {
    console.log(e)
  },
  tap: function(e) {

      for (var i = 0; i < order.length; ++i) {
          if (order[i] === this.data.toView) {
              this.setData({
                  toView: order[i + 1]
          })
          break
        }
      }
  },
  tapMove: function(e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  }
})
