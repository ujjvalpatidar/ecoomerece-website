import React, { useState } from 'react'
import { useFilterContext } from './FilterContext';
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";

const FilterSection = () => {
  const {
    filters: { text, category, company, color, price, minPrice, maxPrice }, all_products, updateFilterValue, clearFilters
} = useFilterContext();

const getUniqueData = (data, attr) => {
  let newVal = data.map((curElem) => {
    return curElem[attr];
  });
  if (attr === "colors") {
    // return (newVal = ["All", ...new Set([].concat(...newVal))]);
    newVal = newVal.flat();
  }

  return (newVal = ["all", ...new Set(newVal)]);
};
const categoryData = getUniqueData(all_products, "category");
const companyData = getUniqueData(all_products, "company");
const colorsData = getUniqueData(all_products, "colors");

const [openFilters, setopenFilters] = useState();

return (
<>
<div className='filter-menu-icon'>Filters<BiChevronLeft className={openFilters ? "filter-close-false" : "filter-close"}  onClick={() => setopenFilters(false)}/><BiChevronRight className={openFilters ? "filter-opn-false" : "filter-opn"} onClick={() => setopenFilters(true)}/></div>
  <div className={openFilters ? "FilterSection_main-active": "FilterSection_main"}>
  <form onSubmit={(e) => e.preventDefault()}>
          <input className="search-bar1"
            type="text"
            name="text"
            placeholder="Search"
            value={text}
            onChange={updateFilterValue}
          />
        </form>
        <div className="cat-main">
          <h3>Category</h3>
          <div className="cat-btn">
            {categoryData.map((curElem, index) => {
return   <button 
key={index}
name="category"
type="button"
className={category === curElem ? "active-btn" : "category_btn"}
value={curElem}
onClick={updateFilterValue}>
{curElem}
</button>
  })}
          </div>
          </div>
          <h3 className="com">Company</h3>
          <form action="#" className="iph">
          <select
            name="company"
            id="company"
            className="filter-company--select"
            onClick={updateFilterValue}>
            {companyData.map((curElem, index) => {
              return (
                <option key={index} value={curElem} name="company" className="opt">
                  {curElem}
                </option>
              );
            })}
          </select>
        </form>
        <div>
          <h3 className="com">Colors</h3>
          {colorsData.map((curColor, index) => {
            return (
              <button
              type="button"
key={index}
name="color"
value={curColor}
onClick={updateFilterValue}
style={{ backgroundColor: curColor }}
                className={color === curColor ? "btnStyle active" : "btnStyle"}
               >  {color === curColor ? "" : null}</button>
            )})};
        </div>
        <div className="rangeDive">
        <h3 style={{marginBottom:"13px"}}>Price</h3>
        <p>₹{price}</p>
        <input
        className="rangee"
          type="range"
          name="price"
          min={minPrice}
          max={maxPrice}
          value={price}
          onChange={updateFilterValue}
        />
        </div>
        <div className="clearq">
          <button onClick={clearFilters}>CLEAR FILTER</button>
        </div>
          </div>
</> 
);
};

export default FilterSection;