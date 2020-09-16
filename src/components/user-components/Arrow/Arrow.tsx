import React, { useState } from "react";

import ResizableRect from "./RotationHelper";

interface styles {
  left: number;
  top: number;
  width: number;
  height: number;
}

const Arrow = () => {
  const [width, setWidth] = useState(250);
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
    <div onClick={handleEnter} style={{ position: "absolute" }}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Arrow_west.svg/1024px-Arrow_west.svg.png"
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
      {checked && (
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
