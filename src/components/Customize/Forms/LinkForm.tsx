import React, { useContext, useState } from "react";
import { TextField } from "@material-ui/core";
import useInput from "../../../Hooks/useInput";
import { AppContext } from "../../../Context/App.context";
import {
  CHANGE_LINK,
  CHANGE_LINK_VAL,
  DELETE_COMPONENT,
} from "../../../Reducer/actionTypes";
import CustomForm from "./CustomForm";
import "./Form.scss";
import Snackbar from "./Snackbar/Snackbar";

interface Props {}

const LinkForm: React.FC<Props> = () => {
  const { state, dispatch } = useContext(AppContext);

  const [source, handleSource, resetSource] = useInput("");
  const [link, handleLink, resetLink] = useInput("");
  const [hasSubmitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);

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
        <button id="generate1" type="submit" className="animation ml-2 mt-3 a6">
          Change Link
        </button>
        <button
          id="generate-danger"
          className="animation ml-2 mt-3 a6"
          onClick={handleDelete}
        >
          Delete
        </button>
      </CustomForm>
      {hasSubmitted ? (
        <Snackbar
          key={new Date().getTime()}
          msg="Switch to preview mode to click those links"
          status={"success"}
        />
      ) : null}
    </>
  );
};

export default LinkForm;
