import React from "react";
import search from "../../public/search.png";
const filters = ["Created", "Activity", "Investment"];

const SearchFilter = (props) => {
  const filterElements = filters.map((x) => (
    <div key = {`checkbox-div-${x}`}>
      <label htmlFor={x} key = {`label-{x}`}> {x}</label>
      <input type="checkbox" id={x} name={x} value={x} key={`checkbox-${x}`} />
    </div>
  ));
  return (
    <div className="search-filter">
      <input type="text" placeholder="Search Stocks" className="searchInput"/>
      <div className="filters">{filterElements}</div>
    </div>
  );
};

export default SearchFilter;
