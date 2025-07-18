import { PrismaClient, Order, Prisma } from '../generated/prisma';

const prisma = new PrismaClient();

export class OrderRepository {
  async createOrder(userId: number, courseIds: number[], status: string = 'pending'): Promise<Order> {
    return prisma.order.create({
      data: {
        userId,
        status,
        courses: {
          connect: courseIds.map(id => ({ id })),
        },
      },
      include: { courses: true, user: true },
    });
  }

  async getOrderById(orderId: number): Promise<any> {
    return prisma.order.findUnique({
      where: { id: orderId },
      include: { user: true, courses: true },
    });
  }

  async updateOrderStatus(orderId: number, status: string): Promise<Order | null> {
    return prisma.order.update({
      where: { id: orderId },
      data: { status },
      include: { courses: true, user: true },
    });
  }

  async listOrdersByUser(userId: number): Promise<Order[]> {
    return prisma.order.findMany({
      where: { userId },
      include: { courses: true },
    });
  }
}