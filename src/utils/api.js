import axiosInstance from "system/axios";

export const apiTest = () => {
  return axiosInstance.get("api");
};
