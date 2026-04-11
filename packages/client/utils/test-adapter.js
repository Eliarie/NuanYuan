/**
 * 适配器测试文件
 * 用于验证数据转换是否正确
 */

const {
  adaptChildForUI,
  adaptChildDetailForUI,
  adaptChildFromUI,
  adaptParentBootstrapForUI
} = require('./adapter');

// 测试数据：shared 包格式
const sharedChild = {
  id: "child-001",
  name: "小明",
  avatar: "🐯",
  status: "需关注",
  tags: ["情绪管理", "社交发展"],
  dimensions: [
    { label: "情绪管理", score: 65 },
    { label: "社交发展", score: 55 }
  ],
  parents: [
    { id: "parent-001", role: "爸爸" }
  ],
  timeline: [
    {
      id: "timeline-001",
      date: "2026-03-25T09:30:00.000Z",
      content: "争抢玩具时推倒同学，情绪激动约 5 分钟后平复。",
      type: "observation",
      teacherId: "teacher-001",
      teacherName: "李老师"
    }
  ]
};

console.log("=== 测试 adaptChildForUI ===");
const uiChild = adaptChildForUI(sharedChild);
console.log("转换后的 UI 格式：", JSON.stringify(uiChild, null, 2));

console.log("\n=== 测试 adaptChildDetailForUI ===");
const uiDetail = adaptChildDetailForUI(sharedChild);
console.log("转换后的详情格式：", JSON.stringify(uiDetail, null, 2));

console.log("\n=== 测试 adaptChildFromUI ===");
const backToShared = adaptChildFromUI(uiChild);
console.log("转换回 shared 格式：", JSON.stringify(backToShared, null, 2));

// 测试数据：家长端 bootstrap（SharedRecord 风格）
const parentBootstrap = {
  childInfo: {
    id: "child-001",
    name: "小明",
    avatar: "🐯",
    className: "小二班",
    age: "4岁2个月"
  },
  teacherMessage: {
    id: "msg-001",
    childId: "child-001",
    originalDate: "2026-03-27T14:40:00.000Z",
    highlight: "老师有新消息",
    detail: "今天在玩具区有小冲突，已引导用语言表达需求。",
    type: "message",
    teacherName: "李老师"
  },
  activities: [
    {
      id: "act-001",
      childId: "child-001",
      originalDate: "2026-03-27T12:10:00.000Z",
      highlight: "午饭和课堂表现稳定",
      detail: "午饭吃得很好，下午积木课专注度不错。",
      type: "activity"
    }
  ],
  cooperationTip: {
    id: "tip-001",
    childId: "child-001",
    originalDate: "2026-03-27T14:40:00.000Z",
    detail: "建议在家持续练习轮流游戏。",
    type: "message",
    teacherName: "李老师"
  },
  reviewDimensions: [
    { label: "情绪管理", score: 65 },
    { label: "社交发展", score: 55 }
  ]
};

console.log("\n=== 测试 adaptParentBootstrapForUI ===");
const parentUI = adaptParentBootstrapForUI(parentBootstrap);
console.log("转换后的家长端 UI 格式：", JSON.stringify(parentUI, null, 2));

console.log("\n=== 测试完成 ===");
