import { useReducer } from "react";
import counterReducer, { counterDefaultStore } from "./counter";
import authReducer, { authDefaultStore } from "./auth";

const Reducers = () => {
  const [counterStore, counter] = useReducer(
    counterReducer,
    counterDefaultStore
  );

  const [authStore, auth] = useReducer(authReducer, authDefaultStore);

  return {
    store: { ...counterStore, ...authStore },
    dispatch: [counter, auth]
  };
};

export default Reducers;
