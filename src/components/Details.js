import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import {
  ProductInfo,
  BackToProducts,
  AddBtn,
  CartIcon,
} from "./componentsStyles";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { id, img, info, price, title, inCart } = value.detailProduct;
          return (
            <div className="container">
              <div className="row">
                <div className="col-10 mx-auto text-center text-title my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-10 mx-auto col-md-5 my-3">
                  <img src={img} alt="product" className="img-fluid" />
                </div>
                <div className="col-10 mx-auto col-md-5 my-3">
                  <h2 className="text-gradient pt-0">{title}</h2>
                  <h4 className="text-center text-muted my-4">
                    <strong>
                      {price}
                      <span> جنيه</span>
                    </strong>
                  </h4>
                  <ProductInfo>{info}</ProductInfo>
                  <div className="row text-center mt-5">
                    <div className="col-6">
                      <Link to="/">
                        <BackToProducts>العودة للمنتجات</BackToProducts>
                      </Link>
                    </div>
                    <div className="col-6">
                      <AddBtn
                        disabled={inCart}
                        onClick={() => {
                          value.addToCart(id);
                          value.openModal(id);
                        }}
                      >
                        {inCart ? "توجه للسلة " : "اضافة للسلة "}
                        <CartIcon />
                      </AddBtn>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
