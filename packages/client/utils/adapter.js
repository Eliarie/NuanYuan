/**
 * 数据适配层
 * 将 shared 包的标准数据结构转换为小程序页面使用的格式
 */

/**
 * 获取状态对应的样式类名
 * @param {string} status - 状态："良好" | "需关注"
 * @returns {string} 样式类名
 */
function getStatusClass(status) {
  return status === "良好" ? "green" : "amber";
}

/**
 * 获取时间线类型对应的颜色
 * @param {string} type - 类型："observation" | "strategy" | "result" | "notification"
 * @returns {string} 颜色值
 */
function getTimelineColor(type) {
  const colorMap = {
    observation: "#D4A017",
    strategy: "#F9C74F",
    result: "#52c41a",
    notification: "#1890ff"
  };
  return colorMap[type] || "#D4A017";
}

/**
 * 格式化日期为显示格式
 * @param {string} isoDate - ISO 格式日期字符串
 * @returns {string} 格式化后的日期（如 "3月25日"）
 */
function formatDate(isoDate) {
  const date = new Date(isoDate);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${month}月${day}日`;
}

/**
 * 将 shared 包的 ChildProfile 转换为小程序使用的格式
 * @param {Object} child - shared 包的 ChildProfile 对象
 * @returns {Object} 小程序页面使用的孩子数据格式
 */
function adaptChildForUI(child) {
  return {
    id: child.id,
    name: child.name,
    avatar: child.avatar || "🐯",
    status: child.status,
    statusClass: getStatusClass(child.status),
    tags: child.tags || [],
    // 将 dimensions 的 score 映射为 val（兼容旧版页面）
    dims: (child.dimensions || []).map(dim => ({
      label: dim.label,
      val: dim.score
    })),
    // 保留原始 dimensions
    dimensions: child.dimensions || [],
    parents: child.parents || [],
    draft: child.draft || ""
  };
}

/**
 * 将 shared 包的 TimelineItem 转换为小程序使用的格式
 * @param {Object} item - shared 包的 TimelineItem 对象
 * @returns {Object} 小程序页面使用的时间线格式
 */
function adaptTimelineForUI(item) {
  return {
    id: item.id,
    date: formatDate(item.date),
    color: getTimelineColor(item.type),
    text: item.content,
    // 保留原始数据
    type: item.type,
    isoDate: item.date,
    teacherId: item.teacherId,
    teacherName: item.teacherName
  };
}

/**
 * 将完整的孩子详情数据转换为小程序格式
 * @param {Object} childDetail - 包含 profile 和 timeline 的对象
 * @returns {Object} 小程序页面使用的完整数据
 */
function adaptChildDetailForUI(childDetail) {
  const adapted = adaptChildForUI(childDetail);
  adapted.timeline = (childDetail.timeline || []).map(adaptTimelineForUI);
  return adapted;
}

/**
 * 将小程序的孩子数据转换为 shared 包格式（用于提交到后端）
 * @param {Object} uiChild - 小程序页面的孩子数据
 * @returns {Object} shared 包的 ChildProfile 格式
 */
function adaptChildFromUI(uiChild) {
  return {
    id: uiChild.id,
    name: uiChild.name,
    avatar: uiChild.avatar,
    status: uiChild.status,
    tags: uiChild.tags || [],
    dimensions: (uiChild.dimensions || uiChild.dims || []).map(dim => ({
      label: dim.label,
      score: dim.score || dim.val || 0
    })),
    parents: uiChild.parents || []
  };
}

/**
 * 将家长端发展维度转换为 UI 格式
 * @param {Array} dimensions - 标准维度数组（score）或旧版数组（val）
 * @returns {Array} 家长端 UI 使用的维度数组（val）
 */
function adaptParentDimensionsForUI(dimensions) {
  return (dimensions || []).map(dim => ({
    label: dim.label,
    val: typeof dim.val === "number" ? dim.val : (dim.score || 0)
  }));
}

/**
 * 将 SharedRecord / 旧消息对象映射为家长端卡片消息
 * @param {Object} record - 记录对象
 * @param {string} fallbackTag - 默认标签
 * @returns {Object} 消息卡片对象
 */
function adaptParentMessageRecordForUI(record, fallbackTag) {
  const source = record || {};
  return {
    id: source.id,
    tag: source.tag || fallbackTag,
    content: source.content || source.detail || "",
    time: source.time || (source.originalDate ? formatDate(source.originalDate) : ""),
    teacherName: source.teacherName || ""
  };
}

/**
 * 将家长端启动数据转换为页面可直接消费的格式
 * @param {Object} data - 家长端 bootstrap 数据
 * @returns {Object} 家长端 UI 数据
 */
function adaptParentBootstrapForUI(data) {
  const source = data || {};
  const childInfoSource = source.childInfo || source.childProfile || {};

  const childInfo = {
    id: childInfoSource.id,
    name: childInfoSource.name || "小朋友",
    avatar: childInfoSource.avatar || "👦",
    className: childInfoSource.className || "",
    age: childInfoSource.age || ""
  };
  childInfo.desc = [childInfo.className, childInfo.age].filter(Boolean).join(" · ");

  const teacherMessage = adaptParentMessageRecordForUI(
    source.teacherMessage,
    "🔔 老师有新消息"
  );

  const cooperationTip = adaptParentMessageRecordForUI(
    source.cooperationTip,
    "📌 老师的配合建议"
  );

  const feedRecords = source.activities || source.feedRecords || [];
  const activities = feedRecords.map(item => ({
    id: item.id,
    date: item.date || (item.originalDate ? formatDate(item.originalDate) : ""),
    content: item.content || item.detail || item.highlight || ""
  }));

  const chatList = (source.chatList || []).map(item => ({
    role: item.role,
    text: item.text
  }));

  const reviewList = (source.reviewList || []).map(item => ({
    title: item.title,
    content: item.content
  }));

  const reviewDims = adaptParentDimensionsForUI(source.reviewDimensions || source.reviewDims);

  return {
    chatList,
    reviewList,
    aiReplies: source.aiReplies || [],
    childInfo,
    teacherMessage,
    activities,
    cooperationTip,
    reviewDims,
    reviewDimensions: reviewDims
  };
}

module.exports = {
  getStatusClass,
  getTimelineColor,
  formatDate,
  adaptChildForUI,
  adaptTimelineForUI,
  adaptChildDetailForUI,
  adaptChildFromUI,
  adaptParentDimensionsForUI,
  adaptParentMessageRecordForUI,
  adaptParentBootstrapForUI
};
