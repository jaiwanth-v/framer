import React, { createContext, useReducer } from "react";
import { reducer } from "../Reducer/reducer";

let object: any;
export const AppContext = createContext(object);
export function AppProvider(props: any) {
  const [state, dispatch] = useReducer(reducer, {
    edit: true,
    items: [],
    activeId: null,
  });
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AppContext.Provider>
  );
}
