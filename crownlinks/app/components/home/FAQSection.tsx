'use client';

import { useState } from 'react';

const faqData = [
  {
    question: "Is this software right for my gym?",
    answer: "Our software is highly customizable and designed to fit a wide range of gym sizes and types, from small studios to large fitness centers. It offers features for membership management, class scheduling, billing, and member communication. We recommend exploring our features page or contacting us for a personalized demo to see how it specifically meets your gym's needs.",
  },
  {
    question: "What are the pricing plans?",
    answer: "We offer various pricing tiers designed to accommodate different business sizes and feature requirements. Our plans typically include options for basic membership management, advanced scheduling, marketing integrations, and dedicated support. Please visit our pricing page for detailed information or contact our sales team to find the best plan for you.",
  },
  {
    question: "How do I get started?",
    answer: "Getting started is easy! You can sign up for a free trial directly on our website to explore the basic features. For a more guided experience, we offer onboarding sessions and dedicated support to help you set up your gym's data, customize settings, and train your staff. Our goal is to make your transition smooth and efficient.",
  },
  {
    question: "Do you offer customer support?",
    answer: "Absolutely! We provide comprehensive customer support through multiple channels, including email, live chat, and phone. Our support team is available during business hours to assist with any questions, technical issues, or guidance you might need to maximize your use of the software. We also have an extensive knowledge base and FAQ section for self-service.",
  },
  {
    question: "Can I integrate it with other tools?",
    answer: "Yes, our software is built with flexibility in mind and supports integrations with a variety of popular third-party tools. This includes payment gateways, accounting software, marketing platforms, and more. We continuously work on expanding our integration capabilities to provide a seamless workflow for your gym operations. Check our integrations page for the full list or inquire about specific tools.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-9xl mx-auto px-6 sm:px-8 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#242424] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg sm:text-xl text-gray-700">
            We answered your questions so you don't have to ask them.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 py-4">
              <button
                className="flex justify-between items-center w-full text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg sm:text-xl font-semibold text-[#242424]">
                  {faq.question}
                </span>
                <svg
                  className={`h-6 w-6 text-gray-500 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <p className="mt-4 text-gray-700 text-base sm:text-lg leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 