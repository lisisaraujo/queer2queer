import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";
import styled from "styled-components";

export default function ReturnButton() {
  const iconStyles = {
    color: "black",
    fontSize: "2em",
    cursor: "pointer",
  };
  return (
    <StyledButton>
      <Link href="/">
        <IoIosArrowRoundBack style={iconStyles} />
      </Link>
    </StyledButton>
  );
}

export const StyledButton = styled.button`
  background-color: transparent;
  border: none;
`;
