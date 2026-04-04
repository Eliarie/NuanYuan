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
  },
  {
    name: "小红",
    avatar: "🌸",
    status: "良好",
    statusClass: "green",
    draft: "您好！小红最近表现非常棒，在故事分享环节主动发言，语言表达能力很突出。请继续鼓励她在家多讲故事。",
    dims: [
      { label: "语言表达", val: 90 },
      { label: "艺术创造", val: 85 },
      { label: "认知能力", val: 82 },
      { label: "生活习惯", val: 88 }
    ],
    timeline: [
      { date: "3月24日", text: "在故事分享环节主动发言，表达清晰流畅，获得同学掌声。" },
      { date: "3月19日", text: "绘画作品完成度高，愿意帮助同学配色。" }
    ]
  },
  {
    name: "小华",
    avatar: "🐸",
    status: "良好",
    statusClass: "green",
    draft: "您好！小华在户外活动中表现出色，还主动帮助组织同学，展现了很好的领导力和合作精神。",
    dims: [
      { label: "运动发展", val: 88 },
      { label: "专注力", val: 72 },
      { label: "认知能力", val: 78 },
      { label: "生活习惯", val: 80 }
    ],
    timeline: [
      { date: "3月22日", text: "户外活动表现突出，帮助组织小朋友排队。" },
      { date: "3月18日", text: "体能课中连续完成障碍赛，专注度提升。" }
    ]
  },
  {
    name: "小强",
    avatar: "🚀",
    status: "良好",
    statusClass: "green",
    draft: "您好！小强在积木活动中展现了出色的逻辑思维，还主动邀请同学合作，非常值得表扬。",
    dims: [
      { label: "逻辑思维", val: 92 },
      { label: "合作能力", val: 85 },
      { label: "认知能力", val: 90 },
      { label: "生活习惯", val: 78 }
    ],
    timeline: [
      { date: "3月21日", text: "积木搭建活动中主动邀请同学合作，完成复杂结构。" },
      { date: "3月17日", text: "数学游戏中快速完成配对任务，逻辑判断准确。" }
    ]
  },
  {
    name: "小美",
    avatar: "🌈",
    status: "良好",
    statusClass: "green",
    draft: "您好！小美在音乐课上表现非常活跃，节奏感很好，还带动了周围小朋友一起参与，很有感染力。",
    dims: [
      { label: "音乐感知", val: 93 },
      { label: "情绪表达", val: 87 },
      { label: "认知能力", val: 80 },
      { label: "生活习惯", val: 82 }
    ],
    timeline: [
      { date: "3月20日", text: "音乐课上跟着节奏打拍子，带动周围小朋友参与。" },
      { date: "3月14日", text: "情绪表达更主动，能清晰说出开心和难过的原因。" }
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

function addChild(child) {
  children.unshift(child);
  return child;
}

module.exports = {
  children,
  addChild,
  parentAiReplies,
  parentInitialChat,
  parentReviewList
};
