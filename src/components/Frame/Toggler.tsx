import React from "react";
import "./Toggle.scss";
interface Props {}

const Toggler: React.FC<Props> = () => {
  return (
    <div>
      <div
        className="toggle-container"
        onClick={() =>
          document
            .getElementsByClassName("toggle-container")[0]
            .classList.toggle("toggle-active")
        }
      >
        <div className="toggle-fill toggle-fill1">
          <div className="toggle-circle toggle-circle1"></div>
        </div>
        <div className="toggle-drop">
          <div className="toggle-fill toggle-fill2">
            <div className="toggle-circle toggle-circle2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toggler;
