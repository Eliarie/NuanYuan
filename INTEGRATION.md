# Shared 包融合完成文档

## 完成时间
2026-04-09

## 融合内容

### 1. 数据结构对齐
已将 `services/mock-db.js` 的数据结构调整为与 `@packages/shared` 包一致：

**主要变更：**
- ✅ 添加 `id` 字段（所有孩子、时间线记录）
- ✅ `dims[].val` → `dimensions[].score`
- ✅ 移除 `statusClass`（改为动态计算）
- ✅ `timeline[].text` → `timeline[].content`
- ✅ `timeline[].date` 改为 ISO 8601 格式
- ✅ 添加 `timeline[].type`（observation/strategy/result/notification）
- ✅ 添加 `tags` 字段
- ✅ 添加 `parents` 字段

### 2. 适配层创建
创建了 `utils/adapter.js` 适配层，提供双向转换：

**核心函数：**
- `adaptChildForUI(child)` - 将 shared 格式转为小程序 UI 格式
- `adaptChildDetailForUI(childDetail)` - 转换完整详情（含 timeline）
- `adaptChildFromUI(uiChild)` - 将 UI 格式转回 shared 格式
- `getStatusClass(status)` - 状态 → 样式类名
- `getTimelineColor(type)` - 时间线类型 → 颜色
- `formatDate(isoDate)` - ISO 日期 → 显示格式

### 3. Service 层更新
更新了 `services/teacher.service.js`：
- ✅ 所有返回数据自动通过适配器转换
- ✅ Mock 数据和真实 API 数据统一处理
- ✅ 为后端接入做好准备

### 4. 页面层更新
更新了 `pages/teacher/teacher.js`：
- ✅ 新增孩子时使用 shared 包的数据结构
- ✅ `dimensions[].score` 替代 `dims[].val`
- ✅ Timeline 使用标准格式

### 5. 家长端对齐完善
已将家长端 mock 数据升级为更严格的 shared 风格，并通过适配层统一映射到 UI：

**主要变更：**
- ✅ `services/mock-db.js` 中家长端消息与动态使用 SharedRecord 字段（`originalDate/highlight/detail/type`）
- ✅ `utils/adapter.js` 新增 `adaptParentBootstrapForUI()` 对家长端数据做统一转换
- ✅ 家长页面改为动态绑定 `childInfo/teacherMessage/activities/cooperationTip/reviewDims`
- ✅ `services/parent.service.js` 中 mock 与真实 API 都走同一适配出口
- ✅ `utils/test-adapter.js` 新增家长端适配自测

## 数据流转示意

```
┌─────────────────┐
│  Shared 包定义   │ (TypeScript + Zod)
│  - ChildProfile │
│  - TimelineItem │
│  - API DTOs     │
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│   Mock 数据库    │ (services/mock-db.js)
│  标准 shared 格式 │
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│   适配器层       │ (utils/adapter.js)
│  shared ↔ UI    │
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│   Service 层    │ (services/*.service.js)
│  自动转换数据    │
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│   页面层        │ (pages/*/*.js)
│  使用 UI 格式   │
└─────────────────┘
```

## 兼容性说明

### 向后兼容
适配器同时保留了新旧字段：
- `dimensions` (新) + `dims` (旧) 同时存在
- `statusClass` 动态计算，页面无需修改
- Timeline 保留原始数据 + 格式化数据

### 前端页面
现有页面代码**无需修改**，因为：
- `dims[].val` 仍然可用（由适配器生成）
- `statusClass` 仍然存在（动态计算）
- Timeline 的 `date`、`color`、`text` 字段保持不变

## 测试验证

已通过 `utils/test-adapter.js` 验证：
- ✅ shared → UI 转换正确
- ✅ UI → shared 转换正确
- ✅ Timeline 格式化正确
- ✅ 日期格式转换正确

## 后续接入真实后端

当需要接入真实后端时：

1. **修改配置**
   ```javascript
   // utils/config.js
   const API_CONFIG = {
     useMock: false,  // 改为 false
     baseURL: "https://your-api.com"
   };
   ```

2. **后端返回数据格式**
   后端应返回符合 `@packages/shared` 定义的数据结构

3. **自动适配**
   Service 层会自动将后端数据转换为 UI 格式

## 文件清单

### 修改的文件
- `services/mock-db.js` - 数据结构对齐
- `services/teacher.service.js` - 添加适配器调用
- `services/parent.service.js` - 家长端数据统一适配
- `pages/teacher/teacher.js` - 新增孩子使用新格式
- `pages/parent/parent.js` - 接入家长端适配数据
- `pages/parent/parent.wxml` - 动态绑定替代静态 mock 文案
- `app.js` - 优化错误处理
- `utils/request.js` - 添加超时配置
- `utils/test-adapter.js` - 增加家长端适配测试

### 新增的文件
- `utils/adapter.js` - 数据适配层
- `utils/test-adapter.js` - 适配器测试
- `INTEGRATION.md` - 本文档
- `PARENT_API_CONTRACT.md` - 家长端后端联调接口契约

## 优势

1. **类型安全** - 前后端使用相同的数据定义
2. **易于维护** - 修改一次，全局生效
3. **向后兼容** - 现有页面无需改动
4. **渐进式迁移** - 可以逐步切换到真实后端
5. **测试友好** - Mock 和真实数据使用相同结构
