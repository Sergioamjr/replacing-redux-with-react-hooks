import React from "react";
import Context from "./config";

const mapStateToPropsMock = (obj, props) => ({
  ...props
});

const Connect = mapStateToProps => Component => {
  return props => (
    <Context.Consumer>
      {({ dispatch, store }) => {
        const storeProps = mapStateToProps
          ? { ...mapStateToProps(store, props) }
          : { ...mapStateToPropsMock(store, props) };
        return <Component {...storeProps} dispatch={dispatch} />;
      }}
    </Context.Consumer>
  );
};

export default Connect;
