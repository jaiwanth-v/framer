import React, { useEffect } from "react";
import "./Toggle.scss";
interface Props {
  handleChange: () => void;
}

const Toggler: React.FC<Props> = ({ handleChange }) => {
  useEffect(() => {
    function doc_keyUp(e: KeyboardEvent) {
      if (e.altKey && e.key === "p") {
        handleChange();
        document
          .getElementsByClassName("toggle-container")[0]
          .classList.toggle("toggle-active");
        let preview_switch: any = document.querySelector(".switch_box input");
        preview_switch.checked = !preview_switch.checked;
      }
    }
    window.addEventListener("keyup", doc_keyUp);
    return () => window.removeEventListener("keyup", doc_keyUp);
  }, [handleChange]);
  return (
    <div className="toggle-container switch_box box_1">
      <input
        onClick={() => {
          handleChange();
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
