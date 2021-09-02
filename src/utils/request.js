import axios from "axios";
import {Spin, message} from "antd";
import {render} from "react-dom";
//显示、隐藏loading加载中
let httpRequestCount = 0;
export const showLoading = () => {
  if (httpRequestCount === 0) {
    const loadingContainer = document.createElement("div");
    loadingContainer.setAttribute("id", "axios-loading-container");
    document.body.appendChild(loadingContainer);
    render(<Spin className="axios-loading" size="large" tip="loading..."/>, loadingContainer);
  }
  httpRequestCount++;
}
const hideLoading = () => {
  httpRequestCount--;
  if (httpRequestCount === 0) {
    document.body.removeChild(document.getElementById("axios-loading-container"));
  }
}
//axios拦截器数据处理
const service = axios.create({
  baseURL: process.env.REACT_APP_BASEURL,
  timeout: 15000
});
service.interceptors.request.use(
  config => {
    showLoading();
    config.headers.token = "123";
    return config
  },
  error => {
    hideLoading();
    return Promise.reject(error);
  }
);
service.interceptors.response.use(
  response => {
    hideLoading();
    const {code, data, msg} = response.data;
    if(code === 200) {
      return Promise.resolve(data);
    }else {
      message.error(msg);
      return Promise.reject(data);
    }
  },
  error => {
    hideLoading();
    message.error(error);
    return Promise.reject(error);
  }
);
export const getAxios = (url, params, option = {}) => {
  return service({
    url,
    params,
    method: "get",
    ...option
  })
}
export const postAxios = (url, params, option = {}) => {
  return service({
    url,
    params,
    method: "post",
    ...option
  })
}
