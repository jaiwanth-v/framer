import React from "react";
import styled, { keyframes } from "styled-components";

const BounceAnimation = keyframes`
  0% { margin-bottom: 0; }
  50% { margin-bottom: 15px }
  100% { margin-bottom: 0 }
`;

const DotWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Dot = styled.div`
  background-color: #4285f4;
  border-radius: 50%;
  width: 13px;
  height: 13px;
  margin: 0 5px;
  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${(props: any) => props.delay};
`;
interface Props {}

const Loader: React.FC<Props> = () => {
  return (
    <DotWrapper>
      <Dot delay=".1s" />
      <Dot delay=".2s" />
      <Dot delay=".3s" />
    </DotWrapper>
  );
};

export function docReady(fn: any) {
  if (
    document.readyState === "complete" ||
    document.readyState === "interactive"
  ) {
    setTimeout(fn, 1);
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}
export default Loader;
