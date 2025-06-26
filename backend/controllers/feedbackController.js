import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createFeedback = async (req, res) => {
  const { message } = req.body;
  if (!message) return res.status(400).json({ error: "Feedback obrigatório." });
  try {
    await prisma.feedback.create({ data: { message } });
    res.json({ message: "Feedback recebido com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao salvar feedback." });
  }
};
