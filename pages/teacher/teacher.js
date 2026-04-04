const { getTeacherChildren } = require("../../services/teacher.service");

Page({
  data: {
    activeTab: 0,
    roleMeta: "李老师 · 小二班",
    children: [],
    showModal: false,
    draftText: ""
  },

  onLoad() {
    this.loadChildren();
  },

  async loadChildren() {
    try {
      const children = await getTeacherChildren();
      const firstDraft = children[0] ? children[0].draft : "";
      this.setData({ children, draftText: firstDraft });
    } catch (error) {
      wx.showToast({ title: "孩子列表加载失败", icon: "none" });
    }
  },

  switchTab(e) {
    const idx = Number(e.currentTarget.dataset.idx);
    const metas = ["李老师 · 小二班", "小二班 · 孩子档案", "成长回顾", "我的"];
    this.setData({ activeTab: idx, roleMeta: metas[idx] });
  },

  openChild(e) {
    const name = e.currentTarget.dataset.name;
    wx.navigateTo({
      url: `/pages/child-detail/child-detail?name=${encodeURIComponent(name)}`
    });
  },

  openDraft() {
    const text = this.data.draftText || "您好！今天想同步一下孩子在园情况，欢迎您随时沟通。";
    this.setData({ showModal: true, draftText: text });
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

  logout() {
    wx.reLaunch({ url: "/pages/login/login" });
  },

  noop() {}
});
