import { IoIosAdd } from "react-icons/io";
import styled from "styled-components";
import Link from "next/link";

export default function AddLocationButton({ openModal }) {
  const iconStyles = {
    color: "rgba(255, 255, 255, 1)",
    width: "34px",
    height: "34px",
    flexShrink: "0",
    cursor: "pointer",
  };

  return (
    <>
      {" "}
      <StyledButton>
        <button onClick={openModal}>
          <IoIosAdd style={iconStyles} />
        </button>
      </StyledButton>
    </>
  );
}

export const StyledButton = styled.div`
  display: flex;
  justify-content: center;
  width: 68px;
  height: 68px;
  flex-shrink: 0;
  border-radius: 68px;
  background: rgba(252, 252, 253, 0.7);
  box-shadow: 3px 7px 6px 2px rgba(0, 0, 0, 0.16);
  color: rgba(252, 252, 253, 0.7);
  /* font-size: 2em; */
  position: relative;
  margin-top: 85vh;
  margin-left: 80vw;
  /* margin-bottom: 50vh; */
`;
