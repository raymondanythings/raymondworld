import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  margin-bottom: 10px;
  bottom: 0;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const Footer = () => {
  return (
    <Wrapper>
      <span>
        &copy; {new Date().getFullYear()}. Raymondnaythings All Right Reserved.
      </span>
    </Wrapper>
  );
};

export default Footer;
