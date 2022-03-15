import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { IWebVideos } from "../../datas";
import TopBar from "../Content/TopBar";
import { ImEarth } from "react-icons/im";
import { useMediaQuery } from "react-responsive";
import SkillImg from "../skiils/SkillImg";

const Detail = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const DetailContent = styled(motion.div)`
  margin: 8% 0px;
  max-width: 1000px;
  margin: 0 auto;
  border: 1px solid;
  border-radius: 10px;
  background-color: ${(props) => props.theme.boxColor};
  z-index: 100;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  height: 100%;
`;

const ASideSection = styled.aside`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 10px;
`;

const SkillsContent = styled.div<{ len: boolean }>`
  display: flex;
  padding: 0px 50px;
  overflow-x: scroll;
  width: 100%;
  justify-content: center;
  @media screen and (max-width: 420px) {
    flex-wrap: wrap;
    padding: 0;
  }
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
  text-align: center;
  white-space: normal;
`;

const Website = styled(ImEarth)`
  cursor: pointer;
`;

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

const WebDetail: React.FC<{
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  selectedData: IWebVideos;
}> = ({ selected, setSelected, selectedData }) => {
  const onClick = (url: string) => window.open(url);

  return (
    <Detail style={{ zIndex: 10, padding: "5% 0" }}>
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
            src={`${process.env.PUBLIC_URL}/videos/${selectedData.path}`}
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
          <SkillsContent
            len={Boolean(selectedData.skills && selectedData.skills.length > 8)}
          >
            {selectedData.skills?.map((m) => (
              <SkillImg m={m} />
            ))}
          </SkillsContent>
          <Website onClick={() => onClick(selectedData.url)} />
        </ASideSection>
      </DetailContent>
    </Detail>
  );
};

export default WebDetail;
