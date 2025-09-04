"use client";

import Link from "next/link";
import Image from "next/image";
import PageTransition from "@/app/components/dashboard/PageTransition";
import images from "@/app/assets/image";

const enrolled = [
  { slug: "medication-management", title: "Medication Management", image: images.medication_management_course, progress: 72, widthClass: "w-[72%]" },
  { slug: "adult-care-essentials", title: "Adult Care Essentials", image: images.adult_care_course, progress: 45, widthClass: "w-[45%]" },
  { slug: "family-learning", title: "Family Learning", image: images.family_learning_course, progress: 88, widthClass: "w-[88%]" },
];

const recommended = [
  { slug: "leadership", title: "Leadership Foundations", image: images.leadership_course },
  { slug: "quality-courses", title: "Quality Courses", image: images.QualityCourses },
  { slug: "learning-paths", title: "Learning Paths", image: images.paths },
];

export default function DashboardHome() {
  return (
    <PageTransition>
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Welcome back, John Doe!</h1>
          <p className="text-gray-600 mt-1">Here’s a quick overview of your learning journey.</p>
        </div>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {/* My Courses */}
            <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">My Courses</h2>
                <Link href="/dashboard/my-courses" className="text-sm text-[#1A6EDC] hover:underline">View all</Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {enrolled.map((c) => (
                  <Link key={c.slug} href={`/dashboard/courses/${c.slug}`} className="group border border-gray-200 rounded-lg overflow-hidden bg-white">
                    <div className="relative h-28">
                      <Image src={c.image} alt={c.title} fill className="object-cover" />
                    </div>
                    <div className="p-3">
                      <h3 className="text-sm font-semibold text-gray-800 group-hover:underline">{c.title}</h3>
                      <div className="mt-2">
                        <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                          <div className={`h-2 bg-[#1A6EDC] ${c.widthClass}`} />
                        </div>
                        <p className="text-xs text-gray-600 mt-1">{c.progress}% complete</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Recommended */}
            <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Recommended Courses</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {recommended.map((c) => (
                  <div key={c.slug} className="border border-gray-200 rounded-lg overflow-hidden bg-white flex flex-col">
                    <div className="relative h-28">
                      <Image src={c.image} alt={c.title} fill className="object-cover" />
                    </div>
                    <div className="p-3 flex-1 flex flex-col">
                      <h3 className="text-sm font-semibold text-gray-800">{c.title}</h3>
                      <div className="mt-3">
                        <button className="inline-flex items-center justify-center rounded-md bg-[#1A6EDC] text-white px-3 py-2 text-sm font-medium hover:opacity-90">Enroll</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Progress Overview */}
          <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 h-fit">
            <h2 className="text-lg font-semibold text-gray-900">Progress Overview</h2>
            <div className="mt-4 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Courses Completed</span>
                <span className="text-sm font-semibold text-gray-900">8</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">In Progress</span>
                <span className="text-sm font-semibold text-gray-900">3</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Streak</span>
                <span className="text-sm font-semibold text-gray-900">6 days</span>
              </div>
              <div className="mt-6">
                <div className="h-32 w-full bg-gray-50 border border-dashed border-gray-200 rounded-md flex items-center justify-center text-sm text-gray-500">Chart Placeholder</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
