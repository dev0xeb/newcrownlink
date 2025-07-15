'use client'
import CourseHeroSection from '@/app/components/course-description/CourseHeroSection';
import CourseMainContent from '@/app/components/course-description/CourseMainContent';
import RelatedCoursesSection from '@/app/components/home/FeaturedCoursesSection';
import TestimonialsSection from '@/app/components/About/Testimonials';
import CallToActionSection from '@/app/components/home/CtaSection';
import Footer from '@/app/components/Footer';
import Navbar from '@/app/components/Navbar';
import { coursesData } from '@/app/data/coursesData';
import images from '@/app/assets/image';
import { useState } from 'react';
import React from 'react';

const extraCourseData = [
  {
    slug: "level-5-diploma-in-leadership-and-management-for-adult-care",
    instructor: 'ADE INAOLAJI',
    category: 'Leadership Management Course',
    students: 1,
    lastUpdated: 'February 27, 2025',
    overview: 'This qualification covers the knowledge and skills required to work in a leadership and management role in a range of settings where services support individuals with different needs. The qualification contains units which are competence based and some knowledge-based units.',
    whoFor: [
      'Registered managers',
      'Managers',
      'Assistant managers',
      'Deputy managers',
      'Residential services for older people/work age adults',
      'Domiciliary care services',
      'Day services',
      'Respite services',
      'Community based services'
    ],
    whatLearn: 'This qualification covers a range of skills and knowledge relating to leadership and management of adult care services in England, such as: Decision-making, safeguarding, leading and managing services, service improvement, leading person centred care and governance and regulatory requirements.',
    requirements: 'For anyone working as Manager or aspiring to become a Manager.',
    card: {
      duration: '18 MONTHS',
      lessons: 24,
      enrolled: 255,
      access: 'LIFETIME',
      price: '£2000',
      oldPrice: '£2500'
    },
    otherCourses: [
      {
        image: '/medication-management.jpg',
        title: 'MEDICATION MANAGEMENT',
        instructor: 'ADE INAOLAJI',
        price: '£2000',
        oldPrice: '£2500'
      },
      {
        image: '/family-learning.jpg',
        title: 'LEVEL 3 DIPLOMA IN ADULT CARE',
        instructor: 'ADE INAOLAJI',
        price: '£2000',
        oldPrice: '£2500'
      },
      {
        image: '/fire-safety.jpg',
        title: 'FIRE SAFETY AWARENESS',
        instructor: 'ADE INAOLAJI',
        price: '£2000',
        oldPrice: '£2500'
      },
      {
        image: '/fire-safety.jpg',
        title: 'FIRE SAFETY AWARENESS',
        instructor: 'ADE INAOLAJI',
        price: '£2000',
        oldPrice: '£2500'
      }
    ]
  },
  {
    slug: "level-3-diploma-in-adult-care",
    instructor: 'ADE INAOLAJI',
    category: 'Adult Care Course',
    students: 1,
    lastUpdated: 'February 27, 2025',
    overview: 'This course provides the knowledge and skills needed to work in adult care settings. It is suitable for care assistants, support workers, and key workers in a range of adult care settings.',
    whoFor: [
      'Care assistants',
      'Support workers',
      'Key workers',
      'Adult care staff'
    ],
    whatLearn: 'You will learn about person-centred care, safeguarding, health and safety, and supporting individuals with their physical and emotional needs.',
    requirements: 'For anyone working in or aspiring to work in adult care.',
    card: {
      duration: '12 MONTHS',
      lessons: 18,
      enrolled: 120,
      access: 'LIFETIME',
      price: '£1500',
      oldPrice: '£1800'
    },
    otherCourses: [
      {
        image: '/leadership-course.jpg',
        title: 'LEVEL 5 DIPLOMA IN LEADERSHIP AND MANAGEMENT FOR ADULT CARE',
        instructor: 'ADE INAOLAJI',
        price: '£2000',
        oldPrice: '£2500'
      },
      {
        image: '/medication-management.jpg',
        title: 'MEDICATION MANAGEMENT',
        instructor: 'ADE INAOLAJI',
        price: '£500',
        oldPrice: '£700'
      }
    ]
  },
  {
    slug: "medication-management",
    instructor: 'ADE INAOLAJI',
    category: 'Medication Management',
    students: 1,
    lastUpdated: 'February 27, 2025',
    overview: 'This course covers the safe management and administration of medication in care settings. It is suitable for care staff responsible for handling medication.',
    whoFor: [
      'Care staff',
      'Support workers',
      'Anyone handling medication'
    ],
    whatLearn: 'You will learn about medication types, safe storage, administration procedures, and legal responsibilities.',
    requirements: 'For anyone responsible for administering medication in care settings.',
    card: {
      duration: '3 MONTHS',
      lessons: 8,
      enrolled: 60,
      access: 'LIFETIME',
      price: '£500',
      oldPrice: '£700'
    },
    otherCourses: [
      {
        image: '/leadership-course.jpg',
        title: 'LEVEL 5 DIPLOMA IN LEADERSHIP AND MANAGEMENT FOR ADULT CARE',
        instructor: 'ADE INAOLAJI',
        price: '£2000',
        oldPrice: '£2500'
      },
      {
        image: '/family-learning.jpg',
        title: 'LEVEL 3 DIPLOMA IN ADULT CARE',
        instructor: 'ADE INAOLAJI',
        price: '£1500',
        oldPrice: '£1800'
      }
    ]
  },
  {
    slug: "fire safety awareness",
    instructor: 'ADE INAOLAJI',
    category: 'FIRE SAFETY AWARENESS',
    students: 1,
    lastUpdated: 'February 27, 2025',
    overview: 'This course covers the Fire Safety Awareness. It is suitable for care staff responsible for handling medication.',
    whoFor: [
      'Care staff',
      'Support workers',
      'Anyone handling medication'
    ],
    whatLearn: 'Understanding Fire, Fire Hazards and Prevention, Fire Safety Legislation, Fire Detection and Alarm Systems, Fire Extinguishers, Emergency Procedures, Effects of Fires',
    requirements: 'Participants is required to be at least 16 years of age, Participants should have basic literacy and numeracy skill, Participants should have Interest in dementia care, Participants should have basic IT skills (for online courses)',
    card: {
      duration: '3 MONTHS',
      lessons: 8,
      enrolled: 60,
      access: 'LIFETIME',
      price: '£500',
      oldPrice: '£700'
    },
    otherCourses: [
      {
        image: '/leadership-course.jpg',
        title: 'LEVEL 5 DIPLOMA IN LEADERSHIP AND MANAGEMENT FOR ADULT CARE',
        instructor: 'ADE INAOLAJI',
        price: '£2000',
        oldPrice: '£2500'
      },
      {
        image: '/family-learning.jpg',
        title: 'LEVEL 3 DIPLOMA IN ADULT CARE',
        instructor: 'ADE INAOLAJI',
        price: '£1500',
        oldPrice: '£1800'
      }
    ]
  },
  // Add more extra data as needed
];

const sampleTestimonials = [
  {
    name: 'Beatrice',
    role: 'Mental Health Nurse',
    text: "I'm really happy Crownlinks Academy. The information they provide (Powerpoint worksheets e.t.c) were excellent.",
    avatar: ''
  },
  {
    name: 'Sarah Johnson',
    role: 'Web Developer',
    text: 'This platform transformed my career! The courses are well structured and the instructors are top-notch. Within months, I went from a beginner to landing my first freelance project.',
    avatar: ''
  },
  {
    name: 'Beatrice',
    role: 'Mental Health Nurse',
    text: "I'm really happy Crownlinks Academy. The information they provide (Powerpoint worksheets e.t.c) were excellent.",
    avatar: ''
  }
];

interface PageProps {
  params: { slug: string }
}

export default function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = React.use(params);
  const cardData = coursesData.find(c => c.slug === slug);
  const extraData = extraCourseData.find(c => c.slug === slug);

  if (!cardData || !extraData) {
    return <div className="text-center py-20 text-2xl">Course not found</div>;
  }

  const course = {
    ...cardData,
    ...extraData,
    card: {
      image: cardData.image,
      instructor: extraData.instructor,
      duration: extraData.card.duration,
      lessons: extraData.card.lessons,
      enrolled: extraData.card.enrolled,
      access: extraData.card.access,
      price: extraData.card.price,
      oldPrice: extraData.card.oldPrice,
    },
  };

  // Cart state
  const [cartItems, setCartItems] = useState<any[]>([]);
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price || 0) * (item.quantity || 1), 0);
  const handleRemoveItem = (id: number | string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };
  const handleAddToCart = (course: any) => {
    if (cartItems.some(item => item.slug === course.slug)) {
      alert('Course has already been added to cart');
      return;
    }
    setCartItems([
      ...cartItems,
      {
        id: course.id || course.slug,
        image: course.courseImage || course.image || '',
        title: course.title,
        price: Number(course.currentPrice?.replace(/[^\d.]/g, '')) || course.price || 0,
        description: course.description || 'No description available.',
        quantity: 1,
        slug: course.slug,
      },
    ]);
  };
  const handleClearCart = () => setCartItems([]);

  return (
    <main>
      <Navbar/>
      <CourseHeroSection
  image={course.image}
  title={course.title}
  instructor={course.instructor}
  instructorImage={images.instructor_ade_profile}
  price={course.card.price}
  oldPrice={course.card.oldPrice}
  duration={course.card.duration}
  lessons={course.card.lessons}
  enrolled={course.card.enrolled}
  access={course.card.access}
/>
      <CourseMainContent overview={course.overview} whoFor={course.whoFor} whatLearn={course.whatLearn} requirements={course.requirements} />
      <RelatedCoursesSection onAddToCart={handleAddToCart} cartItems={cartItems} />
      <TestimonialsSection  />
      <CallToActionSection />
      <Footer />
    </main>
  );
} 