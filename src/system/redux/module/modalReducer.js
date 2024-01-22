export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const openModal = (data) => {
  return {
    type: OPEN_MODAL,
    data,
  };
};

export const closeModal = (key) => {
  return {
    type: CLOSE_MODAL,
    key,
  };
};

const initialState = {
  components: [],
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      document.body.style.overflow = "hidden";
      return {
        components: [...state.components, action.data],
      };
    case CLOSE_MODAL:
      document.body.style.overflow = "auto";
      const updateComponents = [
        ...state.components.filter((component) => component.key !== action.key),
      ];
      return {
        components: updateComponents,
      };
    default:
      return state;
  }
};
export default modalReducer;
