/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import $ from "jquery";
import "./DarkMode.scss";
import {
  enable as enableDarkMode,
  disable as disableDarkMode,
  setFetchMethod,
} from "darkreader";
interface Props {}

const DarkMode: React.FC<Props> = () => {
  const [dark, setDark] = useState(false);

  function toggleDarkMode() {
    setFetchMethod(window.fetch);
    if (!dark) {
      window.localStorage.setItem("dark", "1");
      enableDarkMode({
        brightness: 100,
        contrast: 100,
        sepia: 10,
      });
    } else {
      window.localStorage.setItem("dark", "0");
      disableDarkMode();
    }
    setDark(!dark);
  }
  function toggleDark() {
    if (!dark) {
      $("#light-mode-switch").css("display", "none");
      $("#dark-mode-switch").css("display", "block");
    } else {
      $("#light-mode-switch").css("display", "block");
      $("#dark-mode-switch").css("display", "none");
    }
    toggleDarkMode();
  }

  useEffect(() => {
    if (window.localStorage.getItem("dark") === "1") toggleDark();
  }, []);

  useEffect(() => {
    function doc_keyUp(e: KeyboardEvent) {
      if (e.altKey && e.key === "D") toggleDark();
    }
    window.addEventListener("keyup", doc_keyUp);
    return () => window.removeEventListener("keyup", doc_keyUp);
  }, [dark]);

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
      id="mode-switch"
      onClick={toggleDark}
    >
      <i className="fas fa-moon" id="light-mode-switch"></i>
      <i className="far fa-sun" id="dark-mode-switch"></i>
    </div>
  );
};

export default DarkMode;
