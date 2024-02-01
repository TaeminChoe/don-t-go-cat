import axiosInstance from "system/axios";

export const getProductsNew = (params) => {
  return axiosInstance.get(`/product/list`, {
    params: params,
  });
};

export const getProducts = (queryString) => {
  return axiosInstance.get(`/product/list?${queryString}`, {});
};
export const getProductDetail = (id) => {
  return axiosInstance.get(`/product/detail?id=${id}`);
};

export const postLike = (productId) => {
  return axiosInstance.post(`/product/favorite`, {
    productId,
  });
};

export const Dislike = (productId) => {
  return axiosInstance.delete(`/product/favorite?productId=${productId}`, {
    data: { productId },
  });
};

export const getKeyword = (keyword) => {
  return axiosInstance.get(`/product/keyword?keyword=${keyword}`);
};
