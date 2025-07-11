import {Request, Response, NextFunction } from 'express';
import { registerUser, loginUser, loginOrRegisterGoogleUser } from '../services/userService';

export async function register(req: Request, res: Response, next: NextFunction) {
    try{
        const {email, password, name } = req.body;
        const result = await registerUser({email, password, name});
        res.status(201).json(result);
    } catch (err) {
        next(err);
    }
}

export async function login(req: Request, res: Response, next: NextFunction) {
    try{
        const { email, password } = req.body;
        const result = await loginUser({email, password});
        res.status(200).json(result);
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