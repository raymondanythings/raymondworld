import styled from "styled-components";
import Footer from "../Components/Content/Footer";
import Contact from "./Screens/Contact";
import Experience from "./Screens/Experience";
import Introduce from "./Screens/Introduce";
import Proejcts from "./Screens/Projects";
import Skills from "./Screens/Skills";

const Wrapper = styled.div`
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  * {
    color: ${(props) => props.theme.textColor};
  }
`;

const Home = () => {
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
