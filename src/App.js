import React from "react";
import Counter from "./container/counter";
import Login from "./container/login";

const App = props => {
  return (
    <div className="full-screen">
      <div className="d-flex d-flex-align-center d-flex-justify-center h-100">
        {true ? <Login /> : <Counter />}
      </div>
    </div>
  );
};

export default App;
