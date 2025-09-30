import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import anasDev from '../assets/anasdev.jpg'; 

const About = () => {
  const { t } = useLanguage();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  // Color mapping untuk setiap warna
  const colorMap = {
    orange: { from: '#ff6b35', to: '#ffa500', glow: 'rgba(255, 165, 0, 0.6)' },
    blue: { from: '#1e40af', to: '#3b82f6', glow: 'rgba(59, 130, 246, 0.6)' },
    yellow: { from: '#fbbf24', to: '#fcd34d', glow: 'rgba(252, 211, 77, 0.6)' },
    cyan: { from: '#06b6d4', to: '#22d3ee', glow: 'rgba(34, 211, 238, 0.6)' },
    purple: { from: '#a855f7', to: '#c084fc', glow: 'rgba(192, 132, 252, 0.6)' },
    green: { from: '#22c55e', to: '#4ade80', glow: 'rgba(74, 222, 128, 0.6)' },
    red: { from: '#ef4444', to: '#f87171', glow: 'rgba(248, 113, 113, 0.6)' },
    gray: { from: '#6b7280', to: '#9ca3af', glow: 'rgba(156, 163, 175, 0.6)' },
    white: { from: '#06b6d4', to: '#a855f7', glow: 'rgba(168, 85, 247, 0.6)' },
    black: { from: '#06b6d4', to: '#a855f7', glow: 'rgba(168, 85, 247, 0.6)' },
  };

  return (
    <motion.div
      className="min-h-screen py-8 sm:py-12 lg:py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-6xl mx-auto">
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-8 sm:mb-12 lg:mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600"
            variants={itemVariants}
          >
            {t.about.title}
          </motion.h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-20">
            <motion.div className="space-y-6 sm:space-y-8" variants={itemVariants}>
              <div className="space-y-4 sm:space-y-6">
                <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
                  {t.about.description1}
                </p>
                <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
                  {t.about.description2}
                </p>
                <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
                  {t.about.description3}
                </p>
              </div>
            </motion.div>
            
            <motion.div
              className="relative group"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-full h-80 sm:h-96 lg:h-[28rem] rounded-2xl overflow-hidden shadow-2xl relative">
                <img
                  src={anasDev}
                  alt="Nasruddin with cat"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          </div>

          <motion.div className="mt-12 sm:mt-16 lg:mt-24" variants={containerVariants}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
              {t.about.skills}
            </h2>
            
            <div className="max-w-5xl mx-auto grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 sm:gap-6">
              {[
                // === Programming & Markup Languages ===
                { name: 'HTML5', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', color: 'orange', category: 'language' },
                { name: 'CSS3', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', color: 'blue', category: 'language' },
                { name: 'JavaScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: 'yellow', category: 'language' },
                { name: 'TypeScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', color: 'cyan', category: 'language' },
                { name: 'PHP', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', color: 'purple', category: 'language' },
                { name: 'Python', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: 'blue', category: 'language' },
                // === Frameworks & Libraries ===
                { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: 'cyan', category: 'framework' },
                { name: 'Next.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', color: 'white', category: 'framework' },
                { name: 'Laravel', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg', color: 'red', category: 'framework' },
                { name: 'Django', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg', color: 'green', category: 'framework' },
                { name: 'Node.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: 'green', category: 'framework' },
                { name: 'Express.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', color: 'gray', category: 'framework' },
                { name: 'Flutter', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg', color: 'cyan', category: 'framework' },
                { name: 'jQuery', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg', color: 'blue', category: 'framework' },
                { name: 'Bootstrap', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', color: 'purple', category: 'framework' },
                { name: 'Tailwind CSS', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', color: 'cyan', category: 'framework' },
                { name: 'Android Studio', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg', color: 'green', category: 'framework' },
                // === Databases & Cloud ===
                { name: 'MySQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', color: 'blue', category: 'database' },
                { name: 'MongoDB', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', color: 'green', category: 'database' },
                { name: 'PostgreSQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', color: 'blue', category: 'database' },
                { name: 'Firebase', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', color: 'yellow', category: 'database' },
                // === Servers & Infrastructure ===
                { name: 'Apache', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg', color: 'red', category: 'server' },
                { name: 'Nginx', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg', color: 'green', category: 'server' },
                { name: 'Docker', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', color: 'blue', category: 'server' },
                { name: 'Linux', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', color: 'yellow', category: 'server' },
                { name: 'Windows', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg', color: 'blue', category: 'server' },
              ].map((skill, index) => {
                const colors = colorMap[skill.color] || colorMap.cyan;
                
                return (
                  <motion.div
                    key={index}
                    className="relative flex flex-col items-center p-3 bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden group cursor-pointer"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    style={{
                      boxShadow: hoveredIndex === index 
                        ? `0 0 30px ${colors.glow}, 0 0 50px ${colors.glow}, 0 0 70px ${colors.glow}` 
                        : 'none',
                      transition: 'box-shadow 0.3s ease-in-out',
                    }}
                  >
                    {/* Animated Gradient Border - Warna mengikuti icon */}
                    <motion.div
                      className="absolute inset-0 rounded-xl"
                      style={{
                        background: `linear-gradient(90deg, ${colors.from}, ${colors.to}, ${colors.from})`,
                        backgroundSize: '200% 100%',
                        opacity: 0.8,
                      }}
                      animate={{
                        backgroundPosition: ['0% 50%', '200% 50%', '0% 50%'],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                    />
                    
                    {/* Inner Content Background */}
                    <div className="absolute inset-[2px] bg-gray-800/90 rounded-xl z-10" />
                    
                    {/* Icon and Text */}
                    <div className="relative z-20 flex flex-col items-center">
                      <div className="relative w-10 h-10 sm:w-12 sm:h-12 mb-2">
                        <motion.img
                          src={skill.src}
                          alt={skill.name}
                          className="w-full h-full object-contain drop-shadow-lg"
                          animate={{ 
                            rotate: hoveredIndex === index ? 360 : 0,
                            scale: hoveredIndex === index ? 1.15 : 1
                          }}
                          transition={{ duration: 0.6 }}
                          style={{
                            filter: hoveredIndex === index 
                              ? `drop-shadow(0 0 8px ${colors.glow})` 
                              : 'none',
                          }}
                        />
                      </div>
                      <span className="text-xs sm:text-sm text-center text-gray-200 font-medium">
                        {skill.name}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            
            <motion.div
              className="mt-6 sm:mt-8 flex justify-center flex-wrap gap-2 sm:gap-4 lg:gap-6"
              variants={itemVariants}
            >
              {[
                { label: 'Programming & Markup', color: 'cyan' },
                { label: 'Frameworks & Libraries', color: 'green' },
                { label: 'Databases & Cloud', color: 'orange' },
                { label: 'Servers & Infrastructure', color: 'purple' },
              ].map((category, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2 text-xs sm:text-sm text-gray-300 bg-gray-800/30 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full border border-gray-700/30 hover:border-gray-600 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <div 
                    className={`w-2 h-2 rounded-full`}
                    style={{
                      backgroundColor: 
                        category.color === 'cyan' ? '#22d3ee' :
                        category.color === 'green' ? '#4ade80' :
                        category.color === 'orange' ? '#fb923c' :
                        '#c084fc'
                    }}
                  />
                  <span>{category.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div className="mt-12 sm:mt-16 lg:mt-24" variants={containerVariants}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
              {t.data.experience}
            </h2>
            <div className="max-w-5xl mx-auto relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1.5 bg-gradient-to-b from-cyan-400 to-purple-600 rounded-full"></div>
              <div className="space-y-12 sm:space-y-16 relative">
                {t.data.experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    className={`flex items-center justify-between ${
                      index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                    } flex-col sm:flex-row`}
                    variants={itemVariants}
                  >
                    <motion.div
                      className="sm:w-5/12 w-full sm:mb-0 mb-6"
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="relative p-4 sm:p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden">
                        {/* Animated Border for Experience Cards */}
                        <motion.div
                          className="absolute inset-0 rounded-xl opacity-60"
                          style={{
                            background: `linear-gradient(90deg, #06b6d4, #a855f7, #06b6d4)`,
                            backgroundSize: '200% 100%',
                          }}
                          animate={{
                            backgroundPosition: ['0% 50%', '200% 50%', '0% 50%'],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: 'linear',
                          }}
                        />
                        <div className="absolute inset-[2px] bg-gray-800 rounded-xl" />
                        
                        <div className="relative z-10">
                          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white">{exp.title}</h3>
                          <p className="text-gray-300 text-sm sm:text-base">{exp.company}</p>
                          <p className="text-sm text-gray-400">{exp.date}</p>
                          <p className="text-sm text-gray-400">{exp.location}</p>
                          <p className="mt-3 text-gray-200 text-sm sm:text-base leading-relaxed">{exp.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                    <motion.div
                      className={`w-4 h-4 rounded-full border-4 border-gray-900 absolute left-1/2 transform -translate-x-1/2 hidden sm:block`}
                      style={{
                        backgroundColor: index % 2 === 0 ? '#22d3ee' : '#a855f7'
                      }}
                      animate={{ scale: hoveredIndex === index ? 1.3 : 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;