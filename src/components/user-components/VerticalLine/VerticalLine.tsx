import React from "react";

interface Props {
  id: any;
}

const VerticalLine: React.FC<Props> = () => {
  return (
    <div>
      <div
        className="vl "
        style={{
          borderLeft: "2px solid black",
          height: "500px",
        }}
      ></div>
    </div>
  );
};

export default VerticalLine;
