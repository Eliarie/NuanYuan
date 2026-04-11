const { getChildDetail } = require("../../services/teacher.service");

Page({
  data: {
    child: {
      name: "",
      avatar: "",
      status: "",
      draft: "",
      dims: [],
      timeline: []
    },
    showModal: false,
    draftText: "",
    sendBtnText: "确认发送 ✉️"
  },

  async onLoad(options) {
    const name = decodeURIComponent(options.name || "");
    try {
      const child = await getChildDetail(name);
      this.setData({ child, draftText: child.draft || "" });
    } catch (error) {
      wx.showToast({ title: "详情加载失败", icon: "none" });
    }
  },

  goBack() {
    wx.navigateBack();
  },

  openDraft() {
    this.setData({ showModal: true, sendBtnText: "确认发送 ✉️" });
  },

  closeDraft() {
    this.setData({ showModal: false, sendBtnText: "确认发送 ✉️" });
  },

  onDraftInput(e) {
    this.setData({ draftText: e.detail.value });
  },

  confirmSend() {
    this.setData({ sendBtnText: "已发送 ✓" });
    setTimeout(() => {
      this.setData({ showModal: false, sendBtnText: "确认发送 ✉️" });
      wx.showToast({ title: "已发送", icon: "success" });
    }, 800);
  },

  noop() {}
});