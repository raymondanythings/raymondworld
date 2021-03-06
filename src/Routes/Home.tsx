import { useEffect } from "react";
import styled from "styled-components";
import Footer from "../Components/Content/Footer";
import Contact from "./Screens/Contact";
import Experience from "./Screens/Experience";
import Introduce from "./Screens/Introduce";
import Proejcts from "./Screens/Projects";
import Skills from "./Screens/Skills";
import { init } from "@emailjs/browser";

const Wrapper = styled.div`
  position: relative;
  max-width: 900px;
  margin: 0 auto;
`;

const Home = () => {
  useEffect(() => {
    init(process.env.REACT_APP_USERID || "");
  }, []);
  return (
    <Wrapper>
      <Introduce />
      <Skills />
      {/* <Experience /> */}
      <Proejcts />
      <Contact />
      <Footer />
    </Wrapper>
  );
};

export default Home;
