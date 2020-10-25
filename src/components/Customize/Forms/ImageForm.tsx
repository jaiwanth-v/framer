import React, { useContext, useState } from "react";
import { TextField } from "@material-ui/core";
import useInput from "../../../Hooks/useInput";
import Snackbar from "./Snackbar/Snackbar";
import { AppContext } from "../../../Context/App.context";
import {
  CHANGE_IMAGE_SRC,
  DELETE_COMPONENT,
} from "../../../Reducer/actionTypes";
import CustomForm from "./CustomForm";
import "./Form.scss";

interface Props {}

function imageExists(url) {
  var http = new XMLHttpRequest();
  try {
    http.open("HEAD", url, false);
    http.send();
  } catch (err) {
    console.log("Error", http.status);
  }
  return http.status !== 404;
}

const ImageForm: React.FC<Props> = () => {
  const { state, dispatch } = useContext(AppContext);

  const [source, handleSource, resetSource] = useInput("");
  const [isFileBig, setBig] = useState(false);
  const [isValid, setValid] = useState(true);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (source !== "" && imageExists(source)) {
      dispatch({
        type: CHANGE_IMAGE_SRC,
        payload: { id: state.activeId, src: source },
      });
    } else {
      setValid(false);
      setTimeout(() => {
        setValid(true);
      }, 2000);
    }
    resetSource();
  };

  const handleFileChange = (event: any) => {
    let file = event.target.files[0];
    let max = 10 * 1024 * 1024;
    if (file.size > max) {
      setBig(true);
      setTimeout(() => {
        setBig(false);
      }, 3000);
    } else
      dispatch({
        type: CHANGE_IMAGE_SRC,
        payload: {
          id: state.activeId,
          src: URL.createObjectURL(file),
        },
      });
  };

  const renderSnackBar = (msg: string) => {
    return <Snackbar key={new Date().getTime()} msg={msg} status={"error"} />;
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
          label="Image URL"
          className="form-field animation a3"
        />
        <button id="generate1" type="submit" className="animation ml-2 mt-3 a6">
          Change URL
        </button>
        <label id="generate1" className="animation ml-2 mt-3 a6">
          <p className="upload-label">Upload File</p>
          <input
            accept=".jpg, .jpeg, .svg, .png, image/*"
            onChange={handleFileChange}
            type="file"
            style={{ display: "none" }}
          />
        </label>
        <button
          id="generate-danger"
          className="animation ml-2 mt-3 a6"
          onMouseDown={handleDelete}
        >
          Delete
        </button>
      </CustomForm>
      {isFileBig
        ? renderSnackBar(
            "File size is too big, please upload an image below 10mb"
          )
        : null}
      {!isValid ? renderSnackBar("Please enter a valid image source") : null}
    </>
  );
};

export default ImageForm;
