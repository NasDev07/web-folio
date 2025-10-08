import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import { MenuIcon, XIcon } from './Icons';

const Navbar = () => {
    const { t } = useLanguage();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const mobileMenuRef = useRef(null);
    const menuButtonRef = useRef(null);

    const navigation = [
        { name: t.nav.home, path: '/' },
        { name: t.nav.about, path: '/about' },
        { name: t.nav.projects, path: '/projects' },
        { name: t.nav.blog, path: '/blog' }
    ];

    const isActive = (path) => location.pathname === path;

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape' && isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
                menuButtonRef.current?.focus();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isMobileMenuOpen]);

    // Handle click outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && 
                !menuButtonRef.current?.contains(event.target)) {
                setIsMobileMenuOpen(false);
            }
        };

        if (isMobileMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            return () => document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [isMobileMenuOpen]);

    return (
        <nav className="fixed top-0 w-full z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800" role="navigation" aria-label="Main navigation">
            <div className="container mx-auto px-4 lg:px-6 max-w-4xl lg:max-w-6xl">
                <div className="flex items-center justify-center lg:justify-between h-14 lg:h-16">
                    {/* Logo - Lebih compact */}
                    <Link 
                        to="/" 
                        className="flex items-center flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md"
                        aria-label="Anas Dev - Go to homepage"
                    >
                        <span className="text-xl lg:text-2xl font-bold text-green-400">Anas</span>
                        <span className="text-xl lg:text-2xl font-bold text-white ml-1 lg:ml-2">Dev</span>
                    </Link>

                    {/* Desktop Navigation - Compact */}
                    <div className="hidden md:flex items-center space-x-4 lg:space-x-6" role="menubar">
                        {navigation.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                role="menuitem"
                                className={`text-xs lg:text-sm font-medium transition-colors px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-gray-900 hover:bg-gray-800/50 ${
                                    isActive(item.path)
                                        ? 'text-green-400 bg-green-500/10'
                                        : 'text-gray-300 hover:text-white'
                                }`}
                                aria-current={isActive(item.path) ? 'page' : undefined}
                            >
                                {item.name}
                            </Link>
                        ))}
                        
                        {/* Contact Button - Lebih compact */}
                        <button 
                            className="bg-green-500 hover:bg-green-600 text-black px-4 lg:px-6 py-1.5 lg:py-2 rounded-lg font-semibold transition-colors text-xs lg:text-sm shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                            aria-label="Contact Anas Dev"
                        >
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
                                ref={menuButtonRef}
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="text-gray-300 hover:text-white p-2 rounded hover:bg-gray-800/50 transition-colors focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                                aria-expanded={isMobileMenuOpen}
                                aria-controls="mobile-menu"
                                aria-haspopup="true"
                            >
                                {isMobileMenuOpen ? <XIcon aria-hidden="true" /> : <MenuIcon aria-hidden="true" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation - Improved */}
                {isMobileMenuOpen && (
                    <div 
                        ref={mobileMenuRef}
                        id="mobile-menu"
                        className="md:hidden py-2 border-t border-gray-800 bg-gray-900/95"
                        role="menu"
                        aria-labelledby="mobile-menu-button"
                    >
                        <div className="space-y-2 px-2">
                            {navigation.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    role="menuitem"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`block w-full text-left px-3 py-2.5 text-sm font-medium transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-gray-900 ${
                                        isActive(item.path)
                                            ? 'text-green-400 bg-green-500/10'
                                            : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                                    }`}
                                    aria-current={isActive(item.path) ? 'page' : undefined}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <button 
                                className="w-full bg-green-500 hover:bg-green-600 text-black px-4 py-2.5 rounded-lg font-semibold transition-colors text-sm shadow-md mt-2 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                                aria-label="Contact Anas Dev"
                            >
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