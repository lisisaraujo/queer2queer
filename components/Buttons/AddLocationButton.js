import { MdOutlineAddLocationAlt } from "react-icons/md";
import styled from "styled-components";
import Link from "next/link";

export default function AddLocationButton() {
  const iconStyles = { color: "white", fontSize: "1.2em", cursor: "pointer" };

  return (
    <>
      <StyledButton>
        <Link href="/addLocation">
          <MdOutlineAddLocationAlt style={iconStyles} />
        </Link>
      </StyledButton>
    </>
  );
}

export const StyledButton = styled.button`
  /* appearance: none; */
  border: none;
  background-color: transparent;
  padding: 0.5rem 1rem;
  z-index: 1;
  display: flex;
  &:hover {
    cursor: pointer;
  }
  font-size: 2em;
  position: absolute;
`;
