import axiosInstance from "system/axios";

// loading 기능 default값은 true

export const apiTest = (options) => {
  return axiosInstance.get("api", { useLoading: true, ...options });
};
