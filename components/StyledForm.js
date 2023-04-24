import styled from "styled-components";

export const EntryForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10%;
  border-radius: 20px;
  border: 2px solid black;
  box-shadow: black 0px 1px 3px;
`;

export const StyledLabel = styled.label`
  margin-top: 20px;
  padding-bottom: 10px;
  font-family: "Bodoni Moda", serif;
  text-transform: uppercase;
  font-size: 10pt;
`;

export const StyledInput = styled.input`
  border: none;
  border-bottom: 2px solid black;
  border-start-end-radius: 4px;
  border-start-start-radius: 4px;
  padding: 10px 10px;
  outline: none;

  background-color: rgba(0, 0, 0, 0.05);
  &:hover {
    border: 2px solid var(--first-color);
  }
`;

export const StyledSelect = styled.select`
  border: 1.5px solid black;
  border-radius: 10px;
  padding: 5px 10px;
  background-color: rgba(0, 0, 0, 0.05);
  outline: none;
  &:hover {
    border: 2px solid var(--first-color);
  }
`;

export const StyledTextarea = styled.textarea`
  border: 1.5px solid black;
  border-radius: 10px;
  padding: 5px 10px;
  background-color: rgba(0, 0, 0, 0.05);
  font-family: inherit;
  outline: none;
  &:hover {
    border: 2px solid var(--first-color);
  }
`;

export const StyledPrice = styled.p`
  padding: 10px;
  align-items: flex-end;
`;
