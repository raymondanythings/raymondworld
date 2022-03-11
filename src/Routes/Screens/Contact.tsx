import React from "react";
import styled from "styled-components";

import { PageWrapper } from "../../lib/styled";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Contact = () => {
  return (
    <PageWrapper>
      <Content>CONTACT ME!</Content>
    </PageWrapper>
  );
};

export default Contact;
