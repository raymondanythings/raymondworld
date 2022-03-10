import { motion, useAnimation } from "framer-motion";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Application from "../App/Application";
import Web from "../Web/Web";
import Python from "../Python/Python";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const variants = {
  initial: {
    opacity: 0,
  },
  start: {
    opacity: 1,
    transition: {
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
`;

const Project = () => {
  const params = useParams();
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("start");
    } else {
      controls.start("exit");
    }
  }, [controls, inView, params.slide]);

  return (
    <Wrapper
      ref={ref}
      variants={variants}
      initial="initial"
      animate={controls}
      exit="exit"
      key={params.slide}
    >
      {(params.slide === "web" || !params.slide) && <Web />}
      {params.slide === "app" && <Application />}
      {params.slide === "python" && <Python />}
    </Wrapper>
  );
};

export default Project;
