import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import { MenuIcon, XIcon } from './Icons';

const Navbar = () => {
    const { t } = useLanguage();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    const navigation = [
        { name: t.nav.home, path: '/' },
        { name: t.nav.about, path: '/about' },
        { name: t.nav.projects, path: '/projects' },
        { name: t.nav.blog, path: '/blog' }
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="fixed top-0 w-full z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
            <div className="container mx-auto px-4 lg:px-6 max-w-4xl lg:max-w-6xl">
                <div className="flex items-center justify-center lg:justify-between h-14 lg:h-16">
                    {/* Logo - Lebih compact */}
                    <Link to="/" className="flex items-center flex-shrink-0">
                        <span className="text-xl lg:text-2xl font-bold text-green-400">Anas</span>
                        <span className="text-xl lg:text-2xl font-bold text-white ml-1 lg:ml-2">Dev</span>
                    </Link>

                    {/* Desktop Navigation - Compact */}
                    <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
                        {navigation.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`text-xs lg:text-sm font-medium transition-colors px-2 py-1 rounded hover:bg-gray-800/50 ${
                                    isActive(item.path)
                                        ? 'text-green-400 bg-green-500/10'
                                        : 'text-gray-300 hover:text-white'
                                }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                        
                        {/* Contact Button - Lebih compact */}
                        <button className="bg-green-500 hover:bg-green-600 text-black px-4 lg:px-6 py-1.5 lg:py-2 rounded-lg font-semibold transition-colors text-xs lg:text-sm shadow-md hover:shadow-lg">
                            {t.nav.contact}
                        </button>
                    </div>

                    {/* Right Section - Language + Mobile Menu */}
                    <div className="flex items-center space-x-2 lg:space-x-3">
                        {/* Language Switcher */}
                        <LanguageSwitcher />
                        
                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="text-gray-300 hover:text-white p-2 rounded hover:bg-gray-800/50 transition-colors"
                                aria-label="Toggle menu"
                            >
                                {isMobileMenuOpen ? <XIcon /> : <MenuIcon />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation - Improved */}
                {isMobileMenuOpen && (
                    <div className="md:hidden py-2 border-t border-gray-800 bg-gray-900/95">
                        <div className="space-y-2 px-2">
                            {navigation.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`block w-full text-left px-3 py-2.5 text-sm font-medium transition-colors rounded-lg ${
                                        isActive(item.path)
                                            ? 'text-green-400 bg-green-500/10'
                                            : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                                    }`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <button className="w-full bg-green-500 hover:bg-green-600 text-black px-4 py-2.5 rounded-lg font-semibold transition-colors text-sm shadow-md mt-2">
                                {t.nav.contact}
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;