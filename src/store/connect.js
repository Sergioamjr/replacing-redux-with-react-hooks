import React from "react";
import { storeContext as StoreContext } from "./hooks/useStore";

const returnPropsAsDefault = (store, props) => props;

const Connect = (mapStateToProps = returnPropsAsDefault) => Component => {
  return function WrapConnect(props) {
    return (
      <StoreContext.Consumer>
        {({ dispatch, store }) => {
          const storeProps = mapStateToProps(store, props);
          return <Component {...storeProps} dispatch={dispatch} />;
        }}
      </StoreContext.Consumer>
    );
  };
};

export default Connect;
