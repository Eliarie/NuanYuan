const { API_CONFIG } = require("../utils/config");
const { request } = require("../utils/request");
const {
  parentAiReplies,
  parentInitialChat,
  parentReviewList
} = require("./mock-db");

function getParentBootstrap() {
  if (API_CONFIG.useMock) {
    return Promise.resolve({
      chatList: parentInitialChat,
      reviewList: parentReviewList,
      aiReplies: parentAiReplies
    });
  }

  return request({
    url: "/parent/bootstrap",
    method: "GET"
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
