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
    <div style={container}>

      {/* NAVBAR */}
      <div style={navbar}>
        <h2>Keranjang</h2>
        <button onClick={() => navigate("/home")} style={navBtn}>
          ← Kembali
        </button>
      </div>

      {/* CONTENT */}
      <div style={content}>

        {cart.length === 0 ? (
          <div style={empty}>
            <h3>Keranjang Kosong 🛒</h3>
            <p>Yuk belanja dulu!</p>
            <button onClick={() => navigate("/home")} style={btnShop}>
              Belanja Sekarang
            </button>
          </div>
        ) : (
          <>
            {/* LIST PRODUK */}
            {cart.map((item) => (
              <div key={item.id} style={card}>
                <img src={item.image} style={img} />

                <div style={{ flex: 1 }}>
                  <h4>{item.name}</h4>
                  <p>Rp {item.price}</p>
                </div>

                <button
                  onClick={() => handleDelete(item.id)}
                  style={deleteBtn}
                >
                  Hapus
                </button>
              </div>
            ))}

            {/* TOTAL */}
            <div style={summary}>
              <h3>Total: Rp {total}</h3>

              <button onClick={handleCheckout} style={checkoutBtn}>
                Checkout
              </button>
            </div>
          </>
        )}

      </div>

    </div>
  );
}

/* STYLE */

const container = {
  minHeight: "100vh",
  background: "#f5f7fb"
};

const navbar = {
  background: "linear-gradient(135deg,#6366f1,#3b82f6)",
  color: "#fff",
  padding: "15px 25px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
};

const navBtn = {
  padding: "8px 15px",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer"
};

const content = {
  padding: "20px"
};

const card = {
  display: "flex",
  alignItems: "center",
  gap: "15px",
  background: "#fff",
  padding: "15px",
  borderRadius: "15px",
  marginBottom: "15px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.05)"
};

const img = {
  width: "80px",
  borderRadius: "10px"
};

const deleteBtn = {
  background: "#ef4444",
  color: "#fff",
  border: "none",
  padding: "8px 12px",
  borderRadius: "8px",
  cursor: "pointer"
};

const summary = {
  marginTop: "20px",
  padding: "20px",
  background: "#fff",
  borderRadius: "15px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
};

const checkoutBtn = {
  padding: "10px 20px",
  borderRadius: "10px",
  border: "none",
  background: "linear-gradient(135deg,#6366f1,#3b82f6)",
  color: "#fff",
  cursor: "pointer"
};

const empty = {
  textAlign: "center",
  marginTop: "80px"
};

const btnShop = {
  marginTop: "15px",
  padding: "10px 20px",
  borderRadius: "10px",
  border: "none",
  background: "linear-gradient(135deg,#6366f1,#3b82f6)",
  color: "#fff",
  cursor: "pointer"
};