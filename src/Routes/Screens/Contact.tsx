import React, { useEffect } from "react";
import styled from "styled-components";
import { BsGithub } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { AiFillInstagram } from "react-icons/ai";
import { SubmitHandler, useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { ErrorMessage } from "@hookform/error-message";
import TextareaAutosize from "react-textarea-autosize";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Wrapper = styled(motion.div)`
  height: 100vh;
  position: relative;
  padding: 0 10%;
  display: flex;
  flex-direction: column;
`;

const Content = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10% 0;
  font-size: 2rem;
`;

const SendForm = styled(motion.form)`
  border: 1px solid blue;
  padding: 5%;
  & label {
    color: white;
  }
  & * {
    color: black;
  }
`;

const InputWrapper = styled(motion.div)`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(2, minmax(80px, 1fr));
  & * {
    font-family: "Pixeboy", "Dongen", "Roboto Mono", sans-serif;
  }
`;
const Links = styled(motion.div)`
  display: flex;
  justify-content: space-around;
  margin-top: 100px;
`;

const SendBtn = styled.input`
  background-color: ${(props) => props.theme.sectionColor};
  border: none;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease-out;
  &:hover {
    border-radius: 3px;
    background-color: ${(props) => props.theme.textColor};
    color: ${(props) => props.theme.sectionColor};
  }
`;

const Mail = styled(HiMail)`
  font-size: 3rem;
  cursor: pointer;
  transition: all 0.2s ease-out;
  &:hover {
    transform: scale(1.1);
    fill: gray;
  }
`;

const Github = styled(BsGithub)`
  font-size: 3rem;
  cursor: pointer;
  transition: all 0.2s ease-out;
  &:hover {
    transform: scale(1.1);
    fill: gray;
  }
`;

const Instagram = styled(AiFillInstagram)`
  font-size: 3rem;
  cursor: pointer;
  transition: all 0.2s ease-out;
  &:hover {
    transform: scale(1.1);
    fill: gray;
  }
`;

const ErrorMsg = styled.h4`
  color: red;
  font-size: 0.7rem;
`;

const ContentBox = styled(motion.div)`
  width: 100%;
  margin: auto 0;
`;

interface IInputs {
  email: string;
  name: string;
  message: string;
}

const wrapperVariants = {
  initial: {
    y: 100,
    opacity: 0,
  },
  start: {
    y: 0,
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IInputs>();
  const openLink = (url: string) => window.open(url);
  const onSubmit: SubmitHandler<IInputs> = async (data) => {
    const serviceId = process.env.REACT_APP_SERVICEID || "";
    const templateId = process.env.REACT_APP_TEMPLATEID || "";
    const userId = process.env.REACT_APP_USERID || "";
    console.log(serviceId, templateId, userId);
    console.log(data);
    try {
      const result = await emailjs.send(
        serviceId,
        templateId,
        { ...data },
        userId
      );
      console.log(result);
    } catch (err) {
      console.log(err);
    }

    reset();
  };

  const [ref, inView] = useInView({ delay: 300 });
  const controls = useAnimation();
  useEffect(() => {
    if (inView) {
      controls.start("start");
    } else {
      controls.start("initial");
    }
  }, [controls, inView]);

  return (
    <Wrapper
      ref={ref}
      initial="initial"
      animate={controls}
      variants={wrapperVariants}
    >
      <Content variants={wrapperVariants}>CONTACT ME!</Content>
      <SendForm onSubmit={handleSubmit(onSubmit)} variants={wrapperVariants}>
        <InputWrapper>
          <input
            placeholder="Email"
            {...register("email", { required: "Email is required." })}
          />
          <ErrorMessage errors={errors} name="email" as={ErrorMsg} />
          <input
            placeholder="Name"
            {...register("name", { required: "Name is required." })}
          />
          <ErrorMessage errors={errors} name="name" as={ErrorMsg} />

          <TextareaAutosize
            cacheMeasurements
            minRows={10}
            style={{
              gridColumn: "1/-1",
              resize: "none",
            }}
            placeholder="Message"
            {...register("message", { required: "Message is required." })}
          />
          <ErrorMessage errors={errors} name="message" as={ErrorMsg} />
        </InputWrapper>
        <div
          style={{ width: "fit-content", margin: "0 auto", marginTop: "10px" }}
        >
          <SendBtn type="submit" value="Send Email" />
        </div>
      </SendForm>
      <ContentBox variants={wrapperVariants}>
        <Content>Links</Content>
        <Links>
          <Mail onClick={() => openLink("mailto:raymondnaything@gmail.com")} />
          <Github
            onClick={() => openLink("https://github.com/raymondanythings")}
          />
          <Instagram
            onClick={() =>
              openLink("https://www.instagram.com/raymondanything/")
            }
          />
        </Links>
      </ContentBox>
    </Wrapper>
  );
};
export default Contact;
