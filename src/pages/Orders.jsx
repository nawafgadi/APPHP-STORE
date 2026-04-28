import { useEffect, useState } from "react";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(data);
  }, []);

  const updateStatus = (id, status) => {
    const updated = orders.map((o) =>
      o.id === id ? { ...o, status } : o
    );

    setOrders(updated);
    localStorage.setItem("orders", JSON.stringify(updated));
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>Data Pesanan</h2>

      {orders.length === 0 && <p>Belum ada pesanan</p>}

      {orders.map((order) => (
        <div key={order.id} style={card}>
          <p><b>ID:</b> {order.id}</p>

          {order.items.map((item, i) => (
            <p key={i}>{item.name} - Rp {item.price}</p>
          ))}

          <p><b>Total:</b> Rp {order.total}</p>

          <p>
            Status:
            <span style={{
              color:
                order.status === "success"
                  ? "green"
                  : "orange"
            }}>
              {" "}{order.status}
            </span>
          </p>

          <button
            onClick={() => updateStatus(order.id, "success")}
          >
            ✔️ ACC
          </button>

          <button
            onClick={() => updateStatus(order.id, "pending")}
          >
            ❌ Pending
          </button>
        </div>
      ))}
    </div>
  );
}

const card = {
  background: "#fff",
  padding: "15px",
  borderRadius: "10px",
  marginBottom: "15px",
  boxShadow: "0 5px 15px rgba(0,0,0,0.05)"
};