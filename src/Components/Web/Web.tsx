import { motion } from "framer-motion";

import styled from "styled-components";
import { webVideos } from "../../datas";

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
  margin: 8% 0px;
  ${(props) => (props.odd ? "flex-flow : row-reverse;" : null)}
`;

const VideoWrapper = styled.div`
  cursor: pointer;
`;

const Video = styled.video`
  box-shadow: ${(props) => props.theme.shadow};
  border: 2px solid white;
  width: 100%;
  border-radius: 10px;
`;

const ASideSection = styled.aside`
  width: 100%;
  text-align: center;
`;
const Web = () => {
  const newWindow = (url: string) => window.open(url, "_blank");
  return (
    <>
      {webVideos.map((url) => (
        <WebContent variants={items} odd={url.id % 2 === 1} key={url.id}>
          <VideoWrapper onClick={() => newWindow(url.url)}>
            <Video src={`/videos/${url.path}`} loop autoPlay muted />
          </VideoWrapper>
          <ASideSection>
            <span>{url.title}</span>
          </ASideSection>
        </WebContent>
      ))}
    </>
  );
};

export default Web;
