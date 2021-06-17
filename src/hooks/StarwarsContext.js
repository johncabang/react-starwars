import React, { useState, createContext } from "react";

const StarwarsContext = createContext();

const StarwarsProvider = ({ children }) => {
  const [content, setContent] = useState("planets");

  const value = {
    content,
    setContent,
  };

  return (
    <StarwarsContext.Provider value={[value]}>
      {children}
    </StarwarsContext.Provider>
  );
};

export { StarwarsContext, StarwarsProvider };
