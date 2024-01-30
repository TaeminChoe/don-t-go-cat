import { atom, selector } from "recoil";
import ConfirmModal from "modal/ConfirmModal";

export const modalState = atom({
  key: "modalState",
  default: [],
});

export const openModal = selector({
  key: "openModal",
  get: ({ get }) => get(modalState),
  set: ({ set }, data) => {
    document.body.style.overflow = "hidden";
    const modalData = {
      key: new Date().getTime(),
      Component: data.Component || ConfirmModal,
      isOpen: true,
      content: data.content || "오류가 발생했습니다.",
      clickAction: data.clickAction,
    };
    set(modalState, (prev) => [...prev, modalData]);
  },
});

export const closeModal = selector({
  key: "closeModal",
  get: ({ get }) => get(modalState),
  set: ({ set }, key) => {
    document.body.style.overflow = "auto";
    set(modalState, (prev) => prev.filter((modal) => modal.key !== key));
  },
});
