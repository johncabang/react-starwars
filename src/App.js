import React, { useContext } from "react";

import { motion } from "framer-motion";
import styled from "styled-components";
import People from "./components/People";
import Planets from "./components/Planets";
import Navbar from "./components/Navbar";

import { StarwarsContext } from "./hooks/StarwarsContext";

function App() {
  const { content } = useContext(StarwarsContext);

  return (
    <Container>
      <Navbar />
      <motion.div
        whileHover={{ scale: 1.8 }}
        whileTap={{ scale: 0.9 }}
        drag
        dragConstraints={{
          top: -300,
          left: -400,
          right: 400,
          bottom: 300,
        }}
        style={{ backgroundColor: "transparent" }}
      >
        <h1 style={{ backgroundColor: "transparent" }}>star wars</h1>
        <h5 style={{ backgroundColor: "transparent" }}>react-query</h5>
      </motion.div>
      {content === "planets" ? <Planets /> : <People />}
    </Container>
  );
}

export default App;

const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;
