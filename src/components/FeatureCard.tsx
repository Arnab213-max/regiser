
import React from 'react';
import { Play, Loader, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  index: number;
}

const FeatureCard = ({ title, description, icon, index }: FeatureCardProps) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'play':
        return <Play className="h-10 w-10 text-primary" />;
      case 'loader':
        return <Loader className="h-10 w-10 text-primary animate-spin" />;
      case 'arrow-right':
        return <ArrowRight className="h-10 w-10 text-primary" />;
      default:
        return <Play className="h-10 w-10 text-primary" />;
    }
  };

  return (
    <Card 
      className="card p-6 h-full hover:shadow-xl transition-shadow duration-300 animate-zoom-in"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className="mb-4">{getIcon(icon)}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Card>
  );
};

export default FeatureCard;
