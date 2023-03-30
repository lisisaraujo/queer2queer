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
