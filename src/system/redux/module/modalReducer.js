export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const openModal = (content, clickAction) => {
  return {
    type: OPEN_MODAL,
    content,
    clickAction,
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
  clickAction: null,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        isOpen: true,
        content: action.content,
        clickAction: action.clickAction,
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
