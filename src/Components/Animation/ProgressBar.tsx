import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import styled from "styled-components";
interface IProgressBarProps {
  level: number;
}
const Bar = styled(motion.div)<{ pc: number }>`
  width: 100%;
  height: 5px;
  background-color: white;
  position: relative;
`;

const PcBar = styled(motion.div)`
  position: absolute;
  background: linear-gradient(to right, #d9ce3f, #630606);
  height: 5px;
  width: 100%;
  left: 0;
  top: 0;
`;

const pcVariants = {
  initial: {
    width: "0%",
  },
};

const ProgressBar = ({ level }: IProgressBarProps) => {
  return (
    <Bar pc={level}>
      <PcBar
        variants={pcVariants}
        initial="initial"
        animate={{
          width: 100 * (level / 5) + "%",
          transition: {
            delay: 1,
            duration: 3,
          },
        }}
      />
    </Bar>
  );
};

export default ProgressBar;
