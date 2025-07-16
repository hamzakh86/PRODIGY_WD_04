import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  User, 
  Briefcase, 
  Code, 
  FolderOpen, 
  Award, 
  MessageSquare, 
  Mail, 
  Menu, 
  X, 
  Moon, 
  Sun, 
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Twitter,
  MapPin,
  Phone
} from 'lucide-react';
import { Button } from './components/ui/button';
import './App.css';

// Import assets
import profileImage from './assets/herohamza.png';
import htmlIcon from './assets/html.webp';
import cssIcon from './assets/css.webp';
import jsIcon from './assets/javascript.webp';
import reactIcon from './assets/reactjs.webp';
import nodeIcon from './assets/nodejs.webp';
import mongoIcon from './assets/mongodb.webp';
import nextIcon from './assets/next.webp';
import tailwindIcon from './assets/tailwind.webp';
import gitIcon from './assets/git.webp';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Navigation items
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'technologies', label: 'Technologies', icon: Code },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'certifications', label: 'Certifications', icon: Award },
    { id: 'testimonials', label: 'Testimonials', icon: MessageSquare },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  // Technologies data
  const technologies = [
    { name: 'HTML 5', icon: htmlIcon, color: 'from-orange-500 to-red-500' },
    { name: 'CSS 3', icon: cssIcon, color: 'from-blue-500 to-cyan-500' },
    { name: 'JavaScript', icon: jsIcon, color: 'from-yellow-400 to-orange-500' },
    { name: 'React', icon: reactIcon, color: 'from-cyan-400 to-blue-500' },
    { name: 'Node.js', icon: nodeIcon, color: 'from-green-400 to-emerald-500' },
    { name: 'MongoDB', icon: mongoIcon, color: 'from-green-500 to-teal-500' },
    { name: 'Next.js', icon: nextIcon, color: 'from-gray-800 to-black' },
    { name: 'Tailwind CSS', icon: tailwindIcon, color: 'from-teal-400 to-blue-500' },
    { name: 'Git', icon: gitIcon, color: 'from-orange-600 to-red-600' }
  ];

  // Projects data
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Redux", "PayPal API"],
      github: "#",
      demo: "#"
    },
    {
      title: "Real-Time Chat Application",
      description: "WebSocket-based chat app with real-time messaging",
      technologies: ["React", "Node.js", "MongoDB", "Express", "WebSockets"],
      github: "#",
      demo: "#"
    },
    {
      title: "Task Management System",
      description: "Collaborative project management tool with team features",
      technologies: ["MERN Stack", "JWT", "Redux Toolkit", "Mongoose"],
      github: "#",
      demo: "#"
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management",
      technologies: ["MERN Stack", "JWT", "Redux Toolkit", "Cloudinary"],
      github: "#",
      demo: "#"
    },
    {
      title: "3D Portfolio Website",
      description: "Interactive 3D portfolio with smooth animations",
      technologies: ["React", "Three.js", "Framer Motion", "Tailwind CSS", "EmailJS"],
      github: "#",
      demo: "#"
    },
    {
      title: "Data Visualization Tool",
      description: "Interactive charts and graphs for data analysis",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Recharts"],
      github: "#",
      demo: "#"
    },
    {
      title: "AI-Powered Chatbot",
      description: "Intelligent chatbot with natural language processing",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      github: "#",
      demo: "#"
    },
    {
      title: "Modern Portfolio Template",
      description: "Responsive portfolio template with dark mode",
      technologies: ["React", "Vite", "Tailwind CSS", "Shadcn/ui"],
      github: "#",
      demo: "#"
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      name: "Sabrine Loussaief",
      role: "Instructor at GOMYCODE",
      content: "I am thrilled to share my experience with my student, who has truly excelled in web development. From the very beginning, he displayed an impressive passion for the field. His dedication to mastering HTML, CSS, and JavaScript, along with advanced technologies like React and Node.js, has been remarkable. What sets him apart is his exceptional problem-solving skills and innovative approach. Each project he undertakes showcases his growth, both technically and creatively. Today, he stands out as a skilled web developer, ready to tackle any challenge in the ever-evolving tech landscape."
    },
    {
      name: "Mohamed Amine Sefi",
      role: "UI/UX Designer at CWD",
      content: "I've had the pleasure of working closely with Hamza on multiple projects at Celestial Wave Digital. As a frontend developer, he consistently demonstrates an impressive ability to translate complex UI/UX designs into highly functional, user-friendly web applications."
    },
    {
      name: "Anonymous Developer",
      role: "Senior Developer",
      content: "I've had the pleasure of working alongside Hamza on several projects and I can confidently say that he is an exceptional developer. His ability to solve complex problems with clean efficient code paired with a strong sense of design and user experience truly sets him apart. Whether it's creating robust backend systems building dynamic user interfaces or Hamza consistently delivers high-quality work. His passion for technology and continuous learning is evident in every project he tackles. I highly recommend Hamza to anyone seeking a dedicated and skilled developer."
    }
  ];

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  // Scroll to section function with menu closing
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      // Close mobile menu after navigation
      setIsMenuOpen(false);
    }
  };

  // Track active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen bg-background text-foreground ${isDarkMode ? 'dark' : ''}`}>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold gradient-text">HK</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    activeSection === item.id
                      ? 'text-primary bg-accent'
                      : 'text-muted-foreground hover:text-primary hover:bg-accent/50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleDarkMode}
                className="p-2"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                size="sm"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleDarkMode}
                className="p-2"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 relative z-50"
                aria-label="Toggle mobile menu"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden bg-background/95 backdrop-blur-md border-t border-border relative z-40"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 max-h-96 overflow-y-auto">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center w-full px-3 py-3 rounded-md text-base font-medium transition-all duration-200 ${
                      activeSection === item.id
                        ? 'text-primary bg-accent/80 shadow-sm'
                        : 'text-muted-foreground hover:text-primary hover:bg-accent/50'
                    }`}
                  >
                    <item.icon className="w-5 h-5 mr-3" />
                    {item.label}
                  </motion.button>
                ))}
                
                {/* Mobile Actions */}
                <div className="pt-4 space-y-2">
                  <Button
                    onClick={() => {
                      scrollToSection('contact');
                      setIsMenuOpen(false);
                    }}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Get In Touch
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download CV
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="relative">
                <motion.img
                  src={profileImage}
                  alt="Hamza Khaled"
                  className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-primary/20 shadow-2xl"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
              </div>
              
              <div className="space-y-4">
                <motion.h1
                  className="text-4xl md:text-6xl font-bold gradient-text"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Hi, I'm Hamza Khaled
                </motion.h1>
                
                <motion.p
                  className="text-xl md:text-2xl text-muted-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Full Stack JS Developer
                </motion.p>
                
                <motion.p
                  className="text-lg text-muted-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  From Tunisia
                </motion.p>
              </div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <Button
                  onClick={() => scrollToSection('contact')}
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get In Touch
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download CV
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6 text-lg text-muted-foreground leading-relaxed"
            >
              <p>
                I'm a skilled software developer with experience in TypeScript and JavaScript, and expertise in frameworks like React.js, Next.js, Node.js, Nest.js, and Three.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!
              </p>

              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">Frontend Development</h3>
                  <p>Creating responsive and interactive user interfaces with React.js and modern frameworks</p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">Backend Development</h3>
                  <p>Building robust server-side applications with Node.js, Express, and databases</p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">Full Stack Solutions</h3>
                  <p>End-to-end web application development using modern JavaScript technologies</p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">Mobile Development</h3>
                  <p>Cross-platform mobile app development for iOS and Android</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
              <p className="text-muted-foreground mt-4">My professional journey</p>
            </motion.div>
          </div>
        </section>

        {/* Technologies Section */}
        <section id="technologies" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Technologies</h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
              <p className="text-muted-foreground mt-4">Technologies I work with</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="group"
                >
                  <div className="w-full h-full bg-background/90 backdrop-blur-sm rounded-xl flex items-center justify-center relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-20`}></div>
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-10 h-10 object-contain relative z-10"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
              <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
                Following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
              <p className="text-muted-foreground mt-4">Professional certifications and achievements</p>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Testimonials</h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
              <p className="text-muted-foreground mt-4">What others say about my work</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-xl p-6 shadow-lg"
                >
                  <div className="mb-4">
                    <div className="flex text-yellow-400 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                    <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                  </div>
                  <div className="border-t border-border pt-4">
                    <h4 className="font-semibold text-card-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
              <p className="text-muted-foreground mt-4">Have a project in mind? Don't hesitate to contact me!</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12"
            >
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Email me at</h3>
                  <a
                    href="mailto:khaledhamza251785@gmail.com"
                    className="text-primary hover:underline flex items-center"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    khaledhamza251785@gmail.com
                  </a>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Socials</h3>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm">
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Twitter className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Location</h3>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-5 h-5 mr-2" />
                    Tunisia
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  ></textarea>
                </div>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Send Message
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted/30 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Hamza Khaled. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

