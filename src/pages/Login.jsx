import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

 const handleLogin = () => {
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (user) {
    localStorage.setItem("currentUser", JSON.stringify(user));

    if (user.role === "admin") {
      navigate("/dashboard");
    } else {
      navigate("/home");
    }
  } else {
    alert("Email atau password salah!");
  }
};

  return (
    <div style={container}>
      <div style={card}>
        <h2 style={title}>Login</h2>

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

        <button onClick={handleLogin} style={button}>
          Login
        </button>

        <p>
          Belum punya akun? <Link to="/register">Register</Link>
        </p>
        <Link to="/ForgotPassword">Lupa Password?</Link>
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