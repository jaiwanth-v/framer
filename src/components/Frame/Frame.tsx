import React, { useContext, useEffect } from "react";
import "./Frame.scss";
import { AppContext } from "../../Context/App.context";
import {
  DELETE_COMPONENT,
  SET_CURRENT,
  TOGGLE_EDIT,
} from "../../Reducer/actionTypes";
import { v4 as uuid } from "uuid";
import FrameItem from "./FrameItem/FrameItem";
import Toggler from "./Toggler";
import Canvas from "./Canvas/Canvas";
import DarkMode from "./DarkMode/DarkMode";

interface Props {}

interface Item {
  type: string;
  id: typeof uuid;
}

const Frame: React.FC<Props> = () => {
  const { state, dispatch } = useContext(AppContext);
  useEffect(() => {
    window.addEventListener("mousedown", (e) => {
      let t: any = e.target;
      while (t && !t.id) t = t.parentNode;
      if (t && t.id === "root") dispatch({ type: SET_CURRENT, payload: null });
    });
    window.addEventListener("keydown", (e) => {
      if (e.key === "Delete") dispatch({ type: DELETE_COMPONENT });
    });
  }, [dispatch]);
  const handleChange = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    dispatch({ type: TOGGLE_EDIT });
  };

  const handlePrint = () => {
    if (!state.edit) return window.print();
    dispatch({ type: TOGGLE_EDIT });
    setTimeout(() => {
      window.print();
    }, 0);
    setTimeout(() => {
      dispatch({ type: TOGGLE_EDIT });
    }, 0);
  };

  return (
    <div>
      <div
        id="dark"
        style={{ position: "fixed", top: "720px", left: "1440px" }}
      >
        <DarkMode />
      </div>
      <div className="frame-container m-0">
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center edit-mode">
            <h5 className="preview-mode mt-1" style={{ whiteSpace: "nowrap" }}>
              Preview Mode
            </h5>
            <Toggler handleChange={handleChange} />
          </div>
          <button
            className="print-button ml-3"
            id="generate"
            onClick={handlePrint}
          >
            Print Frame
          </button>
        </div>

        <div
          className={`frame ${state.edit && "frame-edit"} ${
            state.activeId === "canvas" && state.edit && "cursor-pen"
          } containment-wrapper`}
        >
          <Canvas />
          {state.items.map((v: Item, i: number) => (
            <FrameItem type={v.type} id={v.id} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Frame;
