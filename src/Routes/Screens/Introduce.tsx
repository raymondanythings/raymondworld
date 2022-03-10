import styled from "styled-components";
import ParticleLayer from "../../Components/Animation/ParticleLayer";
import { PageWrapper } from "../../lib/styled";

const Title = styled.span``;

const Body = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;

  background: linear-gradient(
    90deg,
    ${(props) => props.theme.bgColor},
    ${(props) => props.theme.boxColor}
  );
  z-index: -1;
`;

const Introduce = () => {
  return (
    <PageWrapper>
      <Body>
        <ParticleLayer />
        {/* <Title>Introduce</Title> */}
      </Body>
    </PageWrapper>
  );
};

export default Introduce;
