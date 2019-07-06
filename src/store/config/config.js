import { createContext } from "react";

export const initialState = {
  store: {},
  dispatch: () => {}
};

const Context = createContext(initialState);

export default Context;
