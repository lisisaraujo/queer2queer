import React, { useState, useEffect, useMemo } from "react";

export default function CategoryFilter({ onChangeCategory }) {
  //   const [filteredLocations, setFilteredLocations] = useState(locations);
  //   const [selectedCategory, setSelectedCategory] = useState("");

  //   useEffect(() => {
  //     setFilteredLocations(locations);
  //   }, [locations]);

  //   const handleCategoryChange = (event) => {
  //     setSelectedCategory(event.target.value);
  //   };
  //   console.log(selectedCategory);

  //   const getFilteredList = () => {
  //     if (!selectedCategory) {
  //       return filteredLocations;
  //     }
  //     return filteredLocations.filter(
  //       (location) => location.type === selectedCategory
  //     );
  //   };

  //   const filteredList = useMemo(getFilteredList, [
  //     selectedCategory,
  //     filteredLocations,
  //   ]);

  //   console.log("Filtered---------------------", filteredList);

  return (
    <select name="category-list" id="category-list" onChange={onChangeCategory}>
      <option value="">All</option>
      <option value="Bar">Bar</option>
      <option value="Club">Club</option>
      <option value="Cruising">Cruising</option>
      <option value="Community-Center">Community-Center</option>
    </select>
  );
}
