export default function CategoryFilter({ onChangeCategory }) {
  return (
    <select
      name="category-list"
      id="category-list"
      onChange={onChangeCategory}
      selected
    >
      <option defaultValue="Select Filter" disabled>
        Select Filter
      </option>
      <option value="">All</option>
      <option value="Bar">Bar</option>
      <option value="Club">Club</option>
      <option value="Cruising">Cruising</option>
      <option value="Community-Center">Community-Center</option>
      <option value="Other">Other</option>
    </select>
  );
}
