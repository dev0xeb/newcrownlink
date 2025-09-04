"use client";

import Link from "next/link";
import Image from "next/image";
import PageTransition from "@/app/components/dashboard/PageTransition";
import images from "@/app/assets/image";

const courses = [
  { slug: "medication-management", title: "Medication Management", image: images.medication_management_course },
  { slug: "adult-care-essentials", title: "Adult Care Essentials", image: images.adult_care_course },
  { slug: "family-learning", title: "Family Learning", image: images.family_learning_course },
];

export default function MyCoursesPage() {
  return (
    <PageTransition>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-900">My Courses</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((c) => (
            <Link key={c.slug} href={`/dashboard/courses/${c.slug}`} className="group border border-gray-200 rounded-xl overflow-hidden bg-white">
              <div className="relative h-40">
                <Image src={c.image} alt={c.title} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-base font-semibold text-gray-800 group-hover:underline">{c.title}</h3>
                <p className="text-sm text-gray-600 mt-1">Continue where you left off</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
