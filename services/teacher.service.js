const { API_CONFIG } = require("../utils/config");
const { request } = require("../utils/request");
const { children, addChild } = require("./mock-db");

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

function createTeacherChild(child) {
  if (API_CONFIG.useMock) {
    return Promise.resolve(addChild(child));
  }

  return request({
    url: "/teacher/children",
    method: "POST",
    data: child
  });
}

module.exports = {
  getTeacherChildren,
  getChildDetail,
  createTeacherChild
};
