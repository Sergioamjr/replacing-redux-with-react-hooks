import { useReducer } from "react";
import counterReducer, { counterDefault } from "./../reducers/counter";
import authReducer, { authDefault } from "./../reducers/auth";

const useCombinedReducers = () => {
  const [counterStore, counter] = useReducer(counterReducer, counterDefault);
  const [authStore, auth] = useReducer(authReducer, authDefault);

  return {
    store: { ...counterStore, ...authStore },
    reducers: [counter, auth]
  };
};

export default useCombinedReducers;
