import React, { useContext } from "react";
import CustomForm from "./CustomForm";
import { TextField, Button } from "@material-ui/core";
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
        value={source}
        onChange={handleSource}
        label="Text on Button"
        className="form-field animation a3"
        name=""
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className="animation mt-3 a6"
      >
        Change Name
      </Button>
      <Button
        color="secondary"
        className="animation mt-3 a6"
        onClick={handleDelete}
      >
        Delete Component
      </Button>
    </CustomForm>
  );
};

export default ButtonForm;
