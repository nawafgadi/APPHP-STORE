import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
  if (!email || !password) {
    alert("Isi semua data!");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];

  // ❌ CEK EMAIL SUDAH ADA
  const exists = users.find((u) => u.email === email);

  if (exists) {
    alert("Email sudah terdaftar!");
    return;
  }

  const newUser = {
    email,
    password,
    role: "user"
  };

  const updatedUsers = [...users, newUser];

  localStorage.setItem("users", JSON.stringify(updatedUsers));

  alert("Register berhasil!");
  navigate("/");
};

  return (
    <div style={container}>
      <div style={card}>
        <h2 style={title}>Register</h2>

        <input
          placeholder="Email"
          style={input}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          style={input}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleRegister} style={button}>
          Register
        </button>

        <p>
          Sudah punya akun? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
}

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
  width: "300px",
  textAlign: "center",
  boxShadow: "0 20px 50px rgba(0,0,0,0.2)"
};

const title = {
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