import React from "react";
import PropTypes from "prop-types";
import useCombinedReducers from "./hooks/useCombinedReducers";
import { StoreContext } from "./hooks/useStore";
import middleware from "./middleware";

const Provider = ({ children }) => {
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

Provider.propTypes = {
  children: PropTypes.node.isRequired
};

export default Provider;
