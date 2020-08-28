import React from "react";
import "./Customize.scss";

interface Props {
  text?: string;
}

const Customize: React.FC<Props> = ({ text }) => {
  return (
    <div className="customize shadow rounded-lg p-4 mt-5">
      <h3 className="text-center p-2 mb-4">Customize</h3>
    </div>
  );
};

export default Customize;
