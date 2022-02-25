import { AnimatePresence } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import Project from "../Components/Project";

const Wrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  height: 100vh;
  padding-top: 10%;
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

const Projects = styled.div`
  display: flex;
  justify-content: center;
`;

const Home = () => {
  const params = useParams();
  return (
    <Wrapper>
      <ListBtn>
        <Link to="/content/app">
          <Item>App</Item>
        </Link>
        <Link to="/content/web">
          <Item>Web</Item>
        </Link>
        <Link to="/content/etc">
          <Item>ETC</Item>
        </Link>
      </ListBtn>
      <Projects>
        <AnimatePresence exitBeforeEnter>
          {params.slide && <Project />}
        </AnimatePresence>
      </Projects>
    </Wrapper>
  );
};

export default Home;
