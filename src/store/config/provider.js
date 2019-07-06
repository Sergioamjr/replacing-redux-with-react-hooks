import React, { useReducer } from "react";
import Context from "./config";
import counterReducer, { counterStore } from "../counter";

const Store = props => {
  const [counterState, counterDispatch] = useReducer(
    counterReducer,
    counterStore
  );

  const combinedReducers = {
    store: {
      ...counterState
    },
    dispatch: action => counterDispatch(action)
  };

  return (
    <Context.Provider value={combinedReducers}>
      {props.children}
    </Context.Provider>
  );
};

export default Store;
