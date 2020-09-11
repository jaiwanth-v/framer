import React from "react";

interface Props {
  id: any;
}

const HorizontalLine: React.FC<Props> = () => {
  return (
    <div>
      <div
        style={{
          border: "2px solid black",
          width: "500px",
        }}
      ></div>
    </div>
  );
};

export default HorizontalLine;
