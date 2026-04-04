const { API_CONFIG } = require("../utils/config");
const { request } = require("../utils/request");
const { children } = require("./mock-db");

function getTeacherChildren() {
  if (API_CONFIG.useMock) {
    return Promise.resolve(children);
  }

  return request({
    url: "/teacher/children",
    method: "GET"
  });
}

function getChildDetail(name) {
  if (API_CONFIG.useMock) {
    const child = children.find((item) => item.name === name) || children[0];
    return Promise.resolve(child);
  }

  return request({
    url: "/teacher/child-detail",
    method: "GET",
    data: { name }
  });
}

module.exports = {
  getTeacherChildren,
  getChildDetail
};
