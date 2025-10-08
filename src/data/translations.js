export const translations = {
    en: {
        greeting: "Hello, I'm Nasruddin",
        heroTitle: "code cool",
        heroSubtitle: "I’m a Web Developer & Software Engineer specializing in responsive, efficient, and user-focused web and mobile apps.",
        getInTouch: "Get In Touch",
        viewProjects: "View Projects",
        email: "nasruddin20182019@gmail.com",
        phone: "+62 (822) 6742-xxxx",
        nav: {
            home: "Home",
            about: "About",
            projects: "Projects",
            data: "Data",
            blog: "Blog",
            contact: "Contact Me"
        },
        about: {
            title: "About Me",
            description1: "I am a Web Developer & Software Engineer with expertise in building web and mobile applications. I am proficient in various programming languages, frameworks, and modern tools that support the development of responsive, efficient, and user-focused systems.",
            description2: "Continuously enhancing my skills in Full-Stack Development and creating digital solutions that are innovative, user-friendly, and impactful.",
            description3: "I studied at Universitas Malikussaleh majoring in Information Systems with a GPA of 3.77.",
            skills: "Skills",
        },
        data: {
            title: "Data",
            skills: "Skills",
            experience: "Experience",
            experiences: [
                {
                    title: "Junior Developer",
                    company: "paperlesshospital.id · Contract",
                    date: "Sep 2024 - Present · 1 yr 1 mo",
                    location: "Langsa, Nanggroe Aceh Darussalam, Indonesia",
                    desc: "Proud to join PT. Digital Kreasi Muslim as a Junior Developer, contributing to the AI-based Electronic Medical Record System (paperlesshospital.id) at RSUD Langsa. Responsibilities include developing Hospital Information Management Systems (SIMRS), technical support, and app maintenance using Laravel, PHP, JavaScript, and MySQL."
                },
                {
                    title: "Software Engineer",
                    company: "taiwanhalal · Part-time",
                    date: "Sep 2024 - Sep 2025 · 1 yr 1 mo",
                    location: "Hsinchu City, Taiwan, Taiwan · Remote",
                    desc: "Worked remotely as a Software Engineer using modern technologies. Experienced in mobile app development with Flutter, Ionic Angular, and Kotlin, backend with Node.js and Express.js, and web development with React.js. Developed KiwiSmart, a map-based web app with React and Python Flask, enhanced with AI integration."
                },
                {
                    title: "Web Developer",
                    company: "Universitas Malikussaleh · Internship",
                    date: "Jan 2023 - Dec 2024 · 2 yrs",
                    location: "Indonesia",
                    desc: "Designed projects from scratch, including design, scope, timeline, and goals for the Sistem Informasi Unimal website. Served as Admin for the Prodi Sistem Informasi website, earning a Junior Web Developer certification from Digital Talent Scholarship. Contributed to community service by assisting teachers with a bank soal app and developed the PMIM accreditation website."
                },
                {
                    title: "Web Developer",
                    company: "Hasnur Centre · Internship",
                    date: "Aug 2022 - Dec 2022 · 5 mos",
                    location: "Banjarmasin, South Kalimantan, Indonesia",
                    desc: "Developed and completed web projects for Hulu Talent using HTML5, CSS3, JavaScript, TypeScript, PHP, Android Studio, Flutter, WordPress, React, Next.js, Laravel, Node.js, Express.js, jQuery, AJAX, Bootstrap, Tailwind CSS, MySQL, MongoDB, and Firebase."
                }
            ]
        },
        projects: {
            title: "Projects",
            subtitle: "Here are some of my recent works",
            detail: "Project Details",
            liveDemo: "Live Demo",
            viewCode: "View Code",
            posts: [
                {
                    id: "sistem-rekam-medis-elektronik",
                    title: "Electronic Medical Record (EMR) System Development",
                    description: "Today, my team collaborated with healthcare workers at RSUD Langsa to support the development of Electronic Medical Record (EMR) system. The discussion was focused on improving the design and features of EMR forms that will soon be implemented to facilitate service flow, improve patient data accuracy, and support hospital digital transformation towards modern and patient-centered healthcare services.",
                    fullDescription: "Electronic Medical Record system developed for RSUD Langsa as part of hospital digital transformation. This system is designed to facilitate healthcare service flow, improve patient data accuracy, and support data-based decision making for better healthcare services.",
                    tech: ["Laravel", "PHP", "MySQL", "JavaScript"],
                    thumbnail: "/assets/portfolio/slide14.png",
                    images: ["/assets/portfolio/slide14.png"],
                    demoUrl: "https://rme.e-rsudlangsa.id/",
                    codeUrl: "#"
                },
                {
                    id: "kiwismart-gis-system",
                    title: "KiwiSmart System Development",
                    description: "I work as a Software Engineer remotely using various modern technologies. For mobile app development, I have experience using Flutter, Ionic Angular, and Kotlin. On the backend side, I use Node.js and Express.js, while for web development I work more with React.js.",
                    fullDescription: "KiwiSmart is a web-based application built with React and Python Flask backend. This application focuses on geographical mapping systems (map-based system) and is equipped with AI integration to enhance its functionality. This system is designed to provide smart solutions in geographical data analysis and spatial intelligence.",
                    tech: ["React", "Python", "Flask", "AI/ML", "GIS"],
                    thumbnail: "/assets/portfolio/slide15.png",
                    images: ["/assets/portfolio/slide15.png"],
                    demoUrl: "https://github.com/NasDev07/kiwismart-gis-frontend",
                    codeUrl: "https://github.com/NasDev07/kiwismart-gis-frontend"
                },
                {
                    id: "heffan-khitan-website",
                    title: "Project Showcase – Heffan Khitan Website Development",
                    description: "I had the opportunity to work on a website for Heffan Khitan, a modern circumcision service in Malang, East Java. This website was developed with PHP and WordPress, focusing on informative, responsive, and easily accessible appearance.",
                    fullDescription: "Professional website for Heffan Khitan modern circumcision service in Malang. Key features include clear content structure, SEO optimization, and integration of online registration forms and WhatsApp for easy booking. This project combines healthcare service needs with user-friendly digital solutions.",
                    tech: ["PHP", "WordPress", "MySQL", "JavaScript"],
                    thumbnail: "/assets/portfolio/slide13.png",
                    images: ["/assets/portfolio/slide13.png"],
                    demoUrl: "http://heffankhitan.com/",
                    codeUrl: "#"
                },
                {
                    id: "sistem-bank-soal-mobile",
                    title: "QUESTION BANK SYSTEM BASED ON MOBILE AND WEB APPLICATIONS",
                    description: "Rapid technological development in the world of education creates opportunities for mobile and web technology integration, as implemented at SMK Negeri 3 Lhokseumawe. Mobile and web applications using Laravel and Flutter frameworks. With System Development Life Cycle (SDLC) approach.",
                    fullDescription: "Integrated question bank management system between web and mobile platforms to support digital learning processes at SMK Negeri 3 Lhokseumawe. This system allows teachers to create, manage, and distribute questions efficiently.",
                    tech: ["Laravel", "Flutter", "MySQL", "PHP"],
                    thumbnail: "/assets/portfolio/slide11.png",
                    images: ["/assets/portfolio/slide11.png", "/assets/portfolio/slide12.png"],
                    demoUrl: "https://banksoal.smkn3lhokseumawe.sch.id/",
                    codeUrl: "#"
                },
                {
                    id: "mobil-ionic-angular",
                    title: "Car Application with IONIC Angular JS",
                    description: "This learning project aims to build a Simple Application as Learning Practice using IONIC Angular JS framework. This application is designed as a means of practicing learning the basics of mobile development using JavaScript programming language.",
                    fullDescription: "Mobile application built with Ionic Angular for learning hybrid app development. Focus on implementing native-like UI/UX with optimal performance.",
                    tech: ["Ionic", "Angular", "TypeScript", "Cordova"],
                    thumbnail: "/assets/portfolio/slide10.png",
                    images: ["/assets/portfolio/slide10.png"],
                    demoUrl: "https://github.com/NasDev07/web-frontend-kuliner-restoran",
                    codeUrl: "https://github.com/NasDev07/web-frontend-kuliner-restoran"
                },
                {
                    id: "food-online-vuejs",
                    title: "Online Food Application with Vue JS",
                    description: "This learning project aims to build an Online Food Web using Vue JS framework. This web is designed as a means of practicing learning the basics of Vue JS Web development using JavaScript programming language.",
                    fullDescription: "Online food ordering web application built with Vue.js. Features include digital menu, ordering system, and user-friendly interface for restaurants and customers.",
                    tech: ["Vue.js", "JavaScript", "CSS3", "HTML5"],
                    thumbnail: "/assets/portfolio/slide9.png",
                    images: ["/assets/portfolio/slide9.png"],
                    demoUrl: "https://github.com/NasDev07/web-frontend-kuliner-restoran",
                    codeUrl: "https://github.com/NasDev07/web-frontend-kuliner-restoran"
                },
                {
                    id: "ecommerce-flutter",
                    title: "Online Store Application with Flutter",
                    description: "This learning project aims to build an Online Store application using Flutter framework. This application is designed as a means of practicing learning the basics of mobile application development using Flutter.",
                    fullDescription: "Complete mobile e-commerce application built with Flutter. Includes product catalog, shopping cart, payment system, and integrated user management.",
                    tech: ["Flutter", "Dart", "Firebase"],
                    thumbnail: "/assets/portfolio/slide8.png",
                    images: ["/assets/portfolio/slide8.png"],
                    demoUrl: "https://github.com/NasDev07/E-commerce-Complete-Flutter-UI",
                    codeUrl: "https://github.com/NasDev07/E-commerce-Complete-Flutter-UI"
                },
                {
                    id: "chat-app-flutter",
                    title: "Simple Chat Application with Flutter",
                    description: "This learning project aims to build a simple chat application using Flutter framework. This application is designed as a means of practicing learning the basics of mobile application development using Flutter.",
                    fullDescription: "Mobile chat application built with Flutter for learning mobile app development. Features include real-time messaging, modern user interface, and optimal performance.",
                    tech: ["Flutter", "Dart", "Firebase"],
                    thumbnail: "/assets/portfolio/slide7.png",
                    images: ["/assets/portfolio/slide7.png"],
                    demoUrl: "https://github.com/NasDev07/whatsapp-chat",
                    codeUrl: "https://github.com/NasDev07/whatsapp-chat"
                },
                {
                    id: "toko-online-javascript",
                    title: "Simple Online Store with JavaScript",
                    description: "This learning project aims to build a web application using HTML, CSS, JavaScript and Bootstrap. Just a simple online store landing page, browsing product lists, and adding products to shopping cart.",
                    fullDescription: "Simple e-commerce landing page built with fundamental web technologies. This project focuses on learning basic web development with vanilla JavaScript.",
                    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
                    thumbnail: "/assets/portfolio/slide6.png",
                    images: ["/assets/portfolio/slide6.png"],
                    demoUrl: "https://github.com/NasDev07/Web-FrontEnd-ecommerce",
                    codeUrl: "https://github.com/NasDev07/Web-FrontEnd-ecommerce"
                },
                {
                    id: "toko-online-react",
                    title: "Simple Online Store with React JS",
                    description: "This learning project aims to build a web application using React JS that provides functionality for users to login, register, browse product lists, and add products to shopping cart.",
                    fullDescription: "Simple e-commerce application built with React JS for learning purposes. Features include user authentication, product catalog, shopping cart, and responsive interface.",
                    tech: ["React", "JavaScript", "CSS3", "HTML5"],
                    thumbnail: "/assets/portfolio/slide5.png",
                    images: ["/assets/portfolio/slide5.png"],
                    demoUrl: "https://github.com/NasDev07/FrontEnd-React",
                    codeUrl: "https://github.com/NasDev07/FrontEnd-React"
                },
                {
                    id: "web-desa-padang-sakti",
                    title: "Village Website (Padang Sakti)",
                    description: "Village website represents the future vision of ideal conditions desired or aspired by the government. This website is responsive to all devices, with UI components and animated interactions. Built using PHP Laravel programming language with MySQL database.",
                    fullDescription: "Village information system providing online administrative services, village transparency information, news and announcements, and public services for the community. Supporting digital transformation of village governance.",
                    tech: ["PHP", "Laravel", "MySQL", "Bootstrap"],
                    thumbnail: "/assets/portfolio/slide4.png",
                    images: ["/assets/portfolio/slide4.png"],
                    demoUrl: "https://padangsakti.com/",
                    codeUrl: "#"
                },
                {
                    id: "miti-community",
                    title: "Miti Community",
                    description: "Miti Community (Indonesian IT Students) is a community aimed at honing students' abilities in the IT field. This website is responsive to all devices, with UI components and animated interactions. Built using PHP Laravel programming language with MySQL database.",
                    fullDescription: "Online community platform for Indonesian IT Students providing discussion forums, knowledge sharing, event organizing, and networking. Equipped with integrated membership system and event management.",
                    tech: ["PHP", "Laravel", "MySQL", "JavaScript"],
                    thumbnail: "/assets/portfolio/slide3.png",
                    images: ["/assets/portfolio/slide3.png"],
                    demoUrl: "https://miticommunity.com/",
                    codeUrl: "#"
                },
                {
                    id: "program-magister-ilmu-manajemen",
                    title: "Master of Management Science Program",
                    description: "Master of Management Science Program at Malikussaleh University. Built using PHP Laravel programming language with MySQL database. This website is responsive to all devices, with UI components and animated interactions.",
                    fullDescription: "Official website of Master of Management Science Program providing academic information, research, and student services. This system is designed to support efficient learning processes and academic administration.",
                    tech: ["PHP", "Laravel", "MySQL", "Bootstrap"],
                    thumbnail: "/assets/portfolio/slide2.png",
                    images: ["/assets/portfolio/slide2.png"],
                    demoUrl: "https://ppimfe.unimal.ac.id/",
                    codeUrl: "#"
                },
                {
                    id: "program-studi-sistem-informasi",
                    title: "Information Systems Study Program",
                    description: "Website for Information Systems Study Program at Malikussaleh University. Built using PHP Laravel programming language with MySQL database. The website is responsive to all devices, with UI components and animated interactions.",
                    fullDescription: "Official website of Information Systems Study Program at Malikussaleh University built to provide comprehensive information about the study program, facilities, curriculum, and academic activities. Equipped with an easy-to-use content management system for administrators.",
                    tech: ["PHP", "Laravel", "MySQL", "Bootstrap"],
                    thumbnail: "/assets/portfolio/slide1.png",
                    images: ["/assets/portfolio/slide1.png"],
                    demoUrl: "https://sisteminformasi.unimal.ac.id/",
                    codeUrl: "#"
                }
            ]
        },
        blog: {
            title: "Blog",
            subtitle: "Thoughts on development, design, and technology",
            detail: "Blog Details",
            readMore: "Read More",
            posts: [
                {
                    id: "heffan-khitan-project",
                    title: "Project Showcase – Heffan Khitan Website Development",
                    excerpt: "I had the opportunity to work on a website project for Heffan Khitan, a modern circumcision service located in Malang, East Java.",
                    date: "2024-10-01",
                    readTime: "4 min read",
                    content: "I had the opportunity to work on a website project for Heffan Khitan, a modern circumcision service located in Malang, East Java.\n\nTechnologies Used:\n- PHP\n- WordPress\n\nDevelopment Focus:\n- Informative, accessible, and fully responsive UI/UX design\n- Clear content structure (profile, services, circumcision education)\n- SEO optimization to improve discoverability for potential patients\n- Integration of online registration form & WhatsApp for seamless booking\n\nAbout Heffan Khitan:\nManaged by experienced medical professionals\nUtilizes sterile and disposable equipment\nSuitable for all ages (infants to adults)\nQuick process, minimal trauma, and child-friendly approach\n\n🔗 Visit the website here: https://heffankhitan.com/\n\nThis project has been a valuable experience for me as a freelancer, especially in combining healthcare business needs with user-friendly digital solutions.",
                    image: "/assets/blog/blog_1.png"
                },
                {
                    id: "emr-system-collaboration",
                    title: "Electronic Medical Record (EMR) System Development Collaboration",
                    excerpt: "Today, my team and I had the opportunity to engage in an inspiring collaboration with healthcare professionals at RSUD Langsa to support the development of the Electronic Medical Record (EMR) system.",
                    date: "2024-09-28",
                    readTime: "3 min read",
                    content: "Today, my team and I had the opportunity to engage in an inspiring collaboration with healthcare professionals at RSUD Langsa to support the development of the Electronic Medical Record (EMR) system.\n\nOur discussion focused on refining the design and features of the EMR forms, which are set to be implemented soon. This system is expected to streamline medical service workflows, enhance the accuracy of patient records, and ensure fully integrated data management.\n\nThis initiative is part of the hospital's ongoing digital transformation, aimed at delivering more modern, responsive, and patient-centered healthcare services.\n\nWe believe that cross-disciplinary collaboration is key to creating innovative solutions in the healthcare sector. Let's continue moving forward together toward a more efficient and impactful future in medical services.\n\n💡🏥 paperlesshospital.id\n#RSUDLangsa #EMR #DigitalTransformation #HealthcareInnovation #CollaborationForChange",
                    image: "/assets/blog/blog_2.jpg"
                }
            ]
        }
    },
    id: {
        greeting: "Halo, saya Nasruddin",
        heroTitle: "kode keren",
        heroSubtitle: "Saya Web Developer & Software Engineer yang berfokus membangun aplikasi web dan mobile responsif, efisien, dan berorientasi pada pengguna.",
        getInTouch: "Hubungi Saya",
        viewProjects: "Lihat Proyek",
        email: "nasruddin20182019@@gmail.com",
        phone: "+62 (822) 6742-xxxx",
        nav: {
            home: "Beranda",
            about: "Tentang",
            projects: "Proyek",
            data: "Data",
            blog: "Blog",
            contact: "Hubungi Saya"
        },
        about: {
            title: "Tentang Saya",
            description1: "Saya sebagai Web Developer & Software Engineer dengan keahlian dalam membangun aplikasi web dan mobile. Saya menguasai berbagai bahasa pemrograman, framework, serta tools modern yang mendukung pengembangan sistem yang responsif, efisien, dan berfokus pada kebutuhan pengguna.",
            description2: "Terus mengembangkan kemampuan di bidang Full-Stack Development serta menciptakan solusi digital yang inovatif, ramah pengguna, dan memberikan dampak positif.",
            description3: "Saya menempuh pendidikan di Universitas Malikussaleh dengan jurusan Sistem Informasi dan meraih IPK 3.77.",
            skills: "Keterampilan",
        },
        data: {
            title: "Data",
            skills: "Keterampilan",
            experience: "Pengalaman",
            experiences: [
                {
                    title: "Junior Developer",
                    company: "paperlesshospital.id · Kontrak",
                    date: "Sep 2024 - Sekarang · 1 thn 1 bln",
                    location: "Langsa, Nanggroe Aceh Darussalam, Indonesia",
                    desc: "Bangga bergabung dengan PT. Digital Kreasi Muslim sebagai Junior Developer, berkontribusi pada Sistem Rekam Medis Elektronik berbasis AI (paperlesshospital.id) di RSUD Langsa. Tanggung jawab termasuk mengembangkan Sistem Informasi Manajemen Rumah Sakit (SIMRS), dukungan teknis, dan pemeliharaan aplikasi menggunakan Laravel, PHP, JavaScript, dan MySQL."
                },
                {
                    title: "Software Engineer",
                    company: "taiwanhalal · Paruh Waktu",
                    date: "Sep 2024 - Sep 2025 · 1 thn 1 bln",
                    location: "Kota Hsinchu, Taiwan, Taiwan · Jarak Jauh",
                    desc: "Bekerja secara jarak jauh sebagai Software Engineer menggunakan teknologi modern. Berpengalaman dalam pengembangan aplikasi mobile dengan Flutter, Ionic Angular, dan Kotlin, backend dengan Node.js dan Express.js, serta pengembangan web dengan React.js. Mengembangkan KiwiSmart, aplikasi web berbasis peta dengan React dan Python Flask, yang ditingkatkan dengan integrasi AI."
                },
                {
                    title: "Web Developer",
                    company: "Universitas Malikussaleh · Magang",
                    date: "Jan 2023 - Des 2024 · 2 thn",
                    location: "Indonesia",
                    desc: "Merancang proyek dari awal, termasuk desain, ruang lingkup, jadwal, dan tujuan untuk website Sistem Informasi Unimal. Menjabat sebagai Admin untuk website Prodi Sistem Informasi, memperoleh sertifikasi Junior Web Developer dari Digital Talent Scholarship. Berkontribusi pada pengabdian masyarakat dengan membantu guru dengan aplikasi bank soal dan mengembangkan website akreditasi PMIM."
                },
                {
                    title: "Web Developer",
                    company: "Hasnur Centre · Magang",
                    date: "Agu 2022 - Des 2022 · 5 bln",
                    location: "Banjarmasin, Kalimantan Selatan, Indonesia",
                    desc: "Mengembangkan dan menyelesaikan proyek web untuk Hulu Talent menggunakan HTML5, CSS3, JavaScript, TypeScript, PHP, Android Studio, Flutter, WordPress, React, Next.js, Laravel, Node.js, Express.js, jQuery, AJAX, Bootstrap, Tailwind CSS, MySQL, MongoDB, dan Firebase."
                }
            ]
        },
        projects: {
            title: "Proyek",
            subtitle: "Berikut adalah beberapa karya terbaru saya",
            detail: "Detail Proyek",
            liveDemo: "Demo Langsung",
            viewCode: "Lihat Kode",
            posts: [
                {
                    id: "sistem-rekam-medis-elektronik",
                    title: "pengembangan sistem Rekam Medis Elektronik (EMR)",
                    description: "Hari ini, tim saya berkolaborasi dengan tenaga kesehatan di RSUD Langsa untuk mendukung pengembangan sistem Rekam Medis Elektronik (EMR). Diskusi difokuskan pada penyempurnaan desain dan fitur formulir EMR yang akan segera diterapkan guna mempermudah alur layanan, meningkatkan akurasi data pasien, dan mendukung transformasi digital rumah sakit menuju layanan kesehatan yang modern dan berpusat pada pasien.",
                    fullDescription: "Sistem Rekam Medis Elektronik yang dikembangkan untuk RSUD Langsa dalam rangka transformasi digital rumah sakit. Sistem ini dirancang untuk mempermudah alur layanan kesehatan, meningkatkan akurasi data pasien, dan mendukung decision making yang berbasis data untuk pelayanan kesehatan yang lebih baik.",
                    tech: ["Laravel", "PHP", "MySQL", "JavaScript"],
                    thumbnail: "/assets/portfolio/slide14.png",
                    images: ["/assets/portfolio/slide14.png"],
                    demoUrl: "https://rme.e-rsudlangsa.id/",
                    codeUrl: "#"
                },
                {
                    id: "kiwismart-gis-system",
                    title: "pengembangan sistem KiwiSmart",
                    description: "Saya bekerja sebagai Software Engineer secara remote dengan memanfaatkan berbagai teknologi modern. Untuk pengembangan aplikasi mobile, saya berpengalaman menggunakan Flutter, Ionic Angular, dan Kotlin. Pada sisi backend, saya menggunakan Node.js dan Express.js, sementara untuk pengembangan web saya lebih banyak bekerja dengan React.js.",
                    fullDescription: "KiwiSmart adalah aplikasi berbasis web yang dibangun dengan React dan backend Python Flask. Aplikasi ini berfokus pada sistem pemetaan geografis (map-based system) dan dilengkapi dengan integrasi AI untuk meningkatkan fungsionalitasnya. Sistem ini dirancang untuk memberikan solusi cerdas dalam analisis data geografis dan spatial intelligence.",
                    tech: ["React", "Python", "Flask", "AI/ML", "GIS"],
                    thumbnail: "/assets/portfolio/slide15.png",
                    images: ["/assets/portfolio/slide15.png"],
                    demoUrl: "https://github.com/NasDev07/kiwismart-gis-frontend",
                    codeUrl: "https://github.com/NasDev07/kiwismart-gis-frontend"
                },
                {
                    id: "heffan-khitan-website",
                    title: "Project Showcase – Heffan Khitan Website Development",
                    description: "Saya berkesempatan mengerjakan website untuk Heffan Khitan, layanan khitan modern di Malang, Jawa Timur. Website ini dikembangkan dengan PHP dan WordPress, berfokus pada tampilan yang informatif, responsif, serta mudah diakses.",
                    fullDescription: "Website profesional untuk layanan khitan modern Heffan Khitan di Malang. Fitur utama meliputi struktur konten yang jelas, optimasi SEO, serta integrasi formulir pendaftaran online dan WhatsApp untuk kemudahan booking. Proyek ini menggabungkan kebutuhan layanan kesehatan dengan solusi digital yang ramah pengguna.",
                    tech: ["PHP", "WordPress", "MySQL", "JavaScript"],
                    thumbnail: "/assets/portfolio/slide13.png",
                    images: ["/assets/portfolio/slide13.png"],
                    demoUrl: "http://heffankhitan.com/",
                    codeUrl: "#"
                },
                {
                    id: "sistem-bank-soal-mobile",
                    title: "SISTEM BANK SOAL BERBASIS APLIKASI MOBILE DAN WEB",
                    description: "Perkembangan teknologi yang pesat dalam dunia pendidikan memunculkan peluang integrasi teknologi mobile dan web, seperti yang diterapkan di SMK Negeri 3 Lhokseumawe. aplikasi mobile dan web menggunakan framework Laravel dan Flutter. Dengan pendekatan System Development Life Cycle (SDLC).",
                    fullDescription: "Sistem manajemen bank soal yang terintegrasi antara platform web dan mobile untuk mendukung proses pembelajaran digital di SMK Negeri 3 Lhokseumawe. Sistem ini memungkinkan guru membuat, mengelola, dan mendistribusikan soal secara efisien.",
                    tech: ["Laravel", "Flutter", "MySQL", "PHP"],
                    thumbnail: "/assets/portfolio/slide11.png",
                    images: ["/assets/portfolio/slide11.png", "/assets/portfolio/slide12.png"],
                    demoUrl: "https://banksoal.smkn3lhokseumawe.sch.id/",
                    codeUrl: "#"
                },
                {
                    id: "mobil-ionic-angular",
                    title: "Aplikasi Mobil dengan IONIC Angular JS",
                    description: "Proyek Belajar ini bertujuan untuk membangun sebuah Aplikasi Sederhana Sebagai Latihan Belajar menggunakan framework IONIC Angular JS. Aplikasi ini dirancang sebagai sarana latihan mempelajari dasar-dasar pembuatan Mobile mobile menggunakan bahasa program JavaScript.",
                    fullDescription: "Aplikasi mobile yang dibangun dengan Ionic Angular untuk pembelajaran pengembangan aplikasi hybrid. Fokus pada implementasi UI/UX yang native-like dengan performa yang optimal.",
                    tech: ["Ionic", "Angular", "TypeScript", "Cordova"],
                    thumbnail: "/assets/portfolio/slide10.png",
                    images: ["/assets/portfolio/slide10.png"],
                    demoUrl: "https://github.com/NasDev07/web-frontend-kuliner-restoran",
                    codeUrl: "https://github.com/NasDev07/web-frontend-kuliner-restoran"
                },
                {
                    id: "food-online-vuejs",
                    title: "Aplikasi Food Online dengan Vue JS",
                    description: "Proyek Belajar ini bertujuan untuk membangun sebuah Web Food Online menggunakan framework Vue JS. Web ini dirancang sebagai sarana latihan mempelajari dasar-dasar pembuatan Web Vue JS menggunakan bahasa program JavaScript.",
                    fullDescription: "Aplikasi web pemesanan makanan online yang dibangun dengan Vue.js. Fitur include menu digital, sistem pemesanan, dan antarmuka yang user-friendly untuk restaurant dan customer.",
                    tech: ["Vue.js", "JavaScript", "CSS3", "HTML5"],
                    thumbnail: "/assets/portfolio/slide9.png",
                    images: ["/assets/portfolio/slide9.png"],
                    demoUrl: "https://github.com/NasDev07/web-frontend-kuliner-restoran",
                    codeUrl: "https://github.com/NasDev07/web-frontend-kuliner-restoran"
                },
                {
                    id: "ecommerce-flutter",
                    title: "Aplikasi Toko Online dengan Flutter",
                    description: "Proyek Belajar ini bertujuan untuk membangun sebuah aplikasi Toko Online menggunakan framework Flutter. Aplikasi ini dirancang sebagai sarana latihan mempelajari dasar-dasar pembuatan aplikasi mobile dengan menggunakan Flutter.",
                    fullDescription: "Aplikasi e-commerce mobile lengkap yang dibangun dengan Flutter. Mencakup katalog produk, keranjang belanja, sistem pembayaran, dan manajemen user yang terintegrasi.",
                    tech: ["Flutter", "Dart", "Firebase"],
                    thumbnail: "/assets/portfolio/slide8.png",
                    images: ["/assets/portfolio/slide8.png"],
                    demoUrl: "https://github.com/NasDev07/E-commerce-Complete-Flutter-UI",
                    codeUrl: "https://github.com/NasDev07/E-commerce-Complete-Flutter-UI"
                },
                {
                    id: "chat-app-flutter",
                    title: "Aplikasi Chat Sederhana dengan Flutter",
                    description: "Proyek Belajar ini bertujuan untuk membangun sebuah aplikasi chat sederhana menggunakan framework Flutter. Aplikasi ini dirancang sebagai sarana latihan mempelajari dasar-dasar pembuatan aplikasi mobile dengan menggunakan Flutter.",
                    fullDescription: "Aplikasi chat mobile yang dibangun dengan Flutter untuk pembelajaran pengembangan aplikasi mobile. Fitur include real-time messaging, user interface yang modern, dan performa yang optimal.",
                    tech: ["Flutter", "Dart", "Firebase"],
                    thumbnail: "/assets/portfolio/slide7.png",
                    images: ["/assets/portfolio/slide7.png"],
                    demoUrl: "https://github.com/NasDev07/whatsapp-chat",
                    codeUrl: "https://github.com/NasDev07/whatsapp-chat"
                },
                {
                    id: "toko-online-javascript",
                    title: "Toko Online Sederhana dengan JavaScript",
                    description: "Proyek Belajar ini bertujuan untuk membangun sebuah aplikasi web menggunakan HTML, CSS, JavaScript dan Bootstrap. Hanya Leading Page sederhana toko online, menjelajahi daftar produk, dan menambahkan produk ke dalam keranjang belanja.",
                    fullDescription: "Landing page e-commerce sederhana yang dibangun dengan teknologi web fundamental. Proyek ini fokus pada pembelajaran dasar-dasar web development dengan JavaScript vanilla.",
                    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
                    thumbnail: "/assets/portfolio/slide6.png",
                    images: ["/assets/portfolio/slide6.png"],
                    demoUrl: "https://github.com/NasDev07/Web-FrontEnd-ecommerce",
                    codeUrl: "https://github.com/NasDev07/Web-FrontEnd-ecommerce"
                },
                {
                    id: "toko-online-react",
                    title: "Toko Online Sederhana dengan React JS",
                    description: "Proyek Belajar ini bertujuan untuk membangun sebuah aplikasi web menggunakan React JS yang menyediakan fungsionalitas untuk pengguna melakukan login, registrasi, menjelajahi daftar produk, dan menambahkan produk ke dalam keranjang belanja.",
                    fullDescription: "Aplikasi e-commerce sederhana yang dibangun dengan React JS untuk pembelajaran. Fitur include autentikasi pengguna, katalog produk, keranjang belanja, dan antarmuka yang responsif.",
                    tech: ["React", "JavaScript", "CSS3", "HTML5"],
                    thumbnail: "/assets/portfolio/slide5.png",
                    images: ["/assets/portfolio/slide5.png"],
                    demoUrl: "https://github.com/NasDev07/FrontEnd-React",
                    codeUrl: "https://github.com/NasDev07/FrontEnd-React"
                },
                {
                    id: "web-desa-padang-sakti",
                    title: "Web Desa (Padang Sakti)",
                    description: "Website desa merupakan gambaran masa depan mengenai kondisi ideal yang diinginkan atau dicita-citakan oleh pemerintah. Situs web ini dapat beradaptasi dengan semua perangkat, dengan komponen UI dan interaksi animasi. Menggunakan bahasa pemrograman PHP Laravel dengan menggunakan database MySql.",
                    fullDescription: "Sistem informasi desa yang menyediakan layanan administrasi online, informasi transparansi desa, berita dan pengumuman, serta layanan publik untuk masyarakat. Mendukung transformasi digital pemerintahan desa.",
                    tech: ["PHP", "Laravel", "MySQL", "Bootstrap"],
                    thumbnail: "/assets/portfolio/slide4.png",
                    images: ["/assets/portfolio/slide4.png"],
                    demoUrl: "https://padangsakti.com/",
                    codeUrl: "#"
                },
                {
                    id: "miti-community",
                    title: "Miti Community",
                    description: "Komunitas Miti (Mahasiswa IT Indonesia) merupakan komunitas yang bertujuan untuk mengasah kemampuan mahasiswa di bidang IT. Situs web ini dapat beradaptasi dengan semua perangkat, dengan komponen UI dan interaksi animasi. Menggunakan bahasa pemrograman PHP Laravel dengan menggunakan database MySql.",
                    fullDescription: "Platform komunitas online untuk Mahasiswa IT Indonesia yang menyediakan forum diskusi, sharing knowledge, event organizer, dan networking. Dilengkapi dengan sistem membership dan manajemen event yang terintegrasi.",
                    tech: ["PHP", "Laravel", "MySQL", "JavaScript"],
                    thumbnail: "/assets/portfolio/slide3.png",
                    images: ["/assets/portfolio/slide3.png"],
                    demoUrl: "https://miticommunity.com/",
                    codeUrl: "#"
                },
                {
                    id: "program-magister-ilmu-manajemen",
                    title: "Program Magister Ilmu Manajemen",
                    description: "Program Magister Ilmu Manajemen Universitas Malikussaleh. Dibuat menggunakan bahasa pemrograman PHP Laravel dengan menggunakan database MySql. Situs web ini dapat beradaptasi dengan semua perangkat, dengan komponen UI dan interaksi animasi.",
                    fullDescription: "Website resmi Program Magister Ilmu Manajemen yang menyediakan informasi akademik, penelitian, dan layanan kemahasiswaan. Sistem ini dirancang untuk mendukung proses pembelajaran dan administrasi akademik yang efisien.",
                    tech: ["PHP", "Laravel", "MySQL", "Bootstrap"],
                    thumbnail: "/assets/portfolio/slide2.png",
                    images: ["/assets/portfolio/slide2.png"],
                    demoUrl: "https://ppimfe.unimal.ac.id/",
                    codeUrl: "#"
                },
                {
                    id: "program-studi-sistem-informasi",
                    title: "Program Studi Sistem Informasi",
                    description: "Web Program Studi Sistem Informasi Universitas Malikussaleh. Dibuat menggunakan bahasa pemrograman PHP Laravel dengan menggunakan database MySql. Situs web dapat beradaptasi dengan semua perangkat, dengan komponen UI dan interaksi animasi.",
                    fullDescription: "Website Program Studi Sistem Informasi Universitas Malikussaleh yang dibangun untuk memberikan informasi lengkap tentang program studi, fasilitas, kurikulum, dan aktivitas akademik. Dilengkapi dengan sistem manajemen konten yang mudah digunakan untuk admin.",
                    tech: ["PHP", "Laravel", "MySQL", "Bootstrap"],
                    thumbnail: "/assets/portfolio/slide1.png",
                    images: ["/assets/portfolio/slide1.png"],
                    demoUrl: "https://sisteminformasi.unimal.ac.id/",
                    codeUrl: "#"
                }
            ]
        },
        blog: {
            title: "Blog",
            subtitle: "Pikiran tentang pengembangan, desain, dan teknologi",
            detail: "Detail Blog",
            readMore: "Baca Selengkapnya",
            posts: [
                {
                    id: "heffan-khitan-project",
                    title: "Project Showcase – Pengembangan Website Heffan Khitan",
                    excerpt: "Saya berkesempatan mengerjakan proyek website untuk Heffan Khitan, layanan khitan modern yang berlokasi di Malang, Jawa Timur.",
                    date: "1 Okt 2024",
                    readTime: "4 menit baca",
                    content: "Saya berkesempatan mengerjakan proyek website untuk Heffan Khitan, layanan khitan modern yang berlokasi di Malang, Jawa Timur.\n\nTeknologi yang Digunakan:\n- PHP\n- WordPress\n\nFokus Pengembangan:\n- Desain UI/UX yang informatif, mudah diakses, dan sepenuhnya responsif\n- Struktur konten yang jelas (profil, layanan, edukasi khitan)\n- Optimasi SEO untuk meningkatkan ketemu'an bagi calon pasien\n- Integrasi formulir pendaftaran online & WhatsApp untuk booking yang mudah\n\nTentang Heffan Khitan:\nDikelola oleh tenaga medis berpengalaman\nMenggunakan peralatan steril dan sekali pakai\nCocok untuk segala usia (bayi hingga dewasa)\nProses cepat, trauma minimal, dan pendekatan ramah anak\n\n🔗 Kunjungi website di sini: https://heffankhitan.com/\n\nProyek ini telah menjadi pengalaman berharga bagi saya sebagai freelancer, terutama dalam menggabungkan kebutuhan bisnis kesehatan dengan solusi digital yang ramah pengguna.",
                    image: "/assets/blog/blog_1.png"
                },
                {
                    id: "emr-system-collaboration",
                    title: "Kolaborasi Pengembangan Sistem Rekam Medis Elektronik (EMR)",
                    excerpt: "Hari ini, tim saya dan saya berkesempatan terlibat dalam kolaborasi yang menginspirasi dengan tenaga kesehatan di RSUD Langsa untuk mendukung pengembangan sistem Rekam Medis Elektronik (EMR).",
                    date: "28 Sep 2024",
                    readTime: "3 menit baca",
                    content: "Hari ini, tim saya dan saya berkesempatan terlibat dalam kolaborasi yang menginspirasi dengan tenaga kesehatan di RSUD Langsa untuk mendukung pengembangan sistem Rekam Medis Elektronik (EMR).\n\nDiskusi kami difokuskan pada penyempurnaan desain dan fitur formulir EMR, yang akan segera diimplementasikan. Sistem ini diharapkan dapat menyederhanakan alur kerja layanan medis, meningkatkan akurasi catatan pasien, dan memastikan manajemen data yang terintegrasi penuh.\n\nInisiatif ini merupakan bagian dari transformasi digital berkelanjutan rumah sakit, yang bertujuan untuk memberikan layanan kesehatan yang lebih modern, responsif, dan berpusat pada pasien.\n\nKami percaya bahwa kolaborasi lintas disiplin adalah kunci untuk menciptakan solusi inovatif di sektor kesehatan. Mari terus bergerak maju bersama menuju masa depan yang lebih efisien dan berdampak dalam layanan medis.\n\n💡🏥 paperlesshospital.id\n#RSUDLangsa #EMR #TransformasiDigital #InovasiKesehatan #KolaborasiUntukPerubahan",
                    image: "/assets/blog/blog_2.jpg"
                }
            ]
        }
    },
    zh: {
        greeting: "你好，我是纳斯鲁丁",
        heroTitle: "代碼很酷",
        heroSubtitle: "我是网页开发与软件工程师，专注于构建响应迅速、高效、以用户为中心的网页和移动应用。",
        getInTouch: "联系我",
        viewProjects: "查看项目",
        email: "nasruddin20182019@gmail.com",
        phone: "+62 (822) 6742-xxxx",
        nav: {
            home: "首页",
            about: "关于",
            projects: "项目",
            data: "数据",
            blog: "博客",
            contact: "联系我"
        },
        about: {
            title: "关于我",
            description1: "我是一名网页开发工程师和软件工程师，擅长开发网页和移动应用程序。我精通多种编程语言、框架和现代工具，能够支持开发响应迅速、高效且以用户为中心的系统。",
            description2: "不断提升自己在全栈开发方面的能力，并致力于创造创新、易用且具有积极影响的数字化解决方案。",
            description3: "我就读于马利库萨利大学，主修信息系统，并取得了 3.77 的平均绩点 (GPA)。",
            skills: "技能",
        },
        data: {
            title: "数据",
            skills: "技能",
            experience: "经验",
            experiences: [
                {
                    title: "初级开发人员",
                    company: "paperlesshospital.id · 合同制",
                    date: "2024年9月 - 至今 · 1年1个月",
                    location: "印尼，朗萨，南伽罗亚齐达鲁萨兰",
                    desc: "很荣幸加入 PT. Digital Kreasi Muslim 担任初级开发人员，为朗萨医院的基于人工智能的电子医疗记录系统 (paperlesshospital.id) 做出贡献。职责包括开发医院信息管理系统 (SIMRS)、技术支持和应用程序维护，使用 Laravel、PHP、JavaScript 和 MySQL。"
                },
                {
                    title: "软件工程师",
                    company: "taiwanhalal · 兼职",
                    date: "2024年9月 - 2025年9月 · 1年1个月",
                    location: "台湾，新竹市，台湾 · 远程",
                    desc: "作为软件工程师远程工作，使用现代技术。拥有使用 Flutter、Ionic Angular 和 Kotlin 进行移动应用开发，Node.js 和 Express.js 进行后端开发，以及 React.js 进行网页开发的经验。开发了 KiwiSmart，一个基于地图的网页应用，使用 React 和 Python Flask，并集成了人工智能。"
                },
                {
                    title: "网页开发人员",
                    company: "马利库萨利大学 · 实习",
                    date: "2023年1月 - 2024年12月 · 2年",
                    location: "印尼",
                    desc: "从头开始设计项目，包括 Unimal 信息系统网站的设计、范围、时间表和目标。担任信息系统课程网站管理员，获得数字人才奖学金的初级网页开发人员认证。通过协助教师开发题库应用和开发 PMIM 认证网站为社区服务做出贡献。"
                },
                {
                    title: "网页开发人员",
                    company: "Hasnur Centre · 实习",
                    date: "2022年8月 - 2022年12月 · 5个月",
                    location: "印尼，南加里曼丹，班贾尔马辛",
                    desc: "为 Hulu Talent 开发并完成网页项目，使用 HTML5、CSS3、JavaScript、TypeScript、PHP、Android Studio、Flutter、WordPress、React、Next.js、Laravel、Node.js、Express.js、jQuery、AJAX、Bootstrap、Tailwind CSS、MySQL、MongoDB 和 Firebase。"
                }
            ]
        },
        projects: {
            title: "项目",
            subtitle: "以下是我最近的一些作品",
            detail: "项目详情",
            liveDemo: "实时演示",
            viewCode: "查看代码",
            posts: [
                {
                    id: "sistem-rekam-medis-elektronik",
                    title: "电子病历 (EMR) 系统开发",
                    description: "今天，我的团队与朗萨医院的医护人员合作，支持电子病历 (EMR) 系统的开发。讨论重点是改进即将实施的 EMR 表单的设计和功能，以促进服务流程、提高患者数据准确性，并支持医院数字化转型，朝着现代化和以患者为中心的医疗服务发展。",
                    fullDescription: "为朗萨医院开发的电子病历系统，作为医院数字化转型的一部分。该系统旨在促进医疗服务流程、提高患者数据准确性，并支持基于数据的决策制定，以提供更好的医疗服务。",
                    tech: ["Laravel", "PHP", "MySQL", "JavaScript"],
                    thumbnail: "/assets/portfolio/slide14.png",
                    images: ["/assets/portfolio/slide14.png"],
                    demoUrl: "https://rme.e-rsudlangsa.id/",
                    codeUrl: "#"
                },
                {
                    id: "kiwismart-gis-system",
                    title: "KiwiSmart 系统开发",
                    description: "我作为软件工程师远程工作，使用各种现代技术。对于移动应用开发，我有使用 Flutter、Ionic Angular 和 Kotlin 的经验。在后端方面，我使用 Node.js 和 Express.js，而对于网页开发，我更多地使用 React.js。",
                    fullDescription: "KiwiSmart 是一个基于网络的应用程序，使用 React 和 Python Flask 后端构建。该应用程序专注于地理测绘系统（基于地图的系统），并配备 AI 集成以增强其功能。该系统旨在为地理数据分析和空间智能提供智能解决方案。",
                    tech: ["React", "Python", "Flask", "AI/ML", "GIS"],
                    thumbnail: "/assets/portfolio/slide15.png",
                    images: ["/assets/portfolio/slide15.png"],
                    demoUrl: "https://github.com/NasDev07/kiwismart-gis-frontend",
                    codeUrl: "https://github.com/NasDev07/kiwismart-gis-frontend"
                },
                {
                    id: "heffan-khitan-website",
                    title: "项目展示 – Heffan Khitan 网站开发",
                    description: "我有机会为 Heffan Khitan（东爪哇玛琅的现代割礼服务）开发网站。该网站使用 PHP 和 WordPress 开发，专注于信息丰富、响应快速且易于访问的外观。",
                    fullDescription: "为玛琅 Heffan Khitan 现代割礼服务开发的专业网站。主要功能包括清晰的内容结构、SEO 优化，以及在线注册表单和 WhatsApp 集成以便于预约。该项目将医疗保健服务需求与用户友好的数字解决方案相结合。",
                    tech: ["PHP", "WordPress", "MySQL", "JavaScript"],
                    thumbnail: "/assets/portfolio/slide13.png",
                    images: ["/assets/portfolio/slide13.png"],
                    demoUrl: "http://heffankhitan.com/",
                    codeUrl: "#"
                },
                {
                    id: "sistem-bank-soal-mobile",
                    title: "基于移动和网络应用的题库系统",
                    description: "教育领域技术的快速发展为移动和网络技术整合创造了机会，如在 SMK Negeri 3 Lhokseumawe 实施的。使用 Laravel 和 Flutter 框架的移动和网络应用。采用系统开发生命周期 (SDLC) 方法。",
                    fullDescription: "为支持 SMK Negeri 3 Lhokseumawe 数字学习过程而开发的网络和移动平台之间的集成题库管理系统。该系统允许教师高效地创建、管理和分发题目。",
                    tech: ["Laravel", "Flutter", "MySQL", "PHP"],
                    thumbnail: "/assets/portfolio/slide11.png",
                    images: ["/assets/portfolio/slide11.png", "/assets/portfolio/slide12.png"],
                    demoUrl: "https://banksoal.smkn3lhokseumawe.sch.id/",
                    codeUrl: "#"
                },
                {
                    id: "mobil-ionic-angular",
                    title: "使用 IONIC Angular JS 的汽车应用",
                    description: "这个学习项目旨在使用 IONIC Angular JS 框架构建一个简单应用程序作为学习实践。此应用程序旨在作为练习学习使用 JavaScript 编程语言进行移动开发基础的手段。",
                    fullDescription: "使用 Ionic Angular 构建的移动应用程序，用于学习混合应用开发。专注于实现类似原生的 UI/UX，具有最佳性能。",
                    tech: ["Ionic", "Angular", "TypeScript", "Cordova"],
                    thumbnail: "/assets/portfolio/slide10.png",
                    images: ["/assets/portfolio/slide10.png"],
                    demoUrl: "https://github.com/NasDev07/web-frontend-kuliner-restoran",
                    codeUrl: "https://github.com/NasDev07/web-frontend-kuliner-restoran"
                },
                {
                    id: "food-online-vuejs",
                    title: "使用 Vue JS 的在线餐厅应用",
                    description: "这个学习项目旨在使用 Vue JS 框架构建一个在线餐厅网站。此网站旨在作为练习学习使用 JavaScript 编程语言进行 Vue JS 网站开发基础的手段。",
                    fullDescription: "使用 Vue.js 构建的在线餐厅订购网络应用程序。功能包括数字菜单、订购系统，以及为餐厅和客户提供的用户友好界面。",
                    tech: ["Vue.js", "JavaScript", "CSS3", "HTML5"],
                    thumbnail: "/assets/portfolio/slide9.png",
                    images: ["/assets/portfolio/slide9.png"],
                    demoUrl: "https://github.com/NasDev07/web-frontend-kuliner-restoran",
                    codeUrl: "https://github.com/NasDev07/web-frontend-kuliner-restoran"
                },
                {
                    id: "ecommerce-flutter",
                    title: "使用 Flutter 的在线商店应用",
                    description: "这个学习项目旨在使用 Flutter 框架构建一个在线商店应用程序。此应用程序旨在作为练习学习使用 Flutter 进行移动应用开发基础的手段。",
                    fullDescription: "使用 Flutter 构建的完整移动电商应用程序。包括产品目录、购物车、支付系统和集成用户管理。",
                    tech: ["Flutter", "Dart", "Firebase"],
                    thumbnail: "/assets/portfolio/slide8.png",
                    images: ["/assets/portfolio/slide8.png"],
                    demoUrl: "https://github.com/NasDev07/E-commerce-Complete-Flutter-UI",
                    codeUrl: "https://github.com/NasDev07/E-commerce-Complete-Flutter-UI"
                },
                {
                    id: "chat-app-flutter",
                    title: "使用 Flutter 的简单聊天应用",
                    description: "这个学习项目旨在使用 Flutter 框架构建一个简单的聊天应用程序。此应用程序旨在作为练习学习使用 Flutter 进行移动应用开发基础的手段。",
                    fullDescription: "使用 Flutter 构建的移动聊天应用程序，用于学习移动应用开发。功能包括实时消息、现代用户界面和最佳性能。",
                    tech: ["Flutter", "Dart", "Firebase"],
                    thumbnail: "/assets/portfolio/slide7.png",
                    images: ["/assets/portfolio/slide7.png"],
                    demoUrl: "https://github.com/NasDev07/whatsapp-chat",
                    codeUrl: "https://github.com/NasDev07/whatsapp-chat"
                },
                {
                    id: "toko-online-javascript",
                    title: "使用 JavaScript 的简单在线商店",
                    description: "这个学习项目旨在使用 HTML、CSS、JavaScript 和 Bootstrap 构建一个 Web 应用程序。只是一个简单的在线商店登录页面，浏览产品列表，以及将产品添加到购物车。",
                    fullDescription: "使用基础 Web 技术构建的简单电商着陆页面。该项目专注于学习使用原生 JavaScript 的基础 Web 开发。",
                    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
                    thumbnail: "/assets/portfolio/slide6.png",
                    images: ["/assets/portfolio/slide6.png"],
                    demoUrl: "https://github.com/NasDev07/Web-FrontEnd-ecommerce",
                    codeUrl: "https://github.com/NasDev07/Web-FrontEnd-ecommerce"
                },
                {
                    id: "toko-online-react",
                    title: "使用 React JS 的简单在线商店",
                    description: "这个学习项目旨在使用 React JS 构建一个 Web 应用程序，为用户提供登录、注册、浏览产品列表和将产品添加到购物车的功能。",
                    fullDescription: "使用 React JS 构建的简单电商应用程序，用于学习目的。功能包括用户认证、产品目录、购物车和响应式界面。",
                    tech: ["React", "JavaScript", "CSS3", "HTML5"],
                    thumbnail: "/assets/portfolio/slide5.png",
                    images: ["/assets/portfolio/slide5.png"],
                    demoUrl: "https://github.com/NasDev07/FrontEnd-React",
                    codeUrl: "https://github.com/NasDev07/FrontEnd-React"
                },
                {
                    id: "web-desa-padang-sakti",
                    title: "村庄网站（Padang Sakti）",
                    description: "村庄网站代表政府期望或渴望的理想条件的未来愿景。该网站适应所有设备，具有 UI 组件和动画交互。使用 PHP Laravel 编程语言和 MySQL 数据库构建。",
                    fullDescription: "村庄信息系统，为社区提供在线行政服务、村庄透明度信息、新闻公告和公共服务。支持村庄治理的数字化转型。",
                    tech: ["PHP", "Laravel", "MySQL", "Bootstrap"],
                    thumbnail: "/assets/portfolio/slide4.png",
                    images: ["/assets/portfolio/slide4.png"],
                    demoUrl: "https://padangsakti.com/",
                    codeUrl: "#"
                },
                {
                    id: "miti-community",
                    title: "Miti 社区",
                    description: "Miti 社区（印尼 IT 学生）是一个旨在磨练学生在 IT 领域能力的社区。该网站适应所有设备，具有 UI 组件和动画交互。使用 PHP Laravel 编程语言和 MySQL 数据库构建。",
                    fullDescription: "印尼 IT 学生在线社区平台，提供讨论论坛、知识分享、活动组织和网络建设。配备集成的会员系统和活动管理。",
                    tech: ["PHP", "Laravel", "MySQL", "JavaScript"],
                    thumbnail: "/assets/portfolio/slide3.png",
                    images: ["/assets/portfolio/slide3.png"],
                    demoUrl: "https://miticommunity.com/",
                    codeUrl: "#"
                },
                {
                    id: "program-magister-ilmu-manajemen",
                    title: "管理科学硕士项目",
                    description: "马利库萨利大学管理科学硕士项目。使用 PHP Laravel 编程语言和 MySQL 数据库构建。该网站适应所有设备，具有 UI 组件和动画交互。",
                    fullDescription: "管理科学硕士项目官方网站，提供学术信息、研究和学生服务。该系统旨在支持高效的学习过程和学术管理。",
                    tech: ["PHP", "Laravel", "MySQL", "Bootstrap"],
                    thumbnail: "/assets/portfolio/slide2.png",
                    images: ["/assets/portfolio/slide2.png"],
                    demoUrl: "https://ppimfe.unimal.ac.id/",
                    codeUrl: "#"
                },
                {
                    id: "program-studi-sistem-informasi",
                    title: "信息系统专业",
                    description: "马利库萨利大学信息系统专业网站。使用 PHP Laravel 编程语言和 MySQL 数据库构建。网站适应所有设备，具有 UI 组件和动画交互。",
                    fullDescription: "马利库萨利大学信息系统专业官方网站，旨在提供有关专业、设施、课程和学术活动的全面信息。配备易于使用的内容管理系统供管理员使用。",
                    tech: ["PHP", "Laravel", "MySQL", "Bootstrap"],
                    thumbnail: "/assets/portfolio/slide1.png",
                    images: ["/assets/portfolio/slide1.png"],
                    demoUrl: "https://sisteminformasi.unimal.ac.id/",
                    codeUrl: "#"
                }
            ]
        },
        blog: {
            title: "博客",
            subtitle: "关于开发、设计和技术的一些想法",
            detail: "博客详情",
            readMore: "阅读更多",
            posts: [
                {
                    id: "heffan-khitan-project",
                    title: "项目展示 – Heffan Khitan 网站开发",
                    excerpt: "我有机会为 Heffan Khitan（位于东爪哇玛琅的现代割礼服务）开发网站项目。",
                    date: "2024-10-01",
                    readTime: "4 分钟阅读",
                    content: "我有机会为 Heffan Khitan（位于东爪哇玛琅的现代割礼服务）开发网站项目。\n\n使用的技术：\n- PHP\n- WordPress\n\n开发重点：\n- 信息丰富、易于访问且完全响应式的 UI/UX 设计\n- 清晰的内容结构（个人资料、服务、割礼教育）\n- SEO 优化以提高潜在患者的可发现性\n- 集成在线注册表单和 WhatsApp 以实现无缝预订\n\n关于 Heffan Khitan：\n由经验丰富的医疗专业人员管理\n使用无菌和一次性设备\n适合所有年龄段（婴儿到成人）\n快速过程、最小创伤和儿童友好的方法\n\n🔗 在这里访问网站：https://heffankhitan.com/\n\n这个项目对我作为自由职业者来说是宝贵的经验，特别是在将医疗保健业务需求与用户友好的数字解决方案相结合方面。",
                    image: "/assets/blog/blog_1.png"
                },
                {
                    id: "emr-system-collaboration",
                    title: "电子病历 (EMR) 系统开发合作",
                    excerpt: "今天，我和我的团队有机会与朗萨医院的医疗专业人员进行鼓舞人心的合作，支持电子病历 (EMR) 系统的开发。",
                    date: "2024-09-28",
                    readTime: "3 分钟阅读",
                    content: "今天，我和我的团队有机会与朗萨医院的医疗专业人员进行鼓舞人心的合作，支持电子病历 (EMR) 系统的开发。\n\n我们的讨论重点是完善即将实施的 EMR 表单的设计和功能。该系统预计将简化医疗服务工作流程，提高患者记录的准确性，并确保完全集成的数据管理。\n\n这一举措是医院持续数字化转型的一部分，旨在提供更现代、响应更快且以患者为中心的医疗服务。\n\n我们相信跨学科合作是在医疗保健领域创造创新解决方案的关键。让我们继续携手迈向更高效、更有影响力的医疗服务未来。\n\n💡🏥 paperlesshospital.id\n#朗萨医院 #EMR #数字化转型 #医疗创新 #合作促变革",
                    image: "/assets/blog/blog_2.jpg"
                }
            ]
        }
    }
};