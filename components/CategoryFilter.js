import styled from "styled-components";
import { FiFilter } from "react-icons/fi";
import Select from "react-select";
import { typeCategories, selectFilterColorStyles } from "./../utils";
import { useState } from "react";

export default function CategoryFilter({ onChangeCategory }) {
  const iconStyles = { color: "white", fontSize: "1.2em", cursor: "pointer" };
  const [selectedOption, setSelectedOption] = useState(null);

  // const handleCategoryChange = (event) => {
  //   setSelectedCategory(event.target.value);
  // };
  return (
    <>
      <StyledFilter>
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={typeCategories}
          name="type"
          styles={selectFilterColorStyles}
        />

        <select
          className="home-filter"
          name="category-list"
          id="category-list"
          onChange={onChangeCategory}
          selected
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
    </>
  );
}

export const StyledFilter = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  width: fit-content;

  #category-list {
    color: white;
    background-color: rgba(77, 150, 239, 1);
    border-radius: 10px;
    width: 60px;
    height: 30px;
    border-color: white;
  }
  .type-list {
    background-color: rgba(77, 150, 239, 1);
  }
`;
