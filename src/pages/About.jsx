import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import anasDev from '../assets/anasDev.jpg';

const SkillIcons = {
  HTML5: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M2 2h20v20H2z"/>
      <path d="M4 6h16v12H4z" fill="none" stroke="currentColor" strokeWidth="2"/>
      <text x="12" y="15" fontSize="12" textAnchor="middle" fill="currentColor">H5</text>
    </svg>
  ),
  CSS3: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M2 2h20v20H2z"/>
      <path d="M4 6h16v12H4z" fill="none" stroke="currentColor" strokeWidth="2"/>
      <text x="12" y="15" fontSize="12" textAnchor="middle" fill="currentColor">C3</text>
    </svg>
  ),
  JavaScript: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <circle cx="12" cy="12" r="10"/>
      <path d="M8 8l8 8M8 16l8-8" stroke="white" strokeWidth="2"/>
    </svg>
  ),
  TypeScript: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <rect x="4" y="4" width="16" height="16" rx="2"/>
      <path d="M8 8h8v8H8z" fill="white"/>
    </svg>
  ),
  PHP: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M12 2L2 7v10l10 5 10-5V7l-10-5z"/>
      <path d="M12 7l5 2.5v5L12 17l-5-2.5v-5L12 7z" fill="white"/>
    </svg>
  ),
  AndroidStudio: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M4 4h16v16H4z"/>
      <path d="M6 6h12v12H6z" fill="none" stroke="currentColor" strokeWidth="2"/>
    </svg>
  ),
  Flutter: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M12 2L2 12l10 10 10-10L12 2z"/>
      <path d="M12 6L6 12l6 6 6-6-6-6z" fill="white"/>
    </svg>
  ),
  WordPress: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <circle cx="12" cy="12" r="10"/>
      <path d="M8 12h8" stroke="white" strokeWidth="2"/>
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
  Nextjs: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M12 2L2 7v10l10 5 10-5V7l-10-5z"/>
      <path d="M12 7l5 2.5v5L12 17l-5-2.5v-5L12 7z" opacity="0.7"/>
    </svg>
  ),
  Laravel: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M4 4h16v16H4z"/>
      <path d="M6 6h12v12H6z" fill="white"/>
    </svg>
  ),
  Nodejs: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
      <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="white"/>
    </svg>
  ),
  Expressjs: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M12 2L2 7v10l10 5 10-5V7l-10-5z"/>
      <path d="M12 7l5 2.5v5L12 17l-5-2.5v-5L12 7z" fill="none" stroke="white" strokeWidth="2"/>
    </svg>
  ),
  jQuery: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M12 2L2 12l10 10 10-10L12 2z"/>
      <path d="M12 6L6 12l6 6 6-6-6-6z" fill="white"/>
    </svg>
  ),
  AJAX: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <rect x="4" y="4" width="16" height="16" rx="2"/>
      <path d="M8 8h8v8H8z" fill="white"/>
    </svg>
  ),
  Bootstrap: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M2 2h20v20H2z"/>
      <path d="M4 6h16v12H4z" fill="none" stroke="currentColor" strokeWidth="2"/>
    </svg>
  ),
  TailwindCSS: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M12 2L2 7v10l10 5 10-5V7l-10-5z"/>
      <path d="M12 7l5 2.5v5L12 17l-5-2.5v-5L12 7z" fill="white"/>
    </svg>
  ),
  MySQL: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <circle cx="12" cy="12" r="10"/>
      <path d="M8 8l8 8M8 16l8-8" stroke="white" strokeWidth="2"/>
    </svg>
  ),
  MongoDB: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
    </svg>
  ),
  Firebase: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M12 2L4 8v12l8 2 8-2V8l-8-6z"/>
      <path d="M12 6L8 12v6l4 1 4-1v-6l-4-6z" fill="white"/>
    </svg>
  )
};

const skillsData = [
  { name: "HTML5", Icon: SkillIcons.HTML5, color: "cyan" },
  { name: "CSS3", Icon: SkillIcons.CSS3, color: "cyan" },
  { name: "JavaScript", Icon: SkillIcons.JavaScript, color: "yellow" },
  { name: "TypeScript", Icon: SkillIcons.TypeScript, color: "blue" },
  { name: "PHP", Icon: SkillIcons.PHP, color: "purple" },
  { name: "AndroidStudio", Icon: SkillIcons.AndroidStudio, color: "green" },
  { name: "Flutter", Icon: SkillIcons.Flutter, color: "blue" },
  { name: "WordPress", Icon: SkillIcons.WordPress, color: "pink" },
  { name: "React", Icon: SkillIcons.React, color: "cyan" },
  { name: "Next.js", Icon: SkillIcons.Nextjs, color: "gray" },
  { name: "Laravel", Icon: SkillIcons.Laravel, color: "red" },
  { name: "Node.js", Icon: SkillIcons.Nodejs, color: "green" },
  { name: "Express.js", Icon: SkillIcons.Expressjs, color: "gray" },
  { name: "jQuery", Icon: SkillIcons.jQuery, color: "yellow" },
  { name: "AJAX", Icon: SkillIcons.AJAX, color: "blue" },
  { name: "Bootstrap", Icon: SkillIcons.Bootstrap, color: "purple" },
  { name: "Tailwind CSS", Icon: SkillIcons.TailwindCSS, color: "cyan" },
  { name: "MySQL", Icon: SkillIcons.MySQL, color: "orange" },
  { name: "MongoDB", Icon: SkillIcons.MongoDB, color: "green" },
  { name: "Firebase", Icon: SkillIcons.Firebase, color: "orange" }
];

const SkillCard = ({ img, name, username, body }) => {
  return (
    <figure
      className="relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
    >
      <div className="flex flex-row items-center gap-2">
        <div className="w-8 h-8 flex items-center justify-center">
          <img className="rounded-full" width="32" height="32" alt="" src={img} />
        </div>
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

const About = () => {
  const { t } = useLanguage();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="min-h-screen py-8 sm:py-12 lg:py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-6 max-w-7xl">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-8 text-center">{t.about.title}</h1>
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start mb-12 sm:mb-16 lg:mb-20">
            <div className="space-y-6 sm:space-y-8 lg:order-1">
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
              <div className="w-full h-100 rounded-lg overflow-hidden">
                <img
                  src={anasDev}
                  alt="Working"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-24">
            <h2 className="text-5xl font-bold text-white mb-8 text-center">
              {t.about.skills}
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-7 gap-2 sm:gap-3 lg:gap-4 p-3 sm:p-4 lg:p-6 bg-gray-800/30 rounded-xl sm:rounded-2xl border border-gray-700/50">
                {skillsData.map((skill, index) => (
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
                    {hoveredIndex === index && (
                      <div className={`
                        absolute inset-0 rounded-lg sm:rounded-xl -z-10
                        bg-gradient-to-br ${skill.color === 'yellow' ? 'from-yellow-500/20' :
                          skill.color === 'cyan' ? 'from-cyan-500/20' :
                          skill.color === 'red' ? 'from-red-500/20' :
                          skill.color === 'green' ? 'from-green-500/20' :
                          skill.color === 'orange' ? 'from-orange-500/20' :
                          skill.color === 'purple' ? 'from-purple-500/20' :
                          skill.color === 'blue' ? 'from-blue-500/20' :
                          skill.color === 'pink' ? 'from-pink-500/20' :
                          'from-white/20'} to-transparent
                        blur-lg sm:blur-xl opacity-75 animate-pulse hidden sm:block
                      `}></div>
                    )}
                    {hoveredIndex === index && (
                      <div className="absolute -top-8 sm:-top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded-md border border-gray-600 whitespace-nowrap z-30 hidden sm:block">
                        {skill.name}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 sm:mt-8 flex justify-center flex-wrap gap-2 sm:gap-4 lg:gap-8">
              <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-400 bg-gray-800/50 px-2 sm:px-3 py-1.5 sm:py-2 rounded-md sm:rounded-lg border border-gray-700/50">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full"></div>
                <span>Programming & Markup</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-400 bg-gray-800/50 px-2 sm:px-3 py-1.5 sm:py-2 rounded-md sm:rounded-lg border border-gray-700/50">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full"></div>
                <span>Frameworks & Libraries</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-400 bg-gray-800/50 px-2 sm:px-3 py-1.5 sm:py-2 rounded-md sm:rounded-lg border border-gray-700/50">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-400 rounded-full"></div>
                <span>Databases & Cloud</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;