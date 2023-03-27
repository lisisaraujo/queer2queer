// import React, { createContext, useState, useEffect, useMemo } from "react";

// export const CategoryFilterContext = createContext();

// const CategoryFilterContextProvider = (props) => {
//   const [filteredLocations, setFilteredLocations] = useState(locations);
//   const [selectedCategory, setSelectedCategory] = useState("");

//   useEffect(() => {
//     setFilteredLocations(locations);
//   }, [locations]);

//   const handleChange = (event) => {
//     const searchResults = locations.filter((filteredLocations) =>
//       filteredLocations.type.toLowerCase().includes(event.target.value)
//     );
//     setFilteredLocations(searchResults);
//   };

//   const handleCategoryChange = (event) =>
//     setSelectedCategory(event.target.value);

//   const getFilteredList = () => {
//     if (!selectedCategory) {
//       return filteredLocations;
//     }
//     return filteredLocations.filter(
//       (location) => location.type === selectedCategory
//     );
//   };

//   let filteredList = useMemo(getFilteredList, [
//     selectedCategory,
//     filteredLocations,
//   ]);

//   return (
//     <CategoryFilterContext.Provider
//       value={{
//         filteredLocations,
//         selectedCategory,
//         handleChange,
//         handleCategoryChange,
//         getFilteredList,
//         filteredList,
//       }}
//     >
//       {props.children}
//     </CategoryFilterContext.Provider>
//   );
// };

// export default CategoryFilterContextProvider;
