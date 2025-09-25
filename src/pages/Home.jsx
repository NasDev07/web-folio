import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import profileImg from '../assets/profile.png';
import { GithubIcon, LinkedinIcon, MailIcon } from '../components/Icons';

const Home = () => {
    const { t } = useLanguage();

    return (
        <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
            {/* Vite-style Hero Diagram Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <svg 
                    className="absolute inset-0 w-full h-full" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 1200 800"
                    preserveAspectRatio="xMidYMid slice"
                    style={{minHeight: '100vh'}}
                >
                    <defs>
                        {/* Base gradient for input lines */}
                        <linearGradient id="baseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#c6caff" stopOpacity="0" />
                            <stop offset="20%" stopColor="#c6caff" stopOpacity="0.1" />
                            <stop offset="40%" stopColor="white" stopOpacity="0.4" />
                            <stop offset="60%" stopColor="#c6caff" stopOpacity="0.2" />
                            <stop offset="80%" stopColor="#c6caff" stopOpacity="0.2" />
                            <stop offset="90%" stopColor="#c6caff" stopOpacity="0" />
                        </linearGradient>

                        {/* Output gradient */}
                        <linearGradient id="outputGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="10%" stopColor="#E0C8FF" stopOpacity="0" />
                            <stop offset="40%" stopColor="#E0C8FF" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#E0C8FF" stopOpacity="0" />
                        </linearGradient>

                        {/* Glow gradients for animated dots */}
                        <radialGradient id="glowJs" cx="50%" cy="50%" r="30">
                            <stop offset="0%" stopColor="#41D1FF" stopOpacity="1" />
                            <stop offset="100%" stopColor="#41D1FF" stopOpacity="0" />
                        </radialGradient>

                        <radialGradient id="glowJsx" cx="50%" cy="50%" r="30">
                            <stop offset="0%" stopColor="#BD34FE" stopOpacity="1" />
                            <stop offset="100%" stopColor="#BD34FE" stopOpacity="0" />
                        </radialGradient>

                        <radialGradient id="glowSvelte" cx="50%" cy="50%" r="30">
                            <stop offset="0%" stopColor="#ff8d67" stopOpacity="1" />
                            <stop offset="100%" stopColor="#ff8d67" stopOpacity="0" />
                        </radialGradient>

                        <radialGradient id="glowStyl" cx="50%" cy="50%" r="30">
                            <stop offset="0%" stopColor="#41D1FF" stopOpacity="1" />
                            <stop offset="100%" stopColor="#41D1FF" stopOpacity="0" />
                        </radialGradient>

                        {/* Masks for animated glow segments */}
                        <mask id="glowMask1">
                            <path d="M0 200 Q300 180 580 380 L620 390" fill="black" />
                            <circle r="30" fill="white">
                                <animateMotion dur="8s" repeatCount="indefinite">
                                    <mpath href="#inputPath1" />
                                </animateMotion>
                            </circle>
                        </mask>

                        <mask id="glowMask2">
                            <path d="M0 280 Q350 260 580 390 L620 390" fill="black" />
                            <circle r="30" fill="white">
                                <animateMotion dur="10s" repeatCount="indefinite" begin="2s">
                                    <mpath href="#inputPath2" />
                                </animateMotion>
                            </circle>
                        </mask>

                        <mask id="glowMask3">
                            <path d="M0 360 Q400 340 580 390 L620 390" fill="black" />
                            <circle r="30" fill="white">
                                <animateMotion dur="12s" repeatCount="indefinite" begin="4s">
                                    <mpath href="#inputPath3" />
                                </animateMotion>
                            </circle>
                        </mask>

                        <mask id="glowMask4">
                            <path d="M0 440 Q450 420 580 400 L620 390" fill="black" />
                            <circle r="30" fill="white">
                                <animateMotion dur="14s" repeatCount="indefinite" begin="1s">
                                    <mpath href="#inputPath4" />
                                </animateMotion>
                            </circle>
                        </mask>
                    </defs>

                    {/* Input lines from left side - all converging to center V */}
                    <g opacity="0.8">
                        {/* Line 1: .js file */}
                        <path 
                            id="inputPath1"
                            d="M0 200 Q300 180 580 380 L620 390" 
                            stroke="url(#baseGradient)" 
                            strokeWidth="1.2" 
                            fill="none"
                        />
                        <path 
                            d="M0 200 Q300 180 580 380 L620 390" 
                            stroke="url(#glowJs)" 
                            strokeWidth="1.2" 
                            fill="none"
                            mask="url(#glowMask1)"
                        />
                        
                        {/* Line 2: .json/.jsx file */}
                        <path 
                            id="inputPath2"
                            d="M0 280 Q350 260 580 390 L620 390" 
                            stroke="url(#baseGradient)" 
                            strokeWidth="1.2" 
                            fill="none"
                        />
                        <path 
                            d="M0 280 Q350 260 580 390 L620 390" 
                            stroke="url(#glowJs)" 
                            strokeWidth="1.2" 
                            fill="none"
                            mask="url(#glowMask2)"
                        />
                        
                        {/* Line 3: .html file */}
                        <path 
                            id="inputPath3"
                            d="M0 360 Q400 340 580 390 L620 390" 
                            stroke="url(#baseGradient)" 
                            strokeWidth="1.2" 
                            fill="none"
                        />
                        <path 
                            d="M0 360 Q400 340 580 390 L620 390" 
                            stroke="url(#glowJs)" 
                            strokeWidth="1.2" 
                            fill="none"
                            mask="url(#glowMask3)"
                        />

                        {/* Line 4: .svelte file */}
                        <path 
                            id="inputPath4"
                            d="M0 440 Q450 420 580 400 L620 390" 
                            stroke="url(#baseGradient)" 
                            strokeWidth="1.2" 
                            fill="none"
                        />
                        <path 
                            d="M0 440 Q450 420 580 400 L620 390" 
                            stroke="url(#glowSvelte)" 
                            strokeWidth="1.2" 
                            fill="none"
                            mask="url(#glowMask4)"
                        />

                        {/* Additional static lines for depth */}
                        <path d="M0 240 Q250 220 580 385 L620 390" stroke="url(#baseGradient)" strokeWidth="1.2" fill="none" opacity="0.8" />
                        <path d="M0 320 Q380 300 580 390 L620 390" stroke="url(#baseGradient)" strokeWidth="1.2" fill="none" opacity="0.8" />
                        <path d="M0 400 Q420 380 580 395 L620 390" stroke="url(#baseGradient)" strokeWidth="1.2" fill="none" opacity="0.8" />
                        <path d="M0 480 Q480 460 580 400 L620 390" stroke="url(#baseGradient)" strokeWidth="1.2" fill="none" opacity="0.8" />
                    </g>

                    {/* Visible animated dots on the lines */}
                    <g>
                        {/* JS dot */}
                        <circle r="3" fill="#9fe6fd">
                            <animateMotion dur="8s" repeatCount="indefinite">
                                <mpath href="#inputPath1" />
                            </animateMotion>
                            <animate attributeName="opacity" values="0.6;1;0.6" dur="8s" repeatCount="indefinite" />
                        </circle>
                        
                        {/* Svelte dot */}
                        <circle r="3" fill="#ff8d67">
                            <animateMotion dur="14s" repeatCount="indefinite" begin="1s">
                                <mpath href="#inputPath4" />
                            </animateMotion>
                            <animate attributeName="opacity" values="0.6;1;0.6" dur="14s" repeatCount="indefinite" begin="1s" />
                        </circle>
                        
                        {/* Styl dot */}
                        <circle r="3" fill="#9fe6fd">
                            <animateMotion dur="12s" repeatCount="indefinite" begin="4s">
                                <mpath href="#inputPath3" />
                            </animateMotion>
                            <animate attributeName="opacity" values="0.6;1;0.6" dur="12s" repeatCount="indefinite" begin="4s" />
                        </circle>
                    </g>

                    {/* Output lines from center to right */}
                    <g opacity="0.8">
                        {/* Output line 1: .html */}
                        <path 
                            id="outputPath1"
                            d="M620 390 Q800 350 950 360 L1200 380" 
                            stroke="url(#outputGradient)" 
                            strokeWidth="1.2" 
                            fill="none"
                        />
                        
                        {/* Output line 2: .css */}
                        <path 
                            id="outputPath2"
                            d="M620 390 Q800 390 950 390 L1200 400" 
                            stroke="url(#outputGradient)" 
                            strokeWidth="1.2" 
                            fill="none"
                        />
                        
                        {/* Output line 3: .js */}
                        <path 
                            id="outputPath3"
                            d="M620 390 Q800 430 950 420 L1200 420" 
                            stroke="url(#outputGradient)" 
                            strokeWidth="1.2" 
                            fill="none"
                        />
                    </g>

                    {/* Output traveling dots */}
                    <g>
                        {/* HTML dot */}
                        <circle r="3" fill="#E34F26">
                            <animateMotion dur="6s" repeatCount="indefinite" begin="0.5s">
                                <mpath href="#outputPath1" />
                            </animateMotion>
                            <animate attributeName="opacity" values="0.6;1;0.6" dur="6s" repeatCount="indefinite" begin="0.5s" />
                        </circle>
                        
                        {/* CSS dot */}
                        <circle r="3" fill="#1B9CE3">
                            <animateMotion dur="7s" repeatCount="indefinite" begin="1.5s">
                                <mpath href="#outputPath2" />
                            </animateMotion>
                            <animate attributeName="opacity" values="0.6;1;0.6" dur="7s" repeatCount="indefinite" begin="1.5s" />
                        </circle>
                        
                        {/* JS dot */}
                        <circle r="3" fill="#9fe6fd">
                            <animateMotion dur="8s" repeatCount="indefinite" begin="2.5s">
                                <mpath href="#outputPath3" />
                            </animateMotion>
                            <animate attributeName="opacity" values="0.6;1;0.6" dur="8s" repeatCount="indefinite" begin="2.5s" />
                        </circle>
                    </g>

                    {/* File type labels floating along paths */}
                    <g className="file-labels" fontSize="11" fontFamily="Inter, sans-serif" fill="#a3a3a3">
                        {/* Input labels */}
                        <text textAnchor="middle" alignmentBaseline="hanging">
                            <animateMotion dur="8s" repeatCount="indefinite">
                                <mpath href="#inputPath1" />
                            </animateMotion>
                            <animate attributeName="opacity" values="0;1;1;0" dur="8s" repeatCount="indefinite" />
                            .js
                        </text>

                        <text textAnchor="middle" alignmentBaseline="hanging">
                            <animateMotion dur="14s" repeatCount="indefinite" begin="1s">
                                <mpath href="#inputPath4" />
                            </animateMotion>
                            <animate attributeName="opacity" values="0;1;1;0" dur="14s" repeatCount="indefinite" begin="1s" />
                            .svelte
                        </text>

                        <text textAnchor="middle" alignmentBaseline="hanging">
                            <animateMotion dur="12s" repeatCount="indefinite" begin="4s">
                                <mpath href="#inputPath3" />
                            </animateMotion>
                            <animate attributeName="opacity" values="0;1;1;0" dur="12s" repeatCount="indefinite" begin="4s" />
                            .styl
                        </text>

                        {/* Output labels */}
                        <text textAnchor="middle" alignmentBaseline="hanging">
                            <animateMotion dur="6s" repeatCount="indefinite" begin="0.5s">
                                <mpath href="#outputPath1" />
                            </animateMotion>
                            <animate attributeName="opacity" values="0;1;1;0" dur="6s" repeatCount="indefinite" begin="0.5s" />
                            .html
                        </text>

                        <text textAnchor="middle" alignmentBaseline="hanging">
                            <animateMotion dur="7s" repeatCount="indefinite" begin="1.5s">
                                <mpath href="#outputPath2" />
                            </animateMotion>
                            <animate attributeName="opacity" values="0;1;1;0" dur="7s" repeatCount="indefinite" begin="1.5s" />
                            .css
                        </text>

                        <text textAnchor="middle" alignmentBaseline="hanging">
                            <animateMotion dur="8s" repeatCount="indefinite" begin="2.5s">
                                <mpath href="#outputPath3" />
                            </animateMotion>
                            <animate attributeName="opacity" values="0;1;1;0" dur="8s" repeatCount="indefinite" begin="2.5s" />
                            .js
                        </text>
                    </g>
                </svg>

                {/* Vite Logo/Compiler in center */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                        {/* Vite chip container */}
                        <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-gray-700/90 to-gray-900/90 backdrop-blur-sm rounded-2xl border border-gray-600/50 flex items-center justify-center shadow-2xl">
                            {/* Vite logo */}
                            <div className="w-10 h-10 lg:w-12 lg:h-12 relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-orange-500 to-purple-600 rounded-lg"></div>
                                <div className="absolute inset-0.5 bg-gray-900 rounded-lg flex items-center justify-center">
                                    <div className="text-white font-bold text-lg">DEV</div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Animated border */}
                        <div className="absolute inset-0 border border-orange-400/30 rounded-2xl animate-pulse"></div>
                        
                        {/* Processing indicators */}
                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
                        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                    </div>
                </div>

                {/* Output file indicators - Right side */}
                <div className="absolute right-2 sm:right-4 lg:right-8 top-1/2 transform -translate-y-1/2">
                    <div className="space-y-1 sm:space-y-2 text-right">
                        <div className="text-xs text-cyan-400 bg-gray-900/80 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded text-xs border border-cyan-500/30 animate-pulse">
                            .html
                        </div>
                        <div className="text-xs text-blue-400 bg-gray-900/80 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded text-xs border border-blue-500/30 animate-pulse" style={{animationDelay: '0.3s'}}>
                            .css
                        </div>
                        <div className="text-xs text-cyan-400 bg-gray-900/80 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded text-xs border border-cyan-500/30 animate-pulse" style={{animationDelay: '0.6s'}}>
                            .js
                        </div>
                    </div>
                </div>

                {/* Small grid icon - Left side below center */}
                <div className="absolute left-1/2 bottom-1/4 sm:top-3/4 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-4 h-4 sm:w-6 sm:h-6 grid grid-cols-2 gap-0.5 opacity-40">
                        <div className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 bg-blue-400 rounded-sm"></div>
                        <div className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 bg-blue-400 rounded-sm"></div>
                        <div className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 bg-blue-400 rounded-sm"></div>
                        <div className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 bg-blue-400 rounded-sm"></div>
                    </div>
                </div>

                {/* Pink indicator top right */}
                <div className="absolute top-12 sm:top-20 right-8 sm:right-16 opacity-30">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-pink-500 rounded-sm animate-pulse"></div>
                </div>

                {/* Floating particles - Hidden on mobile for performance */}
                <div className="absolute top-16 left-16 w-1 h-1 bg-cyan-400 rounded-full animate-bounce opacity-60 hidden sm:block"></div>
                <div className="absolute bottom-20 right-20 w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce opacity-60 hidden sm:block" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute top-32 right-32 w-1 h-1 bg-pink-400 rounded-full animate-bounce opacity-60 hidden sm:block" style={{animationDelay: '1s'}}></div>
                <div className="absolute bottom-32 left-32 w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce opacity-60 hidden sm:block" style={{animationDelay: '1.5s'}}></div>
            </div>

            {/* Main content - responsive improvements */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-6 w-full max-w-4xl lg:max-w-6xl relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-4 sm:gap-6 lg:gap-12 py-4 sm:py-8 min-h-screen lg:min-h-0">
                    {/* Content Section */}
                    <div className="flex-1 max-w-xs sm:max-w-md lg:max-w-lg order-2 lg:order-1 text-center lg:text-left">
                        <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                            <div className="text-xs sm:text-sm lg:text-sm text-green-400 font-mono">
                                {t.greeting}
                            </div>
                            <h1 className="text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                                <br className="sm:hidden" />
                                <span className="text-green-400">{t.heroTitle.split(' ')}</span>
                            </h1>
                            <p className="text-sm sm:text-base lg:text-xl text-gray-300 leading-relaxed">
                                {t.heroSubtitle}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:gap-4 justify-center lg:justify-start pt-2">
                                <button className="bg-green-500 hover:bg-green-600 text-black px-4 py-2 sm:px-6 sm:py-2.5 lg:px-8 lg:py-3 rounded-lg font-semibold transition-colors text-sm lg:text-base w-full sm:w-auto shadow-md hover:shadow-lg">
                                    {t.getInTouch}
                                </button>
                                <button className="border border-green-500 text-green-400 hover:bg-green-500/10 px-4 py-2 sm:px-6 sm:py-2.5 lg:px-8 lg:py-3 rounded-lg font-semibold transition-colors text-sm lg:text-base w-full sm:w-auto">
                                    {t.viewProjects}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Profile Image Section */}
                    <div className="flex-shrink-0 order-1 lg:order-2 mb-4 sm:mb-6 lg:mb-0">
                        <div className="relative mx-auto lg:ml-0">
                            <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-64 lg:h-64 xl:w-72 xl:h-72 rounded-full overflow-hidden border-2 sm:border-4 border-green-500/30 mx-auto lg:mx-0 shadow-2xl">
                                <img
                                    src={profileImg}
                                    alt="Profile"
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                                />
                            </div>
                            <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-20 lg:h-20 bg-green-500 rounded-full flex items-center justify-center shadow-lg border-1 sm:border-2 border-white/20">
                                <span className="text-sm sm:text-lg md:text-xl lg:text-2xl">👋</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section - Social & Contact */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 lg:gap-0 pb-4 sm:pb-6 lg:pt-0">
                    {/* Social Links */}
                    <div className="flex justify-center lg:justify-start space-x-3 sm:space-x-4 lg:space-x-6">
                        <a href="https://github.com/NasDev07" target='_blank' className="text-gray-400 hover:text-green-400 transition-colors p-1.5 sm:p-2 hover:p-2 sm:hover:p-3 rounded-full bg-gray-800/50 hover:bg-green-500/10" aria-label="GitHub">
                            <GithubIcon />
                        </a>
                        <a href="https://www.linkedin.com/in/nas-ruddin/" target='_blank' className="text-gray-400 hover:text-green-400 transition-colors p-1.5 sm:p-2 hover:p-2 sm:hover:p-3 rounded-full bg-gray-800/50 hover:bg-green-500/10" aria-label="LinkedIn">
                            <LinkedinIcon />
                        </a>
                        <a href="mailto:nasruddin20182019@gmail.com" target='_blank' className="text-gray-400 hover:text-green-400 transition-colors p-1.5 sm:p-2 hover:p-2 sm:hover:p-3 rounded-full bg-gray-800/50 hover:bg-green-500/10" aria-label="Email">
                            <MailIcon />
                        </a>
                    </div>

                    {/* Contact Info */}
                    <div className="text-center lg:text-left text-gray-400 text-xs lg:text-sm space-y-0.5 sm:space-y-1 lg:space-y-2 hidden sm:block">
                        <div className="flex items-center gap-1 sm:gap-2 justify-center lg:justify-start">
                            <span className="text-green-400">📧</span>
                            <span className="text-xs sm:text-sm">{t.email}</span>
                        </div>
                        <div className="flex items-center gap-1 sm:gap-2 justify-center lg:justify-start">
                            <span className="text-green-400">📞</span>
                            <span className="text-xs sm:text-sm">{t.phone}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;