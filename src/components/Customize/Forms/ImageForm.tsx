import React, { useContext } from "react";
import { TextField, Button } from "@material-ui/core";
import useInput from "../../../Hooks/useInput";
import { AppContext } from "../../../Context/App.context";
import {
  CHANGE_IMAGE_SRC,
  DELETE_COMPONENT,
} from "../../../Reducer/actionTypes";
import CustomForm from "./CustomForm";
import "./Form.scss";

interface Props {}

const ImageForm: React.FC<Props> = () => {
  const { state, dispatch } = useContext(AppContext);

  const [source, handleSource, resetSource] = useInput("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch({
      type: CHANGE_IMAGE_SRC,
      payload: { id: state.activeId, src: source },
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
          value={source}
          onChange={handleSource}
          label="Image URL"
          className="form-field animation a3"
          name=""
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="animation mt-3 a6"
        >
          Change URL
        </Button>
        <Button
          color="secondary"
          className="animation mt-3 a6"
          onClick={handleDelete}
        >
          Delete Component
        </Button>
      </CustomForm>
    </>
  );
};

export default ImageForm;
