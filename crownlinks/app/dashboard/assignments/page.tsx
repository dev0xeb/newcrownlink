"use client";

import PageTransition from "@/app/components/dashboard/PageTransition";

const items = [
  { title: "Medication Case Review", due: "2025-09-15", status: "Pending" },
  { title: "Leadership Essay", due: "2025-09-20", status: "Submitted" },
  { title: "Adult Care Quiz", due: "2025-09-25", status: "Graded" },
];

export default function AssignmentsPage() {
  return (
    <PageTransition>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-900">Assignments</h1>
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {items.map((a) => (
                  <tr key={a.title}>
                    <td className="px-4 py-3 text-sm text-gray-800">{a.title}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{a.due}</td>
                    <td className="px-4 py-3 text-sm">
                      <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${a.status === "Pending" ? "bg-yellow-50 text-yellow-700" : a.status === "Submitted" ? "bg-blue-50 text-blue-700" : "bg-green-50 text-green-700"}`}>{a.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
