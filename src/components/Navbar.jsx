import React from "react";

export default function Navbar({ cartCount, openCart }) {
  return (
    <nav className="navbar">
      <h2>🛍️ Fake Store</h2>
      <button onClick={openCart}>
        Cart ({cartCount})
      </button>
    </nav>
  );
}