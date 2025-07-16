'use client'
import React, { useState } from 'react';
import { CourseCategorySection, CourseFilters, CoursePageHeader } from '../components/course';
import images from '../assets/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CourseCategoryNav from '../components/course/CourseCategoryNav';

// Add Course type
interface Course {
  id: string;
  image: any;
  alt: string;
  instructorImage: any;
  instructorName: string;
  title: string;
  currentPrice: string;
  originalPrice: string;
}

const initialTeachingCourses: Course[] = [
  {
    id: 'medication-management-1',
    image: images.medication_management_course,
    alt: 'Medication Management Course',
    instructorImage: images.instructor_ade_profile,
    instructorName: 'ADE INAOLAJI',
    title: 'MEDICATION MANAGEMENT',
    currentPrice: '£2000',
    originalPrice: '£2500',
  },
  {
    id: 'medication-management-2',
    image: images.medication_management_course,
    alt: 'Medication Management Course',
    instructorImage: images.instructor_ade_profile,
    instructorName: 'ADE INAOLAJI',
    title: 'MEDICATION MANAGEMENT',
    currentPrice: '£2000',
    originalPrice: '£2500',
  },{
    id: 'medication-management-3',
    image: images.medication_management_course,
    alt: 'Medication Management Course',
    instructorImage: images.instructor_ade_profile,
    instructorName: 'ADE INAOLAJI',
    title: 'MEDICATION MANAGEMENT',
    currentPrice: '£2000',
    originalPrice: '£2500',
  },{
    id: 'medication-management-4',
    image: images.medication_management_course,
    alt: 'Medication Management Course',
    instructorImage: images.instructor_ade_profile,
    instructorName: 'ADE INAOLAJI',
    title: 'MEDICATION MANAGEMENT',
    currentPrice: '£2000',
    originalPrice: '£2500',
  },{
    id: 'medication-management-5',
    image: images.medication_management_course,
    alt: 'Medication Management Course',
    instructorImage: images.instructor_ade_profile,
    instructorName: 'ADE INAOLAJI',
    title: 'MEDICATION MANAGEMENT',
    currentPrice: '£2000',
    originalPrice: '£2500',
  },{
    id: 'medication-management-6',
    image: images.medication_management_course,
    alt: 'Medication Management Course',
    instructorImage: images.instructor_ade_profile,
    instructorName: 'ADE INAOLAJI',
    title: 'MEDICATION MANAGEMENT',
    currentPrice: '£2000',
    originalPrice: '£2500',
  },{
    id: 'medication-management-7',
    image: images.medication_management_course,
    alt: 'Medication Management Course',
    instructorImage: images.instructor_ade_profile,
    instructorName: 'ADE INAOLAJI',
    title: 'MEDICATION MANAGEMENT',
    currentPrice: '£2000',
    originalPrice: '£2500',
  },{
    id: 'medication-management-8',
    image: images.medication_management_course,
    alt: 'Medication Management Course',
    instructorImage: images.instructor_ade_profile,
    instructorName: 'ADE INAOLAJI',
    title: 'MEDICATION MANAGEMENT',
    currentPrice: '£2000',
    originalPrice: '£2500',
  },
];

const initialManagementCourses: Course[] = [
  {
    id: 'level-5-diploma-1',
    image: images.family_learning_course,
    alt: 'Family Learning Course',
    instructorImage: images.instructor_ade_profile,
    instructorName: 'ADE INAOLAJI',
    title: 'LEVEL 5 DIPLOMA IN LEADERSHIP AND MANAGEMENT FOR ADULT CARE',
    currentPrice: '£2000',
    originalPrice: '£2500',
  },
  {
    id: 'level-5-diploma-2',
    image: images.family_learning_course,
    alt: 'Family Learning Course',
    instructorImage: images.instructor_ade_profile,
    instructorName: 'ADE INAOLAJI',
    title: 'LEVEL 5 DIPLOMA IN LEADERSHIP AND MANAGEMENT FOR ADULT CARE',
    currentPrice: '£2000',
    originalPrice: '£2500',
  },{
    id: 'level-5-diploma-3',
    image: images.family_learning_course,
    alt: 'Family Learning Course',
    instructorImage: images.instructor_ade_profile,
    instructorName: 'ADE INAOLAJI',
    title: 'LEVEL 5 DIPLOMA IN LEADERSHIP AND MANAGEMENT FOR ADULT CARE',
    currentPrice: '£2000',
    originalPrice: '£2500',
  },{
    id: 'level-5-diploma-4',
    image: images.family_learning_course,
    alt: 'Family Learning Course',
    instructorImage: images.instructor_ade_profile,
    instructorName: 'ADE INAOLAJI',
    title: 'LEVEL 5 DIPLOMA IN LEADERSHIP AND MANAGEMENT FOR ADULT CARE',
    currentPrice: '£2000',
    originalPrice: '£2500',
  },{
    id: 'level-5-diploma-5',
    image: images.family_learning_course,
    alt: 'Family Learning Course',
    instructorImage: images.instructor_ade_profile,
    instructorName: 'ADE INAOLAJI',
    title: 'LEVEL 5 DIPLOMA IN LEADERSHIP AND MANAGEMENT FOR ADULT CARE',
    currentPrice: '£2000',
    originalPrice: '£2500',
  },{
    id: 'level-5-diploma-6',
    image: images.family_learning_course,
    alt: 'Family Learning Course',
    instructorImage: images.instructor_ade_profile,
    instructorName: 'ADE INAOLAJI',
    title: 'LEVEL 5 DIPLOMA IN LEADERSHIP AND MANAGEMENT FOR ADULT CARE',
    currentPrice: '£2000',
    originalPrice: '£2500',
  },{
    id: 'level-5-diploma-7',
    image: images.family_learning_course,
    alt: 'Family Learning Course',
    instructorImage: images.instructor_ade_profile,
    instructorName: 'ADE INAOLAJI',
    title: 'LEVEL 5 DIPLOMA IN LEADERSHIP AND MANAGEMENT FOR ADULT CARE',
    currentPrice: '£2000',
    originalPrice: '£2500',
  },{
    id: 'level-5-diploma-8',
    image: images.family_learning_course,
    alt: 'Family Learning Course',
    instructorImage: images.instructor_ade_profile,
    instructorName: 'ADE INAOLAJI',
    title: 'LEVEL 5 DIPLOMA IN LEADERSHIP AND MANAGEMENT FOR ADULT CARE',
    currentPrice: '£2000',
    originalPrice: '£2500',
  },
];

const CoursesPage = () => {
  const [search, setSearch] = useState('');
  const [teachingCourses] = useState<Course[]>(initialTeachingCourses);
  const [managementCourses] = useState<Course[]>(initialManagementCourses);

  const filterCourses = (courses: Course[]) =>
    courses.filter((course: Course) =>
      course.title.toLowerCase().includes(search.toLowerCase()) ||
      course.instructorName.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <main>
      <Navbar />
      <CourseCategoryNav />
      <CoursePageHeader />
      <CourseFilters value={search} onChange={e => setSearch(e.target.value)} />
      <CourseCategorySection title="Teaching Courses" courses={filterCourses(teachingCourses)} />
      <CourseCategorySection title="Management Courses" courses={filterCourses(managementCourses)} />
      <Footer />
    </main>
  );
};

export default CoursesPage;
