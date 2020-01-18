import { LOGOUT, LOGIN } from "../auth";

const middleware = action => next => {
  if (action.type === LOGIN) {
    console.log(action);
  }

  if (action.type === LOGOUT) {
    console.log(action);
  }

  next(action);
};

export default middleware;
