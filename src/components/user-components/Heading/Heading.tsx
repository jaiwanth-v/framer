import React from "react";

interface Props {
  id: any;
}

const HeadingComponent: React.FC<Props> = () => {
  return (
    <div>
      <h1>This is a heading</h1>
    </div>
  );
};

export default HeadingComponent;
