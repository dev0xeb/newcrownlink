import * as courseService from '../../src/services/courseService';
import * as courseRepository from '../../src/repositories/courseRepository';

jest.mock('../../src/repositories/courseRepository');

describe('Course Service', () => {
  afterEach(() => jest.clearAllMocks());

  it('should create a course', async () => {
    const courseData = { title: 'Test', description: 'Desc', imageUrl: 'img.jpg' };
    const mockCourse = { id: 1, ...courseData, createdAt: new Date(), updatedAt: new Date() };
    (courseRepository.createCourse as jest.Mock).mockResolvedValue(mockCourse);

    const result = await courseService.createCourse(courseData);
    expect(result).toEqual(mockCourse);
    expect(courseRepository.createCourse).toHaveBeenCalledWith(courseData);
  });

  it('should get all courses', async () => {
    const mockCourses = [
      { id: 1, title: 'A', description: 'B', imageUrl: null, createdAt: new Date(), updatedAt: new Date() }
    ];
    (courseRepository.getAllCourses as jest.Mock).mockResolvedValue(mockCourses);

    const result = await courseService.getAllCourses();
    expect(result).toEqual(mockCourses);
    expect(courseRepository.getAllCourses).toHaveBeenCalled();
  });

  it('should get a course by id', async () => {
    const mockCourse = { id: 1, title: 'A', description: 'B', imageUrl: null, createdAt: new Date(), updatedAt: new Date() };
    (courseRepository.getCourseById as jest.Mock).mockResolvedValue(mockCourse);

    const result = await courseService.getCourseById(1);
    expect(result).toEqual(mockCourse);
    expect(courseRepository.getCourseById).toHaveBeenCalledWith(1);
  });

  it('should update a course', async () => {
    const updateData = { title: 'Updated' };
    const mockCourse = { id: 1, title: 'Updated', description: 'B', imageUrl: null, createdAt: new Date(), updatedAt: new Date() };
    (courseRepository.updateCourse as jest.Mock).mockResolvedValue(mockCourse);

    const result = await courseService.updateCourse(1, updateData);
    expect(result).toEqual(mockCourse);
    expect(courseRepository.updateCourse).toHaveBeenCalledWith(1, updateData);
  });

  it('should delete a course', async () => {
    (courseRepository.deleteCourse as jest.Mock).mockResolvedValue({});

    const result = await courseService.deleteCourse(1);
    expect(result).toEqual({});
    expect(courseRepository.deleteCourse).toHaveBeenCalledWith(1);
  });
});
