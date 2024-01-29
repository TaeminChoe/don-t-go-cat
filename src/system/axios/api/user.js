import axiosInstance from "system/axios";

export const postUserAccount = (account) => {
  const { id, pwd } = account;
  return axiosInstance.post("/user/token", {
    id: id,
    password: pwd,
  });
};
