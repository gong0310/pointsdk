import { DefaultOptons, TrackerConfig, Options } from "../types/index";
export default class Tacker {
  public data: Options;
  constructor(options: Options) {
    this.data = Object.assign(this.initDef, options);
  }
  // 初始化默认参数
  private initDef(): DefaultOptons {
    return <DefaultOptons>{
      sdkVersion: TrackerConfig.version,
      historyTracker: false,
      hashTracker: false,
      domTracker: false,
      jsError: false,
    };
  }
}
