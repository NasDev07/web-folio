import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

// Custom SVG Icons untuk setiap skill
const SkillIcons = {
  // Row 1
  Replit: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M12 2L2 7v10l10 5 10-5V7l-10-5z"/>
      <path d="M12 7l5 2.5v5L12 17l-5-2.5v-5L12 7z" opacity="0.7"/>
    </svg>
  ),
  React: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <circle cx="12" cy="12" r="2"/>
      <ellipse cx="12" cy="12" rx="8" ry="3" fill="none" stroke="currentColor" strokeWidth="1"/>
      <ellipse cx="12" cy="12" rx="8" ry="3" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(60 12 12)"/>
      <ellipse cx="12" cy="12" rx="8" ry="3" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(-60 12 12)"/>
    </svg>
  ),
  Angular: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M12 2L3 6l1.5 12L12 22l7.5-4L21 6l-9-4z"/>
      <path d="M12 6.5L8.5 16h2l1-2.5h3l1 2.5h2L12 6.5z" fill="white"/>
      <path d="M10.5 12L12 8.5 13.5 12h-3z" fill="currentColor"/>
    </svg>
  ),
  Vue: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M12 2L4 4v16l8 2 8-2V4l-8-2z"/>
      <path d="M12 4L7 18h2.5L12 10l2.5 8H17L12 4z" fill="white"/>
    </svg>
  ),
  Cloudflare: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M3 12h18v2H3z"/>
      <path d="M5 8h14v2H5z"/>
      <path d="M7 16h10v2H7z"/>
      <circle cx="12" cy="6" r="2"/>
    </svg>
  ),
  Svelte: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M16.5 7.5c-1.5-2-4-2.5-6-1.5L8 7.5c-2 1-2.5 3.5-1.5 5.5l2 2.5c1.5 2 4 2.5 6 1.5l2.5-1.5c2-1 2.5-3.5 1.5-5.5L16.5 7.5z"/>
      <circle cx="10" cy="10" r="2" fill="white"/>
      <circle cx="14" cy="14" r="2" fill="white"/>
    </svg>
  ),
  Remix: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M12 2L2 22h20L12 2z"/>
      <path d="M12 8L8 18h8L12 8z" fill="white"/>
    </svg>
  ),
  // Row 2
  Astro: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M12 2l3 6h6l-5 4 2 6-6-4-6 4 2-6-5-4h6z"/>
      <circle cx="12" cy="12" r="3" fill="white"/>
    </svg>
  ),
  RemixIcon: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <rect x="4" y="4" width="16" height="16" rx="2"/>
      <path d="M8 8h8v8H8z" fill="white"/>
      <circle cx="12" cy="12" r="2" fill="currentColor"/>
    </svg>
  ),
  Alpine: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M12 2L4 18h16L12 2z"/>
      <path d="M12 6L8 14h8L12 6z" fill="white"/>
    </svg>
  ),
  HeadlessUI: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <rect x="3" y="6" width="18" height="12" rx="2"/>
      <path d="M7 10h10v4H7z" fill="white"/>
    </svg>
  ),
  Heroicons: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <rect x="4" y="4" width="16" height="16" rx="8"/>
      <path d="M12 8v8M8 12h8" stroke="white" strokeWidth="2"/>
    </svg>
  ),
  FramerMotion: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M12 2L2 12l10 10 10-10L12 2z"/>
      <path d="M12 6L6 12l6 6 6-6-6-6z" fill="white"/>
    </svg>
  ),
  Storybook: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <rect x="5" y="3" width="14" height="18" rx="1"/>
      <rect x="7" y="6" width="10" height="2" fill="white"/>
      <rect x="7" y="10" width="8" height="2" fill="white"/>
      <rect x="7" y="14" width="6" height="2" fill="white"/>
    </svg>
  ),
  // Row 3
  Shopify: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M3 6h18v12H3z"/>
      <path d="M7 10h10v4H7z" fill="white"/>
      <circle cx="6" cy="6" r="2"/>
      <circle cx="18" cy="6" r="2"/>
    </svg>
  ),
  VueUse: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <rect x="6" y="6" width="12" height="12" rx="2"/>
      <path d="M10 10h4v4h-4z" fill="white"/>
      <circle cx="12" cy="4" r="2"/>
    </svg>
  ),
  Ubuntu: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <circle cx="12" cy="12" r="10"/>
      <circle cx="12" cy="12" r="6" fill="white"/>
      <circle cx="12" cy="12" r="3" fill="currentColor"/>
      <circle cx="6" cy="12" r="2"/>
      <circle cx="18" cy="12" r="2"/>
      <circle cx="12" cy="6" r="2"/>
      <circle cx="12" cy="18" r="2"/>
    </svg>
  ),
  Linear: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <circle cx="12" cy="12" r="10"/>
      <path d="M8 8l8 8M8 16l8-8" stroke="white" strokeWidth="2"/>
    </svg>
  ),
  Elixir: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M12 2C8 6 8 10 12 14c4-4 4-8 0-12z"/>
      <path d="M12 14c0 4-2 6-4 6s-4-2-4-6c0-4 2-6 4-6s4 2 4 6z"/>
      <path d="M12 14c0 4 2 6 4 6s4-2 4-6c0-4-2-6-4-6s-4 2-4 6z"/>
    </svg>
  ),
  Firebase: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M12 2L4 8v12l8 2 8-2V8l-8-6z"/>
      <path d="M12 6L8 12v6l4 1 4-1v-6l-4-6z" fill="white"/>
    </svg>
  )
};

const About = () => {
  const { t } = useLanguage();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Skills data dengan 21 icons seperti di gambar (7 per row, 3 rows)
  const allSkills = [
    // Row 1 - 7 icons
    { name: "Replit", Icon: SkillIcons.Replit, color: "yellow" },
    { name: "React", Icon: SkillIcons.React, color: "cyan" },
    { name: "Angular", Icon: SkillIcons.Angular, color: "red" },
    { name: "Vue", Icon: SkillIcons.Vue, color: "green" },
    { name: "Cloudflare", Icon: SkillIcons.Cloudflare, color: "orange" },
    { name: "Svelte", Icon: SkillIcons.Svelte, color: "orange" },
    { name: "Remix", Icon: SkillIcons.Remix, color: "purple" },

    // Row 2 - 7 icons
    { name: "Astro", Icon: SkillIcons.Astro, color: "white" },
    { name: "Remix", Icon: SkillIcons.RemixIcon, color: "blue" },
    { name: "Alpine", Icon: SkillIcons.Alpine, color: "green" },
    { name: "HeadlessUI", Icon: SkillIcons.HeadlessUI, color: "blue" },
    { name: "Heroicons", Icon: SkillIcons.Heroicons, color: "orange" },
    { name: "Framer Motion", Icon: SkillIcons.FramerMotion, color: "pink" },
    { name: "Storybook", Icon: SkillIcons.Storybook, color: "green" },

    // Row 3 - 7 icons
    { name: "Shopify", Icon: SkillIcons.Shopify, color: "pink" },
    { name: "VueUse", Icon: SkillIcons.VueUse, color: "purple" },
    { name: "Ubuntu", Icon: SkillIcons.Ubuntu, color: "orange" },
    { name: "Linear", Icon: SkillIcons.Linear, color: "white" },
    { name: "Elixir", Icon: SkillIcons.Elixir, color: "red" },
    { name: "Firebase", Icon: SkillIcons.Firebase, color: "orange" },
    { name: "React", Icon: SkillIcons.React, color: "cyan" }
  ];

  return (
    <div className="min-h-screen py-8 sm:py-12 lg:py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-6 max-w-7xl">
        <div className="max-w-6xl mx-auto">
          {/* Page Title */}
           <h1 className="text-5xl font-bold text-white mb-8 text-center">{t.about.title}</h1>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start mb-12 sm:mb-16 lg:mb-20">
            {/* Text Content */}
            <div className="space-y-6 sm:space-y-8 lg:order-1">
              {/* Description */}
              <div className="space-y-4 sm:space-y-6">
                <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
                  {t.about.description1}
                </p>
                <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
                  {t.about.description2}
                </p>
              </div>
            </div>
            <div className="relative">
                <div className="w-full h-96 rounded-lg overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=400&fit=crop"
                        alt="Working"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
          </div>

          {/* Tech Stack - Sesuai Gambar dengan Responsive Grid */}
          <div className="mt-12 sm:mt-16 lg:mt-24">
            <h2 className="text-5xl font-bold text-white mb-8 text-center">
               {t.about.skills}
            </h2>
            
            {/* Skills Grid - Responsive: 3 cols mobile, 5 cols tablet, 7 cols desktop */}
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-7 gap-2 sm:gap-3 lg:gap-4 p-3 sm:p-4 lg:p-6 bg-gray-800/30 rounded-xl sm:rounded-2xl border border-gray-700/50">
                {allSkills.map((skill, index) => {
                  return (
                    <div
                      key={index}
                      className={`
                        relative group cursor-pointer transition-all duration-300
                        ${hoveredIndex === index ? 'scale-105 sm:scale-110 z-10' : 'scale-100 z-0'}
                        hover:z-20
                      `}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      {/* Skill Card */}
                      <div className={`
                        w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20
                        bg-gray-800/80 rounded-lg sm:rounded-xl flex items-center justify-center
                        border border-gray-700/50
                        transition-all duration-300 ease-out
                        ${hoveredIndex === index 
                          ? 'bg-gray-700/90 border-cyan-400/50 shadow-lg sm:shadow-2xl shadow-cyan-500/20' 
                          : 'hover:bg-gray-700/70 hover:border-gray-600/70 hover:shadow-md sm:hover:shadow-lg'
                        }
                      `}>
                        {/* Skill Icon */}
                        <div className={`
                          w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10
                          transition-all duration-300 ease-out
                          ${skill.color === 'yellow' ? 'text-yellow-400' :
                            skill.color === 'cyan' ? 'text-cyan-400' :
                            skill.color === 'red' ? 'text-red-400' :
                            skill.color === 'green' ? 'text-green-400' :
                            skill.color === 'orange' ? 'text-orange-400' :
                            skill.color === 'purple' ? 'text-purple-400' :
                            skill.color === 'blue' ? 'text-blue-400' :
                            skill.color === 'pink' ? 'text-pink-400' :
                            'text-white'
                          }
                          ${hoveredIndex === index ? 'drop-shadow-lg sm:drop-shadow-2xl scale-105 sm:scale-110' : 'group-hover:drop-shadow-md sm:group-hover:drop-shadow-lg'}
                        `}>
                          <skill.Icon />
                        </div>
                      </div>

                      {/* Glow Effect saat hover - Hidden on mobile untuk performance */}
                      {hoveredIndex === index && (
                        <div className={`
                          absolute inset-0 rounded-lg sm:rounded-xl -z-10
                          bg-gradient-to-br ${
                            skill.color === 'yellow' ? 'from-yellow-500/20' :
                            skill.color === 'cyan' ? 'from-cyan-500/20' :
                            skill.color === 'red' ? 'from-red-500/20' :
                            skill.color === 'green' ? 'from-green-500/20' :
                            skill.color === 'orange' ? 'from-orange-500/20' :
                            skill.color === 'purple' ? 'from-purple-500/20' :
                            skill.color === 'blue' ? 'from-blue-500/20' :
                            skill.color === 'pink' ? 'from-pink-500/20' :
                            'from-white/20'
                          } to-transparent
                          blur-lg sm:blur-xl opacity-75 animate-pulse hidden sm:block
                        `}></div>
                      )}

                      {/* Tooltip - Only show on larger screens */}
                      {hoveredIndex === index && (
                        <div className="absolute -top-8 sm:-top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded-md border border-gray-600 whitespace-nowrap z-30 hidden sm:block">
                          {skill.name}
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Category Labels - Responsive */}
            <div className="mt-6 sm:mt-8 flex justify-center flex-wrap gap-2 sm:gap-4 lg:gap-8">
              <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-400 bg-gray-800/50 px-2 sm:px-3 py-1.5 sm:py-2 rounded-md sm:rounded-lg border border-gray-700/50">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full"></div>
                <span>Frontend</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-400 bg-gray-800/50 px-2 sm:px-3 py-1.5 sm:py-2 rounded-md sm:rounded-lg border border-gray-700/50">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full"></div>
                <span>Backend</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-400 bg-gray-800/50 px-2 sm:px-3 py-1.5 sm:py-2 rounded-md sm:rounded-lg border border-gray-700/50">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-400 rounded-full"></div>
                <span>Database</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-400 bg-gray-800/50 px-2 sm:px-3 py-1.5 sm:py-2 rounded-md sm:rounded-lg border border-gray-700/50">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full"></div>
                <span>Design</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;