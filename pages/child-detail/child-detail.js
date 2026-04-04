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
    draftText: ""
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
    this.setData({ showModal: true });
  },

  closeDraft() {
    this.setData({ showModal: false });
  },

  onDraftInput(e) {
    this.setData({ draftText: e.detail.value });
  },

  confirmSend() {
    wx.showToast({ title: "已发送", icon: "success" });
    this.setData({ showModal: false });
  },

  noop() {}
});
