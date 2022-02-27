import React from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Application from "./App/Application";
import Web from "./Web/Web";
import Python from "./Python/Python";

const variants = {
  initial: {
    opacity: 0,
  },
  start: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
  },
};

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 3%;
  overflow: scroll;
  height: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Project = () => {
  const params = useParams();

  return (
    <Wrapper
      variants={variants}
      initial="initial"
      animate="start"
      exit="exit"
      key={params.slide}
    >
      {params.slide === "web" && <Web />}
      {params.slide === "app" && <Application />}
      {params.slide === "python" && <Python />}
    </Wrapper>
  );
};

export default Project;
