import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
  Menu,
  X,
  Github,
  ExternalLink,
  Mail,
  MapPin,
  Download,
  Code,
  Briefcase,
  Award,
  MessageSquare,
  User,
  ChevronDown,
  Star,
  Moon,
  Sun,
  Copy,
  Linkedin,
  Facebook,
  Instagram,
  Phone,
  ArrowUp
} from 'lucide-react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';
import heroImage from './assets/herohamza.png';
import certification1 from './assets/certification1.png';
import certification2 from './assets/certification2.png';
import certification3 from './assets/certification3.png';
import certification4 from './assets/certification4.png';
import certification5 from './assets/certification5.png';
import certification6 from './assets/certification6.png';
import certification7 from './assets/certification7.png';
import certification8 from './assets/certification8.png';
import certification9 from './assets/certification9.png';
import codealphaLogo from './assets/codealpha-logo.png';
import prodigyLogo from './assets/prodigy-logo.png';
import celestialLogo from './assets/celestial-logo.jpeg';
import gomycodeLogo from './assets/gomycode-logo.jpg';
import fullstackLogo from './assets/fullstack-logo.png';
import frontendLogo from './assets/frontend-logo.png';
import backendLogo from './assets/backend-logo.png';
import reactNativeLogo from './assets/react-native-logo.png';
import htmlLogo from './assets/html.webp';
import cssLogo from './assets/css.webp';
import jsLogo from './assets/javascript.webp';
import reactLogo from './assets/reactjs.webp';
import typescriptLogo from './assets/typescript.webp';
import nodejsLogo from './assets/nodejs.webp';
import mongodbLogo from './assets/mongodb.webp';
import tailwindLogo from './assets/tailwind.webp';
import reduxLogo from './assets/redux.webp';
import threejsLogo from './assets/threejs.webp';
import gitLogo from './assets/git.webp';
import nextLogo from './assets/next.webp';
import nestLogo from './assets/nest.webp';
import './App.css';

// Composant pour les particules flottantes
const FloatingParticles = () => {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 20 + 10,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-primary/20 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Composant pour l'effet de typing
const TypingEffect = ({ texts, className }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = texts[currentTextIndex];
      
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTextIndex, texts]);

  return (
    <span className={className}>
      {currentText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="ml-1"
      >
        |
      </motion.span>
    </span>
  );
};

// Composant pour les animations de révélation
const RevealAnimation = ({ children, direction = 'up', delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
      x: direction === 'left' ? 50 : direction === 'right' ? -50 : 0,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.25, 0, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

// Composant pour les cartes avec animation 3D
const Card3D = ({ children, className = "" }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const rotateXValue = (e.clientY - centerY) / 10;
    const rotateYValue = (centerX - e.clientX) / 10;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      className={`transform-gpu ${className}`}
      style={{
        transformStyle: 'preserve-3d',
      }}
      animate={{
        rotateX,
        rotateY,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
    >
      {children}
    </motion.div>
  );
};

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const [showCVOptions, setShowCVOptions] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const pathLength = useSpring(scrollYProgress, { stiffness: 400, damping: 90 });

  const roles = [
    "Full Stack JS Developer",
    "Freelancer", 
    "Frontend Developer",
    "Backend Developer",
    "Mobile Developer"
  ];

  const navItems = [
    { id: 'hero', label: 'Home', icon: User },
    { id: 'about', label: 'About', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'technologies', label: 'Technologies', icon: Code },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'certifications', label: 'Certifications', icon: Award },
    { id: 'testimonials', label: 'Testimonials', icon: MessageSquare },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  const services = [
    {
      title: "Full Stack JS Developer",
      description: "End-to-end web application development using modern JavaScript technologies",
      logo: fullstackLogo
    },
    {
      title: "Frontend Developer", 
      description: "Creating responsive and interactive user interfaces with React.js and modern frameworks",
      logo: frontendLogo
    },
    {
      title: "Backend Developer",
      description: "Building robust server-side applications with Node.js, Express, and databases",
      logo: backendLogo
    },
    {
      title: "React Native Developer",
      description: "Cross-platform mobile app development for iOS and Android",
      logo: reactNativeLogo
    }
  ];

  const technologies = [
    { name: "HTML 5", icon: htmlLogo, color: "from-orange-500 to-red-500" },
    { name: "CSS 3", icon: cssLogo, color: "from-blue-500 to-cyan-500" },
    { name: "JavaScript", icon: jsLogo, color: "from-yellow-400 to-orange-500" },
    { name: "TypeScript", icon: typescriptLogo, color: "from-blue-600 to-blue-400" },
    { name: "React JS", icon: reactLogo, color: "from-cyan-400 to-blue-500" },
    { name: "Redux Toolkit", icon: reduxLogo, color: "from-purple-500 to-pink-500" },
    { name: "Tailwind CSS", icon: tailwindLogo, color: "from-cyan-400 to-teal-500" },
    { name: "Node JS", icon: nodejsLogo, color: "from-green-500 to-emerald-500" },
    { name: "MongoDB", icon: mongodbLogo, color: "from-green-600 to-green-400" },
    { name: "Three JS", icon: threejsLogo, color: "from-gray-600 to-gray-400" },
    { name: "Git", icon: gitLogo, color: "from-orange-600 to-red-500" },
    { name: "Next.js", icon: nextLogo, color: "from-gray-800 to-gray-600" },
    { name: "Nest.js", icon: nestLogo, color: "from-red-600 to-pink-500" }
  ];

  const experiences = [
    {
      title: "Full Stack Development Intern",
      company: "CodeAlpha (Remote)",
      duration: "June 10, 2025 – July 10, 2025",
      logo: codealphaLogo,
      points: [
        "Completed intensive full-stack development training program focusing on modern web technologies",
        "Developed and deployed full-stack applications using React, Node.js, and MongoDB",
        "Implemented RESTful APIs and integrated third-party services in project work",
        "Participated in code reviews and agile development methodologies"
      ]
    },
    {
      title: "Web Development Intern",
      company: "Prodigy InfoTech (Remote)",
      duration: "June 15, 2025 – July 15, 2025",
      logo: prodigyLogo,
      points: [
        "Gained hands-on experience with modern web development frameworks and tools",
        "Contributed to building responsive web applications with React and Node.js",
        "Collaborated with team members on version control using Git and GitHub",
        "Learned best practices for UI/UX design and front-end development"
      ]
    },
    {
      title: "Front End Developer",
      company: "Celestial Wave Digital",
      duration: "Jun 2024 - October 2024",
      logo: celestialLogo,
      points: [
        "Developed and integrated user interfaces based on design specifications to create intuitive, responsive layouts",
        "Implemented API integration to ensure smooth data exchange between front-end and back-end systems",
        "Ensured adherence to coding standards and best practices, including web accessibility and performance optimization",
        "Integrated design elements into the codebase to deliver cohesive user experiences",
        "Followed industry standards for version control (Git) to manage code changes and maintain collaboration across the development team"
      ]
    },
    {
      title: "Full Stack JS Developer",
      company: "Gomycode",
      duration: "Sep 2023 - Feb 2024",
      logo: gomycodeLogo,
      points: [
        "Developed and maintained web applications using React.js and related technologies, ensuring efficient and scalable solutions",
        "Collaborated with cross-functional teams, including designers, product managers, and developers, to deliver high-quality digital products",
        "Implemented responsive design to ensure applications were optimized for various devices and ensured cross-browser compatibility",
        "Actively participated in code reviews, providing and receiving constructive feedback to maintain clean, efficient, and maintainable code"
      ]
    }
  ];

  const projects = [
    {
      name: "E-Commerce Website",
      description: "Complete e-commerce platform with admin dashboard, PayPal payment system, and product management. Features secure authentication and advanced search functionality.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Redux", "PayPal API"],
      github: "https://github.com/hamzakh86/codealpha-s-ecommerce",
      demo: "https://ecommerce-demo-hamza.netlify.app",
      image: "/project1.png"
    },
    {
      name: "Project Management Website (TeamSpace)",
      description: "Trello-inspired task management application with real-time collaboration features. Allows creation of customizable workspaces and deadline tracking.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "WebSockets"],
      github: "https://github.com/hamzakh86/codealpha-teamspace",
      demo: "https://teamspace-demo.netlify.app",
      image: "/project2.png"
    },
    {
      name: "Social Media Website (SocialWave)",
      description: "Complete social network with posts, comments, and likes system. Features user following functionality and content moderation tools.",
      technologies: ["MERN Stack", "JWT", "Redux Toolkit", "Mongoose"],
      github: "https://github.com/hamzakh86/codeAlpha-SocialWave",
      demo: "https://socialwave-demo.herokuapp.com",
      image: "/project3.png"
    },
    {
      name: "Modern Real Estate Marketplace",
      description: "Real estate marketplace with CRUD property management, image upload, and advanced search. Secured with JWT and optimized with Redux Toolkit.",
      technologies: ["MERN Stack", "JWT", "Redux Toolkit", "Cloudinary"],
      github: "https://github.com/hamzakh86/A-modern-real-estate-",
      demo: "https://hamza-estate.onrender.com",
      image: "/project4.png"
    },
    {
      name: "Portfolio Website",
      description: "Modern portfolio with interactive animations using Three.js and Framer Motion. Responsive design optimized for all screen sizes with functional contact form.",
      technologies: ["React", "Three.js", "Framer Motion", "Tailwind CSS", "EmailJS"],
      github: "https://github.com/hamzakh86/PRODIGY_WD_04",
      demo: "https://hamza-khaled.netlify.app",
      image: "/project5.png"
    },
    {
      name: "Responsive Landing Page (AI Revolution)",
      description: "Professional homepage for an AI platform with interactive data visualizations. Responsive design with theme switching and smooth animations.",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Recharts"],
      github: "https://github.com/hamzakh86/PRODIGY_WD_01",
      demo: "https://ia-revolution.netlify.app",
      image: "/project6.png"
    },
    {
      name: "Stopwatch Web Application (Chrono Elite Pro)",
      description: "Professional stopwatch with lap system, advanced statistics, and CSV export. Supports keyboard shortcuts and hundredth-second precision.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/hamzakh86/PRODIGY_WD_02",
      demo: "https://chrono-elite-pro.netlify.app",
      image: "/project7.png"
    },
    {
      name: "Tic-Tac-Toe Web Application",
      description: "Interactive Tic-Tac-Toe game with AI at multiple difficulty levels. Features game statistics tracking and responsive UI.",
      technologies: ["React", "Vite", "Tailwind CSS", "Shadcn/ui"],
      github: "https://github.com/hamzakh86/PRODIGY_WD_03",
      demo: "https://game-tic-tac-toeh.netlify.app",
      image: "/project8.png"
    },
  ];

  const certifications = [
    {
      title: "GOMYCODE",
      description: "The Full-Stack Javascript Bootcamp Graduate",
      link: "https://diploma.gomycode.app/?id=31705411332830853",
      image: certification1
    },
    {
      title: "freeCodeCamp",
      description: "Back End Development and APIs",
      link: "https://www.freecodecamp.org/certification/hamzakh06082000/back-end-development-and-apis",
      image: certification5
    },
    {
      title: "Postman",
      description: "Postman API Fundamentals Student Expert",
      link: "https://badgr.com/print-certificate/66a41b7a1ea7d93715e019af",
      image: certification6
    },
    {
      title: "freeCodeCamp",
      description: "Responsive Web Design",
      link: "https://www.freecodecamp.org/certification/hamzakh06082000/responsive-web-design",
      image: certification2
    },
    {
      title: "freeCodeCamp",
      description: "JavaScript Algorithms and Data Structures (Beta)",
      link: "https://www.freecodecamp.org/certification/hamzakh06082000/javascript-algorithms-and-data-structures-v8",
      image: certification3
    },
    {
      title: "freeCodeCamp",
      description: "Front End Development Libraries",
      link: "https://www.freecodecamp.org/certification/hamzakh06082000/front-end-development-libraries",
      image: certification4
    },
    {
      title: "SCRUMstudy",
      description: "Scrum for Ops and DevOps Fundamentals",
      link: "https://www.scrumstudy.com/certification/verify?type=SODFC&number=1011595",
      image: certification8
    },
    {
      title: "SCRUMstudy",
      description: "Scrum Fundamentals Certified (SFC)",
      link: "https://www.scrumstudy.com/certification/verify?type=SFC&number=1036406",
      image: certification9
    },
    {
      title: "Certifprof",
      description: "Scrum Foundation Professional Certificate SFPC (v2020)",
      image: certification7
    }
  ];

  const testimonials = [
    {
      name: "Sabrine Loussaief",
      role: "Instructor at GOMYCODE",
      content: "I am thrilled to share my experience with my student, who has truly excelled in web development. From the very beginning, he displayed an impressive passion for the field. His dedication to mastering HTML, CSS, and JavaScript, along with advanced technologies like React and Node.js, has been remarkable. What sets him apart is his exceptional problem-solving skills and innovative approach. Each project he undertakes showcases his growth, both technically and creatively. Today, he stands out as a skilled web developer, ready to tackle any challenge in the ever-evolving tech landscape.",
      image: "/sabrine-profile.webp"
    },
    {
      name: "Mohamed Amine Sefi",
      role: "UI/UX Designer at CWD",
      content: "I've had the pleasure of working closely with Hamza on multiple projects at Celestial Wave Digital. As a frontend developer, he consistently demonstrates an impressive ability to translate complex UI/UX designs into highly functional, user-friendly web applications.",
      image: "/amine-profile.webp"
    },
    {
      name: "Sarra Fersi",
      role: "Intern at CWD",
      content: "I've had the pleasure of working alongside Hamza on several projects and I can confidently say that he is an exceptional developer. His ability to solve complex problems with clean efficient code paired with a strong sense of design and user experience truly sets him apart. Whether it's creating robust backend systems building dynamic user interfaces or Hamza consistently delivers high-quality work. His passion for technology and continuous learning is evident in every project he tackles. I highly recommend Hamza to anyone seeking a dedicated and skilled developer.",
      image: "/sarah-profile.webp"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const downloadCV = (language = 'english') => {
    const link = document.createElement('a');
    if (language === 'french') {
      link.href = '/cv/Hamza_Khaled_CV_French.pdf';
      link.download = 'Hamza_Khaled_CV_French.pdf';
    } else {
      link.href = '/cv/Hamza_Khaled_CV_English.pdf';
      link.download = 'Hamza_Khaled_CV_English.pdf';
    }
    link.click();
    setShowCVOptions(false);
  };

  const handleContactFormChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || serviceId === 'your_service_id_here') {
        throw new Error('Service ID manquant ou non configuré dans le fichier .env');
      }
      if (!templateId || templateId === 'your_template_id_here') {
        throw new Error('Template ID manquant ou non configuré dans le fichier .env');
      }
      if (!publicKey || publicKey === 'your_public_key_here') {
        throw new Error('Public Key manquante ou non configurée dans le fichier .env');
      }

      const templateParams = {
        name: contactForm.name,
        email: contactForm.email,
        message: contactForm.message,
      };

      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      setSubmitStatus('success');
      setContactForm({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Contact form error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(''), 5000);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Indicateur de progression de scroll */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent z-50"
        style={{ scaleX: pathLength }}
        transformOrigin="0%"
      />

      {/* Particules flottantes */}
      <FloatingParticles />

      {/* Navigation avec animation améliorée */}
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.25, 0, 1] }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              HK
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-primary bg-accent shadow-lg'
                      : 'text-muted-foreground hover:text-primary hover:bg-accent/50'
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.button>
              ))}

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleDarkMode}
                  className="ml-4"
                >
                  <motion.div
                    animate={{ rotate: isDarkMode ? 180 : 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                  </motion.div>
                </Button>
              </motion.div>
            </div>

            <div className="md:hidden flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleDarkMode}
              >
                <motion.div
                  animate={{ rotate: isDarkMode ? 180 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                </motion.div>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative z-50"
                aria-label="Toggle mobile menu"
              >
                <motion.div
                  animate={{ rotate: isMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </motion.div>
              </Button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-background border-t border-border relative z-40"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors ${
                      activeSection === item.id
                        ? 'text-primary bg-accent'
                        : 'text-muted-foreground hover:text-primary hover:bg-accent/50'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <item.icon className="inline-block w-4 h-4 mr-2" />
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Section Hero avec animations améliorées */}
      <section id="hero" className="min-h-screen flex items-center justify-center pt-24 pb-16 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"
          style={{ y: yRange }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.25, 0, 1] }}
              className="text-center lg:text-left"
            >
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Hi, I'm{' '}
                <motion.span 
                  className="gradient-text"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Hamza Khaled
                </motion.span>
              </motion.h1>
              
              <motion.div 
                className="text-xl sm:text-2xl text-muted-foreground mb-6 h-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <TypingEffect 
                  texts={roles} 
                  className="block font-medium"
                />
              </motion.div>
              
              <motion.p 
                className="text-lg text-muted-foreground mb-8 max-w-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                From Tunisia
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button onClick={() => scrollToSection('contact')} size="lg" className="relative overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary to-accent"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="relative z-10 flex items-center">
                      <Mail className="mr-2 h-4 w-4" />
                      Get In Touch
                    </span>
                  </Button>
                </motion.div>
                
                <div className="relative">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="outline"
                      onClick={() => setShowCVOptions(!showCVOptions)}
                      size="lg"
                      className="w-full sm:w-auto"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download CV
                      <motion.div
                        animate={{ rotate: showCVOptions ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="ml-2 h-4 w-4" />
                      </motion.div>
                    </Button>
                  </motion.div>
                  
                  <AnimatePresence>
                    {showCVOptions && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full mt-2 left-0 right-0 bg-background border border-border rounded-lg shadow-lg z-50 overflow-hidden"
                      >
                        <motion.button
                          onClick={() => downloadCV('english')}
                          className="w-full px-4 py-3 text-left hover:bg-accent transition-colors flex items-center gap-2"
                          whileHover={{ x: 5 }}
                        >
                          <span className="text-lg">🇺🇸</span>
                          English CV
                        </motion.button>
                        <motion.button
                          onClick={() => downloadCV('french')}
                          className="w-full px-4 py-3 text-left hover:bg-accent transition-colors flex items-center gap-2 border-t border-border"
                          whileHover={{ x: 5 }}
                        >
                          <span className="text-lg">🇫🇷</span>
                          French CV
                        </motion.button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.25, 0, 1] }}
              className="flex justify-center lg:justify-end"
            >
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/30 to-accent/30 blur-2xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.img
                  src={heroImage}
                  alt="Hamza Khaled"
                  className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-full border-4 border-accent relative z-10"
                  animate={{
                    y: [-10, 10, -10],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div 
                  className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-secondary/20"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section About avec animations de révélation */}
      <section id="about" className="py-32 bg-card relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                I'm a skilled software developer with experience in TypeScript and JavaScript,
                and expertise in frameworks like React.js, Next.js, Node.js, Nest.js, and Three.js.
                I'm a quick learner and collaborate closely with clients to create efficient,
                scalable, and user-friendly solutions that solve real-world problems.
                Let's work together to bring your ideas to life!
              </p>
            </div>
          </RevealAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <RevealAnimation key={service.title} delay={index * 0.1}>
                <Card3D className="h-full">
                  <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-background to-card">
                    <CardHeader className="text-center">
                      <motion.div 
                        className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full flex items-center justify-center"
                        whileHover={{ 
                          scale: 1.1,
                          rotate: 360,
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <img
                          src={service.logo}
                          alt={service.title}
                          className="w-10 h-10 object-contain"
                        />
                      </motion.div>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-center">{service.description}</CardDescription>
                    </CardContent>
                  </Card>
                </Card3D>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Section Experience avec timeline animée */}
      <section id="experience" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Work Experience</h2>
              <p className="text-lg text-muted-foreground">My professional journey</p>
            </div>
          </RevealAnimation>

          {/* Mobile Experience Timeline */}
          <div className="md:hidden space-y-8">
            {experiences.map((exp, index) => (
              <RevealAnimation key={index} delay={index * 0.1}>
                <div className="relative">
                  <div className="absolute left-5 top-6 h-full w-0.5 bg-primary/20">
                    {index === experiences.length - 1 ? null : (
                      <motion.div 
                        className="absolute left-0 top-0 h-full w-full bg-gradient-to-b from-primary to-transparent"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                      />
                    )}
                  </div>

                  <div className="relative pl-14">
                    <motion.div 
                      className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <motion.div 
                        className="h-3 w-3 rounded-full bg-primary"
                        animate={{
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                      />
                    </motion.div>

                    <Card3D>
                      <Card className="overflow-hidden">
                        <div className="flex items-center gap-4 p-4 border-b">
                          <motion.img
                            src={exp.logo}
                            alt={exp.company}
                            className="h-12 w-12 object-contain rounded-md"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                          />
                          <div>
                            <h3 className="font-semibold">{exp.title}</h3>
                            <p className="text-sm text-muted-foreground">{exp.company}</p>
                            <Badge variant="secondary" className="mt-1 text-xs">
                              {exp.duration}
                            </Badge>
                          </div>
                        </div>

                        <CardContent className="p-4 pt-2">
                          <ul className="space-y-2">
                            {exp.points.map((point, i) => (
                              <motion.li 
                                key={i} 
                                className="flex items-start gap-2"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                viewport={{ once: true }}
                              >
                                <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></div>
                                <span className="text-sm text-muted-foreground">{point}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </Card3D>
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>

          {/* Desktop Experience Timeline */}
          <div className="hidden md:block">
            <div className="relative">
              <motion.div 
                className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-primary/20"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="absolute left-0 top-0 h-full w-full bg-gradient-to-b from-primary via-primary to-transparent"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  transition={{ duration: 2, delay: 0.5 }}
                  viewport={{ once: true }}
                />
              </motion.div>

              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <RevealAnimation 
                    key={index} 
                    direction={index % 2 === 0 ? 'left' : 'right'}
                    delay={index * 0.2}
                  >
                    <div className={`relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                      <motion.div 
                        className="absolute left-1/2 top-6 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-primary/10"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                      >
                        <motion.div 
                          className="h-3 w-3 rounded-full bg-primary"
                          animate={{
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.5,
                          }}
                        />
                      </motion.div>

                      <Card3D className={`w-full max-w-lg ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}>
                        <Card>
                          <div className="flex items-center gap-4 p-6 pb-4">
                            <motion.img
                              src={exp.logo}
                              alt={exp.company}
                              className="h-14 w-14 object-contain rounded-md"
                              whileHover={{ scale: 1.1, rotate: 5 }}
                            />
                            <div>
                              <h3 className="text-lg font-semibold">{exp.title}</h3>
                              <p className="text-muted-foreground">{exp.company}</p>
                            </div>
                          </div>

                          <CardContent className="px-6 pb-6 pt-0">
                            <Badge variant="secondary" className="mb-4">
                              {exp.duration}
                            </Badge>

                            <ul className="space-y-3">
                              {exp.points.map((point, i) => (
                                <motion.li 
                                  key={i} 
                                  className="flex items-start gap-3"
                                  initial={{ opacity: 0, x: -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.5, delay: i * 0.1 }}
                                  viewport={{ once: true }}
                                >
                                  <div className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary"></div>
                                  <span className="text-sm text-muted-foreground">{point}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      </Card3D>
                    </div>
                  </RevealAnimation>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Technologies avec animations 3D améliorées */}
      <section id="technologies" className="py-20 bg-gradient-to-br from-background via-card to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <motion.div 
          className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <RevealAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Technologies
              </h2>
              <p className="text-lg text-muted-foreground">Technologies I work with</p>
            </div>
          </RevealAnimation>

          {/* Desktop Grid Layout */}
          <div className="hidden md:grid grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
            {technologies.map((tech, index) => (
              <RevealAnimation key={tech.name} delay={index * 0.05}>
                <motion.div
                  className="group relative"
                  whileHover={{
                    scale: 1.1,
                    rotateY: 15,
                    z: 50
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                  }}
                >
                  <motion.div 
                    className={`relative w-24 h-24 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${tech.color} p-0.5 shadow-2xl`}
                    whileHover={{
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                    }}
                  >
                    <div className="w-full h-full bg-background/90 backdrop-blur-sm rounded-2xl flex items-center justify-center relative overflow-hidden">
                      <motion.div 
                        className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-20 group-hover:opacity-40 transition-opacity duration-300`}
                        whileHover={{
                          scale: 1.1,
                        }}
                      />
                      <motion.div 
                        className={`absolute inset-0 bg-gradient-to-br ${tech.color} blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`}
                        whileHover={{
                          scale: 1.2,
                        }}
                      />
                      {tech.icon ? (
                        <motion.img
                          src={tech.icon}
                          alt={tech.name}
                          className="w-12 h-12 object-contain relative z-10"
                          whileHover={{ 
                            scale: 1.2,
                            rotate: 360,
                          }}
                          transition={{ duration: 0.5 }}
                        />
                      ) : (
                        <motion.div 
                          className={`w-12 h-12 rounded-lg bg-gradient-to-br ${tech.color} flex items-center justify-center text-white font-bold text-lg relative z-10`}
                          whileHover={{ 
                            scale: 1.2,
                            rotate: 360,
                          }}
                          transition={{ duration: 0.5 }}
                        >
                          {tech.name.charAt(0)}
                        </motion.div>
                      )}
                      
                      {/* Particules animées */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {[...Array(6)].map((_, i) => (
                          <motion.div
                            key={i}
                            className={`absolute w-1 h-1 bg-gradient-to-r ${tech.color} rounded-full`}
                            style={{
                              left: `${20 + i * 10}%`,
                              top: `${20 + i * 10}%`,
                            }}
                            animate={{
                              scale: [0, 1, 0],
                              opacity: [0, 1, 0],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: i * 0.2,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  <motion.h3
                    className="text-sm font-medium text-center text-foreground group-hover:text-primary transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    {tech.name}
                  </motion.h3>

                  {/* Tooltip amélioré */}
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                    whileHover={{ opacity: 1, y: 0, scale: 1 }}
                    className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-foreground text-background px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap pointer-events-none z-50"
                  >
                    {tech.name}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-foreground"></div>
                  </motion.div>
                </motion.div>
              </RevealAnimation>
            ))}
          </div>

          {/* Mobile Grid Layout */}
          <div className="md:hidden px-4">
            <div className="grid grid-cols-3 gap-6 justify-items-center">
              {technologies.map((tech, index) => (
                <RevealAnimation key={tech.name} delay={index * 0.03}>
                  <motion.div
                    className="group"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div 
                      className={`relative w-20 h-20 mb-2 rounded-xl bg-gradient-to-br ${tech.color} p-0.5 shadow-lg`}
                      whileHover={{
                        boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      <div className="w-full h-full bg-background/90 backdrop-blur-sm rounded-xl flex items-center justify-center relative overflow-hidden">
                        <motion.div 
                          className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-20`}
                          whileHover={{ opacity: 0.4 }}
                        />
                        {tech.icon ? (
                          <motion.img
                            src={tech.icon}
                            alt={tech.name}
                            className="w-10 h-10 object-contain relative z-10"
                            whileHover={{ 
                              scale: 1.1,
                              rotate: 180,
                            }}
                            transition={{ duration: 0.3 }}
                          />
                        ) : (
                          <motion.div 
                            className={`w-10 h-10 rounded-lg bg-gradient-to-br ${tech.color} flex items-center justify-center text-white font-bold text-sm relative z-10`}
                            whileHover={{ 
                              scale: 1.1,
                              rotate: 180,
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            {tech.name.charAt(0)}
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                    <h3 className="text-xs font-medium text-center text-foreground w-20">
                      {tech.name}
                    </h3>
                  </motion.div>
                </RevealAnimation>
              ))}
            </div>
          </div>

          {/* Éléments d'animation flottants améliorés */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-primary/30 rounded-full"
                style={{
                  left: `${5 + i * 8}%`,
                  top: `${10 + (i % 4) * 20}%`,
                }}
                animate={{
                  y: [-20, 20, -20],
                  x: [-10, 10, -10],
                  opacity: [0.2, 0.8, 0.2],
                  scale: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section Projects avec animations de cartes améliorées */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Projects</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Following projects showcase my skills and experience through real-world examples of my work.
                Each project is briefly described with links to code repositories and live demos.
                It reflects my ability to solve complex problems, work with different technologies,
                and manage projects effectively.
              </p>
            </div>
          </RevealAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <RevealAnimation key={project.name} delay={index * 0.1}>
                <Card3D className="h-full">
                  <motion.div
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="h-full hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-background to-card overflow-hidden">
                      {project.image && (
                        <motion.div 
                          className="w-full h-48 overflow-hidden rounded-t-lg relative"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        >
                          <motion.img
                            src={project.image}
                            alt={project.name}
                            className="w-full h-full object-cover"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.5 }}
                          />
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0"
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                        </motion.div>
                      )}
                      <CardHeader>
                        <CardTitle className="text-lg">{project.name}</CardTitle>
                        <CardDescription className="text-sm">
                          {project.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.map((tech, techIndex) => (
                            <motion.div
                              key={tech}
                              initial={{ opacity: 0, scale: 0 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                              viewport={{ once: true }}
                            >
                              <Badge variant="outline" className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors">
                                {tech}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                        <div className="flex gap-2">
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => window.open(project.github, '_blank')}
                              className="relative overflow-hidden"
                            >
                              <motion.div
                                className="absolute inset-0 bg-primary/10"
                                initial={{ x: '-100%' }}
                                whileHover={{ x: 0 }}
                                transition={{ duration: 0.3 }}
                              />
                              <span className="relative z-10 flex items-center">
                                <Github className="w-4 h-4 mr-2" />
                                Code
                              </span>
                            </Button>
                          </motion.div>
                          {project.demo && (
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Button
                                size="sm"
                                onClick={() => window.open(project.demo, '_blank')}
                                className="relative overflow-hidden"
                              >
                                <motion.div
                                  className="absolute inset-0 bg-gradient-to-r from-primary to-accent"
                                  initial={{ x: '-100%' }}
                                  whileHover={{ x: 0 }}
                                  transition={{ duration: 0.3 }}
                                />
                                <span className="relative z-10 flex items-center">
                                  <ExternalLink className="w-4 h-4 mr-2" />
                                  Demo
                                </span>
                              </Button>
                            </motion.div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Card3D>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Section Certifications avec animations de flip */}
      <section id="certifications" className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Certifications</h2>
              <p className="text-lg text-muted-foreground">Professional certifications and achievements</p>
            </div>
          </RevealAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <RevealAnimation key={index} delay={index * 0.1}>
                <Card3D className="h-full">
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="h-full hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-background to-card">
                      {cert.image && (
                        <motion.div 
                          className="w-full h-64 overflow-hidden rounded-t-lg bg-white flex items-center justify-center"
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.3 }}
                        >
                          <motion.img
                            src={cert.image}
                            alt={cert.title}
                            className="w-full h-full object-contain"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.5 }}
                          />
                        </motion.div>
                      )}
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center">
                          <motion.div
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          >
                            <Award className="w-5 h-5 mr-2 text-primary" />
                          </motion.div>
                          {cert.title}
                        </CardTitle>
                        <CardDescription>{cert.description}</CardDescription>
                      </CardHeader>
                      {cert.link && (
                        <CardContent>
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => window.open(cert.link, '_blank')}
                              className="relative overflow-hidden"
                            >
                              <motion.div
                                className="absolute inset-0 bg-primary/10"
                                initial={{ x: '-100%' }}
                                whileHover={{ x: 0 }}
                                transition={{ duration: 0.3 }}
                              />
                              <span className="relative z-10 flex items-center">
                                <ExternalLink className="w-4 h-4 mr-2" />
                                View Certificate
                              </span>
                            </Button>
                          </motion.div>
                        </CardContent>
                      )}
                    </Card>
                  </motion.div>
                </Card3D>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Section Testimonials avec animations de rotation */}
      <section id="testimonials" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Testimonials</h2>
              <p className="text-lg text-muted-foreground">What others say about my work</p>
            </div>
          </RevealAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <RevealAnimation key={index} delay={index * 0.1}>
                <Card3D className="h-full">
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="h-full border-0 bg-gradient-to-br from-background to-card">
                      <CardContent className="pt-6">
                        <motion.div 
                          className="flex mb-4"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.5 }}
                          viewport={{ once: true }}
                        >
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ scale: 0, rotate: 180 }}
                              whileInView={{ scale: 1, rotate: 0 }}
                              transition={{ duration: 0.3, delay: i * 0.1 }}
                              viewport={{ once: true }}
                            >
                              <Star className="w-4 h-4 fill-primary text-primary" />
                            </motion.div>
                          ))}
                        </motion.div>
                        <motion.p 
                          className="text-muted-foreground mb-4 italic"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                          viewport={{ once: true }}
                        >
                          "{testimonial.content}"
                        </motion.p>
                        <motion.div 
                          className="flex items-center"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                          viewport={{ once: true }}
                        >
                          <motion.img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full object-cover mr-4"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ duration: 0.3 }}
                          />
                          <div>
                            <p className="font-semibold">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                          </div>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Card3D>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Section Contact avec animations de formulaire */}
      <section id="contact" className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
              <p className="text-lg text-muted-foreground">
                Have a project in mind? Don't hesitate to contact me!
              </p>
            </div>
          </RevealAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <RevealAnimation direction="left">
              <Card3D>
                <Card className="border-0 bg-gradient-to-br from-background to-card">
                  <CardHeader>
                    <CardTitle>Send me a message</CardTitle>
                    <CardDescription>
                      I'll get back to you as soon as possible
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <form onSubmit={handleContactSubmit}>
                      <div className="space-y-4">
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                          viewport={{ once: true }}
                        >
                          <label className="text-sm font-medium mb-2 block">Name</label>
                          <Input
                            name="name"
                            value={contactForm.name}
                            onChange={handleContactFormChange}
                            placeholder="Your name"
                            required
                            className="transition-all duration-300 focus:scale-105"
                          />
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                          viewport={{ once: true }}
                        >
                          <label className="text-sm font-medium mb-2 block">Email</label>
                          <Input
                            type="email"
                            name="email"
                            value={contactForm.email}
                            onChange={handleContactFormChange}
                            placeholder="your@email.com"
                            required
                            className="transition-all duration-300 focus:scale-105"
                          />
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                          viewport={{ once: true }}
                        >
                          <label className="text-sm font-medium mb-2 block">Message</label>
                          <Textarea
                            name="message"
                            value={contactForm.message}
                            onChange={handleContactFormChange}
                            placeholder="Your message..."
                            rows={5}
                            required
                            className="transition-all duration-300 focus:scale-105"
                          />
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button 
                            type="submit" 
                            className="w-full relative overflow-hidden" 
                            disabled={isSubmitting}
                          >
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-primary to-accent"
                              initial={{ x: '-100%' }}
                              whileHover={{ x: 0 }}
                              transition={{ duration: 0.3 }}
                            />
                            <span className="relative z-10 flex items-center justify-center">
                              <Mail className="w-4 h-4 mr-2" />
                              {isSubmitting ? 'Sending...' : 'Send Message'}
                            </span>
                          </Button>
                        </motion.div>
                        <AnimatePresence>
                          {submitStatus === 'success' && (
                            <motion.p 
                              className="text-green-600 text-sm"
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                            >
                              Message sent successfully!
                            </motion.p>
                          )}
                          {submitStatus === 'error' && (
                            <motion.p 
                              className="text-red-600 text-sm"
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                            >
                              Failed to send message. Please try again.
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </Card3D>
            </RevealAnimation>

            <RevealAnimation direction="right" className="space-y-8">
              {/* Email Section */}
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">Email me at</h3>
                <div className="flex items-center space-x-3">
                  <p className="text-xl font-semibold text-gray-800 dark:text-gray-200">khaledhamza251785@gmail.com</p>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard('khaledhamza251785@gmail.com')}
                      className="hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg p-2"
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                  </motion.div>
                </div>
                <AnimatePresence>
                  {emailCopied && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-sm text-green-600 font-medium"
                    >
                      E-mail Copié ✓
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Socials Section */}
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-medium text-foreground">Socials</h3>
                <div className="flex items-center space-x-4">
                  {[
                    { icon: Github, url: 'https://github.com/hamzakh86', color: 'hover:text-gray-800' },
                    { icon: Linkedin, url: 'https://www.linkedin.com/in/hamza-khaled-16a114290/', color: 'hover:text-blue-600' },
                    { icon: Instagram, url: 'https://www.instagram.com/hamzakhaledofficial86/', color: 'hover:text-pink-600' },
                    { icon: Facebook, url: 'https://www.facebook.com/hamzakhaledofficial86/', color: 'hover:text-blue-700' },
                    { icon: Phone, url: 'https://wa.me/21625178855', color: 'hover:text-green-600' }
                  ].map((social, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => window.open(social.url, '_blank')}
                      className={`w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-all duration-300 ${social.color}`}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <social.icon className="w-6 h-6 text-primary" />
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              {/* Location Section */}
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">Location</h3>
                <div className="flex items-center space-x-3">
                  <motion.div
                    animate={{ 
                      y: [-2, 2, -2],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <MapPin className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  </motion.div>
                  <p className="text-lg text-gray-900 dark:text-white">Tunisia 🇹🇳</p>
                </div>
              </motion.div>
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* Footer avec animations */}
      <motion.footer 
        className="bg-background/80 backdrop-blur-md border-t border-border text-foreground py-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
              >
                HK
              </motion.div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Full Stack Developer passionate about creating modern and performant web applications.
              </p>
            </motion.div>

            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
              <div className="grid grid-cols-2 gap-2">
                {['about', 'experience', 'technologies', 'projects'].map((section, index) => (
                  <motion.button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="text-muted-foreground hover:text-blue-500 transition-colors text-left text-sm capitalize"
                    whileHover={{ x: 5 }}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    {section}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-foreground">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="text-muted-foreground text-sm">khaledhamza251785@gmail.com</span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="border-t border-border pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
              <div className="text-center sm:text-left">
                <p className="text-muted-foreground text-sm">
                  © 2024 Hamza Khaled. All rights reserved.
                </p>
                <div className="mt-1">
                  <a
                    href="#"
                    className="text-xs text-blue-500 hover:text-blue-400 transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      console.log('Redirect to PortfolioAdmin');
                    }}
                  >
                    PortfolioAdmin
                  </a>
                </div>
              </div>

              <motion.button
                onClick={() => scrollToSection('hero')}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="group relative w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <motion.div
                  animate={{ y: [-2, 2, -2] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowUp className="w-5 h-5 text-white" />
                </motion.div>
                <motion.div 
                  className="absolute inset-0 rounded-full bg-blue-500 opacity-0 group-hover:opacity-20"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
};

export default App;

