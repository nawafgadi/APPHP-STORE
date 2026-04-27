import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(data);
  }, []);

  const handleDelete = (id) => {
    const updated = cart.filter((item) => item.id !== id);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const total = cart.reduce((sum, item) => sum + Number(item.price), 0);

  const handleCheckout = () => {
    navigate("/payment", { state: { cart, total } });
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Keranjang</h2>

      {cart.length === 0 && <p>Keranjang kosong</p>}

      {cart.map((item) => (
        <div key={item.id} style={{
          display: "flex",
          gap: "15px",
          marginBottom: "15px",
          background: "#fff",
          padding: "10px",
          borderRadius: "10px"
        }}>
          <img src={item.image} style={{ width: "80px" }} />
          <div>
            <p>{item.name}</p>
            <p>Rp {item.price}</p>
            <button onClick={() => handleDelete(item.id)}>Hapus</button>
          </div>
        </div>
      ))}

      <h3>Total: Rp {total}</h3>

      {cart.length > 0 && (
        <button onClick={handleCheckout}>
          Checkout
        </button>
      )}
    </div>
  );
}