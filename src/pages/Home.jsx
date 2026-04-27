import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



export default function Home() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const handleCart = (item) => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push(item);

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Masuk ke keranjang!");

  <button onClick={() => navigate("/payment", { state: item })}>
  Beli
</button>
};

<button onClick={() => handleCart(item)}>
  + Keranjang
</button>



  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(data);
  }, []);

  

  return (
    <div style={{ padding: "40px" }}>
      <h2 style={{
        fontSize: "28px",
        marginBottom: "20px",
        background: "linear-gradient(135deg,#6366f1,#3b82f6)",
        WebkitBackgroundClip: "text",
        color: "transparent"
      }}>
        Katalog HP
      </h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "25px"
      }}>
        {products.map((item) => (
          <div
            key={item.id}
            style={{
              background: "#fff",
              borderRadius: "16px",
              padding: "15px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              transition: "0.3s"
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: "100%",
                height: "160px",
                objectFit: "cover",
                borderRadius: "10px"
              }}
            />

            <h3 style={{ marginTop: "10px" }}>{item.name}</h3>

            <p style={{
              color: "#6366f1",
              fontWeight: "600"
            }}>
              Rp {item.price}
            </p>

            <button
            onClick={() => navigate("/payment", { state: item })}
            style={{
              marginTop: "10px",
              width: "100%",
              padding: "10px",
              borderRadius: "10px",
              border: "none",
              background: "linear-gradient(135deg,#6366f1,#3b82f6)",
              color: "#fff"
            }}
          >
            Beli
          </button>
          </div>
        ))}
      </div>
    </div>
  );
}




  