import { IoColorFilterOutline } from "react-icons/io5";
import { useRouter } from "next/router";
import styled from "styled-components";

export default function FilterButton() {
  const router = useRouter();
  return (
    <>
      <a
        href="#"
        className="icon"
        onClick={() => router.push("/filterLocationForm")}
      >
        <IoColorFilterOutline />
      </a>
    </>
  );
}

// export const StyledButton = styled.button`
//   appearance: none;
//   border: none;
//   background: var(--color-water-10);
//   font-size: larger;
//   padding: 0.5rem 1rem;
//   box-shadow: 0px 1px 5px -2px var(--color-granite);
//   &:hover {
//     cursor: pointer;
//   }
//   z-index: 2;
//   display: flex;
// `;
