# 家长端 API 接口契约（联调版）

## 1. 适用范围

本文档用于后端与小程序家长端联调，覆盖以下接口：

1. GET /parent/bootstrap
2. POST /parent/note

前端调用位置：

1. services/parent.service.js
2. utils/adapter.js

---

## 2. Shared 基础模型

### 2.1 SharedRecord（推荐作为家长消息与动态统一模型）

来源：packages/shared/src/models/record.ts

字段：

1. id: string
2. childId: string
3. originalDate: string（ISO 8601，如 2026-03-27T14:40:00.000Z）
4. highlight: string
5. detail: string
6. type: activity | message（可选但建议返回）

说明：

1. 家长端中的老师消息、配合建议、在园动态都建议基于 SharedRecord 返回。
2. 当前前端适配器支持从 SharedRecord 自动映射到页面字段。

---

## 3. GET /parent/bootstrap

### 3.1 目标

一次返回家长首页四个 Tab 所需数据，减少多请求与首屏抖动。

### 3.2 请求

Method: GET  
Path: /parent/bootstrap

Query（建议）：

1. childId: string（可选，未传则返回当前绑定孩子）

Headers（建议）：

1. Authorization: Bearer <token>

### 3.3 响应（推荐标准结构）

```json
{
  "chatList": [
    { "role": "ai", "text": "您好！我是暖元育儿助手。" },
    { "role": "user", "text": "老师说孩子最近爱抢玩具，我在家怎么配合？" }
  ],
  "reviewList": [
    { "title": "本周成长亮点", "content": "孩子在分享前会先表达需求。" }
  ],
  "aiReplies": [
    "这个问题很常见，可以先从轮流游戏开始。"
  ],
  "childProfile": {
    "id": "child-001",
    "name": "小明",
    "avatar": "🐯",
    "className": "小二班",
    "age": "4岁2个月"
  },
  "teacherMessage": {
    "id": "msg-001",
    "childId": "child-001",
    "originalDate": "2026-03-27T14:40:00.000Z",
    "highlight": "老师有新消息",
    "detail": "今天在园里出现了小冲突，已引导使用语言表达。",
    "type": "message",
    "teacherName": "李老师",
    "tag": "🔔 老师有新消息"
  },
  "cooperationTip": {
    "id": "tip-001",
    "childId": "child-001",
    "originalDate": "2026-03-27T14:40:00.000Z",
    "highlight": "老师的配合建议",
    "detail": "建议在家持续练习轮流游戏与情绪命名。",
    "type": "message",
    "teacherName": "李老师",
    "tag": "📌 老师的配合建议"
  },
  "feedRecords": [
    {
      "id": "act-001",
      "childId": "child-001",
      "originalDate": "2026-03-27T12:10:00.000Z",
      "highlight": "午饭和课堂表现稳定",
      "detail": "午饭吃得很好，下午积木课专注度不错。",
      "type": "activity"
    }
  ],
  "reviewDimensions": [
    { "label": "情绪管理", "score": 65 },
    { "label": "社交发展", "score": 55 }
  ]
}
```

### 3.4 字段要求

必需字段（建议至少保证）：

1. chatList
2. reviewList
3. aiReplies
4. childProfile 或 childInfo（二选一）
5. teacherMessage
6. cooperationTip
7. feedRecords 或 activities（二选一）
8. reviewDimensions

兼容说明（当前前端已兼容）：

1. childProfile 与 childInfo 同时支持。
2. feedRecords 与 activities 同时支持。
3. teacherMessage/cooperationTip 支持 detail 或 content。
4. 动态记录支持 originalDate 或 date。
5. reviewDimensions 支持 score；reviewDims 支持 val（仅兼容，不建议新增）。

---

## 4. POST /parent/note

### 4.1 目标

家长向老师提交在家反馈。

### 4.2 请求

Method: POST  
Path: /parent/note

Body:

```json
{
  "content": "今天回家后我们练习了轮流游戏，孩子能等待 10 秒。"
}
```

字段约束：

1. content: string，建议 1-500 字。

### 4.3 响应（建议）

```json
{
  "success": true,
  "recordId": "note-20260409-001",
  "message": "提交成功"
}
```

兼容要求：

1. 前端当前只强依赖 success。
2. 建议补充 recordId 便于追踪与审计。

---

## 5. 错误码建议

推荐统一返回结构：

```json
{
  "success": false,
  "code": "PARENT_BOOTSTRAP_FAILED",
  "message": "加载家长首页数据失败"
}
```

建议错误码：

1. UNAUTHORIZED（登录失效）
2. CHILD_NOT_BOUND（未绑定孩子）
3. PARENT_BOOTSTRAP_FAILED（聚合数据加载失败）
4. PARENT_NOTE_INVALID（提交内容非法）
5. PARENT_NOTE_FAILED（提交失败）

---

## 6. 前端适配映射（后端对照）

映射规则来自 utils/adapter.js：

1. teacherMessage.content <= content || detail
2. teacherMessage.time <= time || formatDate(originalDate)
3. activities[].date <= date || formatDate(originalDate)
4. activities[].content <= content || detail || highlight
5. reviewDims[].val <= val || score
6. childInfo 来源 <= childInfo 或 childProfile

结论：

1. 后端优先按 SharedRecord + reviewDimensions(score) 返回即可。
2. 旧字段只做过渡兼容，不建议继续扩散。
