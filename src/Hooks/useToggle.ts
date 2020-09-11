import { useState } from "react";

export default (InitialVal: any) => {
  const [state, setState] = useState(InitialVal);
  const toggle = () => {
    setState(!state);
  };
  return [state, toggle];
};
