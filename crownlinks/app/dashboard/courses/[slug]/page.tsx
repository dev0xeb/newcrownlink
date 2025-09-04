"use client";

import { useState } from "react";
import Image from "next/image";
import PageTransition from "@/app/components/dashboard/PageTransition";
import images from "@/app/assets/image";

const lessons = [
  { title: "Introduction", duration: "5m" },
  { title: "Core Concepts", duration: "18m" },
  { title: "Case Study", duration: "22m" },
  { title: "Assessment", duration: "10m" },
];

export default function CourseDetailPage({ params }: { params: { slug: string } }) {
  const [tab, setTab] = useState<'overview' | 'curriculum' | 'discussions' | 'resources'>("overview");

  const title = params.slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  const banner = images.medication_management_course;

  return (
    <PageTransition>
      <div className="space-y-6">
        <div className="relative h-40 sm:h-56 rounded-xl overflow-hidden border border-gray-200">
          <Image src={banner} alt={title} fill className="object-cover" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900">{title}</h1>

        <div className="border-b border-gray-200 flex gap-6">
          {[
            { key: "overview", label: "Overview" },
            { key: "curriculum", label: "Curriculum" },
            { key: "discussions", label: "Discussions" },
            { key: "resources", label: "Resources" },
          ].map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key as any)}
              className={`-mb-px border-b-2 px-1 pb-3 text-sm font-medium ${tab === t.key ? "border-[#1A6EDC] text-[#1A6EDC]" : "border-transparent text-gray-600 hover:text-gray-800"}`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {tab === "overview" && (
          <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 space-y-4">
            <p className="text-gray-700">This course provides a comprehensive introduction to the subject with practical examples and engaging lessons designed to help you learn effectively.</p>
            <button className="rounded-md bg-[#1A6EDC] text-white px-4 py-2 text-sm font-medium hover:opacity-90">Mark as Complete</button>
          </div>
        )}

        {tab === "curriculum" && (
          <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6">
            <ul className="divide-y divide-gray-200">
              {lessons.map((l, i) => (
                <li key={l.title} className="py-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 text-xs font-semibold text-gray-700">{i + 1}</span>
                    <span className="text-sm text-gray-800">{l.title}</span>
                  </div>
                  <span className="text-xs text-gray-500">{l.duration}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {tab === "discussions" && (
          <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 text-gray-600">Comments placeholder</div>
        )}

        {tab === "resources" && (
          <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6">
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
              <li>Course Handbook.pdf</li>
              <li>Slides Deck.pptx</li>
              <li>Further Reading Links.txt</li>
            </ul>
          </div>
        )}
      </div>
    </PageTransition>
  );
}
