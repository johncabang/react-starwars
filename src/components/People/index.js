import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

import { useQuery } from "react-query";

import axios from "axios";

// const fetchPeople = async () => {
//   const res = await fetch("https://www.swapi.tech/api/people/");
//   return res.json();
// };

// const fetchPeople = () => {
//   axios.get("https://www.swapi.tech/api/people/");
// };

const People = () => {
  const { isLoading, error, data } = useQuery("fetchPeople", async () => {
    const { data } = await axios.get("https://www.swapi.tech/api/people/10");
    return data.result.properties;
  });

  // console.log(isLoading);
  // console.log(error);
  console.log(data);

  return (
    <Container>
      {isLoading ? (
        <StyledH3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          loading data
        </StyledH3>
      ) : (
        <>
          <h4>{data.name}</h4>
          <p>Birth year: {data.birth_year}</p>
          <p>Height: {data.height}</p>
        </>
      )}

      {error && (
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
