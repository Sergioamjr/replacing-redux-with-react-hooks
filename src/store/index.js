import React from "react";
import PropTypes from "prop-types";
import { StoreContext } from "./hooks";
import reducers from "./reducers";

const Store = ({ children }) => {
  const { store, dispatchs } = reducers();

  const triggerDispatchs = action => {
    for (let i = 0; i < dispatchs.length; i++) {
      dispatchs[i](action);
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
