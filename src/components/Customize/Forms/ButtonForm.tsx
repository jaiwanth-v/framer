import React, { useContext } from "react";
import CustomForm from "./CustomForm";
import { TextField } from "@material-ui/core";
import useInput from "../../../Hooks/useInput";
import { AppContext } from "../../../Context/App.context";
import {
  CHANGE_BUTTON_VAL,
  DELETE_COMPONENT,
} from "../../../Reducer/actionTypes";
import "./Form.scss";

interface Props {}

const ButtonForm: React.FC<Props> = () => {
  const [source, handleSource, resetSource] = useInput("");
  const { dispatch, state } = useContext(AppContext);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch({
      type: CHANGE_BUTTON_VAL,
      payload: { id: state.activeId, value: source },
    });
    resetSource();
  };

  const handleDelete = () => {
    dispatch({ type: DELETE_COMPONENT, payload: { id: state.activeId } });
  };

  return (
    <CustomForm onSubmit={handleSubmit}>
      <TextField
        autoFocus
        value={source}
        onChange={handleSource}
        label="Text on Button"
        className="form-field animation a3"
      />
      <button id="generate1" type="submit" className="animation ml-2 mt-3 a6">
        Change Name
      </button>
      <button
        id="generate-danger"
        className="animation ml-2 mt-3 a6"
        onClick={handleDelete}
      >
        Delete
      </button>
    </CustomForm>
  );
};

export default ButtonForm;
