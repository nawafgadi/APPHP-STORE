import { useLocation, useNavigate } from "react-router-dom";

export default function Payment() {
  const location = useLocation();
  const navigate = useNavigate();

  const data = location.state;

  const handlePay = () => {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  const newOrder = {
    id: Date.now(),
    items: items,
    total: total,
    status: "pending"
  };

  const updated = [...orders, newOrder];

  localStorage.setItem("orders", JSON.stringify(updated));

  alert("Menunggu konfirmasi admin!");

  localStorage.removeItem("cart");

  navigate("/home");
};

  if (!data) {
    return <h2>Data tidak ditemukan</h2>;
  }

  // 🔥 SUPPORT SINGLE / CART
  const isCart = data.cart;

  const items = isCart ? data.cart : [data];

  const total = isCart
    ? data.total
    : Number(data.price);
    
  return (
    <div style={container}>
      <div style={card}>
        <h2 style={title}>Pembayaran</h2>

        {/* LIST PRODUK */}
        {items.map((item, i) => (
          <div key={i} style={itemBox}>
            <img src={item.image} style={img} />
            <div>
              <p>{item.name}</p>
              <p>Rp {item.price}</p>
            </div>
          </div>
        ))}

        {/* TOTAL */}
        <h3 style={totalStyle}>Total: Rp {total}</h3>

        {/* QRIS */}
        <div style={qrisBox}>
          <p style={{ marginBottom: "10px" }}>Scan QRIS untuk bayar</p>

          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=PembayaranHP"
            alt="QRIS"
            style={{ width: "200px" }}
          />
        </div>

        <button onClick={handlePay} style={button}>
          Saya Sudah Bayar
        </button>
      </div>
    </div>
  );
}

const container = {
  padding: "40px",
  display: "flex",
  justifyContent: "center"
};

const card = {
  background: "#fff",
  padding: "25px",
  borderRadius: "20px",
  width: "400px",
  boxShadow: "0 15px 40px rgba(0,0,0,0.1)"
};

const title = {
  textAlign: "center",
  marginBottom: "20px",
  background: "linear-gradient(135deg,#6366f1,#3b82f6)",
  WebkitBackgroundClip: "text",
  color: "transparent"
};

const itemBox = {
  display: "flex",
  gap: "10px",
  marginBottom: "10px",
  alignItems: "center"
};

const img = {
  width: "60px",
  borderRadius: "8px"
};

const totalStyle = {
  marginTop: "15px",
  color: "#6366f1"
};

const qrisBox = {
  textAlign: "center",
  marginTop: "20px"
};

const button = {
  width: "100%",
  marginTop: "20px",
  padding: "12px",
  border: "none",
  borderRadius: "10px",
  background: "linear-gradient(135deg,#6366f1,#3b82f6)",
  color: "#fff",
  cursor: "pointer"
};