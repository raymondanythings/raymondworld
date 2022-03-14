import { AnimatePresence, motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import Project from "../../Components/Content/Project";
import { Link as ScrollLink } from "react-scroll";
import { RiArrowUpCircleFill } from "react-icons/ri";
import { useInView } from "react-intersection-observer";

const Wrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 5% 0;
  margin-top: 20vh;
`;

const ListBtn = styled.ul`
  width: 80%;
  margin: 0 auto;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-around;
  border: 1px solid blue;
  border-radius: 2rem;
  padding: 10px 0px;
`;

const Item = styled.button<{ currentParam: boolean }>`
  color: white;
  border-radius: ${(props) =>
    props.currentParam
      ? "39% 61% 36% 64% / 67% 40% 60% 33%"
      : "78% 22% 85% 15% / 45% 47% 53% 55% "};
  border: ${(props) =>
    !props.currentParam
      ? `1px solid ${props.theme.boxColor}`
      : "1px solid transparent"};
  background-color: ${(props) =>
    props.currentParam ? props.theme.sectionColor : "transparent"};
  padding: 1rem;
  transition: all 0.4s ease-out;
  &:hover {
    background-color: ${(props) => props.theme.sectionColor};
  }
`;

const LayeredBtn = styled.div<{ param: string }>`
  font-weight: 600;
  text-align: center;
  position: relative;
  font-size: 3rem;
  font-family: "Pixeboy";
  color: transparent;
  -webkit-text-stroke: 1px ${(props) => props.theme.layeredColor};
  ::after {
    color: white;
    content: "${(props) => props.param}";
    position: absolute;
    top: -2px;
    left: -2px;
  }
`;

const GoBack = styled(motion.div)`
  margin: 0 auto;
  width: fit-content;
  position: relative;
  z-index: 0;
`;

const Arrow = styled(RiArrowUpCircleFill)`
  fill: ${(props) => props.theme.sectionColor};
  width: 50px;
  height: 50px;
  cursor: pointer;
  filter: drop-shadow(0 0 0.7rem ${(props) => props.theme.boxColor});
  transition: all 0.2s ease-out;
`;

const ScrollArrow = styled(ScrollLink)`
  & svg {
    transform: scale(0);
  }
  &.enable {
    & svg {
      transform: scale(1);
      &:hover {
        transform: scale(1.1);
        fill: ${(props) => props.theme.textColor};
      }
    }
  }
`;

const Proejcts = () => {
  const [ref, inView] = useInView({
    delay: 300,
  });
  const { slide } = useParams();

  return (
    <Wrapper id="top">
      <ListBtn>
        <Link to="/content/web">
          <Item currentParam={slide === null || slide === "web"}>
            <LayeredBtn param={"Web"}>Web</LayeredBtn>
          </Item>
        </Link>
        <Link to="/content/app">
          <Item currentParam={slide === "app"}>
            <LayeredBtn param={"App"}>App</LayeredBtn>
          </Item>
        </Link>
        <Link to="/content/python">
          <Item currentParam={slide === "python"}>
            <LayeredBtn param={"Python"}>Python</LayeredBtn>
          </Item>
        </Link>
      </ListBtn>
      <AnimatePresence exitBeforeEnter>
        <Project />
      </AnimatePresence>
      <GoBack ref={ref}>
        <ScrollArrow
          className={inView ? "enable" : "disable"}
          to="top"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          <Arrow />
        </ScrollArrow>
      </GoBack>
    </Wrapper>
  );
};

export default Proejcts;
