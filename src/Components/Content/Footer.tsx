import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
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
