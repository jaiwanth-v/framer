import React, { useContext, useState } from "react";
import ResizableRect from "../RotationHelper";
import { AppContext } from "../../../Context/App.context";

interface styles {
  left: number;
  top: number;
  width: number;
  height: number;
}
interface Props {
  id: any;
}

const Line: React.FC<Props> = () => {
  const {
    state: { edit },
  } = useContext(AppContext);
  const [width, setWidth] = useState(20);
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
      style={{ position: "absolute" }}
    >
      <div
        className="line text-center"
        style={{
          position: "absolute",
          top,
          left,
          width,
          height,
          transform: `rotate(${rotateAngle}deg)`,
        }}
      >
        <div
          className="d-inline-block"
          style={{ borderLeft: "2px solid black", height }}
        ></div>
      </div>
      {checked && edit && (
        <ResizableRect
          left={left}
          top={top}
          width={width}
          height={height}
          rotateAngle={rotateAngle}
          draggable={false}
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

export default Line;
