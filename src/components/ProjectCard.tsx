
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface ProjectProps {
  title: string;
  description: string;
  category: string;
  index: number;
}

const ProjectCard = ({ title, description, category, index }: ProjectProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const bgColors = [
    'from-purple-500 to-blue-500',
    'from-blue-500 to-cyan-500',
    'from-pink-500 to-purple-500',
    'from-orange-500 to-pink-500',
  ];
  
  const colorClass = bgColors[index % bgColors.length];
  
  return (
    <Card 
      className={`overflow-hidden cursor-pointer transition-all duration-500 animate-zoom-in h-full`}
      style={{ animationDelay: `${index * 0.15}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={`h-24 bg-gradient-to-r ${colorClass} transition-all duration-500 ${isHovered ? 'h-full' : 'h-24'}`}
      ></div>
      <CardContent className={`relative transition-all duration-500 transform ${isHovered ? '-translate-y-full bg-transparent' : 'bg-white'}`}>
        <div className={`p-4 transition-colors duration-500 ${isHovered ? 'text-white' : 'text-gray-800'}`}>
          <div className="text-sm font-medium mb-2 opacity-75">{category}</div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className={`transition-opacity duration-500 ${isHovered ? 'opacity-90' : 'opacity-70'}`}>
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
