import React, { Component } from "react";
import { ProductConsumer } from "../../context";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";
import { BackToProducts } from "../componentsStyles";

export default class Cart extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { cart } = value;
          //   console.log(cart);
          if (!cart.length) {
            return (
              <React.Fragment>
                <h2
                  className="text-gradient"
                  style={{ fontSize: "3rem", marginBottom: "5rem" }}
                >
                  سلة التسوق
                </h2>
                <div className="text-center">
                  <h3 className="mb-5">لا يوجد أي سلعة في السلة حاليا</h3>
                  <Link to="/">
                    <BackToProducts>العودة للمنتجات</BackToProducts>
                  </Link>
                </div>
              </React.Fragment>
            );
          } else {
            return (
              <React.Fragment>
                <h2
                  className="text-gradient mb-4 "
                  style={{ fontSize: "3rem" }}
                >
                  سلة التسوق
                </h2>
                <div className="container-fluid text-center d-none d-lg-block">
                  <div className="row">
                    <div className="col-10 mx-auto col-lg-2">
                      <p>السلع</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                      <p>اسم السلعة</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                      <p>السعر</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                      <p>الكمية</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                      <p>إزالة من السلة</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                      <p>المجموع</p>
                    </div>
                  </div>
                </div>
                <div className="container-fluid">
                  {cart.map((item) => {
                    return <CartItem key={item.id} item={item} value={value} />;
                  })}
                </div>
                <CartTotal value={value} />
              </React.Fragment>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}
