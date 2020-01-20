import { useContext, createContext } from "react";

export const defaultStore = { store: {}, dispatch: () => {} };
export const storeContext = createContext(defaultStore);
export default () => {
  return useContext(storeContext);
};
