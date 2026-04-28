import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("currentUser");
    navigate("/");
  };

  return (
    <div style={container}>

      {/* NAVBAR */}
      <div style={navbar}>
        <h2 style={{ margin: 0 }}>Admin Dashboard</h2>

        <button onClick={logout} style={logoutBtn}>
          Logout
        </button>
      </div>

      {/* BODY */}
      <div style={body}>

        {/* SIDEBAR */}
        <div style={sidebar}>
          <p style={menuItem}>📊 Dashboard</p>
          <p style={menuItem} onClick={() => navigate("/products")}>
            📦 Produk
          </p>
          <p style={menuItem} onClick={() => navigate("/cart")}>
            🛒 Cart
          </p>
        </div>

        {/* CONTENT */}
        <div style={content}>
          <h2>Selamat Datang 👋</h2>
          <p>Ini adalah halaman dashboard kamu</p>

          <div style={cardWrap}>
            <div style={card}>
              <h3>Total Produk</h3>
              <p>10</p>
            </div>

            <div style={card}>
              <h3>Total User</h3>
              <p>5</p>
            </div>

            <p style={menuItem} onClick={() => navigate("/orders")}>
            🧾 Orders
            </p>

            <div style={card}>
              <h3>Total Transaksi</h3>
              <p>3</p>
            </div>
          </div>
        </div>

      </div>

      {/* FOOTER */}
      <div style={footer}>
        <p>© 2026 Nawaf Store • All Rights Reserved</p>
      </div>

    </div>
  );
}

/* STYLE */

const container = {
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  background: "#f5f7fb"
};

const navbar = {
  height: "60px",
  background: "linear-gradient(135deg,#6366f1,#3b82f6)",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 20px"
};

const logoutBtn = {
  padding: "8px 15px",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer"
};

const body = {
  display: "flex",
  flex: 1
};

const sidebar = {
  width: "200px",
  background: "#fff",
  padding: "20px",
  boxShadow: "2px 0 10px rgba(0,0,0,0.05)"
};

const menuItem = {
  marginBottom: "15px",
  cursor: "pointer"
};

const content = {
  flex: 1,
  padding: "30px"
};

const cardWrap = {
  display: "flex",
  gap: "20px",
  marginTop: "20px"
};

const card = {
  background: "#fff",
  padding: "20px",
  borderRadius: "15px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
  flex: 1
};

const footer = {
  height: "50px",
  background: "#111",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};