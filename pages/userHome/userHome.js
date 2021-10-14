// pages/userHome/userHome.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userName: ''
    },
    onBack(){
        wx.navigateBack({
          delta: 1
        })
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
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.getStorage({
            key: 'userName',
            success: (res)=>{
                this.setData({
                    userName: res.data
                })
            }
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

    }
})