export const IN_AUTH = "IN_AUTH";
export const OUT_AUTH = "OUT_AUTH";

export const inAuth = () => {
  return {
    type: IN_AUTH,
  };
};
export const outAuth = () => {
  return {
    type: OUT_AUTH,
  };
};

const initialState = {
  checkAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case IN_AUTH:
      return {
        checkAuth: true,
      };
    case OUT_AUTH:
      return {
        checkAuth: false,
      };
    default:
      return state;
  }
};
export default authReducer;
