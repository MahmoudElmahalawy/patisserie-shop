import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { ProductConsumer } from "../context";
import { ProductCard, CartIcon } from "./componentsStyles";

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductCard className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <ProductConsumer>
            {(value) => (
              <div
                className="img-container"
                onClick={() => {
                  value.handleDetails(id);
                }}
              >
                <Link to="/details">
                  <img
                    src={img}
                    alt="product"
                    className="card-img-top embed-responsive-item"
                  />
                </Link>
                <button
                  className="cart-btn"
                  disabled={inCart}
                  onClick={() => {
                    value.addToCart(id);
                    value.openModal(id);
                  }}
                >
                  {inCart ? (
                    <p className="mb-0" disabled>
                      توجه للسلة لتحديد الكمية
                    </p>
                  ) : (
                    <CartIcon />
                  )}
                </button>
              </div>
            )}
          </ProductConsumer>
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">{title}</p>
            <h5 className="text-bright mb-0">
              {price}
              <span className="ms-1">جنيه</span>
            </h5>
          </div>
        </div>
      </ProductCard>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    info: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};
