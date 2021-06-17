import React, { useContext } from "react";

import { StarwarsContext } from "../../hooks/StarwarsContext";

const Navbar = () => {
  const [{ content, setContent }] = useContext(StarwarsContext);

  console.log(content);
  return (
    <div>
      <button
        onClick={() => {
          setContent("planets");
        }}
      >
        Planets
      </button>
      <button
        onClick={() => {
          setContent("people");
        }}
      >
        People
      </button>
    </div>
  );
};

export default Navbar;
