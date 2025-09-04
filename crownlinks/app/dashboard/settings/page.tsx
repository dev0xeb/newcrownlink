"use client";

import PageTransition from "@/app/components/dashboard/PageTransition";

export default function SettingsPage() {
  return (
    <PageTransition>
      <div className="space-y-6 max-w-2xl">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <form className="bg-white border border-gray-200 rounded-xl p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" defaultValue="John Doe" className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A6EDC]" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" defaultValue="john.doe@example.com" className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A6EDC]" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" placeholder="********" className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A6EDC]" />
          </div>
          <div className="pt-2">
            <button type="button" className="rounded-md bg-[#1A6EDC] text-white px-4 py-2 text-sm font-medium hover:opacity-90">Save Changes</button>
          </div>
        </form>
      </div>
    </PageTransition>
  );
}
