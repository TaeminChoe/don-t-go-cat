import axiosInstance from "system/axios";

const userInfo = JSON.parse(sessionStorage.getItem("userInfo")) || "";

export const getProducts = (queryString) => {
  return axiosInstance.get(`/product/list?${queryString}`, {
    headers: {
      Authorization: userInfo.token,
    },
  });
};
