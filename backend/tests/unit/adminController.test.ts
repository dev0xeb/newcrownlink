import * as adminService from '../../src/services/adminService';
import { getAllUsers } from '../../src/controllers/adminController';

jest.mock('../../src/services/adminService');

describe('Admin Controller - getAllUsers', () => {
  const mockReq = {} as any;
  const mockRes = {
    json: jest.fn(),
    status: jest.fn().mockReturnThis(),
  } as any;

  it('should return all users', async () => {
    const mockUsers = [
      { id: 1, email: 'admin@example.com', name: 'Admin', role: 'admin' },
      { id: 2, email: 'user@example.com', name: 'User', role: 'user' },
    ];
    (adminService.getAllUsers as jest.Mock).mockResolvedValue(mockUsers);

    await getAllUsers(mockReq, mockRes);

    expect(adminService.getAllUsers).toHaveBeenCalled();
    expect(mockRes.json).toHaveBeenCalledWith(mockUsers);
  });
});