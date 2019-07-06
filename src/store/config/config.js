import { createContext } from "react";
import { authStore } from "../auth";
import { counterStore } from "../counter";

export const initialState = {
  store: {
    ...authStore,
    ...counterStore
  },
  dispatch: () => {}
};

const Context = createContext(initialState);

export default Context;
