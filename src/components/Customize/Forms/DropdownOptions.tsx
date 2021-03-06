import React, { useContext, useState } from "react";
import { TextField } from "@material-ui/core";
import useInput from "../../../Hooks/useInput";
import { AppContext } from "../../../Context/App.context";
import {
  CHANGE_DROPDOWN,
  DELETE_COMPONENT,
} from "../../../Reducer/actionTypes";
import CustomForm from "./CustomForm";
import "./Form.scss";
import Snackbar from "./Snackbar/Snackbar";

interface Props {}

const DropdownOptions: React.FC<Props> = () => {
  const { state, dispatch } = useContext(AppContext);
  const [value, handleValue, resetValue] = useInput("");
  const [option0, handleOption0, resetOption0] = useInput("");
  const [option1, handleOption1, resetOption1] = useInput("");
  const [option2, handleOption2, resetOption2] = useInput("");
  const [option3, handleOption3, resetOption3] = useInput("");
  const [hasSubmitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    dispatch({
      type: CHANGE_DROPDOWN,
      payload: {
        id: state.activeId,
        value: value || "Placeholder",
        options: [option0, option1, option2, option3],
      },
    });

    resetValue();
    resetOption0();
    resetOption1();
    resetOption2();
    resetOption3();
  };

  const handleDelete = () => {
    dispatch({ type: DELETE_COMPONENT, payload: { id: state.activeId } });
  };

  return (
    <>
      <CustomForm onSubmit={handleSubmit}>
        <TextField
          autoFocus
          value={value}
          onChange={handleValue}
          label="Placeholder"
          className="animation a3"
        />
        <TextField
          value={option0}
          onChange={handleOption0}
          label="Option 1"
          className="my-1 animation a3"
        />
        <TextField
          value={option1}
          onChange={handleOption1}
          label="Option 2"
          className="my-1 animation a3"
        />
        <TextField
          value={option2}
          onChange={handleOption2}
          label="Option 3"
          className="my-1 animation a3"
        />
        <TextField
          value={option3}
          onChange={handleOption3}
          label="Option 4"
          className="my-1 animation a3"
        />
        <button id="generate1" type="submit" className="animation mt-4 ml-2 a6">
          Change Options
        </button>
        <button
          id="generate-danger"
          className="animation ml-2  mt-3 a6"
          onClick={handleDelete}
        >
          Delete
        </button>
      </CustomForm>
      {hasSubmitted ? (
        <Snackbar
          key={new Date().getTime()}
          msg="Switch to preview mode to see all the options"
          status={"success"}
        />
      ) : null}
    </>
  );
};

export default DropdownOptions;
