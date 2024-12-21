import React from 'react';

interface TestimonialCardProps {
  text: string;
  author: string;
  role: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ text, author, role }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <p className="mb-4">{text}</p>
      <h4 className="text-lg font-semibold">{author}</h4>
      <p className="text-sm text-gray-500">{role}</p>
    </div>
  );
};

export default TestimonialCard; 