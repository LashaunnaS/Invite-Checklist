import React from "react";
import "../../styles.css";

import {
  StyledContainer,
  StyledInput,
  StyledLabel,
  StyledSpan,
  StyledForm
} from "./styles.js";

const Checklist = ({ namesList, handleChecked }) => {
  return (
    <StyledForm>
      {namesList.map(user => {
        const { checked, id, name } = user;
        return (
          <section id="first" className="section" key={id}>
            <StyledContainer className="container">
              <StyledLabel htmlFor={id}>
                <StyledInput
                  className={name}
                  id={id}
                  type="checkbox"
                  value={name}
                  checked={checked}
                  onChange={() => handleChecked(checked, id)}
                />
                <StyledSpan checked={checked}>{name}</StyledSpan>
              </StyledLabel>
            </StyledContainer>
          </section>
        );
      })}
    </StyledForm>
  );
};

export default Checklist;
