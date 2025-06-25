import { Router } from "express";
import {
  register,
  login,
  deleteUser,
  trocarSenha,
} from "../controllers/authController.js";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.delete("/user/:id", deleteUser);
router.put("/trocar-senha", trocarSenha);

export default router;
