import React from "react";

interface Props {}

const Box: React.FC<Props> = () => {
  return (
    <div
      className="resizable"
      style={{ border: "2px solid black", height: "200px", width: "200px" }}
    ></div>
  );
};

export default Box;
