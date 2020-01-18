export const authDefaultStore = {
  auth: {
    isLogged: false,
    user: {}
  }
};

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

const authReducer = (state = authDefaultStore, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        auth: {
          ...state.auth,
          isLogged: true,
          user: action.payload
        }
      };
    case LOGOUT:
      return {
        auth: {
          ...state.auth,
          isLogged: false,
          user: {}
        }
      };
    default:
      return state;
  }
};

export const LogInUser = user => {
  return {
    type: LOGIN,
    payload: user
  };
};

export const LogOutUser = () => {
  return {
    type: LOGOUT
  };
};

export default authReducer;
