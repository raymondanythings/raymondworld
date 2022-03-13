import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import ParticleLayer from "../../Components/Animation/ParticleLayer";
import { PageWrapper } from "../../lib/styled";

const IntroWrapper = styled(PageWrapper)`
  margin-bottom: 10vh;
  overflow-x: hidden;
`;

const TitleUnder = styled(motion.div)`
  font-size: 6rem;
  text-align: center;
  font-weight: 700;
  position: relative;
  width: fit-content;
  ::after {
    color: ${(props) => props.theme.sectionColor};
    /* -webkit-text-stroke: 0.1rem rgb(0, 26, 255); */
    content: "Raymond";
    position: absolute;
    top: -0.3rem;
    left: -0.3rem;
  }
`;
const TitleOver = styled(motion.div)`
  font-size: 6rem;
  text-align: center;
  font-weight: 700;
  position: relative;

  ::after {
    /* -webkit-text-stroke: 0.1rem rgb(0, 26, 255); */
    color: ${(props) => props.theme.sectionColor};
    content: "Anything.";
    position: absolute;
    top: -0.3rem;
    left: -0.3rem;
  }
`;
const TitleWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Content = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* flex-wrap: wrap; */
`;

const Img = styled(motion.div)`
  z-index: -1;
`;

const contentVariants = {
  initial: {
    opacity: 0,
    x: 0,
  },
  start: {
    opacity: 1,
    x: 0,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.5,
    },
  },
};

const titleVariants = {
  initial: {
    x: -1000,
  },
  start: {
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.3,
      mass: 0.1,
      velocity: 5,
    },
  },
};
const imageVariants = {
  initial: {
    x: 1000,
  },
  start: {
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.3,
      mass: 0.1,
      velocity: 5,
    },
  },
};

const Introduce = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("start");
    } else {
      controls.start("initial");
    }
  }, [controls, inView]);
  return (
    <IntroWrapper>
      <ParticleLayer />
      <Content
        ref={ref}
        variants={contentVariants}
        animate={controls}
        initial="initial"
      >
        <TitleWrapper variants={titleVariants}>
          <TitleUnder>Raymond</TitleUnder>
          <TitleOver>Anything.</TitleOver>
        </TitleWrapper>
        <Img variants={imageVariants}>
          <img
            src={`${process.env.PUBLIC_URL}/images/profile2.png`}
            alt="profile"
          />
        </Img>
      </Content>
    </IntroWrapper>
  );
};

export default Introduce;
