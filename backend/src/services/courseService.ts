import * as courseRepository from '../repositories/courseRepository';
import { Course } from '../generated/prisma';

export async function createCourse(
  data: Omit<Course, 'id' | 'createdAt' | 'updatedAt'>
) {
  return courseRepository.createCourse(data);
}

export async function getAllCourses() {
  return courseRepository.getAllCourses();
}

export async function getCourseById(id: number) {
  return courseRepository.getCourseById(id);
}

export async function updateCourse(
  id: number,
  data: Partial<Omit<Course, 'id' | 'createdAt' | 'updatedAt'>>
) {
  return courseRepository.updateCourse(id, data);
}

export async function deleteCourse(id: number) {
  return courseRepository.deleteCourse(id);
}
