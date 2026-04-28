import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  // DATA PRODUK (sementara)
  const products = [
    {
      id: 1,
      name: "iPhone 13",
      price: 12000000,
      image: "https://via.placeholder.com/200"
    },
    {
      id: 2,
      name: "Samsung S22",
      price: 10000000,
      image: "https://via.placeholder.com/200"
    },
    {
      id: 3,
      name: "Xiaomi 12",
      price: 7000000,
      image: "https://via.placeholder.com/200"
    }
  ];

  const addToCart = (item) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Masuk ke keranjang!");
  };

  return (
    <div style={container}>

      {/* NAVBAR */}
      <div style={navbar}>
        <h2>Nawaf Store</h2>

        <div>
          <button style={navBtn} onClick={() => navigate("/cart")}>
            🛒 Cart
          </button>

          <button style={navBtn} onClick={() => navigate("/")}>
            Logout
          </button>
        </div>
      </div>

      {/* HERO */}
      <div style={hero}>
        <h1>Selamat Datang di Toko HP</h1>
        <p>Beli HP terbaik dengan harga terbaik 🔥</p>
      </div>

      {/* PRODUK */}
      <div style={productContainer}>
        {products.map((item) => (
          <div key={item.id} style={card}>
            <img src={item.image} style={img} />

            <h3>{item.name}</h3>
            <p>Rp {item.price}</p>

            <button
              style={btnCart}
              onClick={() => addToCart(item)}
            >
              + Keranjang
            </button>

            <button
              style={btnBuy}
              onClick={() => navigate("/payment", { state: item })}
            >
              Beli
            </button>
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <div style={footer}>
        <p>© 2026 Nawaf Store</p>
      </div>

    </div>
  );
}

/* STYLE */

const container = {
  background: "#f5f7fb",
  minHeight: "100vh"
};

const navbar = {
  background: "linear-gradient(135deg,#6366f1,#3b82f6)",
  color: "#fff",
  padding: "15px 30px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
};

const navBtn = {
  marginLeft: "10px",
  padding: "8px 15px",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer"
};

const hero = {
  padding: "40px",
  textAlign: "center"
};

const productContainer = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))",
  gap: "20px",
  padding: "20px"
};

const card = {
  background: "#fff",
  padding: "15px",
  borderRadius: "15px",
  textAlign: "center",
  boxShadow: "0 10px 25px rgba(0,0,0,0.05)"
};

const img = {
  width: "100%",
  borderRadius: "10px"
};

const btnCart = {
  width: "100%",
  marginTop: "10px",
  padding: "10px",
  borderRadius: "10px",
  border: "1px solid #6366f1",
  cursor: "pointer"
};

const btnBuy = {
  width: "100%",
  marginTop: "8px",
  padding: "10px",
  borderRadius: "10px",
  border: "none",
  background: "linear-gradient(135deg,#6366f1,#3b82f6)",
  color: "#fff",
  cursor: "pointer"
};

const footer = {
  marginTop: "40px",
  padding: "15px",
  textAlign: "center",
  background: "#111",
  color: "#fff"
};