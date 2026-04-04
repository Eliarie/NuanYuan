const children = [
  {
    name: "小明",
    avatar: "🐯",
    status: "需关注",
    statusClass: "amber",
    draft: "您好！今天小明在玩具区和小朋友发生了一点小冲突。我们在园里正在帮助他练习用语言表达需求。如果在家也能配合练习，相信小明会进步得更快。",
    dims: [
      { label: "情绪管理", val: 65 },
      { label: "社交发展", val: 55 },
      { label: "认知能力", val: 80 },
      { label: "生活习惯", val: 75 }
    ],
    timeline: [
      { date: "3月25日", text: "争抢玩具时推倒同学，情绪激动约5分钟后平复。" },
      { date: "3月20日", text: "主动分享积木给同学，家长反馈在家也有进步。" },
      { date: "3月15日", text: "角色扮演活动中，能够用语言表达需求。" }
    ]
  },
  {
    name: "小丽",
    avatar: "🦋",
    status: "需关注",
    statusClass: "amber",
    draft: "您好！小丽最近早上入园时有些分离焦虑，建议在家提前聊聊幼儿园有趣的事情，帮助她建立正向期待。",
    dims: [
      { label: "情绪管理", val: 50 },
      { label: "社交发展", val: 60 },
      { label: "认知能力", val: 75 },
      { label: "生活习惯", val: 70 }
    ],
    timeline: [
      { date: "3月26日", text: "早上入园哭泣约10分钟，午后情绪稳定。" },
      { date: "3月21日", text: "绘画活动表现积极，愿意与同伴交流。" }
    ]
  }
];

const parentAiReplies = [
  "这个问题问得很好。4岁左右的孩子会通过争抢来探索边界，建议在家多做轮流游戏。",
  "您可以和孩子一起练习句式：我想要这个玩具，可以借我吗？把冲突变成表达训练。",
  "孩子在家和在园表现不同很正常，建议把家里观察到的细节告诉老师，便于联合干预。"
];

const parentInitialChat = [
  { role: "ai", text: "您好！我是暖元育儿助手，有什么想聊的吗？" },
  { role: "user", text: "老师说小明最近爱抢玩具，我在家怎么配合？" },
  { role: "ai", text: "建议先共情，再练习轮流游戏，让孩子在游戏中学会等待和分享。" }
];

const parentReviewList = [
  { title: "本周成长亮点", content: "小明在分享玩具上的等待时长明显提升，能先表达再行动。" },
  { title: "家园协同进展", content: "老师和家长共同练习句式后，冲突次数下降，情绪恢复更快。" },
  { title: "下周关注建议", content: "继续强化轮流游戏，加入情绪命名练习，例如：我现在有点着急。" }
];

module.exports = {
  children,
  parentAiReplies,
  parentInitialChat,
  parentReviewList
};
