import React from "react";
import { connect } from 'react-redux';

import CartItem from '../cart-item/cart-item.component';
import CutomerButton from "../custom-button/custom-button.component";
import { selectCartItems } from "../../redux/cart/card.selector";

import "./cart-dropdown.styles.scss";


const CartDropdown = ({cartItems}) => (
  <div className="cart-dropdown">
    <div className="cart-items">
        {
            cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} /> )
        }
    </div>
      <CutomerButton>GO TO CHECKOUT</CutomerButton>
  </div>
);

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
})
export default connect(mapStateToProps) (CartDropdown);