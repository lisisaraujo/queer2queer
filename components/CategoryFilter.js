import React, { useState, useEffect, useMemo } from "react";

export default function CategoryFilter({ locations, setFilter }) {
  const [filteredLocations, setFilteredLocations] = useState(locations);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    setFilteredLocations(locations);
  }, [locations]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setFilter(event.target.value);
  };

  const getFilteredList = () => {
    if (!selectedCategory) {
      return filteredLocations;
    }
    return filteredLocations.filter(
      (location) => location.type === selectedCategory
    );
  };

  let filteredList = useMemo(getFilteredList, [
    selectedCategory,
    filteredLocations,
  ]);

  console.log("Filtered---------------------", filteredList);

  return (
    <select
      name="category-list"
      id="category-list"
      onChange={handleCategoryChange}
    >
      <option value="">All</option>
      <option value="Bar">Bars</option>
      <option value="Club">Clubs</option>
      <option value="Cruising">Cruising</option>
      <option value="Community-Center">Community-Center</option>
    </select>
  );
}
