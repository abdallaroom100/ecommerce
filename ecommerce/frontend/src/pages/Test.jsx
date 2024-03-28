import React from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import styled from "styled-components";

const Test = () => {
  const opacity = useTransform()
  const { scrollY, scrollYProgress,scrollXProgress } = useScroll();
  const styled = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    damping: 10,
    stiffness: 100,
    duration: "0.4s",
    delay: "1s",
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 40,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <TestContainer>
      <motion.div style={{ scaleX }} className="bar"></motion.div>
      
    </TestContainer>
  );
};

const TestContainer = styled.div`
  height: 300vh;

  width: 100%;
  .bar {
    position: sticky;
    top: 0;
    left: 0;
    height: 10px;
    background-color: red;
    transform-origin: 0%;
  }
`;
export default Test;
