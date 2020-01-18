import React from "react";
import Connect from "../store/connect";

const Test = () => {
  return (
    <header>
      <p>Header</p>
    </header>
  );
};

export default Connect()(Test);
