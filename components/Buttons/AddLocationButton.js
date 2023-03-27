import { IoIosAdd } from "react-icons/io";
import styled from "styled-components";
import Link from "next/link";

export default function AddLocationButton() {
  const iconStyles = {
    color: "white",
    fontSize: "2em",
    cursor: "pointer",
  };

  return (
    <>
      <StyledButton>
        <Link href="/addLocation">
          <IoIosAdd style={iconStyles} />
        </Link>
      </StyledButton>
    </>
  );
}

export const StyledButton = styled.button`
  border: none;
  background-color: rgba(77, 150, 239, 0.9);
  z-index: 1;
  display: flex;
  a:hover {
    background-color: #73aef4;
    color: #fdfbfc;
    border-radius: 50%;
  }
  font-size: 2em;
  position: relative;
  margin-top: 85vh;
  margin-left: 80vw;
  opacity: 0.9;
  border-radius: 50%;
  box-shadow: 0px 0px 18px 2px rgba(54, 54, 54, 0.75);
`;
