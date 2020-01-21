import { LOGOUT, LOGIN } from "./reducers/auth";

export default action => next => {
  if (action.type === LOGIN) {
    console.log(action);
  }

  if (action.type === LOGOUT) {
    console.log(action);
  }

  next(action);
};
