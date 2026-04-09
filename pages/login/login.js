Page({
  enterTeacher() {
    const app = getApp();
    app.globalData.role = "teacher";
    wx.reLaunch({ url: "/pages/teacher/teacher" });
  },

  enterParent() {
    const app = getApp();
    app.globalData.role = "parent";
    wx.reLaunch({ url: "/pages/parent/parent" });
  }
});