const { API_CONFIG } = require("./config");

function request(options = {}) {
  const {
    url = "",
    method = "GET",
    data = {},
    header = {}
  } = options;

  // In mock mode, never hit remote endpoints to avoid dev-time timeout noise.
  if (API_CONFIG.useMock) {
    console.warn(`[RequestWarn] mock mode enabled, skip request: ${method} ${url}`);
    return Promise.resolve({ skipped: true, mock: true });
  }

  return new Promise((resolve, reject) => {
    wx.request({
      url: `${API_CONFIG.baseURL}${url}`,
      method,
      data,
      timeout: 10000,
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
        const raw = (err && (err.errMsg || err.message)) || "request failed";
        const message = String(raw).toLowerCase().includes("timeout")
          ? "Request timeout"
          : String(raw);

        reject({
          message,
          isTimeout: message === "Request timeout",
          raw: err
        });
      }
    });
  });
}

module.exports = {
  request
};
