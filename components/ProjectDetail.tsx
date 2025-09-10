
import React from 'react';
import { Project } from '../types';
import { BackArrowIcon } from '../constants';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  return (
    <div className="max-w-4xl mx-auto py-8 animate-fade-in">
      <button
        onClick={onBack}
        className="flex items-center gap-2 mb-8 text-blue-600 dark:text-blue-400 hover:underline font-semibold"
      >
        <BackArrowIcon />
        بازگشت به نمونه کارها
      </button>

      <article>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">{project.title}</h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 mb-8">{project.category}</p>

        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-auto rounded-xl shadow-lg mb-8"
        />

        <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">درباره پروژه</h2>
          <p>{project.longDescription}</p>
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">تکنولوژی‌های استفاده شده</h3>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span key={tech} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-1.5 rounded-full text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {project.liveLink && (
           <div className="mt-12">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-transform transform hover:scale-105"
            >
              مشاهده نسخه زنده
            </a>
          </div>
        )}
      </article>
    </div>
  );
};

export default ProjectDetail;
