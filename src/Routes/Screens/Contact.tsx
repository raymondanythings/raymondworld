import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { BsGithub } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { AiFillInstagram } from "react-icons/ai";
import { SubmitHandler, useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import TextareaAutosize from "react-textarea-autosize";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import confetti from "canvas-confetti";
import { useState } from "react";
import ErrorMsg from "../../Components/Animation/ErrorMsg";

const confettiSettings = {
  particleCount: 50,
  spread: 50,
};

const Wrapper = styled(motion.div)`
  /* height: 100vh; */
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
  padding-bottom: 2%;
  & label {
    color: white;
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
  width: fit-content;
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

const ContentBox = styled(motion.div)`
  width: 100%;
  margin: auto 0;
`;

const FormCol = styled.div`
  grid-column: 1 / -1;
  display: flex;
`;

const Colume = styled.div`
  width: 50%;
  & input {
    width: 95%;
  }
`;

interface IInputs {
  email: string;
  Iname: string;
  Imessage: string;
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

const successVariants = {
  initial: {
    y: 10,
    opacity: 0,
  },
  start: {
    y: 3,
    opacity: 1,
  },
};

const Contact = () => {
  const btnRef = useRef<HTMLInputElement>(null);
  const [ok, setOk] = useState(false);

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
    try {
      const result = await emailjs.send(
        serviceId,
        templateId,
        { ...data },
        userId
      );
      if (result.status === 200) {
        confetti({
          origin: { x: 0.5, y: 0.6 },
          ...confettiSettings,
        });
        setOk(true);
      }
    } catch (err) {
      console.log(err);
    }

    reset();
  };

  // <- Click Event Confetti ->

  // const handleClick = useCallback(
  //   (event: MouseEvent) => {
  //     const x = event.clientX / window.innerWidth;
  //     const y = event.clientY / window.innerHeight;
  //     confetti({
  //       origin: { x: 0.5, y: 0.6 },
  //       ...confettiSettings,
  //     });
  //   },
  //   []
  // );

  const [ref, inView] = useInView({ delay: 300 });
  const controls = useAnimation();
  const success = useAnimation();
  useEffect(() => {
    // success.start("initial");
    if (ok) {
      success.start("start");
      setTimeout(() => {
        success.start("initial");
        setOk(false);
      }, 2000);
    }
    if (inView) {
      controls.start("start");
    } else {
      controls.start("initial");
    }
  }, [controls, success, inView, ok]);

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
            autoComplete="off"
            placeholder="Email"
            {...register("email", {
              required: "필수입력 항목입니다.",
              pattern: {
                value:
                  /^([0-9a-zA-Z_.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/,
                message: "이메일이 유효하지 않습니다.",
              },
            })}
          />

          <input
            autoComplete="off"
            placeholder="Name"
            {...register("Iname", { required: "필수입력 항목입니다." })}
          />

          <FormCol>
            <Colume>
              <ErrorMsg errors={errors} name="email" />
            </Colume>
            <Colume>
              <ErrorMsg errors={errors} name="Iname" />
            </Colume>
          </FormCol>

          <TextareaAutosize
            cacheMeasurements
            minRows={10}
            style={{
              gridColumn: "1/-1",
              resize: "none",
            }}
            placeholder="Message"
            {...register("Imessage", { required: "필수입력 항목입니다." })}
          />
          <ErrorMsg errors={errors} name="Imessage" />
        </InputWrapper>
        <div
          style={{
            width: "fit-content",
            margin: "10px auto 0",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <SendBtn ref={btnRef} type="submit" value="Send Email" />

          <motion.div
            variants={successVariants}
            initial="initial"
            animate={success}
            style={{ color: "white", textAlign: "center", marginTop: "10px" }}
          >
            메일전송완료!
          </motion.div>
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
