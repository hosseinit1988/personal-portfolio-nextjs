
import React, { useRef } from 'react';
import useIntersectionObserver from '../useIntersectionObserver';

const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.5, triggerOnce: true });

  return (
    <section ref={sectionRef} className={`text-center py-20 sm:py-28 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          طراح و توسعه‌دهنده وب
        </h2>
        <p className={`mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
          من حسین شورگشتی هستم، یک طراح وب خلاق با اشتیاق به ساختن تجربیات کاربری زیبا، کاربردی و مدرن. به دنیای دیجیتال من خوش آمدید.
        </p>
        <div className={`mt-8 flex justify-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
          <a
            href="#portfolio"
            className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-transform transform hover:scale-105"
          >
            مشاهده نمونه کارها
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
