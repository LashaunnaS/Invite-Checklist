import styled from "styled-components";

export const StyledHeader = styled.header`
  justify-self: center;
  align-self: center;

  font-family: "Gothic A1", sans-serif;
  font-size: 2em;
  font-weight: 700;
  text-align: center;
  color: #fff;

  box-shadow: 0px 8px 22px -3px #ffb1a7;

  grid-column: 1 / 4;
  grid-row: 1;

  @media (max-width: 368px) {
    font-size: 1.6em;
  }
`;
