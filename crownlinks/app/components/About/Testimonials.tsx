"use client";
import { useState } from "react";
import Image from 'next/image';
import images from "@/app/assets/image";

const testimonials = [
  {
    name: "Beatrice",
    role: "Mental Health Nurse",
    text: "I’m really happy Crownlinks Academy. The information they provide (Powerpoint worksheets e.t.c) were excellent.",
  },
  {
    name: "Sarah Johnson",
    role: "Web Developer",
    text: "This platform transformed my career! The courses are well structured and the instructors are top-notch. Within months, I went from a beginner to landing my first freelance project.",
  },
];

type TestimonialCardProps = {
  name: string;
  role: string;
  text: string;
};

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const handleNext = () => setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  return (
    <section className="bg-[#f8f9fa] py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#242424]">
          What our learners are saying
        </h2>
        <div className="relative">
          {/* Desktop: show both, Mobile/Tablet: show one with navigation */}
          <div className="hidden md:grid grid-cols-2 gap-8">
            {testimonials.map((t, idx) => (
              <TestimonialCard key={idx} {...t} />
            ))}
          </div>
          <div className="md:hidden">
            <TestimonialCard {...testimonials[current]} />
            {/* Arrows for mobile/tablet only */}
            <div className="flex justify-center mt-6 gap-6">
              <button
                onClick={handlePrev}
                aria-label="Previous"
                className="text-2xl px-3 py-1 rounded-full bg-white shadow hover:bg-gray-100"
              >
                &#8592;
              </button>
              <button
                onClick={handleNext}
                aria-label="Next"
                className="text-2xl px-3 py-1 rounded-full bg-white shadow hover:bg-gray-100"
              >
                &#8594;
              </button>
            </div>
            {/* Dots indicator for mobile only */}
            <div className="flex justify-center mt-4 space-x-2">
              {testimonials.map((_, idx) => (
                <span
                  key={idx}
                  className={`w-3 h-3 rounded-full inline-block ${current === idx ? "bg-[#1976d2]" : "bg-gray-300"}`}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ name, role, text }: TestimonialCardProps) => (
  <div className="bg-white rounded-2xl shadow-lg p-10 flex flex-col items-center text-center min-h-[370px]">
    <div className="w-20 h-20 rounded-full bg-gray-200 mb-4 overflow-hidden">
      <Image src={images.testimonials_profile} alt={`${name} profile`} />
    </div>
    {/* Stars */}
    <div className="flex mb-4">
      {Array(5)
        .fill(0)
        .map((_, i) => (
          <svg
            key={i}
            className="w-6 h-6 text-[#FFC107]"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z" />
          </svg>
        ))}
    </div>
    <p className="text-gray-700 mb-6 text-lg">{text}</p>
    <div className="font-bold text-lg mb-1">{name}</div>
    <div className="text-gray-500 text-base">{role}</div>
  </div>
);

export default TestimonialsSection;