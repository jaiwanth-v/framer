import React, { useContext } from "react";
import { TextField, Button } from "@material-ui/core";
import useInput from "../../Hooks/useInput";
import { AppContext } from "../../Context/App.context";
import { CHANGE_IMAGE_SRC } from "../../Reducer/types";
import CustomForm from "./CustomForm";

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
          className="animation mt-5 a6"
        >
          Change URL
        </Button>
      </CustomForm>
    </>
  );
};

export default ImageForm;
