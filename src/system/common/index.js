import { inAuth, outAuth } from "system/redux/module/authReducer";
import { openModal, closeModal } from "system/redux/module/modalReducer";

let _store = null;

export const init = (store) => {
  _store = store;
};

export const showModal = ({ content, clickAction }) => {
  _store.dispatch(openModal(content, clickAction));
};
export const hideModal = () => {
  _store.dispatch(closeModal());
};

export const checkInAuth = () => {
  _store.dispatch(inAuth());
};
export const checkOutAuth = () => {
  _store.dispatch(outAuth());
};
