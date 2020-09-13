import React, { useContext } from "react";
import { TextField, Button } from "@material-ui/core";
import useInput from "../../Hooks/useInput";
import { AppContext } from "../../Context/App.context";
import { CHANGE_LABEL, DELETE_COMPONENT } from "../../Reducer/types";
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
          value={source}
          onChange={handleSource}
          label="Label"
          className="form-field animation a3"
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="animation  a6"
        >
          Change Label
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

export default InputForm;
