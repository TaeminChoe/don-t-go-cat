import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:9500", // API의 기본 URL
  timeout: 5000, // 요청이 타임아웃되기 전까지 대기 시간 (ms)
});

let loadingCounter = 0;

// axios응답 요청시 해당 callback이 먼저 실행됨.
axiosInstance.interceptors.request.use(
  (config) => {
    const { useLoading } = config;
    if (useLoading) {
      if (loadingCounter === 0) {
        // 전역에서 관리하는 loading호출 로직 추가할 것.
      }
      loadingCounter++;
      console.log("Request started", loadingCounter);
    }
    return config;
  },
  (error) => {
    // 요청이 실패했을 때 실행됩니다.
    return Promise.reject(error);
  }
);

// axios응답 반환받을시 해당 callback이 먼저 실행됨.
axiosInstance.interceptors.response.use(
  (response) => {
    const {
      config: { useLoading },
    } = response;
    if (useLoading) {
      loadingCounter--;
      if (loadingCounter === 0) {
        // 전역에서 관리하는 loading hide로직 추가할 것.
      }
      console.log("Response success", loadingCounter);
    }
    return response;
  },
  (error) => {
    // 응답이 실패했을 때 실행됩니다.
    const {
      config: { useLoading },
    } = error;
    if (useLoading) {
      loadingCounter--;
      console.log("Response failed", loadingCounter);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
