import React from 'react';

interface CourseMainContentProps {
  overview: string;
  whoFor: string[];
  whatLearn: string;
  requirements: string;
}

const CourseMainContent: React.FC<CourseMainContentProps> = ({
  overview,
  whoFor,
  whatLearn,
  requirements
}) => (
  <section className="w-full max-w-4xl mx-auto bg-white py-10 px-4 sm:px-8 flex flex-col gap-10">
    <div>
      <h2 className="text-2xl font-bold mb-4">Overview</h2>
      <p className="mb-8 text-base text-gray-700 leading-relaxed">{overview}</p>
    </div>
    <div>
      <h3 className="font-semibold mb-2 text-xl">Who is this course for?</h3>
      <ul className="mb-8 list-disc list-inside text-base text-gray-700 pl-4">
        {whoFor.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </div>
    <div>
      <h3 className="font-semibold mb-2 text-xl">What you will learn</h3>
      <p className="mb-8 text-base text-gray-700 leading-relaxed">{whatLearn}</p>
    </div>
    <div>
      <h3 className="font-semibold mb-2 text-xl">Requirements</h3>
      <p className="text-base text-gray-700 leading-relaxed">{requirements}</p>
    </div>
  </section>
);

export default CourseMainContent; 