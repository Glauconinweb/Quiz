import { Router } from "express";
import { saveScore, getTopScores } from "../controllers/scoreController.js";
const router = Router();

router.post("/", saveScore);
router.get("/", getTopScores);

export default router;
