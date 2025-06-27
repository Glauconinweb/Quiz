import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import authRoutes from "./routes/authRoutes.js";
import scoreRoutes from "./routes/scoreRoutes.js";
import feedbackRoutes from "./routes/feedbackRoutes.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Rotas da API
app.use("/auth", authRoutes);
app.use("/scores", scoreRoutes);
app.use("/feedback", feedbackRoutes);

// Servir frontend
app.use(express.static(path.join(__dirname, "frontend", "public")));

// Fallback para SPA
app.get("/:path(*)", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "index.html"));
});

// Inicializar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
