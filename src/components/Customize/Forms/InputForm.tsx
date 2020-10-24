import React, { useContext } from "react";
import { TextField } from "@material-ui/core";
import useInput from "../../../Hooks/useInput";
import { AppContext } from "../../../Context/App.context";
import { CHANGE_LABEL, DELETE_COMPONENT } from "../../../Reducer/actionTypes";
import CustomForm from "./CustomForm";
import "./Form.scss";

interface Props {}
interface ItemType {
  type: string;
  id: any;
  value: string;
}

const InputForm: React.FC<Props> = () => {
  const { state, dispatch } = useContext(AppContext);

  const [source, handleSource, resetSource] = useInput("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch({
      type: CHANGE_LABEL,
      payload: { id: state.activeId, value: source },
    });
    resetSource();
  };

  const handleDelete = () => {
    dispatch({ type: DELETE_COMPONENT, payload: { id: state.activeId } });
  };

  return (
    <>
      <CustomForm onSubmit={handleSubmit}>
        <TextField
          autoFocus
          value={source}
          onChange={handleSource}
          label="Label"
          className="form-field animation a3"
        />

        <button id="generate1" type="submit" className="animation ml-2 mt-3 a6">
          Change Label
        </button>
        <button
          id="generate-danger"
          className="animation ml-2 mt-3 a6"
          onClick={handleDelete}
        >
          Delete
        </button>
      </CustomForm>
    </>
  );
};

export default InputForm;
