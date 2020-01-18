import React, { useReducer } from "react";
import Context from "./config";
import counterReducer, { counterStore } from "../counter";
import authReducer, { authStore } from "../auth";
import middleware from "./middleware";

const Store = props => {
  const [counterState, counterDispatch] = useReducer(
    counterReducer,
    counterStore
  );

  const [authState, authDispatch] = useReducer(authReducer, authStore);

  const trigglerDispatchs = action => {
    const dispatchs = [counterDispatch, authDispatch];
    for (let i = 0; i < dispatchs.length; i++) {
      dispatchs[i](action);
    }
  };

  const middlewareContrutor = action => {
    middleware(action)(trigglerDispatchs);
  };

  const combinedReducers = {
    store: {
      ...counterState,
      ...authState
    },
    dispatch: middlewareContrutor
  };

  return (
    <Context.Provider value={combinedReducers}>
      {props.children}
    </Context.Provider>
  );
};

export default Store;
