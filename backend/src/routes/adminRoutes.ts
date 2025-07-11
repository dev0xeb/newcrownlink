import { Router } from "express";
import { getAllUsers } from "../controllers/adminController";
import { authenticateJWT } from "../middleware/authMiddleware";
import { isAdmin } from "../middleware/adminMiddleware";

const router = Router();

router.get('/users', authenticateJWT, isAdmin, getAllUsers);

export default router;
