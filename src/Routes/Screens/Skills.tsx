import React, { useEffect } from "react";
import styled from "styled-components";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRecoilValue } from "recoil";
import { backSkillState, etcSkillState, frontSkillState } from "../../datas";
import ProgressBar from "../../Components/Animation/ProgressBar";

const Grid = styled(motion.div)`
  display: grid;
  gap: 3rem;
  /* grid-template-rows: repeat(3, minmax(fit-content, 1fr)); */
`;

const SkillWrapper = styled(motion.div)`
  border: 1px solid blue;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const WrapperTitle = styled.div`
  text-align: center;
`;

const Card = styled(motion.div)`
  display: flex;
  flex-direction: column;
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

const Level = styled.div<{ level: number }>`
  margin: 5px 0;
  & span {
    color: ${(props) =>
      props.level === 2
        ? "#EFFFFD"
        : props.level === 3
        ? "#B8FFF9"
        : props.level === 4
        ? "#85F4FF"
        : props.level === 5
        ? "#42C2FF"
        : props.theme.sectionColor};
  }
`;

const gridVariants = {
  initial: {},
  start: {
    transition: { delayChildren: 0.1, staggerChildren: 0.1 },
  },
};

const cardVariants = {
  initial: {
    rotateY: -95,
    transformPerspective: 2500,
  },
  start: {
    rotateY: 0,
    transformPerspective: 2500,
  },
};

const Skills = () => {
  const [ref, inView] = useInView();
  const controls = useAnimation();
  const frontSkills = useRecoilValue(frontSkillState);
  const backSkills = useRecoilValue(backSkillState);
  const etcSkills = useRecoilValue(etcSkillState);

  useEffect(() => {
    if (inView) {
      controls.start("start");
    } else {
      controls.start("initial");
    }
  }, [controls, inView]);
  return (
    <AnimatePresence>
      <h1>SKills</h1>
      <Grid
        ref={ref}
        variants={gridVariants}
        initial="initial"
        animate={controls}
        key={123123123}
      >
        <SkillWrapper>
          <WrapperTitle>
            <h1>Front-End</h1>
          </WrapperTitle>
          {frontSkills.map((data) => (
            <Card key={data.name} variants={cardVariants}>
              <Title text={data.name}>
                <span>{data.name}</span>
              </Title>
              <Level level={data.level}>
                Level : <span>{data.level}</span>
              </Level>
              <ProgressBar level={data.level} />
            </Card>
          ))}
        </SkillWrapper>
        <SkillWrapper>
          <WrapperTitle>
            <h1>Back-End</h1>
          </WrapperTitle>
          {backSkills.map((data) => (
            <Card key={data.name} variants={cardVariants}>
              <Title text={data.name}>
                <span>{data.name}</span>
              </Title>
              <Level level={data.level}>
                Level : <span>{data.level}</span>
              </Level>
              <ProgressBar level={data.level} />
            </Card>
          ))}
        </SkillWrapper>
        <SkillWrapper>
          <WrapperTitle>
            <h1>ETC</h1>
          </WrapperTitle>
          {etcSkills.map((data) => (
            <Card key={data.name} variants={cardVariants}>
              <Title text={data.name}>
                <span>{data.name}</span>
              </Title>
              <Level level={data.level}>
                Level : <span>{data.level}</span>
              </Level>
              <ProgressBar level={data.level} />
            </Card>
          ))}
        </SkillWrapper>
      </Grid>
    </AnimatePresence>
  );
};

export default Skills;
