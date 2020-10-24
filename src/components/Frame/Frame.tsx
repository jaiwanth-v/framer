import React, { useContext, createRef, useEffect } from "react";
import "./Frame.scss";
import { AppContext } from "../../Context/App.context";
import {
  DELETE_COMPONENT,
  SET_CURRENT,
  TOGGLE_EDIT,
} from "../../Reducer/actionTypes";
import { v4 as uuid } from "uuid";
import FrameItem from "./FrameItem/FrameItem";
import Pdf from "react-to-pdf";
import Toggler from "./Toggler";
import Canvas from "./Canvas/Canvas";
import DarkMode from "./DarkMode/DarkMode";

const ref: React.RefObject<HTMLDivElement> | null | undefined = createRef();

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
      while (t && !t.id) {
        t = t.parentNode;
      }
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

  return (
    <div>
      <div style={{ position: "absolute", top: "680px", left: "1440px" }}>
        <DarkMode />
      </div>
      <div className="frame-container m-0">
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center edit-mode">
            <h5 className="mt-1" style={{ whiteSpace: "nowrap" }}>
              Preview Mode
            </h5>
            <Toggler handleChange={handleChange} />
          </div>
          <Pdf targetRef={ref} filename="your-frame.pdf">
            {({ toPdf }: any) => (
              <button className="ml-3" id="generate" onClick={toPdf}>
                CREATE PDF
              </button>
            )}
          </Pdf>
        </div>

        <div
          ref={ref}
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
