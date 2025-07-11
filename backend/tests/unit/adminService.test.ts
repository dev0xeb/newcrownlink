import * as adminService from '../../src/services/adminService';
import * as userRepository from '../../src/repositories/userRepository';

jest.mock('../../src/repositories/userRepository');

describe('Admin Service - getAllUsers', () => {
  it('should return all users', async () => {
    const mockUsers = [
      { id: 1, email: 'admin@example.com', name: 'Admin', role: 'admin' },
      { id: 2, email: 'user@example.com', name: 'User', role: 'user' },
    ];
    (userRepository.findAllUsers as jest.Mock).mockResolvedValue(mockUsers);

    const result = await adminService.getAllUsers();
    expect(result).toEqual(mockUsers);
    expect(userRepository.findAllUsers).toHaveBeenCalled();
  });
});
