import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import scoreRoutes from "./routes/scoreRoutes.js";
import path from "path";
import { fileURLToPath } from "url";
import feedbackRoutes from "./routes/feedbackRoutes.js";
const __dirname = path.resolve();
const app = express();
app.use(express.static(path.join(__dirname, "frontend/public")));

dotenv.config();

const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/scores", scoreRoutes);
app.use("/feedback", feedbackRoutes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend/public", "index.html"));
});

app.listen(PORT, () => {
  console.log(` Servidor rodando na porta ${PORT}`);
  console.log(`Acesse a API em http://localhost:${PORT}`);
});
