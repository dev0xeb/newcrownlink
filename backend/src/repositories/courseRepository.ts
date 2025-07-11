// backend/src/repositories/courseRepository.ts
import { PrismaClient, Course } from '../generated/prisma';

const prisma = new PrismaClient();

export async function createCourse(data: Omit<Course, 'id' | 'createdAt' | 'updatedAt'>) {
  return prisma.course.create({ data });
}

export async function getAllCourses() {
  return prisma.course.findMany({ orderBy: { createdAt: 'desc' } });
}

export async function getCourseById(id: number) {
  return prisma.course.findUnique({ where: { id } });
}

export async function updateCourse(id: number, data: Partial<Omit<Course, 'id' | 'createdAt' | 'updatedAt'>>) {
  return prisma.course.update({ where: { id }, data });
}

export async function deleteCourse(id: number) {
  return prisma.course.delete({ where: { id } });
}
