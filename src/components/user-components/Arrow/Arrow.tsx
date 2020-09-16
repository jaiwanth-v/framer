import React, { useContext, useState } from "react";
import ArrowImg from "./arrow.png";
import ResizableRect from "../RotationHelper";
import { AppContext } from "../../../Context/App.context";

interface styles {
  left: number;
  top: number;
  width: number;
  height: number;
}

const Arrow = () => {
  const {
    state: { edit },
  } = useContext(AppContext);
  const [width, setWidth] = useState(130);
  const [height, setHeight] = useState(100);
  const [top, setTop] = useState(10);
  const [left, setLeft] = useState(10);
  const [rotateAngle, setAngle] = useState(0);
  const [checked, setChecked] = useState(true);
  const handleResize = (style: styles, isShiftKey: any, type: any) => {
    let { top, left, width, height } = style;
    setTop(Math.round(top));
    setLeft(Math.round(left));
    setWidth(Math.round(width));
    setHeight(Math.round(height));
  };

  const handleRotate = (rotateAngle: number) => setAngle(rotateAngle);

  const handleDrag = (deltaX: number, deltaY: number) => {
    setLeft(left + deltaX);
    setTop(top + deltaY);
  };
  const handleEnter = () => setChecked(true);
  const outsideClick = () => setChecked(false);
  return (
    <div
      onClick={handleEnter}
      onBlur={outsideClick}
      tabIndex={1}
      style={{ position: "sticky" }}
    >
      <img
        src={ArrowImg}
        style={{
          position: "absolute",
          top,
          left,
          width,
          height,
          transform: `rotate(${rotateAngle}deg)`,
        }}
        width={width}
        height={height}
        alt=""
      />
      {checked && edit && (
        <ResizableRect
          left={left}
          top={top}
          width={width}
          height={height}
          rotateAngle={rotateAngle}
          draggable={true}
          zoomable="n, w, s, e"
          rotatable={true}
          onRotate={handleRotate}
          onResize={handleResize}
          onDrag={handleDrag}
        />
      )}
    </div>
  );
};

export default Arrow;
