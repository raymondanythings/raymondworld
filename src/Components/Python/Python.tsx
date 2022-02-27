import { motion } from "framer-motion";

import styled from "styled-components";
import { etcVideos } from "../../datas";

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

const WebContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 8% 0px;
`;

const VideoWrapper = styled.div<{ url: boolean }>`
  width: 70%;
  ${(props) => (props.url ? "cursor: pointer" : null)}
`;

const Video = styled.video`
  border: 2px solid white;
  border-radius: 10px;
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

const Python = () => {
  return (
    <>
      {etcVideos.map((data) => (
        <WebContent variants={items} key={data.id}>
          <VideoWrapper url={Boolean(data.url)}>
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

export default Python;
