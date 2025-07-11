import {Request, Response, NextFunction } from 'express';
import { registerUser, loginUser, loginOrRegisterGoogleUser } from '../services/userService';
import jwt from 'jsonwebtoken';

export async function register(req: Request, res: Response, next: NextFunction) {
    try{
        const {email, password, name } = req.body;
        const result = await registerUser({email, password, name});
        res.status(201).json(result);
    } catch (err) {
        next(err);
    }
}

export async function login(req: Request, res: Response, next: NextFunction): Promise<void> {
    try{
        const { email, password } = req.body;
        const user = await loginUser({email, password});
        if (user) {
            const token = jwt.sign(
                { id: user.id, email: user.email, role: user.role },
                process.env.JWT_SECRET as string,
                { expiresIn: '1h' }
            );
            res.json({
                token,
                user: {
                    id: user.id,
                    email: user.email,
                    name: user.name,
                    role: user.role
                }
            });
        } else {
            res.status(401).json({ error: 'Invalid credentials' });
        }
    } catch (err){
        next(err)
    }
}

export async function googleAuth(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { idToken } = req.body;
      if (!idToken) {
        res.status(400).json({ error: 'idToken is required' });
        return;
      }
      const result = await loginOrRegisterGoogleUser(idToken);
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
};