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
  handleCategoryChange,
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
        {/* <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={typeCategories}
          name="type"
          styles={selectFilterColorStyles}
        /> */}
        {/* 
        <select
          className="home-filter"
          name="category-list"
          id="category-list"
          onChange={handleCategoryChange}
          selected
        >
          <option defaultValue="Select Filter" disabled>
            Filter
          </option>
          <option value="">Age</option>
          <option value="18-25">18-25</option>
          <option value="26-35">26-35</option>
          <option value="36-45">36-45</option>
          <option value="46-55">46-55</option>
          <option value="55+">55+</option>
        </select> */}

        <label htmlFor="age">Age: </label>
        <Select
          defaultValue={selectedAgeOption}
          onChange={setSelectedAgeOption}
          options={ageCategories}
          name="age"
          styles={colorStyles}
        />
        <label htmlFor="sexual-orientation">Sexual Orientation: </label>
        <Select
          defaultValue={selectedsexualOrientationOption}
          onChange={setSelectedsexualOrientationOption}
          options={sexualOrientationCategories}
          name="sexual_orientation"
          styles={colorStyles}
        />
        <label htmlFor="gender">Gender: </label>

        <Select
          defaultValue={selectedGenderOption}
          onChange={setSelectedGenderOption}
          options={genderCategories}
          name="gender"
          styles={colorStyles}
        />

        <label htmlFor="bipoc">BiPoc: </label>
        <Select
          defaultValue={selectedBipocOption}
          onChange={setSelectedBipocOption}
          options={bipocCategory}
          name="bipoc"
          styles={colorStyles}
        />
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

// import styled from "styled-components";
// import { FiFilter } from "react-icons/fi";
// import {
//   ageCategories,
//   sexualOrientationCategories,
//   genderCategories,
//   colorStyles,
// } from "./Comments/CommentForm";
// import { useRouter } from "next/router";
// import { useState } from "react";
// import Select from "react-select";

// export default function CommentFilter({ onChangeCategory, comments }) {
//   const iconStyles = { color: "white", fontSize: "1.2em", cursor: "pointer" };
//   const router = useRouter();
//   //   const comments = useSWR("/api/comments");
//   const [selectedOption, setSelectedOption] = useState(null);
//   const handleCategoryChange = (event) => {
//     setSelectedCategory(event.target.value);
//   };
//   return (
//     <>
//       <StyledFilter>
//         <label htmlFor="age">Age:</label>
//         <Select
//           defaultValue={selectedOption}
//           onChange={handleCategoryChange}
//           options={ageCategories}
//           name="age"
//           styles={colorStyles}
//         />
//         <label htmlFor="sexual-orientation">Sexual Orientation:</label>
//         <Select
//           defaultValue={selectedOption}
//           onChange={handleCategoryChange}
//           options={sexualOrientationCategories}
//           name="sexual_orientation"
//           styles={colorStyles}
//         />
//         <label htmlFor="gender">Gender:</label>

//         <Select
//           defaultValue={selectedOption}
//           onChange={handleCategoryChange}
//           options={genderCategories}
//           name="gender"
//           styles={colorStyles}
//         />
//         <checkbox className="checkbox">
//           {" "}
//           <label htmlFor="bipoc">BiPoc:</label>
//           <input type="checkbox" name="bipoc"></input>
//         </checkbox>
//       </StyledFilter>
//     </>
//   );
// }

// export const StyledFilter = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   align-content: center;
//   width: fit-content;

//   #category-list {
//     color: white;
//     background-color: rgba(77, 150, 239, 1);
//     border-radius: 10px;
//     width: 60px;
//     height: 30px;
//     border-color: white;
//   }
//   .type-list {
//     background-color: rgba(77, 150, 239, 1);
//   }
// `;
