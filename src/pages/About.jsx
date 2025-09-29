import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import anasDev from '.././assets/anasDev.jpg';

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
                { name: 'HTML5', src: 'https://cdn-icons-png.flaticon.com/512/5968/5968267.png', color: 'orange' },
                { name: 'CSS3', src: 'https://cdn-icons-png.flaticon.com/512/5968/5968247.png', color: 'blue' },
                { name: 'JavaScript', src: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png', color: 'yellow' },
                { name: 'TypeScript', src: 'https://cdn-icons-png.flaticon.com/512/5968/5968381.png', color: 'cyan' },
                { name: 'PHP', src: 'https://cdn-icons-png.flaticon.com/512/5968/5968332.png', color: 'purple' },
                { name: 'Android Studio', src: 'https://cdn-icons-png.flaticon.com/512/809/809111.png', color: 'green' },
                { name: 'Flutter', src: 'https://cdn-icons-png.flaticon.com/512/5968/5968370.png', color: 'cyan' },
                { name: 'WordPress', src: 'https://cdn-icons-png.flaticon.com/512/5968/5968390.png', color: 'blue' },
                { name: 'React', src: 'https://cdn-icons-png.flaticon.com/512/1126/1126678.png', color: 'cyan' },
                { name: 'Next.js', src: 'https://cdn-icons-png.flaticon.com/512/12666/12666140.png', color: 'cyan' },
                { name: 'Laravel', src: 'https://cdn-icons-png.flaticon.com/512/5968/5968378.png', color: 'red' },
                { name: 'Node.js', src: 'https://cdn-icons-png.flaticon.com/512/919/919825.png', color: 'green' },
                { name: 'Express.js', src: 'https://cdn-icons-png.flaticon.com/512/12666/12666147.png', color: 'green' },
                { name: 'jQuery', src: 'https://cdn-icons-png.flaticon.com/512/5968/5968293.png', color: 'blue' },
                { name: 'AJAX', src: 'https://cdn-icons-png.flaticon.com/512/5968/5968294.png', color: 'yellow' },
                { name: 'Bootstrap', src: 'https://cdn-icons-png.flaticon.com/512/5968/5968672.png', color: 'purple' },
                { name: 'Tailwind CSS', src: 'https://cdn-icons-png.flaticon.com/512/5968/5968380.png', color: 'cyan' },
                { name: 'MySQL', src: 'https://cdn-icons-png.flaticon.com/512/5968/5968313.png', color: 'blue' },
                { name: 'MongoDB', src: 'https://cdn-icons-png.flaticon.com/512/5968/5968382.png', color: 'green' },
                { name: 'Firebase', src: 'https://cdn-icons-png.flaticon.com/512/5968/5968377.png', color: 'yellow' },
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  className={`flex flex-col items-center p-3 bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg hover:bg-${skill.color}-600/30 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  variants={itemVariants}
                  whileHover={{ rotate: 5 }}
                >
                  <motion.img
                    src={skill.src}
                    alt={skill.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 mb-2 transition-transform duration-300"
                    animate={{ rotate: hoveredIndex === index ? 360 : 0 }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="text-xs sm:text-sm text-center text-gray-200 font-medium">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
            <motion.div
              className="mt-6 sm:mt-8 flex justify-center flex-wrap gap-2 sm:gap-4 lg:gap-6"
              variants={itemVariants}
            >
              {[
                { label: 'Programming & Markup', color: 'cyan-400' },
                { label: 'Frameworks & Libraries', color: 'green-400' },
                { label: 'Databases & Cloud', color: 'orange-400' },
              ].map((category, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2 text-xs sm:text-sm text-gray-300 bg-gray-800/30 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full border border-gray-700/30 hover:border-gray-600 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className={`w-2 h-2 bg-${category.color} rounded-full`}></div>
                  <span>{category.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div className="mt-12 sm:mt-16 lg:mt-24" variants={containerVariants}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
              Experience
            </h2>
            <div className="max-w-5xl mx-auto relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1.5 bg-gradient-to-b from-cyan-400 to-purple-600 rounded-full"></div>
              <div className="space-y-12 sm:space-y-16 relative">
                {[
                  {
                    title: 'Junior Developer',
                    company: 'paperlesshospital.id · Contract',
                    date: 'Sep 2024 - Present · 1 yr 1 mo',
                    location: 'Langsa, Nanggroe Aceh Darussalam, Indonesia',
                    desc: 'Proud to join PT. Digital Kreasi Muslim as a Junior Developer, contributing to the AI-based Electronic Medical Record System (paperlesshospital.id) at RSUD Langsa. Responsibilities include developing Hospital Information Management Systems (SIMRS), technical support, and app maintenance using Laravel, PHP, JavaScript, and MySQL.',
                    color: 'cyan-400',
                  },
                  {
                    title: 'Software Engineer',
                    company: 'taiwanhalal · Part-time',
                    date: 'Sep 2024 - Sep 2025 · 1 yr 1 mo',
                    location: 'Hsinchu City, Taiwan, Taiwan · Remote',
                    desc: 'Worked remotely as a Software Engineer using modern technologies. Experienced in mobile app development with Flutter, Ionic Angular, and Kotlin, backend with Node.js and Express.js, and web development with React.js. Developed KiwiSmart, a map-based web app with React and Python Flask, enhanced with AI integration.',
                    color: 'purple-600',
                  },
                  {
                    title: 'Web Developer',
                    company: 'Universitas Malikussaleh · Internship',
                    date: 'Jan 2023 - Dec 2024 · 2 yrs',
                    location: 'Indonesia',
                    desc: 'Designed projects from scratch, including design, scope, timeline, and goals for the Sistem Informasi Unimal website. Served as Admin for the Prodi Sistem Informasi website, earning a Junior Web Developer certification from Digital Talent Scholarship. Contributed to community service by assisting teachers with a bank soal app and developed the PMIM accreditation website.',
                    color: 'cyan-400',
                  },
                  {
                    title: 'Web Developer',
                    company: 'Hasnur Centre · Internship',
                    date: 'Aug 2022 - Dec 2022 · 5 mos',
                    location: 'Banjarmasin, South Kalimantan, Indonesia',
                    desc: 'Developed and completed web projects for Hulu Talent using HTML5, CSS3, JavaScript, TypeScript, PHP, Android Studio, Flutter, WordPress, React, Next.js, Laravel, Node.js, Express.js, jQuery, AJAX, Bootstrap, Tailwind CSS, MySQL, MongoDB, and Firebase.',
                    color: 'purple-600',
                  },
                ].map((exp, index) => (
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
                      <div
                        className={`p-4 sm:p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-xl transition-all duration-300 hover:bg-${exp.color}/30 hover:shadow-2xl border border-gray-700/30`}
                      >
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white">{exp.title}</h3>
                        <p className="text-gray-300 text-sm sm:text-base">{exp.company}</p>
                        <p className="text-sm text-gray-400">{exp.date}</p>
                        <p className="text-sm text-gray-400">{exp.location}</p>
                        <p className="mt-3 text-gray-200 text-sm sm:text-base leading-relaxed">{exp.desc}</p>
                      </div>
                    </motion.div>
                    <motion.div
                      className={`w-4 h-4 bg-${exp.color} rounded-full border-4 border-gray-900 absolute left-1/2 transform -translate-x-1/2 hidden sm:block`}
                      animate={{ scale: hoveredIndex === index ? 1.3 : 1 }}
                      transition={{ duration: 0.3 }}
                    ></motion.div>
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