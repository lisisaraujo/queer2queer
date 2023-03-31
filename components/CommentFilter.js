import styled from "styled-components";
import { FiFilter } from "react-icons/fi";
import Select from "react-select";
import { useState } from "react";
import {
  selectFilterColorStyles,
  genderCategories,
  sexualOrientationCategories,
  colorStyles,
  ageCategories,
  typeCategories,
  bipocCategory,
} from "../utils";
import { useRouter } from "next/router";

export default function CommentFilter({
  setSelectedAgeOption,
  selectedAgeOption,
  setSelectedGenderOption,
  selectedGenderOption,
  setSelectedsexualOrientationOption,
  selectedsexualOrientationOption,
  selectedBipocOption,
  setSelectedBipocOption,
}) {
  const iconStyles = { color: "white", fontSize: "1.2em", cursor: "pointer" };
  const router = useRouter();

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
