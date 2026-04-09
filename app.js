App({
  globalData: {
    role: null,
    deviceInfo: null,
    isHarmonyOS: false
  },

  onLaunch() {
    console.log("[App] 暖元小程序启动");
    this.initDeviceInfo();
  },

  initDeviceInfo() {
    try {
      let deviceInfo = {};

      if (typeof wx.getDeviceInfo === "function") {
        deviceInfo = wx.getDeviceInfo();
      } else if (typeof wx.getSystemInfoSync === "function") {
        const systemInfo = wx.getSystemInfoSync();
        deviceInfo = {
          platform: systemInfo.platform,
          brand: systemInfo.brand,
          model: systemInfo.model,
          system: systemInfo.system
        };
      }

      this.globalData.deviceInfo = deviceInfo;
      this.globalData.isHarmonyOS = /harmony|openharmony/i.test(deviceInfo.system || "");
    } catch (error) {
      console.warn("[AppWarn] 获取设备信息失败", error);
    }
  },

  onError(err) {
    const message = typeof err === "string" ? err : (err && err.message) || "";
    // 忽略开发工具偶发超时报错，避免误导业务排查
    if (String(message).toLowerCase().includes("timeout")) {
      console.warn("[AppWarn] 忽略非业务 timeout 错误", message);
      return;
    }

    console.error("[AppError]", err);
  },

  onUnhandledRejection(res) {
    const reason = res && res.reason ? res.reason : res;
    const message = typeof reason === "string" ? reason : (reason && reason.message) || "";
    if (String(message).toLowerCase().includes("timeout")) {
      console.warn("[AppWarn] 忽略 Promise timeout", message);
      return;
    }

    console.error("[UnhandledRejection]", reason);
  }
});
