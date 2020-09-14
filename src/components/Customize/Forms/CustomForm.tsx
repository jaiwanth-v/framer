import React from "react";

interface Props {
  onSubmit: any;
}

const CustomForm: React.FC<Props> = ({ onSubmit, children }) => {
  return (
    <div className="container">
      <div className="left">
        <div className="header">
          <form onSubmit={onSubmit} className="form">
            {children}
          </form>
        </div>
      </div>
    </div>
  );
};

export default CustomForm;
