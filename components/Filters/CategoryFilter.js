import styled from "styled-components";

export default function CategoryFilter({ setSelectedCategory }) {
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <>
      {
        <StyledFilter>
          <select
            name="category-list"
            id="category-list"
            onChange={handleCategoryChange}
            selected
            className="block px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm w-52 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
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
  flex-direction: row;
  align-content: center;
  width: fit-content;
  height: fit-content;
    width: fit-content;
    border-color: transparent;
  } */
  .type-list {
    background-color: red;
  }
`;
