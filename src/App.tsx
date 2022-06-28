import * as React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import ScrollRenderer from "./scrollRenderer";
import Stack from "./stack";
import useScroll from "./useScroll";
import "./styles.css";
import { makeProps, makeMin, makeMax } from "./helpers";

export default function App() {
  const { isOnScreen } = useScroll({ min: makeMin(3.5), max: makeMax(4.5) });

  return (
    <Main animate={{ backgroundColor: isOnScreen ? "#7990ed" : "#003a70" }}>
      <ScrollRenderer {...makeProps(0)}>
        <P>Hey SpaceX, my name is Ilyass Ben Hakim</P>
      </ScrollRenderer>
      <ScrollRenderer {...makeProps(1)}>
        <P>A clean design minded young software engineer and web designer.</P>
      </ScrollRenderer>
      <ScrollRenderer {...makeProps(2)}>
        <P>
          I heared about your offer for React JS developper, and i would
          integrate SpaceX team and try my best.
        </P>
      </ScrollRenderer>
      <ScrollRenderer {...makeProps(3.5)}>
        <Stack space={1}>
          <P>So let's see</P>
          <P>How Stack Works</P>
          {/* <H1>What i can do?</H1> */}
        </Stack>
      </ScrollRenderer>
      <ScrollRenderer {...makeProps(5)}>
        <P>A clean design minded young software engineer and web designer.</P>
      </ScrollRenderer>
    </Main>
  );
}

const P = styled.p`
  margin: 0 auto;
  color: #fff;
  max-width: 50%;
  line-height: 1.2em;
`;
const H1 = styled.h1`
  font-size: 3.4em;
  color: #fff;
  line-height: 3.8em;
`;
const Main = styled(motion.div)`
  align-content: center;
  font-family: sans-serif;
  text-align: center;
  height: 16000px;
  width: 100%;
  background-color: #003a70;
`;
