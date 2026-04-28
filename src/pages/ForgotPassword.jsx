import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleReset = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find((u) => u.email === email);

    if (!user) {
      alert("Email tidak ditemukan!");
      return;
    }

    const newPassword = prompt("Masukkan password baru:");
    if (!newPassword) return;

    const updated = users.map((u) =>
      u.email === email ? { ...u, password: newPassword } : u
    );

    localStorage.setItem("users", JSON.stringify(updated));

    alert("Password berhasil direset!");

    navigate("/");
  };

  return (
    <div style={container}>
      <div style={card}>
        <h2 style={title}>Forgot Password</h2>

        <p style={desc}>
          Masukkan email untuk reset password
        </p>

        <input
          type="email"
          placeholder="Email"
          style={input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button onClick={handleReset} style={button}>
          Reset Password
        </button>

        <p style={{ marginTop: "15px" }}>
          <Link to="/Login">Kembali ke Login</Link>
        </p>
      </div>
    </div>
  );
}

/* STYLE */
const container = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "linear-gradient(135deg,#6366f1,#3b82f6)"
};

const card = {
  background: "#fff",
  padding: "30px",
  borderRadius: "20px",
  width: "340px",
  textAlign: "center",
  boxShadow: "0 20px 50px rgba(0,0,0,0.2)"
};

const title = {
  marginBottom: "10px",
  fontWeight: "600"
};

const desc = {
  fontSize: "13px",
  color: "#666",
  marginBottom: "20px"
};

const input = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "10px",
  border: "1px solid #ddd"
};

const button = {
  width: "100%",
  padding: "12px",
  borderRadius: "10px",
  border: "none",
  background: "linear-gradient(135deg,#6366f1,#3b82f6)",
  color: "#fff",
  cursor: "pointer"
};