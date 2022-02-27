import { motion } from "framer-motion";

import styled from "styled-components";
import { webVideos } from "../../datas";

const items = {
  initial: {
    opacity: 0,
    y: 20,
  },
  start: {
    opacity: 1,
    y: 0,
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

const VideoWrapper = styled.div<{ url: boolean }>`
  width: 100%;
  border: 2px solid white;
  border-radius: 10px;
  ${(props) => (props.url ? "cursor: pointer" : null)}
`;

const Video = styled.video`
  box-shadow: ${(props) => props.theme.shadow};
  width: 100%;
`;

const ASideSection = styled.aside`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SkillsContent = styled.div`
  padding: 0px 50px;
`;

const Skills = styled.img`
  width: 50px;
  height: 50px;
  padding: 2px;
  background-color: white;
  border-radius: 10px;
  margin: 0px 10px;
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

const Web = () => {
  const newWindow = (url: string) => window.open(url, "_blank");
  return (
    <>
      {webVideos.map((data) => (
        <WebContent variants={items} odd={data.id % 2 === 1} key={data.id}>
          <VideoWrapper
            url={Boolean(data.url)}
            onClick={() => data.url && newWindow(data.url)}
          >
            <TopBar>
              <Buttons>
                <Circle col="red"></Circle>
                <Circle col="yellow"></Circle>
                <Circle col="green"></Circle>
              </Buttons>
            </TopBar>
            <Video src={`/videos/${data.path}`} loop autoPlay muted />
          </VideoWrapper>
          <ASideSection>
            <span>{data.title}</span>
            {data.description && <span>{data.description}</span>}
            <SkillsContent>
              {data.skills?.map((m) => (
                <Skills src={`/skills/${m}.png`} alt={m} key={m} />
              ))}
            </SkillsContent>
          </ASideSection>
        </WebContent>
      ))}
    </>
  );
};

export default Web;
