import React from "react";
import { CartTotals, ClearCartBtn } from "../componentsStyles";

export default function CartTotal({ value }) {
  const { cartSubtotal, cartTax, cartTotal, clearCart } = value;
  return (
    <React.Fragment>
      <ClearCartBtn onClick={() => clearCart()}>فرغ السلة</ClearCartBtn>
      <CartTotals>
        <h5>
          المجموع قبل الضريبة:
          <span className="calcs">{cartSubtotal}</span>
        </h5>
        <h5>
          الضريبة:
          <span className="calcs">{cartTax}</span>
        </h5>
        <h5>
          المجموع الكلي:
          <span className="calcs">{cartTotal}</span>
        </h5>
      </CartTotals>
    </React.Fragment>
  );
}
