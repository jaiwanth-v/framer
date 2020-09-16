import { Button } from "@material-ui/core";
import React, { useContext } from "react";
import { AppContext } from "../../../Context/App.context";
import { DELETE_COMPONENT } from "../../../Reducer/actionTypes";

interface Props {}

const DeleteComponent: React.FC<Props> = () => {
  const { state, dispatch } = useContext(AppContext);
  const handleDelete = () => {
    dispatch({ type: DELETE_COMPONENT, payload: { id: state.activeId } });
  };

  return (
    <div>
      <Button
        color="secondary"
        className="animation mt-3 ml-3 a6"
        onClick={handleDelete}
      >
        Delete Component
      </Button>
    </div>
  );
};

export default DeleteComponent;
