import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

import { useQuery } from "react-query";

import axios from "axios";

// AXIOS EXAMPLE

const People = () => {
  const { isLoading, error, data, status } = useQuery(
    "fetchPeople",
    async () => {
      const { data } = await axios.get("https://www.swapi.tech/api/people/10");
      return data.result.properties;
    }
  );
  // console.log(isLoading);
  // console.log(error);
  console.log(data);
  console.log(status);

  return (
    <Container>
      {isLoading ? (
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          loading data
        </motion.h3>
      ) : (
        <>
          <motion.h4
            whileHover={{ scale: 4 }}
            whileTap={{ scale: 0.9 }}
            drag
            dragConstraints={{
              top: -300,
              left: -400,
              right: 400,
              bottom: 300,
            }}
          >
            {data.name}
          </motion.h4>
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
