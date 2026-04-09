const {
  getParentBootstrap,
  submitParentNote
} = require("../../services/parent.service");

Page({
  data: {
    activeTab: 0,
    roleMeta: "小明爸爸 · 小明成长",
    draft: "",
    homeNote: "",
    submitText: "告诉老师 💬",
    childInfo: {
      avatar: "👦",
      name: "小朋友",
      className: "",
      age: "",
      desc: ""
    },
    teacherMessage: {
      tag: "🔔 老师有新消息",
      content: "",
      time: "",
      teacherName: ""
    },
    activities: [],
    cooperationTip: {
      tag: "📌 老师的配合建议",
      content: "",
      time: "",
      teacherName: ""
    },
    reviewList: [],
    reviewDims: [],
    aiReplies: [],
    aiIndex: 0,
    chatList: [],
    chatAnchor: ""
  },

  onLoad() {
    this.loadBootstrap();
  },

  async loadBootstrap() {
    try {
      const result = await getParentBootstrap();
      const chatList = result.chatList || [];
      this.setData({
        chatList,
        reviewList: result.reviewList || [],
        reviewDims: result.reviewDims || [],
        aiReplies: result.aiReplies || [],
        childInfo: result.childInfo || this.data.childInfo,
        teacherMessage: result.teacherMessage || this.data.teacherMessage,
        activities: result.activities || [],
        cooperationTip: result.cooperationTip || this.data.cooperationTip,
        chatAnchor: chatList.length ? `msg-${chatList.length - 1}` : ""
      });
    } catch (error) {
      wx.showToast({ title: "页面数据加载失败", icon: "none" });
    }
  },

  switchTab(e) {
    const idx = Number(e.currentTarget.dataset.idx);
    const metas = ["小明爸爸 · 小明成长", "育儿AI助手", "告诉老师", "成长回顾"];
    this.setData({ activeTab: idx, roleMeta: metas[idx] });
  },

  onInput(e) {
    this.setData({ draft: e.detail.value });
  },

  sendMsg() {
    const text = this.data.draft.trim();
    if (!text) {
      return;
    }

    const list = [...this.data.chatList, { role: "user", text }];
    const aiReplies = this.data.aiReplies || [];
    const fallback = "收到你的消息了，我们会继续一起帮助小朋友成长。";
    const reply = aiReplies.length ? aiReplies[this.data.aiIndex % aiReplies.length] : fallback;
    list.push({ role: "ai", text: reply });

    this.setData({
      chatList: list,
      draft: "",
      aiIndex: this.data.aiIndex + 1,
      chatAnchor: `msg-${list.length - 1}`
    });
  },

  onNoteInput(e) {
    this.setData({ homeNote: e.detail.value });
  },

  async submitNote() {
    if (!this.data.homeNote.trim()) {
      wx.showToast({ title: "请先输入内容", icon: "none" });
      return;
    }

    try {
      await submitParentNote(this.data.homeNote.trim());
      this.setData({ submitText: "已告诉老师 ✓", homeNote: "" });
      setTimeout(() => {
        this.setData({ submitText: "告诉老师 💬" });
      }, 1200);
    } catch (error) {
      wx.showToast({ title: "发送失败，请重试", icon: "none" });
    }
  },

  logout() {
    wx.reLaunch({ url: "/pages/login/login" });
  }
});