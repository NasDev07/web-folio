import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import profileImg from '../assets/profile.png';
import { GithubIcon, LinkedinIcon, MailIcon } from '../components/Icons';

const Home = () => {
    const { t } = useLanguage();

    return (
        <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center relative overflow-hidden">
            {/* Background geometric shapes */}
            <div className="absolute top-20 right-20 w-64 h-64 border border-green-500/20 rotate-45 hidden lg:block"></div>
            <div className="absolute bottom-20 left-20 w-32 h-32 border border-green-500/30 rotate-12 hidden lg:block"></div>
            <div className="absolute top-1/2 right-10 w-16 h-16 bg-green-500/10 rotate-45 hidden lg:block"></div>

            <div className="container mx-auto px-4 lg:px-6 w-full max-w-7xl">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0">
                    {/* Content Section */}
                    <div className="flex-1 max-w-2xl order-2 lg:order-1 text-center lg:text-left">
                        <div className="space-y-6">
                            <div className="text-sm text-green-400 font-mono">
                                {t.greeting}
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight">
                                {t.heroTitle}{' '}
                                <span className="text-green-400">web</span>
                            </h1>
                            <p className="text-lg sm:text-xl text-gray-300 max-w-lg mx-auto lg:mx-0">
                                {t.heroSubtitle}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                                <button className="bg-green-500 hover:bg-green-600 text-black px-8 py-3 rounded-lg font-semibold transition-colors w-full sm:w-auto">
                                    {t.getInTouch}
                                </button>
                                <button className="border border-green-500 text-green-400 hover:bg-green-500/10 px-8 py-3 rounded-lg font-semibold transition-colors w-full sm:w-auto">
                                    {t.viewProjects}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Profile Image Section */}
                    <div className="flex-shrink-0 order-1 lg:order-2 mb-6 lg:mb-0">
                        <div className="relative mx-auto lg:ml-12">
                            {/* Mobile Profile Image - Smaller */}
                            <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-green-500/30 mx-auto lg:mx-0">
                                <img
                                    src={profileImg}
                                    alt="Profile"
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                                />
                            </div>
                            <div className="absolute -bottom-3 -right-3 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                                <span className="text-xl sm:text-2xl lg:text-2xl">👋</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Social Links - Centered */}
                <div className="flex justify-center lg:justify-end space-x-4 mt-8 lg:mt-0 lg:absolute lg:bottom-8 lg:right-8">
                    <a href="#" className="text-gray-400 hover:text-green-400 transition-colors p-2">
                        <GithubIcon />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-green-400 transition-colors p-2">
                        <LinkedinIcon />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-green-400 transition-colors p-2">
                        <MailIcon />
                    </a>
                </div>

                {/* Contact Info - Mobile: Centered, Desktop: Bottom Left */}
                <div className="text-center lg:absolute lg:bottom-8 lg:left-8 text-gray-400 text-sm space-y-2 hidden sm:block">
                    <div>{t.email}</div>
                    <div>{t.phone}</div>
                </div>
            </div>
        </div>
    );
};

export default Home;