// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    HomeMenuItems: []
  },
  ToUserHome(){
    wx.getStorageInfo({
      success: (option) => {
        if(option.keys.indexOf('userName')!=1){
          this.ToLoginPage()
        }else {
          wx.getStorage({
            key: 'userName',
            success:(res)=>{
              wx.navigateTo({
                url: '/pages/userHome/userHome',
              })
            }
          }) 
        }
      },
    })
  },
  ToLoginPage(){
    wx.navigateTo({
      url: '/pages/login/login',
    })
  },
  onLoad() {
    // 查看本地缓存
    wx.getStorageInfo({
      success: (option) => {
        if(option.keys.indexOf('userName')!=1){
          wx.showModal({
            title: '提示',
            content: '该账户未登录',
            cancelText: '暂不登录', 
            confirmText: '前往登录', 
            success:(res)=>{
              if(res.confirm){
                wx.navigateTo({
                  url: '/pages/login/login',
                })
              } 
            }
          })
        }
      },
    })
  
    // 渲染首页列表
    wx.request({
      url: 'http://localhost/wx_zy/?ctl=getHomeMenuItems',
      success:(res)=>{
        this.setData({
          "HomeMenuItems": res.data
        })
      }
    })
    // 请求用户数据
    wx.request({
      url: 'http://localhost/wx_zy/?ctl=getUsers',
      success:(res)=>{
          
      }
    })
  },
})
