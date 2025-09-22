import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import profileImg from '../assets/profile.png';
import { GithubIcon, LinkedinIcon, MailIcon } from '../components/Icons';

const Home = () => {
    const { t } = useLanguage();

    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Background geometric shapes */}
            <div className="absolute top-20 right-20 w-64 h-64 border border-green-500/20 rotate-45 hidden lg:block"></div>
            <div className="absolute bottom-20 left-20 w-32 h-32 border border-green-500/30 rotate-12 hidden lg:block"></div>
            <div className="absolute top-1/2 right-10 w-16 h-16 bg-green-500/10 rotate-45 hidden lg:block"></div>

            <div className="container mx-auto px-6 flex items-center justify-between">
                <div className="flex-1 max-w-2xl">
                    <div className="space-y-6">
                        <div className="text-sm text-green-400 font-mono">
                            {t.greeting}
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                            {t.heroTitle}{' '}
                            <span className="text-green-400">web</span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-lg">
                            {t.heroSubtitle}
                        </p>
                        <div className="flex space-x-4 pt-4">
                            <button className="bg-green-500 hover:bg-green-600 text-black px-8 py-3 rounded-lg font-semibold transition-colors">
                                {t.getInTouch}
                            </button>
                            <button className="border border-green-500 text-green-400 hover:bg-green-500/10 px-8 py-3 rounded-lg font-semibold transition-colors">
                                {t.viewProjects}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Profile Image */}
                <div className="hidden lg:block flex-shrink-0 ml-12">
                    <div className="relative">
                        <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-green-500/30">
                            <img
                                src={profileImg}
                                alt="Profile"
                                className="w-full h-full object-cover grayscale"
                            />
                        </div>
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-500 rounded-full flex items-center justify-center">
                            <span className="text-2xl">👋</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Info */}
            <div className="absolute bottom-8 left-8 text-gray-400 text-sm space-y-2 hidden lg:block">
                <div>{t.email}</div>
                <div>{t.phone}</div>
            </div>

            {/* Social Links */}
            <div className="absolute bottom-8 right-8 flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                    <GithubIcon />
                </a>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                    <LinkedinIcon />
                </a>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                    <MailIcon />
                </a>
            </div>
        </div>
    );
};

export default Home;