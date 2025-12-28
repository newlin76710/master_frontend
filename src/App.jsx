import { useState } from "react";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Profile from "./pages/Profile";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div>
      <nav style={{ padding: 16, background: "#000", color: "#fff" }}>
        <button onClick={() => setPage("home")}>首頁</button>{" "}
        <button onClick={() => setPage("shop")}>練功賣場</button>{" "}
        <button onClick={() => setPage("profile")}>我的修煉</button>
      </nav>

      {page === "home" && <Home />}
      {page === "shop" && <Shop />}
      {page === "profile" && <Profile />}
    </div>
  );
}
