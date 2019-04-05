import styled from "styled-components";

export const StyledForm = styled.form`
  justify-self: center;
  align-self: center;
  margin-left: 2em;
  grid-column: 2 / 3;
  grid-row: 2;

  @media (max-width: 368px) {
    grid-column: 1 / 4;
  }
`;

export const StyledContainer = styled.div`
  padding-bottom: 1em;
`;

export const StyledInput = styled.input`
  display: none;
`;

export const StyledLabel = styled.label`
  position: relative;
  color: #fff;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 1.5em;

  @media (max-width: 368px) {
    font-size: 1.4em;
  }
`;

export const StyledSpan = styled.span`
 background: ${props => (props.checked ? "#7292c7" : "")};
 
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  &::before {
    left: -32px;
    width: 25px;
    height: 25px;
    background-color: #e9f5f0;
    border-radius: 2px;
  }
  &::after {
    left: -33px;
    width: 17px;
    height: 30px;
    content: "${props => (props.checked ? ico : "")}";
    font-family: "FontAwesome";
  }
  &:hover {
    cursor: pointer;
    box-shadow: 0 1px 8px 0 #00ffab;
  }
`;

const ico = () => {
  let randomIcon = [
    // "\f00c",
    // "\f25b",
    // "\f164",
    // "\f0f3",
    // "\f521",
    // "\f6de",
    "✨",
    "👍🏾",
    "⚡️",
    "❗️",
    "👌🏾",
    "🔥",
    "🌟"
  ];

  let randomValue = randomIcon[Math.floor(Math.random() * randomIcon.length)];
  return randomValue;
};
