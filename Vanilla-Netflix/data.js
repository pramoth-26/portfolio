// ─── SKILLS ──────────────────────────────────────────────────────────────────
const skillsData = [
  {
    id: 'sk1',
    category: 'Programming Languages',
    icon: '💻',
    items: ['JavaScript', 'HTML5', 'CSS3', 'Python'],
  },
  {
    id: 'sk2',
    category: 'Frontend Frameworks',
    icon: '🎨',
    items: ['React.js', 'Angular', 'Bootstrap', 'Tailwind CSS', 'Responsive UI'],
  },
  {
    id: 'sk3',
    category: 'Backend Technologies',
    icon: '⚙️',
    items: ['Node.js', 'Express.js', 'PHP', 'REST API Development'],
  },
  {
    id: 'sk4',
    category: 'Databases',
    icon: '🗄️',
    items: ['MongoDB', 'MySQL', 'Firestore'],
  },
  {
    id: 'sk5',
    category: 'Cloud & BaaS',
    icon: '☁️',
    items: ['Firebase (Authentication)', 'Firebase (Firestore)', 'Firebase (Hosting)'],
  },
  {
    id: 'sk6',
    category: 'GenAI & AI Integration',
    icon: '🤖',
    items: ['Prompt Engineering', 'AI-based Feature Integration'],
  },
  {
    id: 'sk7',
    category: 'Tools & Platforms',
    icon: '🛠',
    items: ['GitHub', 'Postman', 'VS Code'],
  },
  {
    id: 'sk8',
    category: 'Architecture',
    icon: '🏗',
    items: ['MEAN Stack', 'MERN Stack', 'API Integration', 'CRUD Operations'],
  },
];

// ─── WORK EXPERIENCE ─────────────────────────────────────────────────────────
const workData = [
  {
    id: 'w1',
    date: 'June 2025 – May 2026',
    title: ' Full Stack Developer',
    company: 'ERPA',
    description:
      'Developed and maintained ERP-based applications using the MEAN stack (MongoDB, Express.js, Angular, Node.js). Collaborated with cross-functional teams using Jira for task management and Git for version control. Worked on Workday-related projects, contributing to feature development, bug fixing, and system enhancements. Utilized Sherpa AI to streamline development workflows and improve productivity.',
    tech: [ 'Angular','Node.js', 'DBeaver', 'JavaScript'],
    image: 'assets/erpalogo.png',
  },
  {
    id: 'w2',
    date: 'November 2025 – May 2026',
    title: 'Freelance Full Stack Developer',
    company: 'Self-Employed / Freelance',
    description:
      'Developed custom client projects including booking, delivery, and management systems. Integrated WhatsApp automation, OTP authentication, and payment gateway features. Designed responsive UI and scalable backend APIs using Node.js and MongoDB.',
    tech: ['MERN', 'MEAN', 'Firebase', 'JavaScript'],
    image: 'assets/WeCreatesLogo.png',
  },
  {
    id: 'w3',
    date: 'July 2025 – October 2025',
    title: 'Associate Software Engineer',
    company: 'Punditry Tech Labs, Bengaluru',
    description:
      'Developed responsive web applications using React.js and MERN stack technologies. Integrated AI-based features and optimized application workflows and performance. Collaborated with team members to build scalable frontend and backend modules.',
    tech: ['React', 'Node.js', 'Next.js'],
    image: 'assets/punditry.png',
  },
];

// ─── INTERNSHIPS ─────────────────────────────────────────────────────────────
const internData = [
  {
    id: 'i1',
    date: 'May 2023 – August 2023',
    title: 'Angular Developer Intern',
    company: 'Thulija Technologies, Malaysia',
    description:
      'Completed four-month internship in Angular Full Stack development. Worked on enterprise-level applications and contributed to frontend architecture decisions.',
    tech: ['Angular', 'TypeScript', 'Node.js', 'MongoDB'],
    image: 'assets/thulija.png',
  },
  {
    id: 'i2',
    date: 'January 2023 – April 2023',
    title: 'React Developer Intern',
    company: 'DCE Technologies, Virudhunagar',
    description:
      'Completed four-month internship and project in React Full Stack development. Built a complete inventory management system with real-time updates.',
    tech: ['React', 'Express', 'MongoDB'],
    image: 'assets/dce.png',
  },
  {
    id: 'i3',
    date: 'Sep 2024 – Jan 2025',
    title: 'PHP Developer Project',
    company: 'V.H.N.S.N College, Virudhunagar',
    description:
      'Using PHP and MySQL to develop and design Hostel Management for Real Time to VHNSN College.',
    tech: ['PHP', 'Oracle', 'Bootstrap'],
    image: 'assets/hostel.png',
  },
  {
    id: 'i4',
    date: 'June 2022',
    title: 'Python Developer Intern',
    company: 'Appin Technologies, Coimbatore',
    description:
      'Completed one-month intensive internship in Python Full Stack development. Developed a Django-based e-commerce platform during the training period.',
    tech: ['Python', 'Django', 'Bootstrap'],
    image: 'assets/intern.jpg',
  },
];

// ─── PROJECTS ────────────────────────────────────────────────────────────────
const projectsData = [
  {
    id: 'p1',
    title: 'Multi Service Platform',
    description:
      'Developed a scalable multi-service management system with branch handling, vendor management, order processing, and centralized admin control panel. WhatsApp integration for automated messaging/replies, OTP authentication, delivery tracking, and online booking management.',
    tech: ['React.js', 'MongoDB', 'Node.js', 'MERN'],
    image: 'assets/weservices.jpg',
    videoLink: 'assets/weservice.mp4',
    liveLink: 'https://www.weservices.in',
  },
  {
    id: 'p2',
    title: 'E-Commerce Platform',
    description:
      'Developed a modern e-commerce website using React and Firebase with secure authentication, real-time database, payment gateway integration, dynamic product management, and responsive user-friendly interface.',
    tech: ['React.js', 'Firestore', 'Firebase (Authentication)'],
    image: 'assets/ecomm.jpg',
    videoLink: 'assets/ecomm.mp4',
    liveLink: 'https://ecomm.wecreates.ltd',
  },
  {
    id: 'p3',
    title: 'Booking Platform',
    description:
      'Developed a modern booking platform with integrated AI functionality to enhance operational efficiency and data handling.',
    tech: ['Angular.js', 'Firestore', 'Firebase (Authentication)'],
    image: 'assets/hotels.jpg',
    videoLink: 'assets/hotels.mp4',
    liveLink: 'https://hotel.wecreates.ltd',
  },
  {
    id: 'p4',
    title: 'Hostel Management System',
    description:
      'Developed and designed Hostel Management System for Real Time use at VHNSN College.',
    tech: ['PHP', 'MySQL', 'Bootstrap'],
    image: 'assets/hostelsite.png',
    videoLink: 'assets/hostel site.mp4',
    liveLink: null,
  },
  {
    id: 'p5',
    title: 'Tourism Website',
    description:
      'Developed and designed Tourism Management website for client requirements with responsive design.',
    tech: ['React.js', 'JavaScript', 'Bootstrap'],
    image: 'assets/Tours.jpg',
    liveLink: 'https://arasitourism.vercel.app',
    githubLink: 'https://github.com/pramoth-26/tourism',
  },
  {
    id: 'p6',
    title: 'Treasure Hunt',
    description:
      'Interactive game using QR codes to guide players to the next location. Built with HTML, CSS, and JavaScript.',
    tech: ['HTML', 'CSS', 'JavaScript', 'QR Codes'],
    image: 'assets/treasure.jpg',
    videoLink: 'assets/hunt.mp4',
    liveLink: 'https://pramoth-26.github.io/Treasure-hunt/',
    githubLink: 'https://github.com/pramoth-26/Treasure-hunt',
  },
  {
    id: 'p7',
    title: 'Rented Inventory System',
    description:
      'Application to manage rented items inventory. Built with PHP and MySQL for seamless tracking.',
    tech: ['PHP', 'MySQL', 'JavaScript', 'CSS'],
    image: 'assets/phprented.png',
    videoLink: 'assets/hero.mp4',
    liveLink: 'http://pramoth.ct.ws/assets/signin.php',
    githubLink: 'https://github.com/pramoth-26/rentedsystem',
  },
  {
    id: 'p8',
    title: 'Event Management System',
    description:
      'Portal for students and administrators to manage college events. Built with PHP and MySQL.',
    tech: ['PHP', 'MySQL', 'Bootstrap'],
    image: 'assets/stud.jpg',
    videoLink: 'assets/events.mp4',
    githubLink: 'https://github.com/pramoth-26/Event_Planner',
  },
  {
    id: 'p9',
    title: 'Business Website',
    description:
      'Custom shop website designed to meet client requirements. Built with HTML, CSS, and JavaScript.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    image: 'assets/arasi.jpg',
    videoLink: 'assets/arasi.mp4',
    liveLink: 'https://pramoth-26.github.io/Arasi_Air_Travels/',
    githubLink: 'https://github.com/pramoth-26/Arasi_Air_Travels',
  },
  {
    id: 'p10',
    title: 'Calendar Template',
    description:
      'Calendar Application to manage events and schedules. Built with Angular and Bootstrap.',
    tech: ['Angular', 'Bootstrap'],
    image: 'assets/calender.png',
    videoLink: 'assets/calender.mp4',
    liveLink: null,
  },
];

// ─── SEMINARS & WEBINARS ─────────────────────────────────────────────────────
const seminarsData = [
  {
    id: 's1',
    title: 'UmagineTN',
    date: 'Feb 2024',
    description: 'Organized by Tamilnadu Department of Information Technology.',
    image: 'assets/umizine.png',
  },
  {
    id: 's2',
    title: 'Hackathon',
    date: 'March 2025',
    description: 'Organized by South Tamilnadu Ariviyal Sangam Hackathon.',
    image: 'assets/hackathon.jpg',
  },
  {
    id: 's3',
    title: 'TCS Empowers – YEP',
    date: 'Jan 2023 – Mar 2023',
    description: 'Organized by TCS careers (Tata Consultancy Services).',
    image: 'assets/yep.jpg',
  },
  {
    id: 's4',
    title: 'Bootstrap Workshop',
    date: '08 June 2024',
    description: 'One Day Workshop of Bootstrap in ETHER Services.',
    image: 'assets/workshop.jpg',
  },
  {
    id: 's5',
    title: 'Data Structure',
    date: 'Aug 2023 – Jan 2024',
    description: 'Data Structure Programming Completed in VHNSN College.',
    image: 'assets/data.jpg',
  },
  {
    id: 's6',
    title: 'TCS Empowers',
    date: 'Mar 2023',
    description: 'APL – Literacy as a Service "Citizen Entitlements.',
    image: 'assets/tcs.jpg',
  },
  {
    id: 's7',
    title: "MINERVA'23",
    date: '24 Jan 2023',
    description: 'Moulding Interpersonal Skills Towards Victory Aspects Organized by VHNSN College.',
    image: 'assets/moulding.jpg',
  },
  {
    id: 's8',
    title: 'Reasoning Skill',
    date: '2022 – 2023',
    description: 'Fundamentals of Logical and Reasoning skills Organized by VHNSN College.',
    image: 'assets/logical.jpg',
  },
];

// ─── EDUCATION ───────────────────────────────────────────────────────────────
const educationData = [
  {
    id: 'ed1',
    degree: 'Master of Computer Applications (MCA)',
    institution: 'V.H.N.S.N College, Virudhunagar',
    period: '2023 – 2025',
    description:
      'Specialized in Full Stack Development, participated in multiple tech events and internships. Graduated with First Class with Distinction.',
  },
  {
    id: 'ed2',
    degree: 'Bachelor of Commerce – Computer Applications (B.Com CA)',
    institution: 'V.H.N.S.N College, Virudhunagar',
    period: '2020 – 2023',
    description:
      'Completed with strong academic performance. Participated in seminars, cultural programs, and technical workshops.',
  },
  {
    id: 'ed3',
    degree: 'Higher Secondary School (HSC)',
    institution: 'Vivekananda Matric Hr.Sec.School, Karur',
    period: '2019 – 2020',
    description: 'Completed 12th grade with Computer stream.',
  },
  {
    id: 'ed4',
    degree: 'Secondary School Leaving Certificate (SSLC)',
    institution: 'Raja Matric Hr.Sec.School, Vedalai',
    period: '2017 – 2018',
    description: 'Completed with strong academic performance.',
  },
];

// ─── ACHIEVEMENTS ────────────────────────────────────────────────────────────
const achievementsData = [
  {
    id: 'a1',
    title: 'Best Volunteer',
    description:
      'Awarded Best Volunteer at Fine Arts Club and Senthi Cineforum, VHNSN College in 2024 and 2025.',
    icon: '🏆',
  },
  {
    id: 'a2',
    title: 'Students Organizer',
    description: 'Students Organizer in Brilliant Bharath Hackathon – 2K25.',
    icon: '🎯',
  },
  {
    id: 'a3',
    title: 'Event Organizer',
    description:
      'Role as a Leader and organize the hostel day and Inter-departmental Culture in 2025.',
    icon: '🎪',
  },
  {
    id: 'a4',
    title: 'Design Competition',
    description:
      'Won Poster Making Competition at Inter Department Culture event organized by Department of Computer Applications.',
    icon: '🎨',
  },
  {
    id: 'a5',
    title: 'Enhancement of Communication Skill',
    description:
      '"Enhancement of Communication skill" Organized by Student Service Center, VHNSN College in 2024.',
    icon: '🗣️',
  },
  {
    id: 'a6',
    title: 'Photography Award',
    description:
      'Recognized in Photography Competition organized by Rotary club of Rajapalayam.',
    icon: '📸',
  },
  {
    id: 'a7',
    title: 'Best Performer',
    description:
      'Best performer In RRC (Red Ribbon Club) Activities in VHNSN College in 2022.',
    icon: '⭐',
  },
  {
    id: 'a8',
    title: 'Computer Quiz',
    description:
      '"Computer Technologies – Online Quiz" by Dept of Computer Applications, VHNSN College in 2020.',
    icon: '🖥️',
  },
];

// ─── PERSONAL INFO ────────────────────────────────────────────────────────────
const personalInfo = {
  name: 'S. Pramoth',
  fatherName: 'A. Sathishkumar',
  dob: '26/12/2002',
  email: 'pramothsathiskumar@gmail.com',
  phone: '+91 8220543596',
  age: '23',
  gender: 'Male',
  languages: 'English, Tamil',
  interests: 'DJing, Music, Photography, Drawing, Technology',
};
