import { Loading } from "element-ui";

let loadingCount = 0; // loading次数记录
let loading: any = null;
// 开始执行loading
function startLoading() {
  loading = Loading.service({
    // target: '.app-main',
    lock: true,
    text: "Loading",
    spinner: "el-icon-loading",
    background: "rgba(0, 0, 0, 0.7)"
    // text: '给我一点时间'
  });
}
// 结束执行loading
function endLoading() {
  loading.close();
}

/*
 * 显示loading
 */
export function showLoading() {
  if (loadingCount === 0) {
    startLoading();
  }
  loadingCount++;
}

/*
 * 关闭loading
 */
export function hideLoading() {
  if (loadingCount <= 0) return;
  loadingCount--;
  if (loadingCount === 0) {
    endLoading();
  }
}
