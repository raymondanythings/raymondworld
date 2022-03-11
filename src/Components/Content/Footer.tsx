import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100px;
  background-color: white;
  bottom: 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  & span {
    color: black;
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <span>Footer 입니다</span>
      <span>
        &copy; {new Date().getFullYear()}. Raymondnaythings All Right Reserved.
      </span>
    </Wrapper>
  );
};

export default Footer;
