import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-gray-500 dark:text-gray-400">
        <div className="flex justify-center space-i-6 mb-4">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
            >
              <social.icon />
            </a>
          ))}
        </div>
        <p>&copy; {new Date().getFullYear()} حسین شورگشتی. تمام حقوق محفوظ است.</p>
      </div>
    </footer>
  );
};

export default Footer;
