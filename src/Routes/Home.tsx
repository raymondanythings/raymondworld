import styled from "styled-components";
import Footer from "../Components/Footer";
import Contact from "./Screens/Contact";
import Experience from "./Screens/Experience";
import Introduce from "./Screens/Introduce";
import Proejcts from "./Screens/Projects";

const Wrapper = styled.div`
  position: relative;
`;

const Home = () => {
  return (
    <Wrapper>
      <Introduce />
      <Experience />
      <Proejcts />
      <Contact />
      <Footer />
    </Wrapper>
  );
};

export default Home;
