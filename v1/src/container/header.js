import React from "react";
import Connect from "../store/config/connect";
import { LogOutUser } from "../store/auth";

const Header = props => {
  const logoutHandler = () => props.dispatch(LogOutUser());
  return (
    <div className="top-position d-flex d-flex-justify-between d-flex-align-center w-100">
      <div className="container w-100">
        <div className="d-flex d-flex-justify-between d-flex-align-center w-100">
          <p className="logo p-center">
            Context + useState ={" "}
            <span role="img" aria-label="Coração">
              ❤️
            </span>
          </p>
          <div className="d-flex d-flex-align-center">
            <p className="m-right-10 color-dark">Olá, {props.auth.user}</p>
            <button onClick={logoutHandler} className="btn logout">
              Sair
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ auth }) => {
  return {
    auth
  };
};

export default Connect(mapStateToProps)(Header);
