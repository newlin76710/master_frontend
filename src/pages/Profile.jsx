import { useState } from "react";

export default function Profile() {
  const [exp, setExp] = useState(0);
  const level = Math.floor(exp / 100) + 1;

  return (
    <div style={{ padding: 24 }}>
      <h1>我的修煉</h1>
      <p>等級：Lv.{level}</p>
      <p>經驗值：{exp}</p>

      <button onClick={() => setExp(exp + 10)}>
        完成修煉 +10 EXP
      </button>
    </div>
  );
}
