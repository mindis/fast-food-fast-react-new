import React from 'react';

export const CartSlider1 = () => (
  <div className="cart card-shadow text-center">
    <div className="right-nav close-button">
      <i className="fa fa-close" />
    </div>
    <br />
    <div className="container">
      <i className="fa fa-shopping-cart" />
      My Cart
    </div>
    <div className="card text-inverse">
      <span className="cart-count">6</span>
      {' '}
Items added
    </div>
    <div className="container">
      <a href="my-cart.html" className="btn btn-sm btn-green">
        View
      </a>
    </div>
  </div>
);

export const CartSlider2 = () => {};
