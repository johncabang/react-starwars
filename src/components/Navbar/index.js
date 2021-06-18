import React, { useContext } from "react";
import styled from "styled-components";

import { StarwarsContext } from "../../hooks/StarwarsContext";

const Navbar = () => {
  const { content, setContent } = useContext(StarwarsContext);

  console.log(content);
  return (
    <Container>
      <h3 style={{ margin: 0 }}>star wars</h3>
      <div style={{ margin: 0 }}>
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
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 5rem;
`;

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
