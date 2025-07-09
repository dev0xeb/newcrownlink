import {createUser, findUserByEmail} from '../repositories/userRepository'
import bcrypt from 'bcrypt';
import {OAuth2Client} from 'google-auth-library';
import jwt from 'jsonwebtoken';


const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

async function verifyGoogleToken(idToken: string) {
    const ticket = await client.verifyIdToken({
        idToken,
        audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();
    return payload;
}

export async function loginOrRegisterGoogleUser(idToken: string) {
    const payload = await verifyGoogleToken(idToken);
    if (!payload?.email) {
        throw new Error('Google token did not return an email');
    }
    let user = await findUserByEmail(payload.email);
    if (!user) {
        user = await createUser({
            email: payload.email,
            password: '', 
            name: payload.name || 'Google User',
        });
    }
    const token = generateJWT({ id: String(user.id), email: user.email });
    return { user, token };
}

export async function registerUser(data: {email: string; password: string; name: string}) {
    if(!isValidEmail(data.email)){
        throw new Error('Invalid email address')
    }
    const existingUser = await findUserByEmail(data.email);
    if(existingUser) {
        throw new Error('Email already exist')
    }
    if(!validatePassword(data.password)){
        throw new Error ('Password is too short')
    }
    const hashedPassword = await bcrypt.hash(data.password, 10);

    if (!data.name || data.name.trim() === '') {
        throw new Error('Name is required');
      }

    const newUser = await createUser({
        email: data.email,
        password: hashedPassword,
        name: data.name,
    });
    const token = generateJWT({ id: String(newUser.id), email: newUser.email });
    return { user: newUser, token };
};

function isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
 function validatePassword(password: string): boolean {
    return password.length >= 8;
}

function generateJWT(user: { id: string; email: string }) {
    return jwt.sign({ userId: user.id, email: user.email }, process.env.JWT_SECRET!, { expiresIn: '1h' });
}


export async function loginUser({ email, password }: { email: string; password: string }) {
    const user = await findUserByEmail(email);
  
    if (!user) {
      throw new Error('Invalid email');
    }
  
    const isPasswordValid = await bcrypt.compare(password, user.password);
  
    if (!isPasswordValid) {
      throw new Error('Invalid password');
    }
  
    return {
      id: user.id,
      email: user.email,
      name: user.name,
    };
  }


