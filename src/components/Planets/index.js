import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

import { useQuery } from "react-query";

// FETCH EXAMPLE

const fetchPlanets = async () => {
  const res = await fetch("https://www.swapi.tech/api/planets/");
  return res.json();
};

const Planets = () => {
  const { data, status } = useQuery("planets", fetchPlanets);
  // console.log(data);

  return (
    <Container>
      {status === "loading" && (
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          loading data
        </motion.h3>
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

export default Planets;

const Container = styled(motion.div)`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: transparent;
  height: 80vh;
`;
