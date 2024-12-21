import React from 'react';

interface CounterCardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
}

const CounterCard: React.FC<CounterCardProps> = ({ title, value, icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
};

export default CounterCard; 