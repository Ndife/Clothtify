import React from "react";

import CutomerButton from "../custom-button/custom-button.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items">
      <CutomerButton>GO TO CHECKOUT</CutomerButton>
    </div>
  </div>
);


export default CartDropdown;