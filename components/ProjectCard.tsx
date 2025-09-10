
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onSelect: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <div
      onClick={onSelect}
      className="group cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white dark:bg-gray-800"
    >
      <div className="relative overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-50 transition-all duration-300"></div>
        <div className="absolute bottom-0 right-0 p-4">
          <span className="text-sm bg-blue-600 text-white px-3 py-1 rounded-full">{project.category}</span>
        </div>
      </div>
      <div className="p-6">
        <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h4>
        <p className="text-gray-600 dark:text-gray-400 text-sm">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
