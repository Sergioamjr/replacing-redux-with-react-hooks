import React from "react";
import PropTypes from "prop-types";
import { StoreContext, defaultStore } from "./hooks";
import reducers from "./reducers";

const Store = ({ children }) => {
  console.log(reducers());
  return (
    <StoreContext.Provider value={defaultStore}>
      {children}
    </StoreContext.Provider>
  );
};

Store.propTypes = {
  children: PropTypes.node.isRequired
};

export default Store;
