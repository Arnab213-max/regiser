
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface TestimonialProps {
  text: string;
  author: string;
  role: string;
  index: number;
}

const TestimonialCard = ({ text, author, role, index }: TestimonialProps) => {
  return (
    <Card 
      className="h-full hover:shadow-lg transition-all duration-300 overflow-hidden animate-slide-up"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <CardContent className="p-6">
        <div className="mb-4 text-4xl text-primary">"</div>
        <p className="text-lg mb-4 italic">{text}</p>
        <div className="border-t pt-4">
          <p className="font-bold">{author}</p>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
