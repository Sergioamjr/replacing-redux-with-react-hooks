import { useReducer } from "react";
import counterReducer, { counterDefault } from "./counter";
import authReducer, { authDefault } from "./auth";

const Reducers = () => {
  const [counterStore, counter] = useReducer(counterReducer, counterDefault);
  const [authStore, auth] = useReducer(authReducer, authDefault);

  return {
    store: { ...counterStore, ...authStore },
    dispatchs: [counter, auth]
  };
};

export default Reducers;
