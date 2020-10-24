import React, { useState } from "react";
import $ from "jquery";
import "./DarkMode.scss";
import {
  enable as enableDarkMode,
  disable as disableDarkMode,
  setFetchMethod,
} from "darkreader";
interface Props {}

const DarkMode: React.FC<Props> = () => {
  const [isDark, setDark] = useState(true);

  function toggleDarkMode() {
    setFetchMethod(window.fetch);
    if (isDark)
      enableDarkMode({
        brightness: 100,
        contrast: 100,
        sepia: 10,
      });
    else disableDarkMode();
    setDark(!isDark);
  }
  function toggleDark() {
    if (isDark) {
      $("#light-mode-switch").css("display", "none");
      $("#dark-mode-switch").css("display", "block");
    } else {
      $("#light-mode-switch").css("display", "block");
      $("#dark-mode-switch").css("display", "none");
    }
    toggleDarkMode();
  }
  return (
    <div
      className="mode-switch shadow d-flex justify-content-center align-items-center"
      style={{
        position: "fixed",
        zIndex: 999,
        width: "40px",
        height: "40px",
        borderRadius: "50%",
      }}
      onClick={toggleDark}
    >
      <i className="fas fa-moon" id="light-mode-switch"></i>
      <i className="far fa-sun" id="dark-mode-switch"></i>
    </div>
  );
};

export default DarkMode;
