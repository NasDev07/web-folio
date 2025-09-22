import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import profileImg from '../assets/profile.png';
import { GithubIcon, LinkedinIcon, MailIcon } from '../components/Icons';

const Home = () => {
    const { t } = useLanguage();

    return (
        <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center relative overflow-hidden">
            {/* Background geometric shapes - Lebih kecil dan responsive */}
            <div className="absolute top-10 right-4 w-32 h-32 lg:w-48 lg:h-48 border border-green-500/20 rotate-45 hidden md:block"></div>
            <div className="absolute bottom-10 left-4 w-20 h-20 lg:w-24 lg:h-24 border border-green-500/30 rotate-12 hidden md:block"></div>
            <div className="absolute top-1/2 right-4 w-8 h-8 lg:w-12 lg:h-12 bg-green-500/10 rotate-45 hidden md:block"></div>

            <div className="container mx-auto px-4 lg:px-6 w-full max-w-4xl lg:max-w-6xl">
                <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-6 lg:gap-12 py-8">
                    {/* Content Section - Lebih compact */}
                    <div className="flex-1 max-w-md lg:max-w-lg order-2 lg:order-1 text-center lg:text-left">
                        <div className="space-y-4 lg:space-y-6">
                            <div className="text-xs lg:text-sm text-green-400 font-mono">
                                {t.greeting}
                            </div>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                                {t.heroTitle.split(' ')[0]}<br className="sm:hidden" />
                                <span className="text-green-400">{t.heroTitle.split(' ')[1]}</span>
                            </h1>
                            <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
                                {t.heroSubtitle}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center lg:justify-start pt-2">
                                <button className="bg-green-500 hover:bg-green-600 text-black px-6 py-2.5 lg:px-8 lg:py-3 rounded-lg font-semibold transition-colors text-sm lg:text-base w-full sm:w-auto shadow-md hover:shadow-lg">
                                    {t.getInTouch}
                                </button>
                                <button className="border border-green-500 text-green-400 hover:bg-green-500/10 px-6 py-2.5 lg:px-8 lg:py-3 rounded-lg font-semibold transition-colors text-sm lg:text-base w-full sm:w-auto">
                                    {t.viewProjects}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Profile Image Section - Lebih proporsional */}
                    <div className="flex-shrink-0 order-1 lg:order-2 mb-6 lg:mb-0">
                        <div className="relative mx-auto lg:ml-0">
                            {/* Profile Image - Ukuran lebih pas */}
                            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-72 xl:h-72 rounded-full overflow-hidden border-4 border-green-500/30 mx-auto lg:mx-0 shadow-2xl">
                                <img
                                    src={profileImg}
                                    alt="Profile"
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                                />
                            </div>
                            <div className="absolute -bottom-2 -right-2 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-green-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white/20">
                                <span className="text-lg sm:text-xl md:text-2xl">👋</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section - Social & Contact - Lebih compact */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 lg:gap-0 pt-6 lg:pt-0">
                    {/* Social Links */}
                    <div className="flex justify-center lg:justify-start space-x-4 lg:space-x-6">
                        <a href="#" className="text-gray-400 hover:text-green-400 transition-colors p-2 hover:p-3 rounded-full bg-gray-800/50 hover:bg-green-500/10" aria-label="GitHub">
                            <GithubIcon />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-green-400 transition-colors p-2 hover:p-3 rounded-full bg-gray-800/50 hover:bg-green-500/10" aria-label="LinkedIn">
                            <LinkedinIcon />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-green-400 transition-colors p-2 hover:p-3 rounded-full bg-gray-800/50 hover:bg-green-500/10" aria-label="Email">
                            <MailIcon />
                        </a>
                    </div>

                    {/* Contact Info - Lebih compact */}
                    <div className="text-center lg:text-left text-gray-400 text-xs lg:text-sm space-y-1 lg:space-y-2 hidden sm:block">
                        <div className="flex items-center gap-2">
                            <span className="text-green-400">📧</span>
                            {t.email}
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-green-400">📞</span>
                            {t.phone}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;