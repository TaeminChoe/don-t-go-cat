import axiosInstance from "system/axios";

const userInfo = JSON.parse(sessionStorage.getItem("userInfo")) || "";

export const getProductsNew = (params) => {
  return axiosInstance.get(`/product/list`, {
    headers: {
      Authorization: userInfo.token,
    },
    params: params,
  });
};

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

export const postLike = (productId) => {
  return axiosInstance.post(
    `/product/favorite`,
    {
      productId,
    },
    {
      headers: {
        Authorization: userInfo.token,
      },
    }
  );
};

export const Dislike = (productId) => {
  return axiosInstance.delete(`/product/favorite?productId=${productId}`, {
    data: { productId },
    headers: {
      Authorization: userInfo.token,
    },
  });
};

export const getKeyword = (keyword) => {
  return axiosInstance.get(`/product/keyword?keyword=${keyword}`, {
    headers: {
      Authorization: userInfo.token,
    },
  });
};
