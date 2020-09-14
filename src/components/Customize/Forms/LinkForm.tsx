import React, { useContext } from "react";
import { TextField, Button } from "@material-ui/core";
import useInput from "../../../Hooks/useInput";
import { AppContext } from "../../../Context/App.context";
import {
  CHANGE_LINK,
  CHANGE_LINK_VAL,
  DELETE_COMPONENT,
} from "../../../Reducer/actionTypes";
import CustomForm from "./CustomForm";
import "./Form.scss";

interface Props {}

const LinkForm: React.FC<Props> = () => {
  const { state, dispatch } = useContext(AppContext);

  const [source, handleSource, resetSource] = useInput("");
  const [link, handleLink, resetLink] = useInput("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch({
      type: CHANGE_LINK,
      payload: { id: state.activeId, href: link },
    });
    dispatch({
      type: CHANGE_LINK_VAL,
      payload: { id: state.activeId, value: source },
    });
    resetSource();
    resetLink();
  };

  const handleDelete = () => {
    dispatch({ type: DELETE_COMPONENT, payload: { id: state.activeId } });
  };

  return (
    <>
      <CustomForm onSubmit={handleSubmit}>
        <TextField
          value={link}
          onChange={handleLink}
          label="Link"
          className="form-field animation a3"
          name=""
        />
        <TextField
          value={source}
          onChange={handleSource}
          label="Text on Link"
          className="form-field animation a3"
          name=""
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="animation mt-3 a6"
        >
          Change Link
        </Button>
        <Button
          color="primary"
          className="animation mt-3 a6"
          onClick={handleDelete}
        >
          Delete Component
        </Button>
      </CustomForm>
    </>
  );
};

export default LinkForm;
