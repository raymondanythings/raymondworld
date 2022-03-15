import { motion } from "framer-motion";
import React, { FC } from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";

const SkillWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
  width: 70px;
`;

const Skills = styled(motion.img)`
  width: 50px;
  height: 50px;
  padding: 2px;
  background-color: ${(props) => props.theme.textColor};
  border-radius: 10px;
  margin: 0px 10px;
  @media screen and (max-width: 420px) {
    width: 30px;
    height: 30px;
    margin: 0;
  }
`;

const SkillName = styled(motion.div)`
  opacity: 0;
  text-align: center;
  font-size: 6px;
`;

const infoVariants = {
  hover: {
    opacity: 1,
    transition: {
      duration: 0.3,
      type: "tween",
    },
  },
};

const skillVariants = {
  hover: {
    scale: 1.2,
    transition: {
      duration: 0.3,
      type: "tween",
    },
  },
};

const SkillImg: FC<{ m: string }> = ({ m }) => {
  const isMobile = useMediaQuery({
    query: "(max-width : 420px)",
  });

  return (
    <SkillWrapper key={m} variants={skillVariants} whileHover="hover">
      <Skills src={`${process.env.PUBLIC_URL}/skills/${m}.png`} alt={m} />

      {!isMobile && <SkillName variants={infoVariants}>{m}</SkillName>}
    </SkillWrapper>
  );
};

export default SkillImg;
