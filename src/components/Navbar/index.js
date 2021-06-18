import React, { useContext } from "react";
import styled from "styled-components";

import { StarwarsContext } from "../../hooks/StarwarsContext";

const Navbar = () => {
  const { setContent } = useContext(StarwarsContext);

  // console.log(content);
  return (
    <Container>
      <StyledH4>star wars details</StyledH4>
      <ButtonWrapper>
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
      </ButtonWrapper>
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

const StyledH4 = styled.h4`
  margin: 0;
`;

const ButtonWrapper = styled.div`
  margin: 0;
`;

const StyledButton = styled.button`
  border: 1px solid #ffe300;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  text-transform: uppercase;
  font-size: 0.8rem;
  margin-left: 1rem;

  &:hover {
    transition: 1s ease;
    background-color: #49505f;
  }
`;
