import axios from "axios";

// Crée une instance Axios
axios.defaults.headers.common["Content-Type"] =
  "application/x-www-form-urlencoded";
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
const api = axios.create({
  baseURL: "http://localhost:3000", // URL du backend
  timeout: 5000 // Timeout de 5 secondes pour les requêtes
});

// Middleware pour ajouter le token JWT dans les en-têtes des requêtes si disponible
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // Vérifie si un token est stocké
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
