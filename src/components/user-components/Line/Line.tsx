import React, { useContext, useEffect, useState } from "react";
import ResizableRect from "../RotationHelper";
import { AppContext } from "../../../Context/App.context";

interface styles {
  left: number;
  top: number;
  width: number;
  height: number;
}

const Line: React.FC = () => {
  const {
    state: { edit },
  } = useContext(AppContext);
  const [width, setWidth] = useState(20);
  const [height, setHeight] = useState(100);
  const [top, setTop] = useState(15);
  const [left, setLeft] = useState(0);
  const [rotateAngle, setAngle] = useState(0);
  const [checked, setChecked] = useState(true);
  const handleResize = (style: styles, isShiftKey: any, type: any) => {
    let { top, left, width, height } = style;
    setTop(Math.round(top));
    setLeft(Math.round(left));
    setWidth(Math.min(913 - left, width));
    setHeight(Math.min(1010 - top, height));
  };

  function detectClick(e: MouseEvent | TouchEvent) {
    let t: any = e.target;
    while (t && !t.id) t = t.parentNode;
    if (t && t.id === "root" && checked) setChecked(false);
  }
  useEffect(() => {
    window.addEventListener("click", detectClick);
    window.addEventListener("touchstart", detectClick);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRotate = (rotateAngle: number) => setAngle(rotateAngle);

  const handleDrag = (deltaX: number, deltaY: number) => {
    let theta =
      rotateAngle <= 90
        ? (rotateAngle * Math.PI) / 180
        : rotateAngle <= 180
        ? ((rotateAngle - 90) * Math.PI) / 180
        : rotateAngle <= 270
        ? ((rotateAngle - 180) * Math.PI) / 180
        : ((rotateAngle - 270) * Math.PI) / 180;
    let minLeft =
      (1 - Math.cos(theta)) * (width / 2) - (height / 2) * Math.sin(theta);
    let minTop =
      (1 - Math.cos(theta)) * (height / 2) - (width / 2) * Math.sin(theta);
    let maxLeft = 913;
    let maxTop = 1010;

    let leftContainment =
      maxLeft - (width * Math.cos(theta) + height * Math.sin(theta));

    let heightRestriction =
      maxTop - (width * Math.sin(theta) + height * Math.cos(theta));

    setLeft(
      Math.max(-minLeft, Math.min(leftContainment - minLeft, left + deltaX))
    );
    setTop(
      Math.max(-minTop, Math.min(heightRestriction - minTop, top + deltaY))
    );
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
