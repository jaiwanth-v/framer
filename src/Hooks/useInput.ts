import { useState } from "react";

export default (InitialVal: any) => {
  const [state, setState] = useState(InitialVal);
  const handleChange = (
    event: React.ChangeEvent<{
      name?: string | undefined;
      value: any;
    }>
  ) => {
    setState(event.target.value);
  };
  const reset = () => {
    setState("");
  };
  return [state, handleChange, reset];
};
