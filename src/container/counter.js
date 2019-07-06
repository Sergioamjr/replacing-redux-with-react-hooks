import React from "react";
import ConnectTo from "../store/config/Connect";
import { DecrementCounter, IncrementCounter } from "../store/Counter";

const Counter = props => {
  const DecrementCounterHandler = () => props.dispatch(DecrementCounter());
  const IncrementCounterHandler = () => props.dispatch(IncrementCounter());

  return (
    <div>
      <p className="number">{props.counter}</p>
      <div>
        <button
          aria-label="Menos 1"
          className="btn"
          onClick={DecrementCounterHandler}
        >
          -
        </button>
        <button
          aria-label="Mais 1"
          className="btn"
          onClick={IncrementCounterHandler}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ConnectTo(Counter);
