import * as courseService from '../services/courseService';
import { Request, Response, NextFunction } from 'express';

export async function createCourse(req: Request, res: Response, next: NextFunction) {
  try {
    const course = await courseService.createCourse(req.body);
    res.status(201).json(course);
  } catch (err) {
    next(err);
  }
}

export async function getAllCourses(req: Request, res: Response, next: NextFunction) {
  try {
    const courses = await courseService.getAllCourses();
    res.json(courses);
  } catch (err) {
    next(err);
  }
}

export async function getCourseById(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    const course = await courseService.getCourseById(id);
    res.json(course);
  } catch (err) {
    next(err);
  }
}

export async function updateCourse(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    const course = await courseService.updateCourse(id, req.body);
    res.json(course);
  } catch (err) {
    next(err);
  }
}

export async function deleteCourse(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    await courseService.deleteCourse(id);
    res.status(204).json({});
  } catch (err) {
    next(err);
  }
}
