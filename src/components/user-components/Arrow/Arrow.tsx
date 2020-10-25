import React, { useContext, useEffect, useState } from "react";
import ArrowImg from "./arrow.png";
import ResizableRect from "../RotationHelper";
import { AppContext } from "../../../Context/App.context";
import "./Arrow.scss";
import { dark } from "@material-ui/core/styles/createPalette";

interface styles {
  left: number;
  top: number;
  width: number;
  height: number;
}

const Arrow: React.FC = () => {
  const {
    state: { edit },
  } = useContext(AppContext);
  const [width, setWidth] = useState(130);
  const [height, setHeight] = useState(100);
  const [top, setTop] = useState(10);
  const [left, setLeft] = useState(10);
  const [rotateAngle, setAngle] = useState(0);
  const [checked, setChecked] = useState(true);
  const [isDark, setDark] = useState(
    window
      .getComputedStyle(document.body)
      .getPropertyValue("background-color") !== "rgb(255, 255, 255)"
  );
  const handleResize = (style: styles, isShiftKey: any, type: any) => {
    let { top, left, width, height } = style;
    setTop(Math.round(top));
    setLeft(Math.round(left));
    setWidth(Math.min(913 - left, width));
    setHeight(Math.min(1010 - top, height));
  };

  const handleRotate = (rotateAngle: number) => {
    setAngle(rotateAngle);
  };
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
  function detectClick(e: any) {
    let t: any = e.target;
    while (t && !t.id) t = t.parentNode;
    if (t && t.id === "root" && checked) setChecked(false);
    if (t && t.id && t.id.includes("switch"))
      setDark(
        window
          .getComputedStyle(document.body)
          .getPropertyValue("background-color") !== "rgb(255, 255, 255)"
      );
  }
  useEffect(() => {
    function doc_keyUp(e: KeyboardEvent) {
      if (e.altKey && e.key === "D")
        setTimeout(() => {
          setDark(
            window
              .getComputedStyle(document.body)
              .getPropertyValue("background-color") !== "rgb(255, 255, 255)"
          );
        }, 1);
    }
    window.addEventListener("click", detectClick);
    window.addEventListener("touchstart", detectClick);
    window.addEventListener("keyup", doc_keyUp);
    return () => window.removeEventListener("keyup", doc_keyUp);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dark]);

  const handleEnter = () => setChecked(true);

  const outsideClick = () => setChecked(false);
  return (
    <div
      onClick={handleEnter}
      onBlur={outsideClick}
      tabIndex={1}
      style={{ position: "absolute" }}
    >
      <img
        className={`${isDark && "arrow-img"}`}
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

export default Arrow;
