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

    alert("Password berhasil direset!");
    navigate("/");
  };

  return (
    <div>
      <h2>Reset Password</h2>

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={handleReset}>Reset</button>

      <p>
        <Link to="/">Kembali ke Login</Link>
      </p>
    </div>
  );
}