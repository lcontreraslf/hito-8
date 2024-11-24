import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";

function Cart() {
  const { cart, incrementaCantidad, disminuyeCantidad, eliminarDelCarrito, totalCompra } = useCart();
  const { token } = useUser();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);

  const handleCheckout = async () => {
    if (cart.length === 0) {
      setMessage('Tu carrito está vacío.');
      setError(true);
      return;
    }

    setLoading(true);
    setMessage('');
    setError(false);

    try {
      const response = await fetch("http://localhost:5000/api/checkouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`, 
        },
        body: JSON.stringify({ items: cart, total: totalCompra }),
      });

      if (!response.ok) {
        throw new Error("Error al procesar el pago");
      }

      const data = await response.json();
      setMessage('Compra realizada con éxito. ¡Gracias por tu compra!');
      setError(false);
      
    } catch (err) {
      setMessage(err.message || "Hubo un problema al procesar tu compra.");
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="cart text-center p-4" style={{ maxWidth: "600px", width: "100%" }}>
        <h2>Carrito de Compras</h2>
        {cart.length === 0 ? (
          <p>Tu carrito está vacío.</p>
        ) : (
          cart.map((pizza) => (
            <div key={pizza.id} className="cart-pizza d-flex align-items-center mb-3 p-2 border rounded">
              <img src={pizza.img} alt={pizza.name} width="100" className="me-3" />
              <div>
                <h3>{pizza.name}</h3>
                <p>Precio: ${pizza.price}</p>
                <p>Cantidad: {pizza.count}</p>
                <button onClick={() => incrementaCantidad(pizza.id)} className="btn btn-primary me-2">+</button>
                <button onClick={() => disminuyeCantidad(pizza.id)} className="btn btn-secondary me-2">-</button>
                <button onClick={() => eliminarDelCarrito(pizza.id)} className="btn btn-danger">Eliminar</button>
              </div>
            </div>
          ))
        )}
        <h3>Total: ${totalCompra.toLocaleString()}</h3>

        {message && (
          <div className={`mt-3 text-center ${error ? 'text-danger' : 'text-success'}`}>
            {message}
          </div>
        )}

        <button 
          className="btn btn-success mt-3" 
          disabled={!token || loading} 
          onClick={handleCheckout}
        >
          {loading ? "Procesando..." : (token ? "Pagar" : "Inicia sesión para pagar")}
        </button>
      </div>
    </div>
  );
}

export default Cart;
