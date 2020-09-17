import React, { useContext } from "react";
import { TextField } from "@material-ui/core";
import useInput from "../../../Hooks/useInput";
import { AppContext } from "../../../Context/App.context";
import {
  CHANGE_TEXT_VAL,
  DELETE_COMPONENT,
} from "../../../Reducer/actionTypes";
import CustomForm from "./CustomForm";
import "./Form.scss";

interface Props {}
interface ItemType {
  type: string;
  id: any;
  value: string;
}

const ParagraphForm: React.FC<Props> = () => {
  const { state, dispatch } = useContext(AppContext);
  const Paragraph = () => {
    const requiredItem: ItemType = state.items.filter(
      (item: any) => item.id === state.activeId
    )[0];
    return requiredItem.value;
  };

  const [source, handleSource, resetSource] = useInput(Paragraph());
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch({
      type: CHANGE_TEXT_VAL,
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
          value={source}
          onChange={handleSource}
          label="Paragraph"
          multiline
          rows={4}
          style={{ width: "175px", height: "150px" }}
          variant="outlined"
          className="form-field animation a3"
          name=""
        />

        <button id="generate1" type="submit" className="animation ml-2 a6">
          Change Paragraph
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

export default ParagraphForm;
