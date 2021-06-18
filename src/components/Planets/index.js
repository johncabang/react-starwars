import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Planets = () => {
  return (
    <Container>
      <motion.h1
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        drag
        dragConstraints={{
          top: -300,
          left: -400,
          right: 400,
          bottom: 300,
        }}
        style={{ display: "block", backgroundColor: "transparent", margin: 0 }}
      >
        planets
      </motion.h1>
      <motion.h5
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        drag
        dragConstraints={{
          top: -300,
          left: -400,
          right: 400,
          bottom: 300,
        }}
        style={{ display: "block", backgroundColor: "transparent", margin: 0 }}
      >
        react-query
      </motion.h5>
    </Container>
  );
};

export default Planets;

const Container = styled(motion.div)`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: transparent;
  height: calc(100vh-80px);
`;
