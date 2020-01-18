import React, { useState } from "react";
import { LogInUser } from "../store/auth";
import Connect from "../store/config/connect";

const Login = props => {
  const [name, setName] = useState("");
  const changeNameHandler = ({ target: { value } }) => setName(value);
  const onSubmitHandler = () => props.dispatch(LogInUser(name));
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

export default Connect()(Login);
