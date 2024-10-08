import React from "react";

const ProductItem = (props) => {
  const { prodItem } = props;
  return (
    <div className="card">
      <img src={prodItem.image} alt="..." />
      <div className="card-body">
        {/* <h3>{dataItem.name}</h3>
              <p>{dataItem.description}</p>
              <p>{dataItem.price}</p>
              <button className='btn btn-dark'>Buy now</button> */}
        <h3>{prodItem.name}</h3>
        <p>{prodItem.price}</p>
        <button className="btn btn-dark">Buy now</button>
      </div>
    </div>
  );
};

export default ProductItem;
