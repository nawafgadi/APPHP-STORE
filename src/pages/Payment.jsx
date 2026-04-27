import { useLocation, useNavigate } from "react-router-dom";

export default function Payment() {
  const location = useLocation();
  const navigate = useNavigate();

  const data = location.state;

  if (!data) {
    return <h2>Data tidak ditemukan</h2>;
  }

  const isCart = data.cart;

  const items = isCart ? data.cart : [data];

  const total = isCart
    ? data.total
    : Number(data.price);

  const handlePay = () => {
    alert("Pembayaran berhasil!");
    localStorage.removeItem("cart");
    navigate("/home");
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Pembayaran</h2>

      {items.map((item, i) => (
        <div key={i}>
          <img src={item.image} style={{ width: "100px" }} />
          <p>{item.name}</p>
          <p>Rp {item.price}</p>
        </div>
      ))}

      <h3>Total: Rp {total}</h3>

      <button onClick={handlePay}>Bayar</button>
    </div>
  );
}