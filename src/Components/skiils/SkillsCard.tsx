import { motion } from "framer-motion";
import { FC } from "react";
import styled from "styled-components";
import { ISkillsState } from "../../datas";
import ProgressBar from "../Animation/ProgressBar";

const Card = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div<{ text: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;

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

const Img = styled.img<{ src: string }>`
  width: 40px;
  margin-right: 10px;
  background-color: ${(props) =>
    props.src.includes("Express") || props.src.includes("Flask")
      ? "white"
      : "transparent"};
  border-radius: 10px;
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
const SkillsCard: FC<{ data: ISkillsState }> = ({ data }) => {
  return (
    <Card key={data.name} variants={cardVariants}>
      <Title text={data.name}>
        <span>{data.name}</span>
        <Img
          src={`${process.env.PUBLIC_URL}/skills/${data.name}.png`}
          alt={data.name}
        />
      </Title>
      <Level level={data.level}>
        Level : <span>{data.level}</span>
      </Level>
      <ProgressBar level={data.level} />
    </Card>
  );
};

export default SkillsCard;
