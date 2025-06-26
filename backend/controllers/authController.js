import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { ObjectId } from "mongodb";
dotenv.config();
const prisma = new PrismaClient();

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const register = async (req, res) => {
  // Log para debug
  console.log("REQ.BODY:", req.body);

  const { nome, email, senha, telefone, tipo, escola } = req.body;

  try {
    if (!nome || !email || !senha || !tipo) {
      return res
        .status(400)
        .json({ error: "Preencha todos os campos obrigatórios." });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ error: "Email inválido." });
    }

    // Troque findUnique por findFirst
    const existingUser = await prisma.user.findFirst({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: "Usuário já cadastrado." });
    }
    const hashedPassword = await bcrypt.hash(senha, 10);

    const user = await prisma.user.create({
      data: {
        name: nome,
        email,
        password: hashedPassword,
        telephone: telefone || "",
        tipo,
        escola: tipo === "studant" ? escola || "" : "",
      },
    });

    res.status(201).json({ message: "Usuário registrado com sucesso!", user });
  } catch (error) {
    console.error("Erro no registro:", error);
    res
      .status(500)
      .json({ error: "Erro ao registrar usuário.", detalhe: error.message });
  }
};

export const login = async (req, res) => {
  if (!req.body) {
    return res.status(400).json({ error: "Corpo da requisição vazio." });
  }
  const { email, senha } = req.body;

  try {
    if (!email || !senha) {
      return res.status(400).json({ error: "Preencha todos os campos." });
    }

    // Troque findUnique por findFirst
    const user = await prisma.user.findFirst({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: "Usuário ou senha inválidos." });
    }

    const isPasswordValid = await bcrypt.compare(senha, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Usuário ou senha inválidos." });
    }

    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({
      token,
      usuario: {
        nome: user.name,
        email: user.email,
        telefone: user.telephone,
        tipo: user.tipo,
        escola: user.escola,
      },
    });
  } catch (error) {
    console.error("Erro no login:", error);
    res
      .status(500)
      .json({ error: "Erro interno do servidor", detalhe: error.message });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    if (!id || !ObjectId.isValid(id)) {
      return res.status(400).json({ error: "ID inválido." });
    }
    await prisma.user.delete({ where: { id } });
    res.json({ message: "Usuário removido com sucesso!" });
  } catch (error) {
    console.error("Erro ao remover usuário:", error);
    res
      .status(500)
      .json({ error: "Erro interno do servidor", detalhe: error.message });
  }
};

export const trocarSenha = async (req, res) => {
  const { email, novaSenha } = req.body;
  try {
    if (!email || !novaSenha) {
      return res.status(400).json({ error: "Preencha todos os campos." });
    }
    // Troque findUnique por findFirst
    const user = await prisma.user.findFirst({ where: { email } });
    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado." });
    }
    const hashedPassword = await bcrypt.hash(novaSenha, 10);
    await prisma.user.update({
      where: { id: user.id },
      data: { password: hashedPassword },
    });
    res.json({ message: "Senha alterada com sucesso!" });
  } catch (error) {
    console.error("Erro ao trocar senha:", error);
    res
      .status(500)
      .json({ error: "Erro interno do servidor", detalhe: error.message });
  }
};
