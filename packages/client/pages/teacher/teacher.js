const {
  getTeacherChildren,
  createTeacherChild
} = require("../../services/teacher.service");

const EMOJI_OPTIONS = ['🐯','🦋','🌸','🐸','🚀','🌈','🐼','🦊','🐨','🦁','🐧','🌻'];

const TEAM_MEMBERS = [
  { name: '李老师', emoji: '👩‍🏫', role: '主班教师', isAdmin: true },
  { name: '王老师', emoji: '👩‍🎓', role: '副班教师', isAdmin: false },
  { name: '张老师', emoji: '🧑‍🏫', role: '实习教师', isAdmin: false }
];

const PENDING_MESSAGES = [
  {
    id: 1,
    from: '王老师',
    text: '您好！小丽今天早上入园情绪有些波动，建议在家可以提前和她聊聊幼儿园有趣的事，帮助她建立正向期待。'
  }
];

Page({
  data: {
    activeTab: 0,
    roleMeta: '李老师 · 小二班',
    children: [],
    filteredChildren: [],
    keyword: '',
    // modals
    showModal: false,
    showAddChild: false,
    showTeamPanel: false,
    // draft
    draftText: '',
    sendBtnText: '提交审批 ✉️',
    // voice
    inputMode: 'voice',
    isRecording: false,
    voicePreview: '按麦克风说话，或点击 ⌨️ 切换文字',
    chatDraft: '',
    // add child form
    newChild: { name: '', avatar: '🐯', statusClass: 'amber', status: '需关注' },
    emojiOptions: EMOJI_OPTIONS,
    // team
    teamMembers: TEAM_MEMBERS,
    isAdmin: true,
    pendingMessages: PENDING_MESSAGES
  },

  onLoad() {
    this.loadChildren();
  },

  async loadChildren() {
    try {
      const children = await getTeacherChildren();
      this.setData({ children, filteredChildren: children });
    } catch (e) {
      wx.showToast({ title: '孩子列表加载失败', icon: 'none' });
    }
  },

  switchTab(e) {
    const idx = Number(e.currentTarget.dataset.idx);
    const metas = ['李老师 · 小二班', '小二班 · 孩子档案', '成长回顾', '我的'];
    this.setData({ activeTab: idx, roleMeta: metas[idx] });
  },

  onKeywordInput(e) {
    const keyword = e.detail.value.trim();
    const filteredChildren = keyword
      ? this.data.children.filter(c => c.name.includes(keyword))
      : this.data.children;
    this.setData({ keyword, filteredChildren });
  },

  openChild(e) {
    const name = e.currentTarget.dataset.name;
    wx.navigateTo({ url: `/pages/child-detail/child-detail?name=${encodeURIComponent(name)}` });
  },

  // ── Draft / send to parent ──
  openDraft() {
    const first = this.data.children.find(c => c.status === '需关注');
    this.setData({
      showModal: true,
      draftText: first ? first.draft : '',
      sendBtnText: '提交审批 ✉️'
    });
  },

  closeDraft() {
    this.setData({ showModal: false });
  },

  onDraftInput(e) {
    this.setData({ draftText: e.detail.value });
  },

  confirmSend() {
    this.setData({ sendBtnText: '已提交 ✓' });
    setTimeout(() => {
      this.setData({ showModal: false, sendBtnText: '提交审批 ✉️' });
      wx.showToast({ title: '已提交，等待管理员审批', icon: 'success' });
    }, 900);
  },

  // ── Approval (admin only) ──
  approveMsg(e) {
    const id = e.currentTarget.dataset.id;
    const pending = this.data.pendingMessages.filter(m => m.id !== id);
    this.setData({ pendingMessages: pending });
    wx.showToast({ title: '已批准并发送', icon: 'success' });
  },

  rejectMsg(e) {
    const id = e.currentTarget.dataset.id;
    const pending = this.data.pendingMessages.filter(m => m.id !== id);
    this.setData({ pendingMessages: pending });
    wx.showToast({ title: '已拒绝', icon: 'none' });
  },

  // ── Add child ──
  openAddChild() {
    this.setData({
      showAddChild: true,
      newChild: { name: '', avatar: '🐯', statusClass: 'amber', status: '需关注' }
    });
  },

  closeAddChild() {
    this.setData({ showAddChild: false });
  },

  onNewChildName(e) {
    this.setData({ 'newChild.name': e.detail.value });
  },

  pickEmoji(e) {
    this.setData({ 'newChild.avatar': e.currentTarget.dataset.emoji });
  },

  pickStatus(e) {
    const { status, label } = e.currentTarget.dataset;
    this.setData({ 'newChild.statusClass': status, 'newChild.status': label });
  },

  async submitAddChild() {
    const { name, avatar, statusClass, status } = this.data.newChild;
    if (!name.trim()) {
      wx.showToast({ title: '请输入孩子姓名', icon: 'none' });
      return;
    }
    const child = {
      name: name.trim(),
      avatar,
      status,
      statusClass,
      draft: `您好！${name.trim()}已加入班级档案，后续会持续同步成长情况。`,
      dimensions: [
        { label: '情绪管理', score: 70 },
        { label: '社交发展', score: 70 },
        { label: '认知能力', score: 70 },
        { label: '生活习惯', score: 70 }
      ],
      timeline: [{
        id: `timeline-${Date.now()}`,
        date: new Date().toISOString(),
        content: '由老师新增档案。',
        type: 'notification'
      }]
    };
    try {
      await createTeacherChild(child);
      this.setData({ showAddChild: false });
      wx.showToast({ title: '添加成功', icon: 'success' });
      this.loadChildren();
    } catch (e) {
      wx.showToast({ title: '添加失败，请重试', icon: 'none' });
    }
  },

  // ── Team panel ──
  openTeamPanel() {
    this.setData({ showTeamPanel: true });
  },

  closeTeamPanel() {
    this.setData({ showTeamPanel: false });
  },

  openTeamChat() {
    this.setData({ showTeamPanel: false });
    wx.showToast({ title: '班级讨论群（即将上线）', icon: 'none' });
  },

  // ── Voice ──
  toggleRecord() {
    const next = !this.data.isRecording;
    this.setData({
      isRecording: next,
      voicePreview: next ? '正在听…' : '按麦克风说话，或点击 ⌨️ 切换文字'
    });
  },

  toTextMode() {
    this.setData({ inputMode: 'text', isRecording: false });
  },

  toVoiceMode() {
    this.setData({ inputMode: 'voice', isRecording: false, voicePreview: '按麦克风说话，或点击 ⌨️ 切换文字' });
  },

  onChatInput(e) {
    this.setData({ chatDraft: e.detail.value });
  },

  sendChat() {
    if (!this.data.chatDraft.trim()) return;
    this.setData({ chatDraft: '' });
    wx.showToast({ title: '消息已发送', icon: 'success' });
  },

  logout() {
    wx.reLaunch({ url: '/pages/login/login' });
  },

  noop() {}
});
