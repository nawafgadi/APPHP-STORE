import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const navigate = useNavigate();

  if (!user) {
    return <h2>Belum login</h2>;
  }

 return (
    <div style={{ padding: "40px" }}>
      <h2 style={{
        fontSize: "28px",
        background: "linear-gradient(135deg,#6366f1,#3b82f6)",
        WebkitBackgroundClip: "text",
        color: "transparent"
      }}>
        Dashboard Admin
      </h2>

      <div style={{ marginTop: "20px", display: "flex", gap: "15px" }}>
        <button
          onClick={() => navigate("/products")}
          style={btnStyle}
        >
          Kelola Produk
        </button>

        <button
          onClick={() => navigate("/home")}
          style={btnStyle}
        >
          Lihat Katalog
        </button>
      </div>
    </div>
  );
}

const btnStyle = {
  padding: "12px 20px",
  borderRadius: "10px",
  border: "none",
  background: "linear-gradient(135deg,#6366f1,#3b82f6)",
  color: "#fff",
  cursor: "pointer"
};
