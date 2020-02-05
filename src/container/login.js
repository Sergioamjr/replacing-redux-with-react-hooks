import React, { useState } from "react";
import PropTypes from "prop-types";
import Connect from "../store/connect";
import { loginAction } from "../store/reducers/auth";

const Login = ({ dispatch }) => {
  const [name, setName] = useState("");
  const changeNameHandler = ({ target: { value } }) => setName(value);
  const onSubmitHandler = () => dispatch(loginAction(name));
  return (
    <div>
      <form>
        <p className="logo p-center m-bottom-20">
          React Hooks{" "}
          <span role="img" aria-label="Heart">
            ❤️
          </span>
        </p>
        <input
          value={name}
          onChange={changeNameHandler}
          type="text"
          placeholder="Name"
          className="input"
        />
        <button
          onClick={onSubmitHandler}
          disabled={!name}
          className="btn w-100"
        >
          Login
        </button>
      </form>
    </div>
  );
};

Login.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default Connect()(Login);
