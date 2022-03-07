import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

import styled from "styled-components";
import { webVideos } from "../../datas";
import TopBar from "../TopBar";
import WebDetail from "./WebDetail";

const WebContent = styled(motion.div)`
  display: flex;
  margin: 8% 0px;
  flex-direction: column;
  position: relative;
  border: 1px solid;
  border-radius: 10px;
`;

const VideoWrapper = styled.div<{ url: boolean }>`
  position: relative;
  width: 100%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  ${(props) => (props.url ? "cursor: pointer" : null)}
`;

const Video = styled.video<{ clicked?: boolean }>`
  box-shadow: ${(props) => (props.clicked ? null : props.theme.shadow)};
  width: 100%;
  z-index: ${(props) => (props.clicked ? null : -1)};
  border-radius: 0 0 10px 10px;
`;

const Info = styled(motion.div)`
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 40px;
  bottom: 0;
  background-color: gray;
  z-index: -1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  h4 {
    font-size: 18px;
  }
`;

const items = {
  initial: {
    opacity: 0,
    scale: 1,
  },
  start: {
    opacity: 1,
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

const Web = () => {
  const [selected, setSelected] = useState("");
  // const { scrollY, scrollYProgress } = useViewportScroll();
  const selectedData = webVideos.find((m) => m.title === selected);
  return (
    <>
      {webVideos.map((data) => (
        <WebContent
          layoutId={data.title}
          variants={items}
          whileHover="hover"
          key={data.id}
        >
          <VideoWrapper
            url={Boolean(data.url)}
            onClick={() => setSelected(data.title)}
          >
            <TopBar />
            <Video src={`/videos/${data.path}`} loop autoPlay muted />
          </VideoWrapper>
          <Info variants={infoVariants}>
            <h4>{data.title}</h4>
          </Info>
        </WebContent>
      ))}
      <AnimatePresence>
        {selected && selectedData && (
          <WebDetail
            selected={selected}
            setSelected={setSelected}
            selectedData={selectedData}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Web;
