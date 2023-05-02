import styled from "styled-components";
import Select from "react-select";
import {
  genderCategories,
  sexualOrientationCategories,
  colorStyles,
  ageCategories,
  bipocCategory,
} from "../utils";

export default function CommentFilter({
  setSelectedAgeOption,
  selectedAgeOption,
  setSelectedGenderOption,
  selectedGenderOption,
  setSelectedsexualOrientationOption,
  selectedsexualOrientationOption,
  selectedBipocOption,
  setSelectedBipocOption,
  getFilteredList,
  closeModal,
  loadComments,
}) {
  function handleApplyFilter() {
    closeModal();
    loadComments();
    getFilteredList();
    console.log("filters applied");
  }

  const removeFilters = () => {
    setSelectedAgeOption("");
    setSelectedGenderOption("");
    setSelectedsexualOrientationOption("");
    setSelectedBipocOption("");
    closeModal();
  };

  return (
    <>
      <StyledFilter>
        <div className="select-box">
          <label htmlFor="age">Age </label>{" "}
          <Select
            defaultValue={selectedAgeOption}
            onChange={setSelectedAgeOption}
            options={ageCategories}
            name="age"
            styles={colorStyles}
          />
        </div>
        <div className="select-box">
          <label htmlFor="sexual-orientation">Sexual Orientation </label>{" "}
          <Select
            defaultValue={selectedsexualOrientationOption}
            onChange={setSelectedsexualOrientationOption}
            options={sexualOrientationCategories}
            name="sexual_orientation"
            styles={colorStyles}
          />
        </div>
        <div className="select-box">
          {" "}
          <label htmlFor="gender">Gender </label>
          <Select
            defaultValue={selectedGenderOption}
            onChange={setSelectedGenderOption}
            options={genderCategories}
            name="gender"
            styles={colorStyles}
          />
        </div>

        <div className="select-box">
          {" "}
          <label htmlFor="bipoc">BiPoc </label>
          <Select
            defaultValue={selectedBipocOption}
            onChange={setSelectedBipocOption}
            options={bipocCategory}
            name="bipoc"
            styles={colorStyles}
          />
        </div>
        <button className="apply-filter-btn" onClick={handleApplyFilter}>
          Apply Filter
        </button>
        <div className="clear-filter">
          {" "}
          <button onClick={removeFilters}>Remove Filters</button>
        </div>
      </StyledFilter>
    </>
  );
}

export const StyledFilter = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  width: fit-content;
  color: white;
  justify-content: space-evenly;
  .select-box {
    margin: 0px 15px;
  }

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
