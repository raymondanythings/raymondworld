import React from "react";
import styled from "styled-components";
import { PageWrapper } from "../../lib/styled";

const Title = styled.span`
  position: absolute;
  left: 500px;
  top: 500px;
  font-size: 68px;
  opacity: 0.5;
  z-index: 10000;
`;

const Body = styled.div`
  width: 60vw;
  height: 100vh;
  background-color: #00000050;
  background: linear-gradient(90deg, black, ${(props) => props.theme.bgColor}),
    linear-gradient(270deg, black, ${(props) => props.theme.bgColor}),
    linear-gradient(45deg, black, ${(props) => props.theme.bgColor}),
    linear-gradient(black, ${(props) => props.theme.bgColor});
`;

const Introduce = () => {
  return (
    <PageWrapper>
      <Body />
      <Title>Introduce</Title>
    </PageWrapper>
  );
};

export default Introduce;
