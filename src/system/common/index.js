import ConfirmModal from "modal/ConfirmModal";
import { inAuth, outAuth } from "system/redux/module/authReducer";
import { openModal, closeModal } from "system/redux/module/modalReducer";

let _store = null;

export const init = (store) => {
  _store = store;
};

export const showConfirmModal = (data) => {
  const modalData = {
    key: new Date().getTime(),
    Component: ConfirmModal,
    isOpen: true,
    content: data.content || "오류가 발생했습니다.",
    clickAction: data.clickAction,
  };
  _store.dispatch(openModal(modalData));
};
export const hideModal = (key) => {
  _store.dispatch(closeModal(key));
};

export const checkInAuth = () => {
  _store.dispatch(inAuth());
};
export const checkOutAuth = () => {
  _store.dispatch(outAuth());
};
