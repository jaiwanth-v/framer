import React from "react";
import "./Toggle.scss";
interface Props {
  handleChange: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Toggler: React.FC<Props> = ({ handleChange }) => {
  return (
    <div className="toggle-container switch_box box_1">
      <input
        onClick={(e) => {
          handleChange(e);
          document
            .getElementsByClassName("toggle-container")[0]
            .classList.toggle("toggle-active");
        }}
        type="checkbox"
        className="switch_1"
      />
    </div>
  );
};

export default Toggler;
