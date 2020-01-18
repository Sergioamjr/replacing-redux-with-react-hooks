import React from "react";
import ConnectTo from "../store/config/connect";
import { DecrementCounter, IncrementCounter } from "../store/counter";

const Counter = props => {
  const DecrementCounterHandler = () => props.dispatch(DecrementCounter());
  const IncrementCounterHandler = () => props.dispatch(IncrementCounter());

  return (
    <div>
      <p className="number color-dark">{props.counter}</p>
      <div>
        <button
          aria-label="Menos 1"
          className="btn m-left-20 m-right-20"
          onClick={DecrementCounterHandler}
        >
          -
        </button>
        <button
          aria-label="Mais 1"
          className="btn m-left-20 m-right-20"
          onClick={IncrementCounterHandler}
        >
          +
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = ({ counter }, props) => {
  return {
    counter,
    ...props
  };
};

export default ConnectTo(mapStateToProps)(Counter);
