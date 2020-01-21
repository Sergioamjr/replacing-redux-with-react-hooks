import React from "react";
import PropTypes from "prop-types";
import Connect from "../store/connect";
import { logoutAction } from "../store/reducers/auth";

const Header = ({ dispatch, auth }) => {
  const logoutHandler = () => dispatch(logoutAction());
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
            <p className="m-right-10 color-dark">Olá, {auth.user}</p>
            <button onClick={logoutHandler} className="btn logout">
              Sair
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  dispatch: PropTypes.func.isRequired,
  auth: PropTypes.shape({
    user: PropTypes.string
  }).isRequired
};

const mapStateToProps = ({ auth }) => {
  return {
    auth
  };
};

export default Connect(mapStateToProps)(Header);
