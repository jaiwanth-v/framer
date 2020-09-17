import React from "react";
import { CirclePicker } from "react-color";

interface Props {
  brushColor: string;
  handleColorChange: (color: any) => void;
}

const ColorPicker: React.FC<Props> = ({ brushColor, handleColorChange }) => {
  return (
    <div className="picker">
      <CirclePicker
        width="150px"
        color={brushColor}
        onChangeComplete={handleColorChange}
      />
    </div>
  );
};
export default ColorPicker;
