const { API_CONFIG } = require("./config");

function request(options = {}) {
  const {
    url = "",
    method = "GET",
    data = {},
    header = {}
  } = options;

  return new Promise((resolve, reject) => {
    wx.request({
      url: `${API_CONFIG.baseURL}${url}`,
      method,
      data,
      header: {
        "Content-Type": "application/json",
        ...header
      },
      success(res) {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res.data);
          return;
        }

        reject({
          message: "Request failed",
          statusCode: res.statusCode,
          data: res.data
        });
      },
      fail(err) {
        reject(err);
      }
    });
  });
}

module.exports = {
  request
};
