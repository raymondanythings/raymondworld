import { motion } from "framer-motion";
import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Web from "./Web/Web";

const variants = {
  initial: {
    opacity: 0,
  },
  start: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
  },
};

const items = {
  initial: {
    opacity: 0,
  },
  start: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
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
    </Wrapper>
  );
};

export default Project;
