import { Request, Response, NextFunction } from 'express';

export async function isAdmin(req: Request, res: Response, next: NextFunction): Promise<void> {
  if (req.user && req.user.role === 'admin') {
    return next();
  }
  res.status(403).json({ error: 'Admins only' });
}
