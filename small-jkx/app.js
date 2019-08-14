//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    article_list:[
      {
        'picture':'/pages/image/c.jpg',
        'title':'Python介绍:',
        'content':'Python是一种计算机程序设计语言。是一种面向对象的动态类型语言，越来越多被用于独立的、大型项目的开发。',
        'time':'2019-07-07',
        'url':'/pages/list/list'
      },
      {
        'picture': '/pages/image/火影.jpg',
        'title': '火影忍者介绍:',
        'content': '《火影忍者》改编自日本漫画家岸本齐史的同名漫画，共220话；第二季《火影忍者疾风传》共500话；累计全720话。',
        'time': '2019-08-08',
        'url': '/pages/list1/list1'
      }
    ]

  }

})