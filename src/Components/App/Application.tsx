import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { appVideos } from "../../datas";

const items = {
  initial: {
    opacity: 0,
  },
  start: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const WebContent = styled(motion.div)<{ odd: boolean }>`
  display: flex;
  justify-content: center;
  margin: 8% 0px;
  flex-flow: ${(props) => (props.odd ? "row-reverse;" : "nowrap")};
`;

const VideoWrapper = styled.div<{ url: boolean; odd: boolean }>`
  width: 50%;
  display: flex;
  ${(props) => (props.odd ? "justify-content : flex-end" : null)};
  ${(props) => (props.url ? "cursor: pointer" : null)};
`;

const Video = styled.video`
  box-shadow: ${(props) => props.theme.shadow};
  border: 2px solid white;
  width: 70%;
  border-radius: 2rem;
`;

const ASideSection = styled.aside`
  width: 30%;
  text-align: center;
`;
const Application = () => {
  const newWindow = (url: string) => window.open(url, "_blank");
  return (
    <>
      {appVideos.map((data) => (
        <WebContent variants={items} odd={data.id % 2 === 1} key={data.id}>
          <VideoWrapper
            url={Boolean(data.url)}
            odd={data.id % 2 === 1}
            onClick={() => data.url && newWindow(data.url)}
          >
            <Video src={`/videos/${data.path}`} loop autoPlay muted />
          </VideoWrapper>
          <ASideSection>
            <span>{data.title}</span>
          </ASideSection>
        </WebContent>
      ))}
    </>
  );
};

export default Application;
