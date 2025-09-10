
import React, { useState } from 'react';

const ContactView: React.FC = () => {
    const [status, setStatus] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('در حال ارسال...');
        // Simulate form submission
        setTimeout(() => {
            setStatus('پیام شما با موفقیت ارسال شد! به زودی با شما تماس خواهم گرفت.');
            const form = e.target as HTMLFormElement;
            form.reset();
        }, 1500);
    };

    return (
        <section className="py-16 animate-fade-in">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">تماس با من</h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                    برای همکاری، سوال یا فقط برای سلام کردن، فرم زیر را پر کنید.
                </p>
            </div>

            <div className="mt-12 max-w-2xl mx-auto">
                <form 
                    onSubmit={handleSubmit} 
                    className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg space-y-6"
                >
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            نام شما
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            required
                            className="block w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500 transition"
                            placeholder="نام و نام خانوادگی"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            ایمیل
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            className="block w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500 transition"
                            placeholder="you@example.com"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            پیام شما
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            rows={5}
                            required
                            className="block w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500 transition"
                            placeholder="پیام خود را اینجا بنویسید..."
                        ></textarea>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-transform transform hover:scale-105"
                        >
                            ارسال پیام
                        </button>
                    </div>
                    {status && (
                        <p className="text-center text-green-600 dark:text-green-400 mt-4">
                            {status}
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
};

export default ContactView;
