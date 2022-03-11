import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { IVideos, IWebVideos } from "../../datas";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import TopBar from "../Content/TopBar";

const infoVariants = {
  hover: {
    opacity: 1,
    transition: {
      duration: 0.3,
      type: "tween",
    },
  },
};

const items = {
  odd: {
    opacity: 0,
    scale: 1,
    rotateY: 100,
    transformPerspective: 2500,
  },
  even: {
    opacity: 0,
    scale: 1,
    rotateY: -100,
    transformPerspective: 2500,
  },
  visible: {
    opacity: 1,
    rotateY: 0,
    transformPerspective: 2500,
    transition: { duration: 1 },
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

const WebContent = styled(motion.div)`
  display: flex;
  margin: 8% 0px;
  flex-direction: column;
  position: relative;
`;

const Info = styled(motion.div)`
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 40px;
  bottom: 0;
  background-color: gray;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 0 10px 10px;
  h4 {
    font-size: 18px;
  }
`;

const WebVideo: React.FC<{
  data: IWebVideos;
  setSelected: (title: string) => void;
}> = ({ data, setSelected }) => {
  const odd = data.id % 2 === 0;
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      if (odd) {
        controls.start("odd");
      } else {
        controls.start("even");
      }
    }
  }, [controls, inView, odd]);
  return (
    <WebContent
      ref={ref}
      animate={controls}
      layoutId={data.title}
      initial={odd ? "odd" : "even"}
      variants={items}
      key={data.id}
      whileHover="hover"
    >
      <VideoWrapper
        url={Boolean(data.url)}
        onClick={() => setSelected(data.title)}
      >
        <TopBar />
        <Video
          src={`${process.env.PUBLIC_URL}/videos/${data.path}`}
          loop
          autoPlay
          muted
        />
      </VideoWrapper>
      <Info variants={infoVariants}>
        <h4>{data.title}</h4>
      </Info>
    </WebContent>
  );
};

export default WebVideo;
