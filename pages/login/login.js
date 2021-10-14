// pages/login/login.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userName: '',
        userPwd: ''
    },
    onLogin(){
        wx.request({
          url: `http://localhost/wx_zy/?ctl=getUsers&userName=${this.data.userName}&userPwd=${this.data.userPwd}`,
          success:(res)=>{
            console.log(res.data)
            wx.showToast({
                title: '正在登录。。。',
                icon: 'loading'
            })
            if(res.data.code=='error'){
                setTimeout(()=>{
                    wx.showToast({
                        title: '登录失败！',
                        icon: 'error'
                    })
                },1000)
            }else {
                setTimeout(()=>{
                    wx.showToast({
                        title: `登录成功！欢迎回来，${res.data.user}`,
                        icon: 'success'
                    })
                    wx.setStorage({
                        key: 'userName',
                        data: res.data.user
                    })
                },1000)
                setTimeout(()=>{
                    wx.navigateBack({ 
                        delta: 1
                    })
                },2000)  
            }
          }
        })  
    },
    onBack(){
        wx.navigateBack({
            delta: 1
        })
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