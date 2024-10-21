import React, { useState } from "react";
import { pizzaCart } from "../assets/pizzas";

function Cart() {
  const [cart, setCart] = useState(pizzaCart);

  const incrementaCantidad = (id) => {
    setCart(
      cart.map((pizza) =>
        pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
      )
    );
  };
  const disminuyeCantidad = (id) => {
    setCart(
      cart
        .map((pizza) =>
          pizza.id === id ? { ...pizza, count: pizza.count - 1 } : pizza
        )
        .filter(pizza => pizza.count > 0)
    );
  };

  
  const totalCompra = cart.reduce(
    (acc, pizza) => acc + pizza.price * pizza.count,
    0
  );

  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      {cart.map((pizza) => (
        <div key={pizza.id} className="cart-pizza">
          <img src={pizza.img} alt={pizza.name} width="100" />
          <div>
            <h3>{pizza.name}</h3>
            <p>Precio: ${pizza.price}</p>
            <p>Cantidad: {pizza.count}</p>
            <button onClick={() => incrementaCantidad(pizza.id)}>+</button>
            <button onClick={() => disminuyeCantidad(pizza.id)}>-</button>
          </div>
        </div>
      ))}
      <h3>Total: ${totalCompra}</h3>
    </div>
  );
}

export default Cart;
