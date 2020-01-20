import React from "react";
import PropTypes from "prop-types";
import useCombinedReducers from "./hooks/useCombinedReducers";
import { storeContext as StoreContext } from "./hooks/useStore";

const Store = ({ children }) => {
  const { store, reducers } = useCombinedReducers();

  const triggerDispatchs = action => {
    for (let i = 0; i < reducers.length; i++) {
      reducers[i](action);
    }
  };

  return (
    <StoreContext.Provider
      value={{
        store,
        dispatch: action => triggerDispatchs(action)
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
