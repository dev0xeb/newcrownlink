import { Request, Response, NextFunction } from 'express';
import { OrderService } from '../services/orderService';
import { OrderRepository } from '../repositories/orderRepository';

const orderService = new OrderService(new OrderRepository());

export async function createOrder(req: Request, res: Response, next: NextFunction) {
  try {
    const { userId, courseIds } = req.body;
    const order = await orderService.createOrder(userId, courseIds);
    res.status(201).json(order);
  } catch (err) {
    next(err);
  }
}

export async function updateOrderStatus(req: Request, res: Response, next: NextFunction) {
  try {
    const orderId = Number(req.params.id);
    const { status } = req.body;
    const order = await orderService.updateOrderStatus(orderId, status);
    res.json(order);
  } catch (err) {
    next(err);
  }
}

export async function grantAccess(req: Request, res: Response, next: NextFunction) {
  try {
    const orderId = Number(req.params.id);
    const result = await orderService.grantAccess(orderId);
    res.json(result);
  } catch (err) {
    next(err);
  }
}

export async function notifyMoodleAdmin(req: Request, res: Response, next: NextFunction) {
  try {
    const orderId = Number(req.params.id);
    const result = await orderService.notifyMoodleAdmin(orderId);
    res.json(result);
  } catch (err) {
    next(err);
  }
} 