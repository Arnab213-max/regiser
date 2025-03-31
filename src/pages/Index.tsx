
import React, { useEffect, useState } from 'react';
import HeroSection from '@/components/HeroSection';
import FeatureCard from '@/components/FeatureCard';
import ProjectCard from '@/components/ProjectCard';
import TestimonialCard from '@/components/TestimonialCard';
import AnimatedSection from '@/components/AnimatedSection';
import CursorFollower from '@/components/CursorFollower';
import contentData from '@/data/content.json';

const Index = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <div className="min-h-screen">
      {!isMobile && <CursorFollower />}
      
      {/* Hero Section */}
      <HeroSection 
        title={contentData.hero.title} 
        subtitle={contentData.hero.subtitle} 
        cta={contentData.hero.cta} 
      />
      
      {/* Features Section */}
      <AnimatedSection className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Amazing Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contentData.features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              title={feature.title} 
              description={feature.description} 
              icon={feature.icon}
              index={index}
            />
          ))}
        </div>
      </AnimatedSection>
      
      {/* Projects Section */}
      <AnimatedSection className="py-20 px-4 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contentData.projects.map((project, index) => (
              <ProjectCard 
                key={index} 
                title={project.title} 
                description={project.description} 
                category={project.category}
                index={index}
              />
            ))}
          </div>
        </div>
      </AnimatedSection>
      
      {/* Testimonials Section */}
      <AnimatedSection className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">What People Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contentData.testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index} 
                text={testimonial.text} 
                author={testimonial.author} 
                role={testimonial.role}
                index={index}
              />
            ))}
          </div>
        </div>
      </AnimatedSection>
      
      {/* Footer */}
      <footer className="py-12 px-4 text-center gradient-bg text-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-lg">© 2023 Colorful Dancefloor. All rights reserved.</p>
          <p className="mt-2">Created with React, Tailwind CSS, and lots of animations</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
