import React from "react";

interface Props {
  id: any;
}

const LinkComponent: React.FC<Props> = () => {
  return (
    <div>
      <a target="__blank" href="https://google.com">
        Test Link
      </a>
    </div>
  );
};

export default LinkComponent;
