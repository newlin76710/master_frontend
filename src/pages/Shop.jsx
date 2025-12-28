import { useState } from "react";

const products = [
  { id: 1, name: "入門秘笈｜7 日練功", price: 990 },
  { id: 2, name: "進階心法｜實戰修煉", price: 1990 },
  { id: 3, name: "大成全集｜宗師之路", price: 3990 },
];

export default function Shop() {
  const [cart, setCart] = useState([]);

  const total = cart.reduce((s, p) => s + p.price, 0);

  return (
    <div style={{ padding: 24 }}>
      <h1>練功賣場</h1>

      {products.map(p => (
        <div key={p.id}>
          <b>{p.name}</b> - NT$ {p.price}
          <button onClick={() => setCart([...cart, p])}> 加入</button>
        </div>
      ))}

      <h2>購物車</h2>
      {cart.map((c, i) => (
        <div key={i}>{c.name}</div>
      ))}
      <b>總計：NT$ {total}</b>
    </div>
  );
}
