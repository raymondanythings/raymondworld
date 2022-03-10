import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import Project from "../../Components/Project";

const Wrapper = styled.div<{ innerWidth: number }>`
  /* max-width: ${(props) => props.innerWidth}px; */
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

const Proejcts = () => {
  const params = useParams();
  const [width, setWidth] = useState(window.innerWidth * 0.8);
  const handleResize = () => {
    if (window.innerWidth * 0.8 > 900) {
      setWidth(900);
    } else {
      setWidth(window.innerWidth * 0.8);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Wrapper innerWidth={width}>
      <ListBtn>
        <Link to="/content/app">
          <Item>App</Item>
        </Link>
        <Link to="/content/web">
          <Item>Web</Item>
        </Link>
        <Link to="/content/python">
          <Item>Python</Item>
        </Link>
      </ListBtn>
      <AnimatePresence exitBeforeEnter>
        {params.slide && <Project />}
      </AnimatePresence>
    </Wrapper>
  );
};

export default Proejcts;
