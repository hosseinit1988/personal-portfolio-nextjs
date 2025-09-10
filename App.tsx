
import React, { useState, useEffect, useCallback } from 'react';
import { Project, View } from './types';
import { PROJECTS } from './constants';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import PortfolioGrid from './components/PortfolioGrid';
import ProjectDetail from './components/ProjectDetail';
import ContactView from './components/ContactView';

type Theme = 'light' | 'dark';

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('light');
  const [view, setView] = useState<View>(View.Home);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Initial theme setup
    const savedTheme = localStorage.getItem('theme') as Theme;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    // Apply theme class to HTML element
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);
  
  const toggleTheme = useCallback(() => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  }, []);
  
  const handleNavigate = useCallback((newView: View, project: Project | null = null) => {
    // Prevent re-triggering transition for the same view
    if (view === newView && project?.id === selectedProject?.id) return;

    setIsTransitioning(true); // Start fade-out

    // Wait for fade-out transition to complete
    setTimeout(() => {
      setView(newView);
      setSelectedProject(newView === View.ProjectDetail ? project : null);
      window.scrollTo(0, 0);
      
      // Defer the fade-in to the next paint to ensure DOM is updated.
      requestAnimationFrame(() => {
        setIsTransitioning(false); // Start fade-in
      });
    }, 300); // This duration must match the CSS transition duration
  }, [view, selectedProject]);

  const renderContent = () => {
    switch (view) {
      case View.ProjectDetail:
        return selectedProject && <ProjectDetail project={selectedProject} onBack={() => handleNavigate(View.Home)} />;
      case View.Contact:
        return <ContactView />;
      case View.Home:
      default:
        return (
          <>
            <Hero />
            <PortfolioGrid projects={PROJECTS} onProjectSelect={(project) => handleNavigate(View.ProjectDetail, project)} />
          </>
        );
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen font-sans transition-colors duration-300">
      <Header 
        theme={theme} 
        toggleTheme={toggleTheme}
        onNavigate={handleNavigate}
        currentView={view}
      />
      <main className={`container mx-auto px-4 sm:px-6 lg:px-8 py-8 transition-opacity duration-300 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
