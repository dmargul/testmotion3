import * as React from "react";
import { motion } from "framer-motion";
import useScroll from "./useScroll";
import styled from "styled-components";

type Props = {
  children: JSX.Element | JSX.Element[];
  max: number;
  min?: number;
  native?: boolean;
};

const CircleDiv = styled(motion.div)`
  font-family: sans-serif;
  text-align: center;
  /* height: 16000px; */
  background-color: #00ac69;
  border-radius: 100;
`;

const ScrollRenderer = ({ children, max, min, native }: Props) => {
  const { scroll, isOnScreen } = useScroll({ max: max, min: min ? min : 0 });
  return (
    <CircleDiv
      style={native ? {} : { position: "fixed", width: "30%", top: "44%" }}
      initial={{ opacity: 0, x: 0, y: 1000 }}
      animate={{
        x: 0,
        opacity: isOnScreen ? 1 : 0,
        y:
          scroll - min > 0 && scroll - min < 1000
            ? 50
            : scroll - min > 0
            ? -1000
            : 1000
        /* scale: (scroll - (!!min ? min : 0)) * 0.25 */
      }}
    >
      {children}
    </CircleDiv>
  );
};
export default ScrollRenderer;
