import React, { useContext } from "react";

import People from "./components/People";
import Planets from "./components/Planets";
import Navbar from "./components/Navbar";

import { StarwarsContext } from "./hooks/StarwarsContext";

function App() {
  const { content } = useContext(StarwarsContext);

  return (
    <>
      <Navbar />
      {content === "planets" ? <Planets /> : <People />}
    </>
  );
}

export default App;
