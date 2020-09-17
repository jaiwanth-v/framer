import React from "react";
import { CirclePicker } from "react-color";

interface Props {
  brushColor: string;
  handleColorChange: (color: any) => void;
}

const ColorPicker: React.FC<Props> = ({ brushColor, handleColorChange }) => {
  return (
    <CirclePicker color={brushColor} onChangeComplete={handleColorChange} />
  );
};
export default ColorPicker;
