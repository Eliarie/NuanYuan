const { getTeacherChildren, createTeacherChild } = require("../../services/teacher.service");

Page({
  data: {
    activeTab: 0,
    roleMeta: "李老师 · 小二班",
    children: [],
    showModal: false,
    draftText: "",
    showAddModal: false,
    statusOptions: ["需关注", "良好"],
    addForm: {
      name: "",
      avatar: "👶",
      status: "需关注",
      focus: "",
      strength: "",
      note: ""
    }
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

  openAddChild() {
    this.setData({
      showAddModal: true,
      addForm: {
        name: "",
        avatar: "👶",
        status: "需关注",
        focus: "",
        strength: "",
        note: ""
      }
    });
  },

  closeAddChild() {
    this.setData({ showAddModal: false });
  },

  onAddFormInput(e) {
    const field = e.currentTarget.dataset.field;
    const value = e.detail.value;
    this.setData({
      [`addForm.${field}`]: value
    });
  },

  async confirmAddChild() {
    const form = this.data.addForm;
    if (!form.name.trim()) {
      wx.showToast({ title: "请填写孩子姓名", icon: "none" });
      return;
    }

    const newChild = {
      name: form.name.trim(),
      avatar: form.avatar.trim() || "👶",
      status: form.status || "需关注",
      statusClass: form.status === "良好" ? "green" : "amber",
      draft: form.note.trim() || `您好！${form.name.trim()}的情况我已记录，后续会持续关注。`,
      dims: [
        { label: form.focus.trim() || "重点关注", val: form.status === "良好" ? 80 : 60 },
        { label: form.strength.trim() || "优势发展", val: form.status === "良好" ? 88 : 72 },
        { label: "认知能力", val: 75 },
        { label: "生活习惯", val: 75 }
      ],
      timeline: [
        { date: "今天", text: form.note.trim() || "已由老师新增档案，后续将持续观察。" }
      ]
    };

    try {
      await createTeacherChild(newChild);
      this.setData({
        children: [newChild, ...this.data.children],
        showAddModal: false
      });
      wx.showToast({ title: "已新增孩子", icon: "success" });
    } catch (error) {
      wx.showToast({ title: "新增失败", icon: "none" });
    }
  },

  onStatusChange(e) {
    const value = Number(e.detail.value);
    const status = this.data.statusOptions[value] || "需关注";
    this.setData({
      "addForm.status": status
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
