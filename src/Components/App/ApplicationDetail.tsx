import { motion, useAnimation } from "framer-motion";
import React, { FC, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { IVideos } from "../../datas";
import SkillImg from "../skiils/SkillImg";

const items = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.3,
  },
  start: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  exit: {
    opacity: 0,
  },
};

const WebContent = styled(motion.div)<{ odd: number }>`
  display: flex;
  justify-content: center;
  margin: 8% 0px;
  flex-flow: ${(props) => (props.odd === 1 ? "row-reverse;" : "nowrap")};
`;

const VideoWrapper = styled.div<{ url: boolean; odd: number }>`
  width: 50%;
  display: flex;
  ${(props) => (props.odd === 1 ? "justify-content : flex-end" : null)};
  ${(props) => (props.url ? "cursor: pointer" : null)};
`;

const Video = styled.video<{ isMobile: boolean }>`
  box-shadow: ${(props) => props.theme.shadow};
  border: 2px solid white;
  width: 70%;
  border-radius: ${(props) => (!props.isMobile ? "2rem" : "1.5rem")};
`;

const ASideSection = styled.aside`
  width: 30%;
  text-align: center;
`;

const AppTitle = styled.span<{ isMobile: boolean }>`
  font-size: ${(props) => (!props.isMobile ? "2rem" : "1.5rem")};
  font-weight: 500;
`;

const SkillsContent = styled.div`
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

const ApplicationDetail: FC<{ data: IVideos }> = ({ data }) => {
  const newWindow = (url: string) => window.open(url, "_blank");
  const [ref, inView] = useInView();
  const controls = useAnimation();
  const isMobile = useMediaQuery({
    query: "(max-width : 420px)",
  });

  useEffect(() => {
    if (inView) {
      controls.start("start");
    } else {
      controls.start("initial");
    }
  }, [controls, inView]);
  return (
    <WebContent ref={ref} variants={items} animate={controls} odd={data.id % 2}>
      <VideoWrapper
        url={Boolean(data.url)}
        odd={data.id % 2}
        onClick={() => data.url && newWindow(data.url)}
      >
        <Video
          isMobile={isMobile}
          src={`${process.env.PUBLIC_URL}/videos/${data.path}`}
          loop
          autoPlay
          muted
        />
      </VideoWrapper>
      <ASideSection>
        <AppTitle isMobile={isMobile}>{data.title}</AppTitle>
        <div>{data.description}</div>
        <SkillsContent>
          {data.skills?.map((m) => (
            <SkillImg m={m} />
          ))}
        </SkillsContent>
      </ASideSection>
    </WebContent>
  );
};

export default ApplicationDetail;
