import React from 'react';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  image: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, excerpt, date, image }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-500 mb-4">{date}</p>
        <p>{excerpt}</p>
      </div>
    </div>
  );
};

export default BlogCard; 