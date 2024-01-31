import { atom } from "recoil";

export const checkAuthState = atom({
  key: "checkAuthState",
  default: false,
});

export const userInfoAtom = atom({
  key: "userInfoAtom",
  default: "",
});
