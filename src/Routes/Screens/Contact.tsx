import React from "react";
import styled from "styled-components";
import { PageWrapper } from "../../lib/styled";
import { BsGithub } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { AiFillInstagram } from "react-icons/ai";
import { FieldValue, SubmitHandler, useForm } from "react-hook-form";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SendForm = styled.form`
  & * {
    color: black;
  }
`;
const Links = styled.div`
  margin-top: 100px;
`;

const Mail = styled(HiMail)`
  font-size: 100px;
`;

const Github = styled(BsGithub)`
  font-size: 100px;
`;

const Instagram = styled(AiFillInstagram)`
  font-size: 100px;
`;

interface IInputs {
  email: string;
  name: string;
  message: string;
}

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IInputs>();
  const openLink = (url: string) => window.open(url);
  const onSubmit: SubmitHandler<IInputs> = (data) => {
    console.log(data);
    reset();
  };
  return (
    <PageWrapper>
      <Content>CONTACT ME!</Content>
      <SendForm onSubmit={handleSubmit(onSubmit)}>
        <input {...register("email")} />
        <input {...register("name")} />
        <input {...register("message")} />
        <input type="submit" />
      </SendForm>
      <Links>
        <Mail onClick={() => openLink("mailto:raymondnaything@gmail.com")} />
        <Github
          onClick={() => openLink("https://github.com/raymondanythings")}
        />
        <Instagram
          onClick={() => openLink("https://www.instagram.com/raymondanything/")}
        />
      </Links>
    </PageWrapper>
  );
};
export default Contact;
