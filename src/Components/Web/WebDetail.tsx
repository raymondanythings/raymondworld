import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { IVideos } from "../../datas";
import TopBar from "../Content/TopBar";

const Detail = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const DetailContent = styled(motion.div)`
  margin: 8% 0px;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  border: 1px solid;
  border-radius: 10px;
  background-color: ${(props) => props.theme.boxColor};
`;

const ASideSection = styled.aside`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`;

const SkillsContent = styled.div`
  display: flex;
  padding: 0px 50px;
`;

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
`;

const SkillName = styled(motion.div)`
  opacity: 0;
  text-align: center;
  font-size: 6px;
`;

const VideoWrapper = styled.div<{ url: boolean }>`
  position: relative;
  width: 100%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

const Video = styled.video<{ clicked?: boolean }>`
  box-shadow: ${(props) => (props.clicked ? null : props.theme.shadow)};
  width: 100%;
  z-index: ${(props) => (props.clicked ? null : -1)};
`;

const Title = styled.h1`
  font-size: 3em;
  margin: 10px 0;
`;

const Description = styled.pre`
  margin-bottom: 20px;
  margin: 10px 0;
`;

const skillVariants = {
  hover: {
    scale: 1.2,
    transition: {
      duration: 0.3,
      type: "tween",
    },
  },
};

const items = {
  initial: {
    opacity: 0,
    y: 100,
    scale: 1,
  },
  start: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
  },
  hover: {
    scale: 1.1,
    y: -50,
    transition: {
      duration: 0.3,
      type: "tween",
    },
  },
};

const infoVariants = {
  hover: {
    opacity: 1,
    transition: {
      duration: 0.3,
      type: "tween",
    },
  },
};

const WebDetail: React.FC<{
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  selectedData: IVideos;
}> = ({ selected, setSelected, selectedData }) => {
  return (
    <Detail animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Detail
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setSelected("")}
        style={{ zIndex: -1 }}
      ></Detail>
      <DetailContent
        layoutId={selected}
        variants={items}
        initial="initial"
        animate="start"
        exit="exit"
        key={selectedData.id}
      >
        <VideoWrapper url={Boolean(selectedData.url)}>
          <TopBar />
          <Video
            src={`/videos/${selectedData.path}`}
            clicked={true}
            loop
            autoPlay
            muted
          />
        </VideoWrapper>
        <ASideSection>
          <h1>프로젝트명</h1>
          <Title>{selectedData.title}</Title>
          {selectedData.description && (
            <>
              <h1>설명</h1>
              <Description>{selectedData.description}</Description>
            </>
          )}
          <h1>사용기술</h1>
          <SkillsContent>
            {selectedData.skills?.map((m) => (
              <SkillWrapper key={m} variants={skillVariants} whileHover="hover">
                <Skills src={`/skills/${m}.png`} alt={m} />
                <SkillName variants={infoVariants}>{m}</SkillName>
              </SkillWrapper>
            ))}
          </SkillsContent>
        </ASideSection>
      </DetailContent>
    </Detail>
  );
};

export default WebDetail;
