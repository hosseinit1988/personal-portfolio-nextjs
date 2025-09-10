import React from 'react';
import { Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'پلتفرم تجارت الکترونیک مدرن',
    category: 'وب اپلیکیشن',
    imageUrl: 'https://picsum.photos/seed/project1/800/600',
    description: 'یک پلتفرم فروشگاهی کامل با پنل مدیریت و طراحی واکنش‌گرا.',
    longDescription: 'این پروژه یک فروشگاه آنلاین پیشرفته است که با استفاده از جدیدترین تکنولوژی‌ها ساخته شده. دارای قابلیت‌هایی مانند سبد خرید، پرداخت آنلاین، مدیریت محصولات و کاربران می‌باشد. طراحی کاملاً واکنش‌گرا بوده و تجربه کاربری بی‌نظیری را در دستگاه‌های مختلف ارائه می‌دهد.',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    liveLink: '#',
  },
  {
    id: 2,
    title: 'داشبورد تحلیل داده',
    category: 'تجزیه و تحلیل',
    imageUrl: 'https://picsum.photos/seed/project2/800/600',
    description: 'داشبورد مدیریتی برای بصری‌سازی و تحلیل داده‌های فروش.',
    longDescription: 'این داشبورد به مدیران کسب‌وکار اجازه می‌دهد تا داده‌های فروش را به صورت لحظه‌ای مشاهده و تحلیل کنند. با استفاده از نمودارها و گزارش‌های تعاملی، اطلاعات کلیدی به شکلی ساده و قابل فهم نمایش داده می‌شود. این پروژه با تمرکز بر عملکرد و سرعت بالا توسعه یافته است.',
    technologies: ['Vue.js', 'D3.js', 'Firebase', 'Sass'],
    liveLink: '#',
  },
  {
    id: 3,
    title: 'اپلیکیشن رزرو آنلاین',
    category: 'سرویس آنلاین',
    imageUrl: 'https://picsum.photos/seed/project3/800/600',
    description: 'یک سیستم یکپارچه برای رزرو وقت در کلینیک‌های پزشکی.',
    longDescription: 'این اپلیکیشن فرآیند رزرو وقت را برای بیماران و مدیریت نوبت‌ها را برای کلینیک‌ها ساده می‌کند. کاربران می‌توانند بر اساس تخصص پزشک و زمان مورد نظر، وقت خود را رزرو کنند. این سیستم دارای پنل مدیریتی برای پزشکان و منشی‌ها نیز می‌باشد.',
    technologies: ['Angular', 'NgRx', 'Express.js', 'MongoDB'],
    liveLink: '#',
  },
  {
    id: 4,
    title: 'وبسایت شخصی و وبلاگ',
    category: 'طراحی وب',
    imageUrl: 'https://picsum.photos/seed/project4/800/600',
    description: 'طراحی و پیاده‌سازی وبسایت شخصی با تمرکز بر زیبایی و سئو.',
    longDescription: 'این پروژه شامل طراحی یک وبسایت شخصی مدرن با بخش وبلاگ است. تمرکز اصلی بر روی بهینه‌سازی برای موتورهای جستجو (SEO)، سرعت بارگذاری بالا و طراحی منحصر به فرد بوده است. از یک سیستم مدیریت محتوای ساده برای مدیریت پست‌های وبلاگ استفاده شده است.',
    technologies: ['Next.js', 'React', 'GraphQL', 'Styled Components'],
    liveLink: '#',
  },
   {
    id: 5,
    title: 'پلتفرم آموزشی آنلاین',
    category: 'آموزش',
    imageUrl: 'https://picsum.photos/seed/project5/800/600',
    description: 'یک پلتفرم جامع برای برگزاری و شرکت در دوره‌های آموزشی آنلاین.',
    longDescription: 'این پلتفرم امکان ایجاد، مدیریت و فروش دوره‌های آموزشی را برای اساتید فراهم می‌کند. دانشجویان می‌توانند در دوره‌ها ثبت‌نام کرده، ویدیوها را تماشا کنند و با اساتید در ارتباط باشند. سیستم آزمون آنلاین و صدور گواهینامه نیز در این پروژه پیاده‌سازی شده است.',
    technologies: ['React', 'Redux', 'Django', 'REST API'],
    liveLink: '#',
  },
  {
    id: 6,
    title: 'اپلیکیشن مدیریت پروژه',
    category: 'ابزار مدیریتی',
    imageUrl: 'https://picsum.photos/seed/project6/800/600',
    description: 'ابزاری برای تیم‌ها جهت مدیریت وظایف و پروژه‌ها به صورت بصری.',
    longDescription: 'این اپلیکیشن با الهام از متدولوژی کانبان، به تیم‌ها کمک می‌کند تا وظایف خود را به صورت کارت‌هایی در بوردهای مختلف سازماندهی کنند. قابلیت‌هایی مانند تعیین مسئول، موعد مقرر، و پیوست فایل‌ها به هر وظیفه وجود دارد.',
    technologies: ['Svelte', 'TypeScript', 'PocketBase', 'Tailwind CSS'],
    liveLink: '#',
  },
];

export const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

export const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);

export const BackArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l-5 5 5 5M7 8l5 5-5 5" transform="scale(-1, 1) translate(-24, 0)" />
    </svg>
);

export const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
);

export const GitHubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
);

export const TwitterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.298 1.634 4.212 3.793 4.649-.41.112-.85.17-1.296.17-.305 0-.6-.03-.89-.084.629 1.884 2.445 3.256 4.604 3.295-1.616 1.267-3.646 2.022-5.854 2.022-.38 0-.755-.022-1.124-.067 2.089 1.348 4.582 2.126 7.24 2.126 8.683 0 13.44-7.222 13.44-13.442 0-.205-.005-.409-.013-.612.923-.668 1.72-1.5 2.355-2.446z"/>
    </svg>
);

export const SOCIAL_LINKS = [
    {
        name: 'GitHub',
        url: 'https://github.com',
        icon: GitHubIcon,
    },
    {
        name: 'LinkedIn',
        url: 'https://linkedin.com',
        icon: LinkedInIcon,
    },
    {
        name: 'Twitter',
        url: 'https://twitter.com',
        icon: TwitterIcon,
    },
];
