import { Slider } from "@material-ui/core";
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

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
  const [brushSize, setBrushSize] = useState<any>(30);
  useEffect(() => {
    setBrushSize(brushRadius);
  }, []);
  return (
    <div style={{ boxShadow: "none", position: "absolute" }}>
      <div className="slider-container">
        <div className="icon-container">
          <i
            className="fas undo-icon fa-undo"
            onClick={() => canvasRef.current.undo()}
          ></i>
          <Slider
            value={brushSize}
            min={1}
            style={{ width: "100px", margin: "10px 10px 10px 25px" }}
            onChange={(
              event: React.ChangeEvent<{}>,
              value: number | number[]
            ) => {
              setBrushRadius(value);
              setBrushSize(value);
            }}
            onDragEnd={() => {
              handleToolChange("pen");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CanvasTools;
