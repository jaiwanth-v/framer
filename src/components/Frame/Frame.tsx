import React, { useContext, createRef } from "react";
import "./Frame.scss";
import { AppContext } from "../../Context/App.context";
import { TOGGLE_EDIT } from "../../Reducer/actionTypes";
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

  const handleChange = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    dispatch({ type: TOGGLE_EDIT, payload: "" });
  };

  return (
    <div>
      <div style={{ float: "right", width: "70px" }}>
        <DarkMode />
      </div>
      <div className="vh-100 frame-container m-0">
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
          {<Canvas />}
          {state.items.map((v: Item, i: number) => (
            <FrameItem type={v.type} id={v.id} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Frame;
