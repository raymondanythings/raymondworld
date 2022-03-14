import { useEffect } from "react";
import styled from "styled-components";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRecoilValue } from "recoil";
import { backSkillState, etcSkillState, frontSkillState } from "../../datas";
import SkillsCard from "../../Components/skiils/SkillsCard";

const Grid = styled(motion.div)`
  display: grid;
  gap: 3rem;
`;

const SkillTitle = styled(motion.div)`
  width: fit-content;
  padding: 1rem;
  margin: 0 auto;
  background-color: ${(props) => props.theme.sectionColor};
  border-radius: 39% 61% 36% 64% / 67% 40% 60% 33%;
`;

const LayeredTitle = styled(motion.div)`
  font-size: 3rem;
  font-weight: 600;
  text-align: center;
  position: relative;

  ::after {
    color: ${(props) => props.theme.layeredColor};
    content: "SKILLS";
    position: absolute;
    top: -2px;
    left: -2px;
  }
`;

const SkillWrapper = styled(motion.div)`
  border: 1px solid blue;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const WrapperTitle = styled.div`
  text-align: center;
  font-weight: 500;
  font-size: 2rem;
  width: fit-content;
  margin: 0 auto;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 1),
    ${(props) => props.theme.boxColor}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const gridVariants = {
  initial: {},
  start: {
    transition: { delayChildren: 0.1, staggerChildren: 0.1 },
  },
};

const titleVariants = {
  initial: {
    scale: 0,
  },
  start: {
    scale: 1,
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
    }
  }, [controls, inView]);
  return (
    <AnimatePresence>
      <Grid
        ref={ref}
        variants={gridVariants}
        initial="initial"
        animate={controls}
        key={"Skills"}
      >
        <SkillTitle variants={titleVariants}>
          <LayeredTitle>SKills</LayeredTitle>
        </SkillTitle>
        <SkillWrapper>
          <WrapperTitle>
            <h1>Front-End</h1>
          </WrapperTitle>
          {frontSkills.map((data) => (
            <SkillsCard key={data.id} data={data} />
          ))}
        </SkillWrapper>
        <SkillWrapper>
          <WrapperTitle>
            <h1>Back-End</h1>
          </WrapperTitle>
          {backSkills.map((data) => (
            <SkillsCard key={data.id} data={data} />
          ))}
        </SkillWrapper>
        <SkillWrapper>
          <WrapperTitle>
            <h1>ETC</h1>
          </WrapperTitle>
          {etcSkills.map((data) => (
            <SkillsCard key={data.id} data={data} />
          ))}
        </SkillWrapper>
      </Grid>
    </AnimatePresence>
  );
};

export default Skills;
