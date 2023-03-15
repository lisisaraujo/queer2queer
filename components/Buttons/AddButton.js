import { IoIosAddCircle } from "react-icons/io";
import { useRouter } from "next/router";
import styled from "styled-components";

export default function AddButton() {
  const router = useRouter();
  return (
    <>
      <button onClick={() => router.push("/addLocationForm")}>
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
  box-shadow: 0px 1px 5px -2px var(--color-granite);
  &:hover {
    cursor: pointer;
  }
  z-index: 2;
  display: flex;
`;
