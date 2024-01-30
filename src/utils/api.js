import axiosInstance from "system/axios";

// loading 기능 default값은 true

// const BASE_URL = "https://dont-go-cat-yang.koyeb.app/";

export const apiTest = (options) => {
  return axiosInstance.get("api", { useLoading: true, ...options });
};

export const getProductInfo = (id) => {
  return axiosInstance.get(`/product/detail?id=${id}`);
};
