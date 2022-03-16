import { ErrorMessage } from "@hookform/error-message";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { FieldErrors, FieldValues } from "react-hook-form";
import styled from "styled-components";

interface IErrorMsgProps {
  errors: FieldErrors<FieldValues>;
  name: string;
}

const Msg = styled(motion.div)`
  font-size: 0.7rem;
  color: red;
`;

const variants = {
  initial: {
    opacity: 0,
  },
  start: {
    opacity: 1,
  },
};

const ErrorMsg: React.FC<IErrorMsgProps> = ({ errors, name }) => {
  return (
    <AnimatePresence>
      {errors[name] && (
        <Msg
          variants={variants}
          initial="initial"
          animate="start"
          exit="initial"
        >
          <ErrorMessage errors={errors} name={name} />
        </Msg>
      )}
    </AnimatePresence>
  );
};

export default ErrorMsg;
