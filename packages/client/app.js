App({
  globalData: {
    role: null,
    deviceInfo: null,
    isHarmonyOS: false,
    timeoutNoiseCount: 0
  },

  isDevtoolsTimeoutNoise(payload) {
    const text = typeof payload === "string"
      ? payload
      : JSON.stringify(payload || {});
    const lower = String(text).toLowerCase();

    const hasTimeout = lower.includes("timeout");
    const hasDevtoolsStack =
      lower.includes("waservicemaincontext") ||
      lower.includes("t=wechat&v=") ||
      lower.includes("env: windows,mp");

    return hasTimeout && hasDevtoolsStack;
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
    // 忽略开发工具层的 timeout 噪音，避免误导业务排查。
    if (this.isDevtoolsTimeoutNoise(err)) {
      this.globalData.timeoutNoiseCount += 1;
      console.warn("[AppWarn] 忽略开发工具 timeout 噪音", {
        count: this.globalData.timeoutNoiseCount
      });
      return;
    }

    console.error("[AppError]", err);
  },

  onUnhandledRejection(res) {
    const reason = res && res.reason ? res.reason : res;
    if (this.isDevtoolsTimeoutNoise(reason)) {
      this.globalData.timeoutNoiseCount += 1;
      console.warn("[AppWarn] 忽略 Promise timeout 噪音", {
        count: this.globalData.timeoutNoiseCount
      });
      return;
    }

    console.error("[UnhandledRejection]", reason);
  }
});
