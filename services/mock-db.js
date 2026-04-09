const children = [
  {
    id: "child-001",
    name: "小明",
    avatar: "🐯",
    status: "需关注",
    tags: ["情绪管理", "社交发展"],
    dimensions: [
      { label: "情绪管理", score: 65 },
      { label: "社交发展", score: 55 },
      { label: "认知能力", score: 80 },
      { label: "生活习惯", score: 75 }
    ],
    parents: [
      { id: "parent-001", role: "爸爸" }
    ],
    draft: "您好！今天小明在玩具区和小朋友发生了一点小冲突。我们在园里正在帮助他练习用语言表达需求，比如'我想要这个玩具，可以借我吗？'。如果在家也能配合练习这个句式，相信小明会进步得更快。",
    timeline: [
      {
        id: "timeline-001",
        date: "2026-03-25T09:30:00.000Z",
        content: "争抢玩具时推倒同学，情绪激动约 5 分钟后平复。尝试冷处理，有效但需强化。",
        type: "observation",
        teacherId: "teacher-001",
        teacherName: "李老师"
      },
      {
        id: "timeline-002",
        date: "2026-03-20T10:15:00.000Z",
        content: "主动分享积木给小红，老师给予正向强化。家长反馈在家也有进步。",
        type: "result",
        teacherId: "teacher-001",
        teacherName: "李老师"
      },
      {
        id: "timeline-003",
        date: "2026-03-15T14:00:00.000Z",
        content: "参与角色扮演活动表现积极，能用语言表达需求，是一个好的开始。",
        type: "observation",
        teacherId: "teacher-001",
        teacherName: "李老师"
      }
    ]
  },
  {
    id: "child-002",
    name: "小丽",
    avatar: "🦋",
    status: "需关注",
    tags: ["分离焦虑"],
    dimensions: [
      { label: "情绪管理", score: 50 },
      { label: "社交发展", score: 60 },
      { label: "认知能力", score: 75 },
      { label: "生活习惯", score: 70 }
    ],
    parents: [
      { id: "parent-002", role: "妈妈" }
    ],
    draft: "您好！小丽最近早上入园时有些分离焦虑，哭泣约 10 分钟。建议在家提前聊聊幼儿园有趣的事，帮助她建立对幼儿园的正向期待。",
    timeline: [
      {
        id: "timeline-004",
        date: "2026-03-26T08:30:00.000Z",
        content: "早上入园哭泣约 10 分钟，需老师陪伴安抚。午后情绪稳定，参与了绘画活动。",
        type: "observation",
        teacherId: "teacher-001",
        teacherName: "李老师"
      }
    ]
  },
  {
    id: "child-003",
    name: "小红",
    avatar: "🌸",
    status: "良好",
    tags: ["语言表达", "艺术创造"],
    dimensions: [
      { label: "语言表达", score: 90 },
      { label: "艺术创造", score: 85 },
      { label: "认知能力", score: 82 },
      { label: "生活习惯", score: 88 }
    ],
    parents: [
      { id: "parent-003", role: "妈妈" }
    ],
    draft: "您好！小红最近表现非常棒，在故事分享环节主动发言，语言表达能力很突出。请继续鼓励她在家多讲故事。",
    timeline: [
      {
        id: "timeline-005",
        date: "2026-03-24T10:30:00.000Z",
        content: "在故事分享环节主动发言，表达清晰流畅，获得同学掌声。",
        type: "observation",
        teacherId: "teacher-001",
        teacherName: "李老师"
      }
    ]
  },
  {
    id: "child-004",
    name: "小华",
    avatar: "🐸",
    status: "良好",
    tags: ["运动发展", "领导力"],
    dimensions: [
      { label: "运动发展", score: 88 },
      { label: "专注力", score: 72 },
      { label: "认知能力", score: 78 },
      { label: "生活习惯", score: 80 }
    ],
    parents: [
      { id: "parent-004", role: "爸爸" }
    ],
    draft: "您好！小华在户外活动中表现出色，还主动帮助组织同学，展现了很好的领导力和合作精神。",
    timeline: [
      {
        id: "timeline-006",
        date: "2026-03-22T15:00:00.000Z",
        content: "户外活动表现突出，帮助组织小朋友排队，展现出领导力。",
        type: "observation",
        teacherId: "teacher-001",
        teacherName: "李老师"
      }
    ]
  },
  {
    id: "child-005",
    name: "小强",
    avatar: "🚀",
    status: "良好",
    tags: ["逻辑思维", "合作能力"],
    dimensions: [
      { label: "逻辑思维", score: 92 },
      { label: "合作能力", score: 85 },
      { label: "认知能力", score: 90 },
      { label: "生活习惯", score: 78 }
    ],
    parents: [
      { id: "parent-005", role: "妈妈" }
    ],
    draft: "您好！小强在积木活动中展现了出色的逻辑思维，还主动邀请同学合作，非常值得表扬。",
    timeline: [
      {
        id: "timeline-007",
        date: "2026-03-21T14:30:00.000Z",
        content: "积木搭建活动中主动邀请同学合作，完成了复杂结构，很有成就感。",
        type: "observation",
        teacherId: "teacher-001",
        teacherName: "李老师"
      }
    ]
  },
  {
    id: "child-006",
    name: "小美",
    avatar: "🌈",
    status: "良好",
    tags: ["音乐感知", "情绪表达"],
    dimensions: [
      { label: "音乐感知", score: 93 },
      { label: "情绪表达", score: 87 },
      { label: "认知能力", score: 80 },
      { label: "生活习惯", score: 82 }
    ],
    parents: [
      { id: "parent-006", role: "爸爸" }
    ],
    draft: "您好！小美在音乐课上表现非常活跃，节奏感很好，还带动了周围小朋友一起参与，很有感染力。",
    timeline: [
      {
        id: "timeline-008",
        date: "2026-03-20T11:00:00.000Z",
        content: "音乐课上跟着节奏打拍子，情绪愉快，带动了周围小朋友的参与热情。",
        type: "observation",
        teacherId: "teacher-001",
        teacherName: "李老师"
      }
    ]
  }
];

const parentAiReplies = [
  "您说得很对！3-4 岁孩子出现这种情况很常见，通常是因为语言能力还在发展中，情绪来了但找不到合适的词来表达。建议睡前可以一起做'今天三件事'复盘。",
  "这个问题问得很好！4 岁左右的孩子正处于自我意识快速发展期，争抢行为其实是在探索'我的'和'你的'边界。可以在家多玩轮流游戏。",
  "您的观察很细心！孩子在家和在园表现不同是很正常的，建议把在家观察到的细节告诉老师，老师可以更有针对性地帮助孩子。",
  "理解您的担心。分离焦虑在这个年龄段很普遍，通常会逐渐改善。离园时可以建立固定'再见仪式'，帮助孩子建立安全感。"
];

const parentInitialChat = [
  {
    role: "ai",
    text: "您好！我是暖元育儿助手。\n\n我了解小明在园的情况，也可以帮您解答育儿问题、分析孩子行为，或者倾听您的育儿烦恼。"
  },
  {
    role: "user",
    text: "老师说小明最近爱抢玩具，我在家怎么配合？"
  },
  {
    role: "ai",
    text: "这个问题问得很好！在家可以多玩'轮流游戏'，比如轮流搭积木、轮流讲故事，让孩子在游戏中自然学会等待和分享。"
  }
];

const parentReviewList = [
  {
    title: "本周成长亮点",
    content: "小明在分享玩具前会先表达'我也想玩'，冲突次数明显减少。"
  },
  {
    title: "家园共育进展",
    content: "家长与老师同步练习句式后，孩子语言替代行为出现频率增加。"
  },
  {
    title: "下周关注建议",
    content: "继续强化轮流规则，并加入情绪命名练习，例如'我现在有点着急'。"
  }
];

// 家长端：孩子信息
const parentChildInfo = {
  id: children[0].id,
  name: children[0].name,
  avatar: children[0].avatar,
  className: "小二班",
  age: "4岁2个月"
};

// 家长端：老师消息
const parentTeacherMessage = {
  id: "msg-001",
  childId: children[0].id,
  originalDate: "2026-03-27T14:40:00.000Z",
  highlight: "老师有新消息",
  detail: "您好！今天小明在玩具区和小朋友发生了一点小冲突。我们在园里正在帮助他练习用语言表达需求，比如'我想要这个玩具，可以借我吗？'。\n\n如果在家也能配合练习这个句式，相信小明会进步得更快。有任何问题欢迎随时沟通。",
  type: "message",
  tag: "🔔 老师有新消息",
  teacherName: "李老师"
};

// 家长端：在园动态列表（SharedRecord 结构）
const parentActivities = [
  {
    id: "act-001",
    childId: children[0].id,
    originalDate: "2026-03-27T12:10:00.000Z",
    highlight: "午饭和课堂表现稳定",
    detail: "午饭吃得很好，把蔬菜都吃完了。下午积木课专注度不错。",
    type: "activity"
  },
  {
    id: "act-002",
    childId: children[0].id,
    originalDate: "2026-03-26T16:20:00.000Z",
    highlight: "入园和户外活动积极",
    detail: "早上入园情绪稳定，主动和老师打招呼。户外活动跑步第一名，很开心。",
    type: "activity"
  },
  {
    id: "act-003",
    childId: children[0].id,
    originalDate: "2026-03-25T15:30:00.000Z",
    highlight: "冲突已平稳处理",
    detail: "下午有小冲突，已处理。整体状态良好，睡午觉很快入睡。",
    type: "activity"
  }
];

// 家长端：配合建议
const parentCooperationTip = {
  id: "tip-001",
  childId: children[0].id,
  originalDate: "2026-03-27T14:40:00.000Z",
  highlight: "老师的配合建议",
  detail: "请在家配合练习用语言表达需求，比如'我想要这个玩具，可以借我吗？'。遇到情绪激动时先冷静，再复盘。",
  type: "message",
  tag: "📌 老师的配合建议",
  teacherName: "李老师"
};

// 家长端：发展维度（用于成长回顾）
const parentReviewDimensions = [
  { label: "情绪管理", score: 65 },
  { label: "社交发展", score: 55 },
  { label: "认知能力", score: 80 },
  { label: "生活习惯", score: 75 }
];

function addChild(child) {
  const newChild = {
    id: `child-${Date.now()}`,
    ...child,
    dimensions: child.dimensions || child.dims || [],
    timeline: child.timeline || []
  };
  children.unshift(newChild);
  return newChild;
}

module.exports = {
  children,
  addChild,
  parentAiReplies,
  parentInitialChat,
  parentReviewList,
  parentChildInfo,
  parentTeacherMessage,
  parentActivities,
  parentCooperationTip,
  parentReviewDimensions
};
