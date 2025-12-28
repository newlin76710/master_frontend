const API = import.meta.env.VITE_API_URL || "http://localhost:10000";

export async function getArticles() {
  return fetch(`${API}/articles`).then(r => r.json());
}