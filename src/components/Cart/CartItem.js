import React from "react";
import { TrashIcon } from "../componentsStyles";

export default function CartItem({ item, value }) {
  const { id, title, img, price, total, count } = item;
  const { incrementCount, decrementCount, removeItem } = value;

  return (
    <div className="row cart-item d-flex text-center mt-lg-3">
      <div className="col-10 mx-auto col-lg-2 mt-2 mt-lg-0">
        <img
          src={img}
          className="img-fluid"
          alt="Product in cart"
          style={{ width: "5rem", height: "5rem", objectFit: "cover" }}
        />
      </div>
      <div className="col-10 mx-auto align-self-center col-lg-2">
        <span className="d-lg-none">السلعة: </span>
        {title}
      </div>
      <div className="col-10 mx-auto align-self-center col-lg-2">
        <span className="d-lg-none">السعر </span>
        {price}
      </div>
      <div className="col-10 mx-auto align-self-center col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <span
            className="btn btn-black mx-1"
            onClick={() => {
              decrementCount(id);
            }}
          >
            -
          </span>
          <span className="px-2 mx-1" style={{ border: "0.1rem solid black" }}>
            {count}
          </span>
          <span
            className="btn btn-black mx-1"
            onClick={() => {
              incrementCount(id);
            }}
          >
            +
          </span>
        </div>
      </div>
      <div className="col-10 mx-auto align-self-center col-lg-2">
        <div className="btn-remove" onClick={() => removeItem(id)}>
          <TrashIcon />
        </div>
      </div>
      <div className="col-10 mx-auto align-self-center col-lg-2 mb-2 mb-lg-0">
        <span className="d-lg-none">المجموع للسلعة: </span>
        <strong>{total} جنيه</strong>
      </div>
    </div>
  );
}
