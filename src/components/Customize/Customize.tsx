import React, { useContext } from "react";
import "./Customize.scss";
import { AppContext } from "../../Context/App.context";
import { TextField, Button } from "@material-ui/core";
import useInput from "../../Hooks/useInput";
import { CHANGE_IMAGE_SRC } from "../../Reducer/types";

interface Props {
  text?: string;
}

const Customize: React.FC<Props> = ({ text }) => {
  const { state, dispatch } = useContext(AppContext);
  const [source, handleSource, resetSource] = useInput("");
  
  const optionsToShow = () => {
    const requiredItem = state.items.filter(
      (item: any) => item.id === state.activeId
    )[0];

    if (requiredItem && requiredItem.type === "image")
      return (
        <form onSubmit={handleSubmit}>
          <TextField onChange={handleSource} value={source} />
          <Button type="submit">Submit</Button>
        </form>
      );
    if (requiredItem && requiredItem.type === "button")
      return (
        <form onSubmit={handleSubmit}>
          <TextField onChange={handleSource} value={source} />
          <Button type="submit">Submit</Button>
        </form>
      );
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch({
      type: CHANGE_IMAGE_SRC,
      payload: { id: state.activeId, src: source },
    });
    resetSource();
  };
  return (
    <div className="customize shadow rounded-lg p-4 mt-5">
      <h3 className="text-center p-2 mb-4">Customize</h3>
      {optionsToShow()}
    </div>
  );
};

export default Customize;
