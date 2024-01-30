import axiosInstance from "system/axios";

const userInfo = JSON.parse(sessionStorage.getItem("userInfo")) || "";

export const getProducts = (params) => {
  const { count, cursor } = params;
  return axiosInstance.get(`/product/list?count=${count}&cursor=${cursor}`, {
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
