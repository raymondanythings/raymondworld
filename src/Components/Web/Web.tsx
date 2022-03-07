import { AnimatePresence, motion, useViewportScroll } from "framer-motion";
import React, { useState } from "react";

import styled from "styled-components";
import { webVideos } from "../../datas";

const items = {
  initial: {
    opacity: 0,
    y: 20,
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
    y: -100,
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

const WebContent = styled(motion.div)<{ odd?: boolean }>`
  display: flex;
  margin: 8% 0px;
  ${(props) => (props.odd ? "flex-flow : row-reverse;" : null)}
`;

const VideoWrapper = styled.div<{ url: boolean }>`
  position: relative;
  width: 100%;
  border: 2px solid white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  ${(props) => (props.url ? "cursor: pointer" : null)}
`;

const Video = styled.video`
  box-shadow: ${(props) => props.theme.shadow};
  width: 100%;
  z-index: -1;
`;

const ASideSection = styled.aside`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SkillsContent = styled.div`
  display: flex;
  padding: 0px 50px;
`;

const SkillWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 70px;
`;

const Skills = styled(motion.img)`
  width: 50px;
  height: 50px;
  padding: 2px;
  background-color: white;
  border-radius: 10px;
  margin: 0px 10px;
`;

const SkillName = styled(motion.div)`
  opacity: 0;
  text-align: center;
`;

const TopBar = styled.div`
  height: 15px;
  border-radius: 10px 10px 0 0;
  background-color: gray;
  display: flex;
  align-items: center;
`;

const Buttons = styled.div`
  position: relative;
  left: 10px;
  display: flex;
`;

const Circle = styled.div<{ col: string }>`
  width: 7px;
  height: 7px;
  margin: 0px 2px;
  background-color: ${(props) => props.theme.circles[`${props.col}`]};
  border-radius: 50%;
`;
const Detail = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Info = styled(motion.div)`
  opacity: 0;
  position: absolute;
  width: 100%;
  bottom: -10px;
  h4 {
    text-align: center;
    font-size: 18px;
  }
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

const Web = () => {
  const [selected, setSelected] = useState("");
  const { scrollY } = useViewportScroll();
  const selectedData = webVideos.find((m) => m.title === selected);
  console.log(selectedData);
  return (
    <>
      {webVideos.map((data) => (
        <WebContent
          layoutId={data.title}
          variants={items}
          initial="initial"
          animate="start"
          exit="exit"
          whileHover="hover"
          odd={data.id % 2 === 1}
          key={data.id}
        >
          <VideoWrapper
            url={Boolean(data.url)}
            onClick={() => setSelected(data.title)}
          >
            <TopBar>
              <Buttons>
                <Circle col="red"></Circle>
                <Circle col="yellow"></Circle>
                <Circle col="green"></Circle>
              </Buttons>
            </TopBar>
            <Video src={`/videos/${data.path}`} loop autoPlay muted />
            <Info variants={infoVariants}>
              <h4>{data.title}</h4>
            </Info>
          </VideoWrapper>
        </WebContent>
      ))}
      <AnimatePresence>
        {selected && (
          <Detail
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected("")}
          >
            {selectedData && (
              <WebContent
                layoutId={selected}
                variants={items}
                initial="initial"
                animate="start"
                exit="exit"
                key={selectedData.id}
                style={{
                  maxWidth: "900px",
                  margin: "0 auto",
                  height: "100vh",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <VideoWrapper url={Boolean(selectedData.url)}>
                  <TopBar>
                    <Buttons>
                      <Circle col="red"></Circle>
                      <Circle col="yellow"></Circle>
                      <Circle col="green"></Circle>
                    </Buttons>
                  </TopBar>
                  <Video
                    src={`/videos/${selectedData.path}`}
                    loop
                    autoPlay
                    muted
                  />
                </VideoWrapper>
                <ASideSection>
                  <span>{selectedData.title}</span>
                  {selectedData.description && (
                    <span>{selectedData.description}</span>
                  )}
                  <SkillsContent>
                    {selectedData.skills?.map((m) => (
                      <SkillWrapper
                        key={m}
                        variants={skillVariants}
                        whileHover="hover"
                      >
                        <Skills src={`/skills/${m}.png`} alt={m} />
                        <SkillName variants={infoVariants}>{m}</SkillName>
                      </SkillWrapper>
                    ))}
                  </SkillsContent>
                </ASideSection>
              </WebContent>
            )}
          </Detail>
        )}
      </AnimatePresence>
    </>
  );
};

export default Web;
