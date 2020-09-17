/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Slider from "react-input-slider";

interface Props {
  brushRadius: number;
  canvasRef: React.MutableRefObject<null> | any;
  setBrushRadius: any;
  handleToolChange: (tool: any, size?: any) => void;
}

const CanvasTools: React.FC<Props> = ({
  handleToolChange,
  brushRadius,
  setBrushRadius,
  canvasRef,
}) => {
  const [brushSize, setBrushSize] = useState(30);
  useEffect(() => {
    setBrushSize(brushRadius);
  }, []);
  return (
    <div style={{ boxShadow: "none" }}>
      <div className="slider-container">
        <div className="icon-container">
          <i
            className="fas fa-pen"
            onClick={() => handleToolChange("pen", brushSize)}
          ></i>
        </div>
        <Slider
          axis="x"
          x={brushSize}
          xmin={1}
          xmax={60}
          onChange={({ x }: any) => {
            setBrushRadius(x);
            setBrushSize(x);
          }}
          onDragEnd={() => {
            handleToolChange("pen");
          }}
        />
      </div>
      <i className="fas fa-undo" onClick={() => canvasRef.current.undo()}></i>
    </div>
  );
};

export default CanvasTools;
