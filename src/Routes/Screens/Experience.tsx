import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Grid = styled(motion.div)`
  display: grid;
  gap: 10px;
  height: 100vh;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  grid-auto-rows: minmax(100px, 150px);
`;

const Card = styled.div`
  border: 1px solid blue;
`;

const Title = styled.div<{ text: string }>`
  & span {
    font-size: 2rem;
    position: relative;
    font-weight: 500;
    background: linear-gradient(
      to right,
      ${(props) => props.theme.boxColor},
      ${(props) => props.theme.sectionColor}
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    ::after {
      content: "${(props) => props.text}";
      background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0.6),
        ${(props) => props.theme.boxColor}
      );
      white-space: nowrap;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      position: absolute;
      top: 0.1rem;
      left: 0.1rem;
    }
  }
`;

const Experience = () => {
  return (
    // <PageWrapper>
    <Grid>
      <Card>
        <Title text="Title Component">
          <span>Title Component</span>
        </Title>
      </Card>
      <Card>
        <Title text="Title Component">
          <span>Title Component</span>
        </Title>
      </Card>
      <Card>
        <Title text="Title Component">
          <span>Title Component</span>
        </Title>
      </Card>
      <Card>
        <Title text="Title Component">
          <span>Title Component</span>
        </Title>
      </Card>
      <Card>
        <Title text="Title Component">
          <span>Title Component</span>
        </Title>
      </Card>
      <Card>
        <Title text="Title Component">
          <span>Title Component</span>
        </Title>
      </Card>
    </Grid>
    // </PageWrapper>
  );
};

export default Experience;
