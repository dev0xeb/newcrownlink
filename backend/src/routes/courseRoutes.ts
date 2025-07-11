import { Router } from "express";
import { createCourse, getAllCourses, getCourseById, updateCourse, deleteCourse } from "../controllers/courseControllers";
import { authenticateJWT } from "../middleware/authMiddleware";
import { isAdmin } from "../middleware/adminMiddleware";

const router = Router();

// Public
router.get('/courses', getAllCourses);
router.get('/courses/:id', getCourseById);

// Admin only
router.post('/courses', authenticateJWT, isAdmin, createCourse);
router.put('/courses/:id', authenticateJWT, isAdmin, updateCourse);
router.delete('/courses/:id', authenticateJWT, isAdmin, deleteCourse);

export default router;