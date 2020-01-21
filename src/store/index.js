import React from "react";
import PropTypes from "prop-types";
import useCombinedReducers from "./hooks/useCombinedReducers";
import { storeContext as StoreContext } from "./hooks/useStore";
import middleware from "./middleware";

const Store = ({ children }) => {
  const { store, reducers } = useCombinedReducers();

  const triggerDispatchs = action => {
    for (let i = 0; i < reducers.length; i++) {
      reducers[i](action);
    }
  };

  const withMiddleware = action => {
    middleware(action)(triggerDispatchs);
  };

  return (
    <StoreContext.Provider
      value={{
        store,
        dispatch: withMiddleware
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

Store.propTypes = {
  children: PropTypes.node.isRequired
};

export default Store;
