"use client";

import PageTransition from "@/app/components/dashboard/PageTransition";

const bars = ["h-[60%]", "h-[40%]", "h-[75%]", "h-[30%]", "h-[55%]", "h-[70%]", "h-[90%]"];

export default function ProgressPage() {
  return (
    <PageTransition>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-900">Progress</h1>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white border border-gray-200 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-gray-900">Weekly Activity</h2>
            <div className="mt-6 h-48 flex items-end gap-3">
              {bars.map((h, idx) => (
                <div key={idx} className="flex-1 bg-[#EAF2FE] rounded-t-md relative">
                  <div className={`absolute bottom-0 left-0 right-0 bg-[#1A6EDC] rounded-t-md ${h}`} />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-gray-900">Streak</h2>
            <p className="text-4xl font-bold text-[#1A6EDC] mt-4">6</p>
            <p className="text-gray-600">days learning streak</p>
          </div>
        </section>

        <section className="bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Achievements</h2>
          <div className="flex flex-wrap gap-4">
            <span className="inline-flex items-center rounded-full bg-green-50 text-green-700 px-3 py-1 text-sm font-semibold">Beginner Badge</span>
            <span className="inline-flex items-center rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-sm font-semibold">Consistency Badge</span>
            <span className="inline-flex items-center rounded-full bg-purple-50 text-purple-700 px-3 py-1 text-sm font-semibold">Top Scorer</span>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
