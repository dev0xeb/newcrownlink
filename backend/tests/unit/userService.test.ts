import {registerUser, loginUser} from '../../src/services/userService';
import * as userRepository from '../../src/repositories/userRepository';
import bcrypt from 'bcrypt';


jest.mock('../../src/repositories/userRepository');

describe('User Service', () => {
    describe('registerUser', () => {
        it('should create a new user if email is not taken', async () => {
            const mockData = { email: 'newuser@example.com', password: 'securepass', name: 'New User' };
            const mockUser = { id: '123', ...mockData };

            (userRepository.findUserByEmail as jest.Mock).mockResolvedValue(null);
            (userRepository.createUser as jest.Mock).mockResolvedValue(mockUser);

            const result = await registerUser(mockData);

            expect(userRepository.findUserByEmail).toHaveBeenCalledWith(mockData.email);

            const calledWith = (userRepository.createUser as jest.Mock).mock.calls[0][0];
            expect(calledWith.email).toBe(mockData.email);
            expect(calledWith.name).toBe(mockData.name);
            expect(calledWith.password).not.toBe(mockData.password);
            expect(bcrypt.compareSync(mockData.password, calledWith.password)).toBe(true);

            expect(result).toEqual({
              user: mockUser,
              token: expect.any(String), 
            });
        });
    });
    
    it('should throw an error if email is alrady registered', async () => {
            const mockData = { email: 'existing@email.com', password: 'securepass', name: 'Existing User' };
            (userRepository.findUserByEmail as jest.Mock).mockResolvedValue({ id: '123', ...mockData });

            await expect(registerUser(mockData)).rejects.toThrow('Email already exist');
    });

    it('should throw an error if email is invalid', async () => {
        const mockData = { email: 'not-an-email', password: 'securepass', name: 'Existing User' };
        (userRepository.findUserByEmail as jest.Mock).mockResolvedValue(null);

        await expect(registerUser(mockData)).rejects.toThrow(/invalid email/i)

    });

    it('should throw an error if password is too short', async () => {
        const mockData = { email: 'existing@email.com', password: '123', name: 'Existing User' };
        (userRepository.findUserByEmail as jest.Mock).mockResolvedValue(null);

        await expect(registerUser(mockData)).rejects.toThrow('Password is too short')
    })

    it('should throw an error if name is missing', async () =>{
        const mockData = { email: 'existing@email.com', password: 'securepass', name: '' };
        (userRepository.findUserByEmail as jest.Mock).mockResolvedValue(null);

        await expect(registerUser(mockData)).rejects.toThrow('Name is required')
    })

    describe('loginUser', () => {
        let mockUser: any;

        beforeAll(async () => {
            mockUser = {
                id: '123',
                email: 'test@example.com',
                name: 'Test User',
                password: await bcrypt.hash('correctpassword', 10),
            };
        });

        beforeEach(() =>{
            jest.clearAllMocks();
        })

        it('should throw an error if email is not found', async () =>{
            (userRepository.findUserByEmail as jest.Mock).mockResolvedValue(null);

            await expect(
                loginUser({email: 'notfound@example.com', password: 'any' })
            ).rejects.toThrow('Invalid email');
        });

        it('should throw an error if password is incorrect', async () =>{
            (userRepository.findUserByEmail as jest.Mock).mockResolvedValue(mockUser);

            await expect(
                loginUser({email: 'notfound@example.com', password: 'wrongpassword' })
            ).rejects.toThrow('Invalid password')
        });

        it('should return user and token if credentianls are correct', async () =>{
            (userRepository.findUserByEmail as jest.Mock).mockResolvedValue(mockUser);

            const result = await loginUser({email: mockUser.email, password: 'correctpassword'})

            expect(result).toEqual({
                id: mockUser.id,
                email: mockUser.email,
                name: mockUser.name
            });
        });
    })
});
