import React from 'react';

const ArrowDown = () => (
  <svg className="w-4 h-4 text-gray-400 absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M19 9l-7 7-7-7" />
  </svg>
);

interface CourseFiltersProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CourseFilters: React.FC<CourseFiltersProps> = ({ value, onChange }) => (
  <div className="max-w-9xl mx-[40px]">
    <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 mt-8 mb-8 w-full">
      <div className="relative w-full md:w-auto">
        <select className="rounded-full border border-gray-200 bg-white px-5 py-2 pr-10 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-100 appearance-none w-full md:min-w-[140px]">
          <option value="">Course Level</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
        <ArrowDown />
      </div>
      <div className="relative w-full md:w-auto">
        <select className="rounded-full border border-gray-200 bg-white px-5 py-2 pr-10 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-100 appearance-none w-full md:min-w-[140px]">
          <option value="">Price Range</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <ArrowDown />
      </div>
      <div className="relative w-full md:w-auto">
        <select className="rounded-full border border-gray-200 bg-white px-5 py-2 pr-10 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-100 appearance-none w-full md:min-w-[140px]">
          <option value="">Price Range</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <ArrowDown />
      </div>
      <div className="flex items-center bg-gray-100 rounded-full px-4 w-full md:ml-auto md:w-[400px] h-12">
        <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="text"
          placeholder="Search"
          value={value}
          onChange={onChange}
          className="bg-gray-100 outline-none border-none w-full text-gray-700 placeholder-gray-400 rounded-full h-full"
        />
      </div>
    </div>
  </div>
);

export default CourseFilters; 