import { sendEmail } from '../utils/email';
import { OrderRepository } from '../repositories/orderRepository';

export class OrderService {
  private orderRepo: OrderRepository;

  constructor(orderRepo: OrderRepository) {
    this.orderRepo = orderRepo;
  }

  async createOrder(userId: number, courseIds: number[]) {
    return this.orderRepo.createOrder(userId, courseIds, 'pending');
  }

  async updateOrderStatus(orderId: number, status: string) {
    return this.orderRepo.updateOrderStatus(orderId, status);
  }

  // Stub for granting access after payment
  async grantAccess(orderId: number) {
    // Implement logic to grant course access
    return { success: true };
  }

  async notifyMoodleAdmin(orderId: number) {
    // Fetch order with user and courses
    const order = await this.orderRepo.getOrderById(orderId);
    if (!order) throw new Error('Order not found');

    const studentName = order.user.name;
    const studentEmail = order.user.email;
    const courseTitles = order.courses.map((c: any) => c.title).join(', ');

    const subject = 'New Course Purchase - Access Granted';
    const html = `
      <h3>New Course Purchase</h3>
      <p><strong>Student Name:</strong> ${studentName}</p>
      <p><strong>Student Email:</strong> ${studentEmail}</p>
      <p><strong>Purchased Course(s):</strong> ${courseTitles}</p>
    `;

    // Send email to Moodle admin
    await sendEmail(process.env.MOODLE_ADMIN_EMAIL!, subject, html);

    return { success: true };
  }
} 