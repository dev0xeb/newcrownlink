import { OrderService } from '../../src/services/orderService';
import { OrderRepository } from '../../src/repositories/orderRepository';

jest.mock('../../src/repositories/orderRepository');

const MockOrderRepository = OrderRepository as jest.MockedClass<typeof OrderRepository>;

describe('OrderService', () => {
  let orderService: OrderService;
  let orderRepo: jest.Mocked<OrderRepository>;

  beforeEach(() => {
    orderRepo = new MockOrderRepository() as any;
    orderService = new OrderService(orderRepo);
  });

  it('should create an order with pending status', async () => {
    orderRepo.createOrder.mockResolvedValue({ id: 1, status: 'pending' } as any);
    const order = await orderService.createOrder(1, [1, 2]);
    expect(order.status).toBe('pending');
    expect(orderRepo.createOrder).toHaveBeenCalledWith(1, [1, 2], 'pending');
  });

  it('should update order status', async () => {
    orderRepo.updateOrderStatus.mockResolvedValue({ id: 1, status: 'paid' } as any);
    const order = await orderService.updateOrderStatus(1, 'paid');
    expect(order).not.toBeNull();
    expect(order!.status).toBe('paid');
    expect(orderRepo.updateOrderStatus).toHaveBeenCalledWith(1, 'paid');
  });

  // Add more tests for grantAccess and notifyMoodleAdmin as you implement them
});