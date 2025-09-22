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
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <span className="text-2xl font-bold text-green-400">Anas</span>
                        <span className="text-2xl font-bold text-white ml-2">Dev</span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`text-sm font-medium transition-colors ${isActive(item.path)
                                        ? 'text-green-400'
                                        : 'text-gray-300 hover:text-white'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <button className="bg-green-500 hover:bg-green-600 text-black px-6 py-2 rounded-lg font-semibold transition-colors">
                            {t.nav.contact}
                        </button>
                        {/* Language Switcher */}
                        <LanguageSwitcher />
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center space-x-4">
                        <LanguageSwitcher />
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-gray-300 hover:text-white"
                        >
                            {isMobileMenuOpen ? <XIcon /> : <MenuIcon />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-800">
                        <div className="space-y-4">
                            {navigation.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors ${isActive(item.path)
                                            ? 'text-green-400'
                                            : 'text-gray-300 hover:text-white'
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <button className="w-full bg-green-500 hover:bg-green-600 text-black px-6 py-2 rounded-lg font-semibold transition-colors mt-4">
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