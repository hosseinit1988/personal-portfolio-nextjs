
import React, { useRef } from 'react';
import { Project } from '../types';
import ProjectCard from './ProjectCard';
import useIntersectionObserver from '../useIntersectionObserver';

interface PortfolioGridProps {
  projects: Project[];
  onProjectSelect: (project: Project) => void;
}

const PortfolioGrid: React.FC<PortfolioGridProps> = ({ projects, onProjectSelect }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1, triggerOnce: true });

  return (
    <section ref={sectionRef} id="portfolio" className="py-16">
      <div className={`text-center mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">نمونه کارهای من</h3>
        <p className="mt-4 text-md text-gray-600 dark:text-gray-400">نگاهی به برخی از پروژه‌هایی که با عشق و علاقه ساخته‌ام.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={isVisible ? 'animate-fade-in-up' : 'opacity-0'}
            style={{ animationDelay: isVisible ? `${index * 0.1 + 0.2}s` : '0s' }}
          >
            <ProjectCard project={project} onSelect={() => onProjectSelect(project)} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioGrid;
