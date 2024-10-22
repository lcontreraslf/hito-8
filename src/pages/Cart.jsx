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
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="cart text-center p-4" style={{ maxWidth: "600px", width: "100%" }}>
        <h2>Carrito de Compras</h2>
        {cart.map((pizza) => (
          <div key={pizza.id} className="cart-pizza d-flex align-items-center mb-3 p-2 border rounded">
            <img src={pizza.img} alt={pizza.name} width="100" className="me-3" />
            <div>
              <h3>{pizza.name}</h3>
              <p>Precio: ${pizza.price}</p>
              <p>Cantidad: {pizza.count}</p>
              <button onClick={() => incrementaCantidad(pizza.id)} className="btn btn-primary me-2">+</button>
              <button onClick={() => disminuyeCantidad(pizza.id)} className="btn btn-secondary">-</button>
            </div>
          </div>
        ))}
        <h3>Total: ${totalCompra.toLocaleString()}</h3>
      </div>
    </div>
  );
}

export default Cart;
