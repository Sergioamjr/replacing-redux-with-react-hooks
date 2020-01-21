import { LOGOUT } from "./reducers/auth";
import { resetAction } from "./reducers/counter";

export default action => dispatch => {
  if (action.type === LOGOUT) {
    dispatch(resetAction());
  }

  dispatch(action);
};
