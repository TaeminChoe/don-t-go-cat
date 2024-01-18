import { openModal, closeModal } from "system/redux/module/modalReducer";

let _store = null;

export const init = (store) => {
  _store = store;
};

export const showModal = (content) => {
  _store.dispatch(openModal(content));
};
export const hideModal = () => {
  _store.dispatch(closeModal());
};
