const { API_CONFIG } = require("../utils/config");
const { request } = require("../utils/request");
const { children, addChild } = require("./mock-db");
const { adaptChildForUI, adaptChildDetailForUI } = require("../utils/adapter");

function getTeacherChildren() {
  if (API_CONFIG.useMock) {
    // 将 mock 数据转换为 UI 格式
    const adaptedChildren = children.map(child => adaptChildForUI(child));
    return Promise.resolve(adaptedChildren);
  }

  return request({
    url: "/teacher/children",
    method: "GET"
  }).then(data => {
    // 后端返回的数据也需要适配
    return data.map(child => adaptChildForUI(child));
  });
}

function getChildDetail(name) {
  if (API_CONFIG.useMock) {
    const child = children.find((item) => item.name === name) || children[0];
    // 转换为 UI 格式，包含 timeline
    return Promise.resolve(adaptChildDetailForUI(child));
  }

  return request({
    url: "/teacher/child-detail",
    method: "GET",
    data: { name }
  }).then(data => {
    return adaptChildDetailForUI(data);
  });
}

function createTeacherChild(child) {
  if (API_CONFIG.useMock) {
    const newChild = addChild(child);
    return Promise.resolve(adaptChildForUI(newChild));
  }

  return request({
    url: "/teacher/children",
    method: "POST",
    data: child
  }).then(data => {
    return adaptChildForUI(data);
  });
}

module.exports = {
  getTeacherChildren,
  getChildDetail,
  createTeacherChild
};
