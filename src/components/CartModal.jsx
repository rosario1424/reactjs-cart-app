import React from "react";

export default function CartModal({ cart, removeFromCart, closeCart }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Your Cart 🛒</h2>
        {cart.length === 0 ? (
          <p>No items in the cart</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />
              <p>{item.title}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))
        )}
        <button className="close-btn" onClick={closeCart}>Close</button>
      </div>
    </div>
  );
}