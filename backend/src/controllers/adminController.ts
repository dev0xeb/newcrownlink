import * as adminService from '../services/adminService';
import { Request, Response } from 'express';

export async function getAllUsers(req: Request, res: Response): Promise<void> {
  const users = await adminService.getAllUsers();
  res.json(users);
}
