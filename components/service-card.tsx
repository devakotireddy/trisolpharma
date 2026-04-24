import { ReactNode } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  details: string[];
}

export default function ServiceCard({ title, description, icon, details }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border-t-4 border-orange-500">
      {/* Icon */}
      <div className="text-orange-500 mb-4 text-5xl">{icon}</div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>

      {/* Description */}
      <p className="text-gray-700 mb-4 text-base leading-relaxed">{description}</p>

      {/* Details List */}
      <ul className="space-y-2 text-gray-600">
        {details.map((detail, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-orange-500 font-bold mt-1">✓</span>
            <span>{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
