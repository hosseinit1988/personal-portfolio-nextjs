
import React from 'react';
import { SunIcon, MoonIcon } from '../constants';
import { View } from '../types';

interface HeaderProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  onNavigate: (view: View) => void;
  currentView: View;
}

const NavLink: React.FC<{
    onClick: () => void;
    isActive: boolean;
    children: React.ReactNode;
}> = ({ onClick, isActive, children }) => {
    return (
        <button
            onClick={onClick}
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                isActive
                    ? 'text-white bg-blue-600'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
        >
            {children}
        </button>
    );
};

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme, onNavigate, currentView }) => {
  return (
    <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 
              className="text-xl font-bold text-blue-600 dark:text-blue-400 cursor-pointer"
              onClick={() => onNavigate(View.Home)}
            >
              حسین شورگشتی
            </h1>
          </div>
          <div className="flex items-center space-i-4">
            <nav className="flex items-center space-i-4">
               <NavLink onClick={() => onNavigate(View.Home)} isActive={currentView === View.Home || currentView === View.ProjectDetail}>
                نمونه کارها
              </NavLink>
              <NavLink onClick={() => onNavigate(View.Contact)} isActive={currentView === View.Contact}>
                تماس با من
              </NavLink>
            </nav>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <MoonIcon /> : <SunIcon />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
