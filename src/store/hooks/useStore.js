import { useContext, createContext } from "react";
import { authDefault } from "../reducers/auth";
import { counterDefault } from "../reducers/counter";

export const defaultStore = {
  store: { ...authDefault, ...counterDefault },
  dispatch: () => {}
};

export const StoreContext = createContext(defaultStore);
export default () => {
  return useContext(StoreContext);
};
