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
      <button
        id="generate-danger"
        style={{ marginLeft: "27px" }}
        className="animation mt-4 a6"
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
};

export default DeleteComponent;
