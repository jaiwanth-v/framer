import React, { useState, useRef } from "react";
import CanvasDraw from "react-canvas-draw";
import ColorPicker from "./ColorPicker";
import CanvasTools from "./CanvasTools";
import "./Canvas.scss";

const Canvas = () => {
  const [brushColor, setBrusholor] = useState("#444");
  const [lastPenColor, setLastPenColor] = useState("#444");
  const [brushRadius, setBrushRadius] = useState(10);

  const canvasRef = useRef(null);

  const handleColorChange = React.useCallback((color) => {
    const {
      rgb: { r, g, b, a },
    } = color;
    setBrusholor(`rgba(${r}, ${g}, ${b},${a})`);
    setLastPenColor(`rgba(${r}, ${g}, ${b},${a})`);
  }, []);

  const toolChange = React.useCallback(
    (tool, size) => {
      tool === "pen" && setBrusholor(lastPenColor);
    },
    [lastPenColor]
  );
  return (
    <div className="Canvas">
      <div className="container">
        <div>
          <div>
            <ColorPicker
              brushColor={brushColor}
              handleColorChange={handleColorChange}
            />
          </div>
          <div className="canvas-container">
            <CanvasDraw
              ref={canvasRef}
              brushColor={brushColor}
              brushRadius={brushRadius}
              lazyRadius={5}
            />
          </div>
          <CanvasTools
            setBrushRadius={setBrushRadius}
            handleToolChange={toolChange}
            canvasRef={canvasRef}
            brushRadius={brushRadius}
          />
        </div>
      </div>
    </div>
  );
};

export default Canvas;
