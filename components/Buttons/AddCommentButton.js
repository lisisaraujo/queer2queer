import { BiMessageSquareAdd } from "react-icons/bi";
import styled from "styled-components";
import Link from "next/link";

export default function AddCommentButton() {
  const iconStyles = { color: "white", fontSize: "1.2em", cursor: "pointer" };

  return (
    <>
      <StyledButton>
        <BiMessageSquareAdd style={iconStyles} />
      </StyledButton>
    </>
  );
}

export const StyledButton = styled.button`
  /* appearance: none; */
  border: none;
  background-color: transparent;
  padding: 0.5rem 1rem;
  display: flex;
  &:hover {
    cursor: pointer;
  }
  font-size: 2em;
  position: absolute;
  color: white;
  font-size: 2em;
`;
