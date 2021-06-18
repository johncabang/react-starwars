import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

import { useQuery } from "react-query";

const fetchPeople = async () => {
  const res = await fetch("https://www.swapi.tech/api/people/");
  return res.json();
};

const People = () => {
  const { data, status } = useQuery("People", fetchPeople);
  // console.log(data);

  return (
    <Container>
      {status === "loading" && (
        <StyledH3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          loading data
        </StyledH3>
      )}

      {status === "error" && (
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
          style={{
            display: "block",
            backgroundColor: "transparent",
            margin: 0,
          }}
        >
          error fetching data
        </motion.h5>
      )}

      {status === "success" && (
        <div>
          {data.results.map((planet) => (
            <div key={planet.uid}>{planet.name}</div>
          ))}
        </div>
      )}
    </Container>
  );
};

export default People;

const Container = styled(motion.div)`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: transparent;
  height: 80vh;
`;

const StyledH3 = styled(motion.h3)`
  background-color: transparent;
  margin: 0;
`;
