export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const openModal = (content) => {
  return {
    type: OPEN_MODAL,
    content,
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
  };
};

const initialState = {
  isOpen: false,
  content: null,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        isOpen: true,
        content: action.content,
      };
    case CLOSE_MODAL:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
export default modalReducer;
