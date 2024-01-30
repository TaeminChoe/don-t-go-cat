import axiosInstance from "system/axios";

const userInfo = JSON.parse(sessionStorage.getItem("userInfo")) || "";

export const getProducts = (queryString) => {
  return axiosInstance.get(`/product/list?${queryString}`, {
    headers: {
      Authorization: userInfo.token,
    },
  });
};
export const getProductDetail = (id) => {
  return axiosInstance.get(`/product/detail?id=${id}`, {
    headers: {
      Authorization: userInfo.token,
    },
  });
};
