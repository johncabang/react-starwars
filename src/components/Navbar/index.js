import React, { useContext } from "react";
import styled from "styled-components";

import { StarwarsContext } from "../../hooks/StarwarsContext";

const Navbar = () => {
  const { content, setContent } = useContext(StarwarsContext);

  console.log(content);
  return (
    <div>
      <StyledButton
        onClick={() => {
          setContent("planets");
        }}
      >
        Planets
      </StyledButton>
      <StyledButton
        onClick={() => {
          setContent("people");
        }}
      >
        People
      </StyledButton>
    </div>
  );
};

export default Navbar;

const StyledButton = styled.button`
  border: 1px solid #ffe300;
  cursor: pointer;
  padding: 1rem 2rem;
  border-radius: 25px;
  text-transform: uppercase;

  &:hover {
    transition: 1s ease;
    background-color: #49505f;
  }
`;
