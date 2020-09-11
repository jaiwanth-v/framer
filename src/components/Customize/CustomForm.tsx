import React from "react";

interface Props {}

const CustomForm: React.FC<Props> = (props) => {
  return (
    <div className="container">
      <div className="left">
        <div className="header">
          <form className="form" method="">
            {props.children}
          </form>
        </div>
      </div>
    </div>
  );
};

export default CustomForm;
