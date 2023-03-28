import { BiMessageSquareAdd } from "react-icons/bi";
import styled from "styled-components";
import Link from "next/link";

export default function AddCommentButton({ handleClick }) {
  const iconStyles = { color: "black", fontSize: "2.5em", cursor: "pointer" };

  return (
    <>
      <StyledButton>
        <BiMessageSquareAdd style={iconStyles} />
      </StyledButton>
    </>
  );
}

export const StyledButton = styled.button`
  border: none;
  background-color: transparent;
  &:hover {
    cursor: pointer;
  }
  /* margin-left: 80%;
  margin-bottom: 80%; */
  position: relative;
`;
