import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import emailjs from '@emailjs/browser'
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
} from 'lucide-react'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Badge } from './components/ui/badge'
import { Input } from './components/ui/input'
import { Textarea } from './components/ui/textarea'
import heroImage from './assets/herohamza.png'
import certification1 from './assets/certification1.png'
import certification2 from './assets/certification2.png'
import certification3 from './assets/certification3.png'
import certification4 from './assets/certification4.png'
import certification5 from './assets/certification5.png'
import certification6 from './assets/certification6.png'
import certification7 from './assets/certification7.png'
import certification8 from './assets/certification8.png'
import certification9 from './assets/certification9.png'
import codealphaLogo from './assets/codealpha-logo.png'
import prodigyLogo from './assets/prodigy-logo.png'
import celestialLogo from './assets/celestial-logo.jpeg'
import gomycodeLogo from './assets/gomycode-logo.jpg'
import fullstackLogo from './assets/fullstack-logo.png'
import frontendLogo from './assets/frontend-logo.png'
import backendLogo from './assets/backend-logo.png'
import reactNativeLogo from './assets/react-native-logo.png'
import webDesignLogo from './assets/web-design-logo.png'
import graphicDesignLogo from './assets/graphic-design-logo.png'
import figmaLogo from './assets/figma-logo.png'
import canvaLogo from './assets/canva-logo.png'
import pythonLogo from './assets/python-logo.png'
import javaLogo from './assets/java-logo.png'
import cLogo from './assets/c-logo.png'
import cppLogo from './assets/cpp-logo.png'
import javascriptLogo from './assets/javascript-logo.png'
import typescriptLogo from './assets/typescript-logo.png'
import reactLogo from './assets/react-logo.png'
import nextjsLogo from './assets/nextjs-logo.png'
import nodejsLogo from './assets/nodejs-logo.png'
import nestjsLogo from './assets/nestjs-logo.png'
import expressjsLogo from './assets/expressjs-logo.png'
import springbootLogo from './assets/springboot-logo.png'
import mongoLogo from './assets/mongo-logo.png'
import mysqlLogo from './assets/mysql-logo.png'
import postgresLogo from './assets/postgres-logo.png'
import firebaseLogo from './assets/firebase-logo.png'
import dockerLogo from './assets/docker-logo.png'
import gitLogo from './assets/git-logo.png'
import githubLogo from './assets/github-logo.png'
import postmanLogo from './assets/postman-logo.png'
import vscodeLogo from './assets/vscode-logo.png'
import tailwindLogo from './assets/tailwind-logo.png'
import shadcnuiLogo from './assets/shadcnui-logo.png'
import htmlLogo from './assets/html-logo.png'
import cssLogo from './assets/css-logo.png'
import figma from './assets/figma.png'
import canva from './assets/canva.png'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './components/ui/dialog'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './components/ui/carousel'
import Autoplay from "embla-carousel-autoplay"

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode')
    return savedMode ? JSON.parse(savedMode) : true
  })

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode))
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode)
  }

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs.send(
      'service_hamza',
      'template_hamza',
      formData,
      'h_e_r_o_k_u_App'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text)
        alert('Message sent successfully!')
        setFormData({
          name: '',
          email: '',
          message: ''
        })
      })
      .catch((err) => {
        console.log('FAILED...', err)
        alert('Failed to send message. Please try again later.')
      })
  }

  return (
    <div className="min-h-screen bg-background font-sans antialiased flex flex-col items-center">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm shadow-sm p-4 flex justify-between items-center max-w-7xl mx-auto w-full">
        <div className="text-2xl font-bold text-primary">HK</div>
        <nav className="hidden md:flex space-x-4">
          <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
          <a href="#skills" className="text-foreground hover:text-primary transition-colors">Skills</a>
          <a href="#projects" className="text-foreground hover:text-primary transition-colors">Projects</a>
          <a href="#experience" className="text-foreground hover:text-primary transition-colors">Experience</a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
        </nav>
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            className="text-foreground hover:text-primary"
          >
            {isDarkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className="md:hidden text-foreground hover:text-primary"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 left-0 right-0 z-40 bg-background shadow-lg md:hidden flex flex-col items-center space-y-4 p-4 w-full"
          >
            <a href="#home" className="text-foreground hover:text-primary transition-colors w-full text-center py-2" onClick={toggleMenu}>Home</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors w-full text-center py-2" onClick={toggleMenu}>About</a>
            <a href="#skills" className="text-foreground hover:text-primary transition-colors w-full text-center py-2" onClick={toggleMenu}>Skills</a>
            <a href="#projects" className="text-foreground hover:text-primary transition-colors w-full text-center py-2" onClick={toggleMenu}>Projects</a>
            <a href="#experience" className="text-foreground hover:text-primary transition-colors w-full text-center py-2" onClick={toggleMenu}>Experience</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors w-full text-center py-2" onClick={toggleMenu}>Contact</a>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="relative flex flex-col items-center justify-center text-center py-20 pt-32 md:pt-40 px-4 w-full max-w-7xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <img
            src={heroImage}
            alt="Hamza Kh"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-lg border-4 border-primary"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mb-8"
        >
          <a href="#about" className="text-primary hover:text-primary-foreground transition-colors">
            <ChevronDown className="h-10 w-10 animate-bounce" />
          </a>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl md:text-6xl font-extrabold text-foreground mb-4"
        >
          Hamza Kh
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl"
        >
          Développeur Full Stack | Créateur de Solutions Innovantes
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex space-x-4"
        >
          <Button asChild>
            <a href="#contact">Contactez-moi</a>
          </Button>
          <Button asChild variant="outline">
            <a href="#projects">Voir les Projets</a>
          </Button>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 w-full max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">À Propos de Moi</h2>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          Je suis un développeur logiciel qualifié avec une expérience en TypeScript et JavaScript, et une expertise dans des frameworks comme React.js, Next.js, Node.js, Nest.js et Three.js. Je suis un apprenant rapide et je collabore étroitement avec les clients pour créer des solutions efficaces, évolutives et conviviales qui résolvent des problèmes du monde réel. Mon parcours dans le développement logiciel est alimenté par une passion pour la création d'expériences numériques percutantes et l'exploration de nouvelles technologies.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 w-full max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Mes Compétences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Programming Languages */}
          <Card className="flex flex-col items-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Code className="h-12 w-12 text-primary mb-4" />
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-foreground">Langages de Programmation</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap justify-center gap-4 mt-4">
              <Badge variant="secondary" className="flex items-center space-x-2 p-2">
                <img src={javascriptLogo} alt="JavaScript" className="h-6 w-6" />
                <span>JavaScript</span>
              </Badge>
              <Badge variant="secondary" className="flex items-center space-x-2 p-2">
                <img src={typescriptLogo} alt="TypeScript" className="h-6 w-6" />
                <span>TypeScript</span>
              </Badge>
              <Badge variant="secondary" className="flex items-center space-x-2 p-2">
                <img src={pythonLogo} alt="Python" className="h-6 w-6" />
                <span>Python</span>
              </Badge>
              <Badge variant="secondary" className="flex items-center space-x-2 p-2">
                <img src={javaLogo} alt="Java" className="h-6 w-6" />
                <span>Java</span>
              </Badge>
              <Badge variant="secondary" className="flex items-center space-x-2 p-2">
                <img src={cLogo} alt="C" className="h-6 w-6" />
                <span>C</span>
              </Badge>
              <Badge variant="secondary" className="flex items-center space-x-2 p-2">
                <img src={cppLogo} alt="C++" className="h-6 w-6" />
                <span>C++</span>
              </Badge>
              <Badge variant="secondary" className="flex items-center space-x-2 p-2">
                <img src={htmlLogo} alt="HTML" className="h-6 w-6" />
                <span>HTML</span>
              </Badge>
              <Badge variant="secondary" className="flex items-center space-x-2 p-2">
                <img src={cssLogo} alt="CSS" className="h-6 w-6" />
                <span>CSS</span>
              </Badge>
            </CardContent>
          </Card>

          {/* Frameworks & Libraries */}
          <Card className="flex flex-col items-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Code className="h-12 w-12 text-primary mb-4" />
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-foreground">Frameworks & Bibliothèques</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap justify-center gap-4 mt-4">
              <Badge variant="secondary" className="flex items-center space-x-2 p-2">
                <img src={reactLogo} alt="React.js" className="h-6 w-6" />
                <span>React.js</span>
              </Badge>
              <Badge variant="secondary" className="flex items-center space-x-2 p-2">
                <img src={nextjsLogo} alt="Next.js" className="h-6 w-6" />
                <span>Next.js</span>
              </Badge>
              <Badge variant="secondary" className="flex items-center space-x-2 p-2">
                <img src={nodejsLogo} alt="Node.js" className="h-6 w-6" />
                <span>Node.js</span>
              </Badge>
              <Badge variant="secondary" className="flex items-center space-x-2 p-2">
                <img src={expressjsLogo} alt="Express.js" className="h-6 w-6" />
                <span>Express.js</span>
              </Badge>
              <Badge variant="secondary" className="flex items-center space-x-2 p-2">
                <img src={nestjsLogo} alt="Nest.js" className="h-6 w-6" />
                <span>Nest.js</span>
              </Badge>
              <Badge variant="secondary" className="flex items-center space-x-2 p-2">
                <img src={springbootLogo} alt="Spring Boot" className="h-6 w-6" />
                <span>Spring Boot</span>
              </Badge>
              <Badge variant="secondary" className="flex items-center space-x-2 p-2">
                <img src={tailwindLogo} alt="Tailwind CSS" className="h-6 w-6" />
                <span>Tailwind CSS</span>
              </Badge>
              <Badge variant="secondary" className="flex items-center space-x-2 p-2">
                <img src={shadcnuiLogo} alt="Shadcn UI" className="h-6 w-6" />
                <span>Shadcn UI</span>
              </Badge>
            </CardContent>
          </Card>

          {/* Databases */}
          <Card className="flex flex-col items-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Code className="h-12 w-12 text-primary mb-4" />
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-foreground">Bases de Données</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap justify-center gap-4 mt-4">
              <Badge variant="secondary" className="flex items-center space-x-2 p-2">
                <img src={mongoLogo} alt="MongoDB" className="h-6 w-6" />
                <span>MongoDB</span>
              </Badge>
              <Badge variant="secondary" className="flex items-center space-x-2 p-2">
                <img src={mysqlLogo} alt="MySQL" className="h-6 w-6" />
                <span>MySQL</span>
              </Badge>
              <Badge variant="secondary" className="flex items-center space-x-2 p-2">
                <img src={postgresLogo} alt="PostgreSQL" className="h-6 w-6" />
                <span>PostgreSQL</span>
              </Badge>
              <Badge variant="secondary" className="flex items-center space-x-2 p-2">
                <img src={firebaseLogo} alt="Firebase" className="h-6 w-6" />
                <span>Firebase</span>
              </Badge>
            </CardContent>
          </Card>

          {/* Tools & Platforms */}
          <Card className="flex flex-col items-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Code className="h-12 w-12 text-primary mb-4" />
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-foreground">Outils & Plateformes</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap justify-center gap-4 mt-4">
              <Badge variant="secondary" className="flex items-center space-x-2 p-2">
                <img src={dockerLogo} alt="Docker" className="h-6 w-6" />
                <span>Docker</span>
              </Badge>
              <Badge variant="secondary" className="flex items-center space-x-2 p-2">
                <img src={gitLogo} alt="Git" className="h-6 w-6" />
                <span>Git</span>
              </Badge>
              <Badge variant="secondary" className="flex items-center space-x-2 p-2">
                <img src={githubLogo} alt="GitHub" className="h-6 w-6" />
                <span>GitHub</span>
              </Badge>
              <Badge variant="secondary" className="flex items-center space-x-2 p-2">
                <img src={postmanLogo} alt="Postman" className="h-6 w-6" />
                <span>Postman</span>
              </Badge>
              <Badge variant="secondary" className="flex items-center space-x-2 p-2">
                <img src={vscodeLogo} alt="VS Code" className="h-6 w-6" />
                <span>VS Code</span>
              </Badge>
            </CardContent>
          </Card>

          {/* Design Tools */}
          <Card className="flex flex-col items-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Code className="h-12 w-12 text-primary mb-4" />
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-foreground">Outils de Conception</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap justify-center gap-4 mt-4">
              <Badge variant="secondary" className="flex items-center space-x-2 p-2">
                <img src={figmaLogo} alt="Figma" className="h-6 w-6" />
                <span>Figma</span>
              </Badge>
              <Badge variant="secondary" className="flex items-center space-x-2 p-2">
                <img src={canvaLogo} alt="Canva" className="h-6 w-6" />
                <span>Canva</span>
              </Badge>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card className="flex flex-col items-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Award className="h-12 w-12 text-primary mb-4" />
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-foreground">Certifications</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap justify-center gap-4 mt-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Badge variant="secondary" className="flex items-center space-x-2 p-2 cursor-pointer">
                    <img src={codealphaLogo} alt="CodeAlpha" className="h-6 w-6" />
                    <span>CodeAlpha</span>
                  </Badge>
                </DialogTrigger>
                <DialogContent className="max-w-4xl p-0">
                  <Carousel
                    plugins={[
                      Autoplay({
                        delay: 2000,
                      }),
                    ]}
                    className="w-full"
                  >
                    <CarouselContent>
                      {[certification1, certification2, certification3, certification4, certification5, certification6, certification7, certification8, certification9].map((cert, index) => (
                        <CarouselItem key={index}>
                          <div className="p-1">
                            <img src={cert} alt={`Certification ${index + 1}`} className="w-full h-auto object-contain" />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </DialogContent>
              </Dialog>
              <Dialog>
                <DialogTrigger asChild>
                  <Badge variant="secondary" className="flex items-center space-x-2 p-2 cursor-pointer">
                    <img src={prodigyLogo} alt="Prodigy Infotech" className="h-6 w-6" />
                    <span>Prodigy Infotech</span>
                  </Badge>
                </DialogTrigger>
                <DialogContent className="max-w-4xl p-0">
                  <Carousel
                    plugins={[
                      Autoplay({
                        delay: 2000,
                      }),
                    ]}
                    className="w-full"
                  >
                    <CarouselContent>
                      {[certification1, certification2, certification3, certification4, certification5, certification6, certification7, certification8, certification9].map((cert, index) => (
                        <CarouselItem key={index}>
                          <div className="p-1">
                            <img src={cert} alt={`Certification ${index + 1}`} className="w-full h-auto object-contain" />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </DialogContent>
              </Dialog>
              <Dialog>
                <DialogTrigger asChild>
                  <Badge variant="secondary" className="flex items-center space-x-2 p-2 cursor-pointer">
                    <img src={celestialLogo} alt="Celestial Institute" className="h-6 w-6" />
                    <span>Celestial Institute</span>
                  </Badge>
                </DialogTrigger>
                <DialogContent className="max-w-4xl p-0">
                  <Carousel
                    plugins={[
                      Autoplay({
                        delay: 2000,
                      }),
                    ]}
                    className="w-full"
                  >
                    <CarouselContent>
                      {[certification1, certification2, certification3, certification4, certification5, certification6, certification7, certification8, certification9].map((cert, index) => (
                        <CarouselItem key={index}>
                          <div className="p-1">
                            <img src={cert} alt={`Certification ${index + 1}`} className="w-full h-auto object-contain" />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </DialogContent>
              </Dialog>
              <Dialog>
                <DialogTrigger asChild>
                  <Badge variant="secondary" className="flex items-center space-x-2 p-2 cursor-pointer">
                    <img src={gomycodeLogo} alt="GOMYCODE" className="h-6 w-6" />
                    <span>GOMYCODE</span>
                  </Badge>
                </DialogTrigger>
                <DialogContent className="max-w-4xl p-0">
                  <Carousel
                    plugins={[
                      Autoplay({
                        delay: 2000,
                      }),
                    ]}
                    className="w-full"
                  >
                    <CarouselContent>
                      {[certification1, certification2, certification3, certification4, certification5, certification6, certification7, certification8, certification9].map((cert, index) => (
                        <CarouselItem key={index}>
                          <div className="p-1">
                            <img src={cert} alt={`Certification ${index + 1}`} className="w-full h-auto object-contain" />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 w-full max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Mes Projets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="flex flex-col items-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src={frontendLogo} alt="Frontend Project" className="h-24 w-24 mb-4" />
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-foreground">Projet Frontend</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-muted-foreground mb-4">Développement d'interfaces utilisateur interactives avec React et Next.js.</CardDescription>
              <div className="flex space-x-4 justify-center">
                <Button asChild variant="outline">
                  <a href="#" target="_blank" rel="noopener noreferrer">Voir le Code <Github className="ml-2 h-4 w-4" /></a>
                </Button>
                <Button asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">Voir le Projet <ExternalLink className="ml-2 h-4 w-4" /></a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="flex flex-col items-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src={backendLogo} alt="Backend Project" className="h-24 w-24 mb-4" />
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-foreground">Projet Backend</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-muted-foreground mb-4">Conception et implémentation d'APIs robustes avec Node.js et Nest.js.</CardDescription>
              <div className="flex space-x-4 justify-center">
                <Button asChild variant="outline">
                  <a href="#" target="_blank" rel="noopener noreferrer">Voir le Code <Github className="ml-2 h-4 w-4" /></a>
                </Button>
                <Button asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">Voir le Projet <ExternalLink className="ml-2 h-4 w-4" /></a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="flex flex-col items-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src={reactNativeLogo} alt="Mobile App Project" className="h-24 w-24 mb-4" />
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-foreground">Application Mobile</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-muted-foreground mb-4">Développement d'applications mobiles multiplateformes avec React Native.</CardDescription>
              <div className="flex space-x-4 justify-center">
                <Button asChild variant="outline">
                  <a href="#" target="_blank" rel="noopener noreferrer">Voir le Code <Github className="ml-2 h-4 w-4" /></a>
                </Button>
                <Button asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">Voir le Projet <ExternalLink className="ml-2 h-4 w-4" /></a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="flex flex-col items-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src={webDesignLogo} alt="Web Design Project" className="h-24 w-24 mb-4" />
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-foreground">Conception Web</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-muted-foreground mb-4">Création de designs web intuitifs et esthétiques.</CardDescription>
              <div className="flex space-x-4 justify-center">
                <Button asChild variant="outline">
                  <a href="#" target="_blank" rel="noopener noreferrer">Voir le Code <Github className="ml-2 h-4 w-4" /></a>
                </Button>
                <Button asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">Voir le Projet <ExternalLink className="ml-2 h-4 w-4" /></a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="flex flex-col items-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src={graphicDesignLogo} alt="Graphic Design Project" className="h-24 w-24 mb-4" />
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-foreground">Conception Graphique</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-muted-foreground mb-4">Réalisation de visuels percutants et de supports de communication.</CardDescription>
              <div className="flex space-x-4 justify-center">
                <Button asChild variant="outline">
                  <a href="#" target="_blank" rel="noopener noreferrer">Voir le Code <Github className="ml-2 h-4 w-4" /></a>
                </Button>
                <Button asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">Voir le Projet <ExternalLink className="ml-2 h-4 w-4" /></a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="flex flex-col items-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src={figma} alt="Figma Project" className="h-24 w-24 mb-4" />
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-foreground">Projet Figma</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-muted-foreground mb-4">Prototypage et design d'interfaces utilisateur avec Figma.</CardDescription>
              <div className="flex space-x-4 justify-center">
                <Button asChild variant="outline">
                  <a href="#" target="_blank" rel="noopener noreferrer">Voir le Code <Github className="ml-2 h-4 w-4" /></a>
                </Button>
                <Button asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">Voir le Projet <ExternalLink className="ml-2 h-4 w-4" /></a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="flex flex-col items-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src={canva} alt="Canva Project" className="h-24 w-24 mb-4" />
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-foreground">Projet Canva</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-muted-foreground mb-4">Création de supports visuels et graphiques avec Canva.</CardDescription>
              <div className="flex space-x-4 justify-center">
                <Button asChild variant="outline">
                  <a href="#" target="_blank" rel="noopener noreferrer">Voir le Code <Github className="ml-2 h-4 w-4" /></a>
                </Button>
                <Button asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">Voir le Projet <ExternalLink className="ml-2 h-4 w-4" /></a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 w-full max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Mon Expérience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-foreground">Développeur Full Stack</CardTitle>
              <CardDescription className="text-muted-foreground">Freelance | 2023 - Présent</CardDescription>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <ul className="list-disc list-inside space-y-2">
                <li>Développement et maintenance d'applications web complètes en utilisant React, Node.js et MongoDB.</li>
                <li>Collaboration avec les clients pour définir les exigences et livrer des solutions sur mesure.</li>
                <li>Optimisation des performances et de l'expérience utilisateur.</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-foreground">Stagiaire Développeur Web</CardTitle>
              <CardDescription className="text-muted-foreground">ABC Tech Solutions | Été 2022</CardDescription>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <ul className="list-disc list-inside space-y-2">
                <li>Assistance dans le développement de nouvelles fonctionnalités pour une application e-commerce.</li>
                <li>Participation aux revues de code et aux tests unitaires.</li>
                <li>Apprentissage des meilleures pratiques de développement agile.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 w-full max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Contactez-moi</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex-1 max-w-md">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-foreground">Informations de Contact</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-4">
              <p className="flex items-center justify-center space-x-2"><Mail className="h-5 w-5 text-primary" /> <span>hamzakh@example.com</span></p>
              <p className="flex items-center justify-center space-x-2"><Phone className="h-5 w-5 text-primary" /> <span>+216 12 345 678</span></p>
              <p className="flex items-center justify-center space-x-2"><MapPin className="h-5 w-5 text-primary" /> <span>Tunis, Tunisie</span></p>
            </CardContent>
          </Card>
          <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex-1 max-w-md">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-foreground">Envoyez-moi un Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="text"
                  name="name"
                  placeholder="Votre Nom"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Votre Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
                <Textarea
                  name="message"
                  placeholder="Votre Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full"
                />
                <Button type="submit" className="w-full">Envoyer le Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-card py-6 text-center text-muted-foreground text-sm mt-12">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://github.com/hamzakh86" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
            <Github className="h-6 w-6" />
          </a>
          <a href="https://www.linkedin.com/in/hamza-kh/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="https://www.facebook.com/hamza.kh.98" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
            <Facebook className="h-6 w-6" />
          </a>
          <a href="https://www.instagram.com/hamza.kh/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
            <Instagram className="h-6 w-6" />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Hamza Kh. Tous droits réservés.</p>
      </footer>

      {/* Scroll to Top Button */}
      <Button
        variant="outline"
        size="icon"
        className="fixed bottom-4 right-4 z-50 opacity-0 transition-opacity duration-300"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        id="scrollToTopBtn"
      >
        <ArrowUp className="h-6 w-6" />
      </Button>
    </div>
  )
}

export default App

