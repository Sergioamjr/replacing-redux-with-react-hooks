import React from "react";
import PropTypes from "prop-types";
import ConnectTo from "../store/connect";
import { decrementAction, incrementAction } from "../store/reducers/counter";

const Counter = ({ dispatch, counter }) => {
  const decrementHandler = () => dispatch(decrementAction());
  const incrementHandler = () => dispatch(incrementAction());

  return (
    <div>
      <p className="number color-dark">{counter}</p>
      <div>
        <button
          aria-label="Menos 1"
          className="btn m-left-20 m-right-20"
          onClick={decrementHandler}
        >
          -
        </button>
        <button
          aria-label="Mais 1"
          className="btn m-left-20 m-right-20"
          onClick={incrementHandler}
        >
          +
        </button>
      </div>
    </div>
  );
};

Counter.propTypes = {
  dispatch: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired
};

const mapStateToProps = ({ counter }, props) => {
  return {
    counter,
    ...props
  };
};

export default ConnectTo(mapStateToProps)(Counter);
