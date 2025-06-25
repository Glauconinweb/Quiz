import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const saveScore = async (req, res) => {
  const { name, score } = req.body;
  if (!name || typeof score !== "number") {
    return res.status(400).json({ error: "Nome e score obrigatórios." });
  }
  await prisma.score.create({ data: { name, score } });
  res.json({ message: "Score salvo!" });
};

export const getTopScores = async (req, res) => {
  const top = await prisma.score.findMany({
    orderBy: { score: "desc" },
    take: 3,
  });
  res.json(top);
};
