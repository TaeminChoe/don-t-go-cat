import { atom, selector } from "recoil";
import axiosInstance from "system/axios";

export const userInfoAtom = atom({
  key: "userInfoAtom",
  default: {},
});

export const setUserInfo = selector({
  key: "setUserInfo",
  get: ({ get }) => get(userInfoAtom),
  set: ({ set }, data) => {
    const { token } = data || "";
    console.log(token);
    axiosInstance.defaults.headers.common["Authorization"] = token;
    set(userInfoAtom, data);
  },
});
