function SortDropdown({ setSort }) {
    return (
      <select onChange={(e) => setSort(e.target.value)}>
        <option value="">Sort By</option>
        <option value="low">Price: Low to High</option>
        <option value="high">Price: High to Low</option>
      </select>
    );
  }
  
  export default SortDropdown;
  