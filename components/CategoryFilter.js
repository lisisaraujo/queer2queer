import styled from "styled-components";
import { FiFilter } from "react-icons/fi";
import Select from "react-select";
import { useState } from "react";
import { selectFilterColorStyles, typeCategories } from "../utils";
import { useRouter } from "next/router";

export default function CategoryFilter({ onChangeCategory }) {
  const iconStyles = { color: "white", fontSize: "1.2em", cursor: "pointer" };
  const router = useRouter();

  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <>
      {
        <StyledFilter>
          <select
            name="category-list"
            id="category-list"
            onChange={onChangeCategory}
            selected
            class="block px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm w-52 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            name="homeFilter"
          >
            <option defaultValue="Select Filter" disabled>
              Filter
            </option>
            <option value="">All</option>
            <option value="Bar">Bar</option>
            <option value="Club">Club</option>
            <option value="Cruising">Cruising</option>
            <option value="Community-Center">Community-Center</option>
            <option value="Other">Other</option>
          </select>
        </StyledFilter>
      }
    </>
  );
}

export const StyledFilter = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  width: fit-content;
  height: fit-content;

  #category-list {
    color: white;
    background-color: rgba(77, 150, 239, 1);
    border-radius: 10px;
    width: fit-content;
    border-color: transparent;
  }
  .type-list {
    background-color: rgba(77, 150, 239, 1);
  }
`;
