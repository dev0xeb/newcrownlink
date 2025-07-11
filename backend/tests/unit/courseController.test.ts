import * as courseController from '../../src/controllers/courseControllers';
import * as courseService from '../../src/services/courseService';

jest.mock('../../src/services/courseService');

describe('Course Controller', () => {
  let req: any, res: any, next: any;

  beforeEach(() => {
    req = {};
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    next = jest.fn();
    jest.clearAllMocks();
  });

  describe('createCourse', () => {
    it('should create a course and return 201', async () => {
      req.body = { title: 'Test', description: 'Desc', imageUrl: 'img.jpg' };
      const mockCourse = { id: 1, ...req.body };
      (courseService.createCourse as jest.Mock).mockResolvedValue(mockCourse);

      await courseController.createCourse(req, res, next);
      expect(courseService.createCourse).toHaveBeenCalledWith(req.body);
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith(mockCourse);
    });

    it('should call next with error if service throws', async () => {
      const error = new Error('fail');
      (courseService.createCourse as jest.Mock).mockRejectedValue(error);
      req.body = { title: 'Test' };
      await courseController.createCourse(req, res, next);
      expect(next).toHaveBeenCalledWith(error);
    });
  });

  describe('getAllCourses', () => {
    it('should return all courses', async () => {
      const mockCourses = [{ id: 1, title: 'A' }];
      (courseService.getAllCourses as jest.Mock).mockResolvedValue(mockCourses);
      await courseController.getAllCourses(req, res, next);
      expect(res.json).toHaveBeenCalledWith(mockCourses);
    });
    it('should call next with error if service throws', async () => {
      const error = new Error('fail');
      (courseService.getAllCourses as jest.Mock).mockRejectedValue(error);
      await courseController.getAllCourses(req, res, next);
      expect(next).toHaveBeenCalledWith(error);
    });
  });

  describe('getCourseById', () => {
    it('should return course by id', async () => {
      req.params = { id: '1' };
      const mockCourse = { id: 1, title: 'A' };
      (courseService.getCourseById as jest.Mock).mockResolvedValue(mockCourse);
      await courseController.getCourseById(req, res, next);
      expect(courseService.getCourseById).toHaveBeenCalledWith(1);
      expect(res.json).toHaveBeenCalledWith(mockCourse);
    });
    it('should call next with error if service throws', async () => {
      req.params = { id: '1' };
      const error = new Error('fail');
      (courseService.getCourseById as jest.Mock).mockRejectedValue(error);
      await courseController.getCourseById(req, res, next);
      expect(next).toHaveBeenCalledWith(error);
    });
  });

  describe('updateCourse', () => {
    it('should update course and return it', async () => {
      req.params = { id: '1' };
      req.body = { title: 'Updated' };
      const mockCourse = { id: 1, title: 'Updated' };
      (courseService.updateCourse as jest.Mock).mockResolvedValue(mockCourse);
      await courseController.updateCourse(req, res, next);
      expect(courseService.updateCourse).toHaveBeenCalledWith(1, req.body);
      expect(res.json).toHaveBeenCalledWith(mockCourse);
    });
    it('should call next with error if service throws', async () => {
      req.params = { id: '1' };
      req.body = { title: 'Updated' };
      const error = new Error('fail');
      (courseService.updateCourse as jest.Mock).mockRejectedValue(error);
      await courseController.updateCourse(req, res, next);
      expect(next).toHaveBeenCalledWith(error);
    });
  });

  describe('deleteCourse', () => {
    it('should delete course and return 204', async () => {
      req.params = { id: '1' };
      (courseService.deleteCourse as jest.Mock).mockResolvedValue({});
      await courseController.deleteCourse(req, res, next);
      expect(courseService.deleteCourse).toHaveBeenCalledWith(1);
      expect(res.status).toHaveBeenCalledWith(204);
      expect(res.json).toHaveBeenCalledWith({});
    });
    it('should call next with error if service throws', async () => {
      req.params = { id: '1' };
      const error = new Error('fail');
      (courseService.deleteCourse as jest.Mock).mockRejectedValue(error);
      await courseController.deleteCourse(req, res, next);
      expect(next).toHaveBeenCalledWith(error);
    });
  });
}); 