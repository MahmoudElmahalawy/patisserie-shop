import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import {
  ModalWindow,
  BackToProducts,
  AddBtn,
  CartIcon,
} from "./componentsStyles";

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { modalIsOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;
          if (!modalIsOpen) {
            return null;
          } else {
            return (
              <ModalWindow>
                <div className="container">
                  <div className="row">
                    <div className="modal-container col-8 mx-auto col-md-6 col-lg-4 text-center py-3">
                      <h5>
                        تم اضافة{" "}
                        <span className="text-gradient modal-product">
                          {title}
                        </span>{" "}
                        الى السلة
                      </h5>
                      <img
                        src={img}
                        alt="product added to cart"
                        className="modal-img"
                      />
                      <h5 className="text-muted">السعر {price}</h5>
                      <Link to="#">
                        <BackToProducts
                          inModal
                          className="my-3"
                          onClick={() => {
                            closeModal();
                          }}
                        >
                          متابعة التسوق
                        </BackToProducts>
                      </Link>
                      <Link to="/cart">
                        <AddBtn
                          onClick={() => {
                            closeModal();
                          }}
                        >
                          الذهاب للسلة <CartIcon />
                        </AddBtn>
                      </Link>
                    </div>
                  </div>
                </div>
              </ModalWindow>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}
