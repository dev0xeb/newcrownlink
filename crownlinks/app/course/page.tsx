import React from 'react';
import { CourseCategorySection, CourseFilters, CoursePageHeader } from '../components/course';
import images from '../assets/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CourseCategoryNav from '../components/course/CourseCategoryNav';

const teachingCourses = [
  {
    id: 'medication-management',
    image: images.medication_management_course,
    alt: 'Medication Management Course',
    instructorImage: images.instructor_ade_profile,
    instructorName: 'ADE INAOLAJI',
    title: 'MEDICATION MANAGEMENT',
    currentPrice: '£2000',
    originalPrice: '£2500',
  },
  // Add more teaching courses as needed
];

const managementCourses = [
  {
    id: 'level-5-diploma',
    image: images.family_learning_course,
    alt: 'Family Learning Course',
    instructorImage: images.instructor_ade_profile,
    instructorName: 'ADE INAOLAJI',
    title: 'LEVEL 5 DIPLOMA IN LEADERSHIP AND MANAGEMENT FOR ADULT CARE',
    currentPrice: '£2000',
    originalPrice: '£2500',
  },
  // Add more management courses as needed
];

const CoursesPage = () => (
  <main >
    <Navbar/>
    <CourseCategoryNav />
    <CoursePageHeader />
    <CourseFilters />
    <CourseCategorySection title="Teaching Courses" courses={teachingCourses} />
    <CourseCategorySection title="Management Courses" courses={managementCourses} />
    <Footer/>
  </main>
);

export default CoursesPage;
