import { useEffect } from "react";
import styled from "styled-components";
import Footer from "../Components/Content/Footer";
import Contact from "./Screens/Contact";
import Introduce from "./Screens/Introduce";
import Proejcts from "./Screens/Projects";
import Skills from "./Screens/Skills";
import { init } from "@emailjs/browser";

import { motion, useScroll } from "framer-motion";
import Experience from "./Screens/Experience";

const Wrapper = styled.div`
  position: relative;
  max-width: 900px;
  margin: 0 auto;
`;

const Home = () => {
  useEffect(() => {
    init(process.env.REACT_APP_USERID || "");
  }, []);
  const { scrollYProgress } = useScroll();

  return (
    <Wrapper className="px-4">
      <motion.div
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "10px",
          zIndex: 100,
          backgroundColor: "red",
          transformOrigin: "0%",
        }}
      ></motion.div>
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
