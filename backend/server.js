import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import scoreRoutes from "./routes/scoreRoutes.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/scores", scoreRoutes);

app.get("/", (req, res) => {
  res.send("API pronta para uso!");
});

app.listen(PORT, () => {
  console.log(` Servidor rodando na porta ${PORT}`);
  console.log(`Acesse a API em http://localhost:${PORT}`);
});
