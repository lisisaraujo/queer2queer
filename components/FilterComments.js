// import { useState } from "react";
// import {
//   ageCategories,
//   genderCategories,
//   sexualOrientationCategories,
//   bipocCategory,
// } from "./../utils";
// import CommentCard from "./Comments/CommentCard";
// import styled from "styled-components";
// import { useRouter } from "next/router";

// export default function FilterComment({ comments }) {
//   const router = useRouter();
//   const [filteredComments, setFilteredComments] = useState(comments);
//   const [query, setQuery] = useState("");
//   const [filterParam, setFilterParam] = useState(["All"]);
//   const [searchParam] = useState([
//     "age",
//     "gender",
//     "sexual_orientation",
//     "bipoc",
//   ]);
//   console.log(comments);
//   filteredComments = comments.filter((comment) => {
//     if (
//       comment.age === filterParam ||
//       comment.gender === filterParam ||
//       comment.sexual_orientation === filterParam ||
//       comment.bipoc === filterParam
//     ) {
//       return searchParam.some((newComment) => {
//         return (
//           comment[newComment]
//             .toString()
//             .toLowerCase()
//             .indexOf(query.toLowerCase()) > -1
//         );
//       });
//     } else if (filterParam == "All") {
//       return searchParam.some((newComment) => {
//         return (
//           comment[newComment]
//             .toString()
//             .toLowerCase()
//             .indexOf(query.toLowerCase()) > -1
//         );
//       });
//     }
//   });
//   // like so___________________________
//   // : [];

//   return (
//     <>
//       <StyledBox>
//         <StyledInput
//           type="search"
//           placeholder="Search for..."
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//         />
//         <StyledI></StyledI>
//       </StyledBox>

//       <FilterWrapper>
//         <DropdownWrapper>
//           <p>sort by age</p>
//           <Select
//             defaultValue="age"
//             onChange={(e) => {
//               setFilterParam(e.target.value);
//             }}
//           >
//             <option defaultValue="all">all</option>
//             {ageCategories &&
//               ageCategories.map((age) => (
//                 <option key={age} value={age}>
//                   {age}
//                 </option>
//               ))}
//           </Select>
//         </DropdownWrapper>
//         <DropdownWrapper>
//           <p>sort by gender</p>
//           <Select className="w-full" defaultValue="gender">
//             <option value="all">all</option>
//             {genderCategories &&
//               genderCategories.map((gender) => (
//                 <option key={gender} value={gender}>
//                   {gender}
//                 </option>
//               ))}
//           </Select>
//         </DropdownWrapper>
//         <DropdownWrapper>
//           <p>sort by sexual orientation</p>
//           <Select className="w-full" defaultValue="sexual-orientation">
//             <option value="all">all</option>
//             {sexualOrientationCategories &&
//               sexualOrientationCategories.map((sexual_orientation) => (
//                 <option key={sexual_orientation} value={sexual_orientation}>
//                   {sexual_orientation}
//                 </option>
//               ))}
//           </Select>
//         </DropdownWrapper>
//         <DropdownWrapper>
//           <p>sort by bipoc</p>
//           <Select className="w-full" defaultValue="bipoc">
//             <option value="all">all</option>
//             {bipocCategory &&
//               bipocCategory.map((bipoc) => (
//                 <option key={bipoc} value={bipoc}>
//                   {bipoc}
//                 </option>
//               ))}
//           </Select>
//         </DropdownWrapper>
//       </FilterWrapper>

//       <CardWrapper>
//         {filteredComments.length <= 0 ? (
//           <div>No comments found</div>
//         ) : (
//           filteredComments.map(() => <CommentCard />)
//         )}
//       </CardWrapper>
//     </>
//   );
// }

// const FilterWrapper = styled.div`
//   display: flex;
//   padding-bottom: 10%;
//   flex-direction: column;
//   justify-content: space-between;
// `;

// const DropdownWrapper = styled.div`
//   width: 100%;
// `;
// const StyledBox = styled.div``;

// const StyledInput = styled.input`
//   width: 50%;
//   padding: 8px;
//   background-color: #ffd52d;
//   height: 40px;
//   background: none;
//   border: 2px solid black;
//   border-radius: 10px;
//   box-sizing: border-box;
//   outline: none;
//   transition: 0.5s;
//   &:hover {
//     width: 100%;
//     border: 2px solid var(--first-color);
//     box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
//   }
// `;

// const StyledI = styled.i`
//   position: absolute;
//   transform: translate(-50%, -50%);
//   font-size: 11pt;
//   color: #ffd52d;
//   transition: 0.2s;
//   &:hover {
//     opacity: 0;
//     z-index: -1;
//   }
// `;

// const Select = styled.select`
//   width: 100%;
//   border: none;
//   border-bottom: 2px solid black;
//   padding: 5px 10px;
//   background-color: rgba(0, 0, 0, 0.05);
// `;
