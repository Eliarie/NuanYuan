const { API_CONFIG } = require("../utils/config");
const { request } = require("../utils/request");
const { adaptParentBootstrapForUI } = require("../utils/adapter");
const {
  parentAiReplies,
  parentInitialChat,
  parentReviewList,
  parentChildInfo,
  parentTeacherMessage,
  parentActivities,
  parentCooperationTip,
  parentReviewDimensions
} = require("./mock-db");

function getParentBootstrap() {
  if (API_CONFIG.useMock) {
    return Promise.resolve(adaptParentBootstrapForUI({
      chatList: parentInitialChat,
      reviewList: parentReviewList,
      aiReplies: parentAiReplies,
      childInfo: parentChildInfo,
      teacherMessage: parentTeacherMessage,
      activities: parentActivities,
      cooperationTip: parentCooperationTip,
      reviewDimensions: parentReviewDimensions
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
