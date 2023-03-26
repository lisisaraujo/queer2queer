import { IoIosAddCircle } from "react-icons/io";
import styled from "styled-components";

export default function AddButton() {
  return (
    <>
      <button>
        <IoIosAddCircle />
      </button>
    </>
  );
}

export const StyledButton = styled.button`
  appearance: none;
  border: none;
  background: var(--color-water-10);
  font-size: larger;
  padding: 0.5rem 1rem;
  /* box-shadow: 0px 1px 5px -2px var(--color-granite); */
  &:hover {
    cursor: pointer;
  }
  z-index: 2;
  display: flex;
  box-shadow: 0px 0px 18px 2px rgba(54, 54, 54, 0.75);
`;
