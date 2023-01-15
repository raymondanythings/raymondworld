import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 15px;
  border-radius: 10px 10px 0 0;
  background-color: gray;
  display: flex;
  align-items: center;
`;

const Buttons = styled.div`
  position: relative;
  left: 10px;
  display: flex;
`;

const Circle = styled.div<{ col: string }>`
  width: 7px;
  height: 7px;
  margin: 0px 2px;
  background-color: ${(props) => props.theme.circles[`${props.col}`]};
  border-radius: 50%;
`;

const TopBar = () => {
  return (
    <Wrapper className="sticky top-0">
      <Buttons>
        <Circle col="red"></Circle>
        <Circle col="yellow"></Circle>
        <Circle col="green"></Circle>
      </Buttons>
    </Wrapper>
  );
};

export default TopBar;
