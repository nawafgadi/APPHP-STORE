import { useState } from "react";

export default function Products() {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products")) || []
  );

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [editId, setEditId] = useState(null);

  const handleImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) reader.readAsDataURL(file);
  };

  const handleAdd = () => {
    if (!name || !price || !image) return alert("Isi semua!");

    if (editId) {
      const updated = products.map((p) =>
        p.id === editId ? { ...p, name, price, image } : p
      );
      setProducts(updated);
      localStorage.setItem("products", JSON.stringify(updated));
      setEditId(null);
    } else {
      const newProduct = {
        id: Date.now(),
        name,
        price,
        image
      };

      const updated = [...products, newProduct];
      setProducts(updated);
      localStorage.setItem("products", JSON.stringify(updated));
    }

    setName("");
    setPrice("");
    setImage("");
  };

  const handleDelete = (id) => {
    const updated = products.filter((p) => p.id !== id);
    setProducts(updated);
    localStorage.setItem("products", JSON.stringify(updated));
  };

  const handleEdit = (p) => {
    setName(p.name);
    setPrice(p.price);
    setImage(p.image);
    setEditId(p.id);
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2 style={title}>Kelola Produk</h2>

      <div style={form}>
        <input style={input} placeholder="Nama HP" value={name} onChange={(e)=>setName(e.target.value)} />
        <input style={input} placeholder="Harga" value={price} onChange={(e)=>setPrice(e.target.value)} />
        <input type="file" onChange={handleImage} />

        {image && <img src={image} style={{width:"100px"}} />}

        <button style={button} onClick={handleAdd}>
          {editId ? "Update" : "Tambah"}
        </button>
      </div>

      <div style={grid}>
        {products.map((p) => (
          <div key={p.id} style={card}>
            <img src={p.image} style={{width:"100%",height:"150px",objectFit:"cover"}} />
            <h3>{p.name}</h3>
            <p>Rp {p.price}</p>

            <button style={buttonSmall} onClick={()=>handleEdit(p)}>Edit</button>
            <button style={{...buttonSmall, background:"red"}} onClick={()=>handleDelete(p.id)}>Hapus</button>
          </div>
        ))}
      </div>
    </div>
  );
}

const title = {
  background: "linear-gradient(135deg,#6366f1,#3b82f6)",
  WebkitBackgroundClip: "text",
  color: "transparent"
};

const form = {
  background: "#fff",
  padding: "20px",
  borderRadius: "15px",
  marginBottom: "20px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
};

const input = {
  display: "block",
  width: "100%",
  marginBottom: "10px",
  padding: "10px",
  borderRadius: "8px",
  border: "1px solid #ddd"
};

const button = {
  background: "linear-gradient(135deg,#6366f1,#3b82f6)",
  color: "#fff",
  border: "none",
  padding: "10px",
  borderRadius: "8px",
  cursor: "pointer"
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
  gap: "20px"
};

const card = {
  background: "#fff",
  padding: "15px",
  borderRadius: "15px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
};

const buttonSmall = {
  margin: "5px",
  padding: "8px",
  border: "none",
  borderRadius: "6px",
  background: "#6366f1",
  color: "#fff",
  cursor: "pointer"
};