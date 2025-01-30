import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Vite uses `import.meta.env` instead of `process.env`
  timeout: 5000, // Timeout de 5 secondes pour les requêtes
});

// Middleware pour ajouter le token JWT dans les en-têtes des requêtes si disponible
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
