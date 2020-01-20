import React, { useState } from "react";
import PropTypes from "prop-types";
import Connect from "../store/connect";
import { LogInUser } from "../store/reducers/auth";

const Login = ({ dispatch }) => {
  const [name, setName] = useState("");
  const changeNameHandler = ({ target: { value } }) => setName(value);
  const onSubmitHandler = () => dispatch(LogInUser(name));
  return (
    <div>
      <form>
        <p className="logo p-center m-bottom-20">
          Context + useState ={" "}
          <span role="img" aria-label="Coração">
            ❤️
          </span>
        </p>
        <input
          value={name}
          onChange={changeNameHandler}
          type="text"
          placeholder="Nome"
          className="input"
        />
        <button
          onClick={onSubmitHandler}
          disabled={!name}
          className="btn w-100"
        >
          Entrar
        </button>
      </form>
    </div>
  );
};

Login.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default Connect()(Login);
