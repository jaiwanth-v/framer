import React, { useState, useRef, useContext } from "react";
import CanvasDraw from "react-canvas-draw";
import ColorPicker from "./ColorPicker";
import CanvasTools from "./CanvasTools";
import "./Canvas.scss";
import { AppContext } from "../../../Context/App.context";
import { Fade } from "@material-ui/core";

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

  const { state } = useContext(AppContext);

  return (
    <div id="canvas" className="Canvas">
      <div className="container">
        <div>
          <div className="canvas-container">
            <CanvasDraw
              disabled={!(state.edit && state.activeId === "canvas")}
              canvasHeight="1010px"
              canvasWidth="913px"
              ref={canvasRef}
              backgroundColor="rgba(0,0,0,0)"
              hideGrid
              hideInterface
              brushColor={brushColor}
              brushRadius={brushRadius}
              lazyRadius={5}
            />
          </div>
          <Fade in={state.edit && state.activeId === "canvas"}>
            <div className="tools-container">
              <ColorPicker
                brushColor={brushColor}
                handleColorChange={handleColorChange}
              />
              <CanvasTools
                setBrushRadius={setBrushRadius}
                handleToolChange={toolChange}
                canvasRef={canvasRef}
                brushRadius={brushRadius}
              />
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Canvas;
