import React from "react";
import { NavLink } from "react-router-dom";

const Product = (curElem) => {
  const { id, name, image, price, category } = curElem;
  return (
    <NavLink to={`/singleproduct/${id}`} className="nacv">
      <div className="card">
        <figure>
          <img src={image} alt={name} />
       <figcaption  className="caption" >{category}</figcaption>
        </figure>
        <div className="card-data">
          <div className="card-data-flex">
            <h5 className="data-list-text" >{name}</h5>
            <p className="card-data--price">Rs.{price}</p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Product;