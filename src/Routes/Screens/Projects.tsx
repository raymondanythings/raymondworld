import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Project from "../../Components/Content/Project";
import { Link as ScrollLink } from "react-scroll";
import { RiArrowUpCircleFill } from "react-icons/ri";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Wrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 5% 50px;
`;

const ListBtn = styled.ul`
  width: 80%;
  margin: 0 auto;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-around;
  border: 1px solid white;
  padding: 10px 0px;
`;

const Item = styled.li`
  color: white;
  padding: 5px 15px;
  background-color: blue;
  border-radius: 5px;
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

  useEffect(() => {
    console.log(inView);
  }, [inView]);
  return (
    <Wrapper id="top">
      <ListBtn>
        <Link to="/content/web">
          <Item>Web</Item>
        </Link>
        <Link to="/content/app">
          <Item>App</Item>
        </Link>
        <Link to="/content/python">
          <Item>Python</Item>
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
