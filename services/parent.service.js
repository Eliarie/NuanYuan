const { API_CONFIG } = require("../utils/config");
const { request } = require("../utils/request");
const { adaptParentBootstrapForUI } = require("../utils/adapter");
const {
  children,
  parentAiReplies,
  parentInitialChat,
  buildParentAggregateData
} = require("./mock-db");

function getParentBootstrap() {
  if (API_CONFIG.useMock) {
    const targetChildId = children[0] ? children[0].id : "";
    const aggregate = buildParentAggregateData(targetChildId);
    return Promise.resolve(adaptParentBootstrapForUI({
      chatList: parentInitialChat,
      aiReplies: parentAiReplies,
      reviewList: aggregate.parentReviewList,
      childInfo: aggregate.parentChildInfo,
      teacherMessage: aggregate.parentTeacherMessage,
      activities: aggregate.parentActivities,
      cooperationTip: aggregate.parentCooperationTip,
      reviewDimensions: aggregate.parentReviewDimensions
    }));
  }

  return request({
    url: "/parent/bootstrap",
    method: "GET"
  }).then(data => {
    return adaptParentBootstrapForUI(data);
  });
}

function submitParentNote(content) {
  if (API_CONFIG.useMock) {
    return Promise.resolve({ success: true, content });
  }

  return request({
    url: "/parent/note",
    method: "POST",
    data: { content }
  });
}

module.exports = {
  getParentBootstrap,
  submitParentNote
};
