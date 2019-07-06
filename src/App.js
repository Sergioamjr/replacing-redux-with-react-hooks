import React from "react";
import Counter from "./container/counter";
import Login from "./container/login";
import Connect from "./store/config/connect";
import Header from "./container/header";

const App = props => {
  return (
    <div className="full-screen">
      <div className="d-flex d-flex-align-center d-flex-justify-center h-100">
        {props.auth.isLogged ? (
          <div>
            <Header />
            <Counter />
          </div>
        ) : (
          <Login />
        )}
      </div>
    </div>
  );
};
const mapStateToProps = ({ auth }) => {
  return {
    auth
  };
};

export default Connect(mapStateToProps)(App);
