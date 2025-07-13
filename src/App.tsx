import React from "react";
import { useEffect, useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  Download,
  MapPin,
  Calendar,
  Award,
  Users,
  Code,
  Database,
  Search,
  Globe,
  Smartphone,
  Palette,
  User,
  CheckCircle,
  Menu,
  X,
} from "lucide-react";

function App() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Add smooth scrolling behavior to all anchor links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
          // Close mobile menu when link is clicked
          setMobileMenuOpen(false);
        }
      }
    };

    // Add event listeners to all navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach((link) => {
      link.addEventListener("click", handleSmoothScroll);
    });

    // Cleanup event listeners
    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("click", handleSmoothScroll);
      });
    };
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        mobileMenuOpen &&
        !target.closest(".mobile-menu") &&
        !target.closest(".mobile-menu-button")
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);
  const skills = [
    {
      category: "Frontend Development",
      icon: <Code className="w-8 h-8 text-blue-600" />,
      skills: [
        { name: "ReactJS", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "HTML5/CSS3", level: 95 },
        { name: "TypeScript", level: 85 },
      ],
    },
    {
      category: "Backend & CMS",
      icon: <Database className="w-8 h-8 text-blue-600" />,
      skills: [
        { name: "WordPress", level: 95 },
        { name: "PHP", level: 85 },
        { name: "MySQL", level: 80 },
        { name: "Node.js", level: 75 },
      ],
    },
    {
      category: "SEO & Marketing",
      icon: <Search className="w-8 h-8 text-blue-600" />,
      skills: [
        { name: "SEO Optimization", level: 95 },
        { name: "Google Analytics", level: 90 },
        { name: "Digital Marketing", level: 85 },
        { name: "Content Strategy", level: 80 },
      ],
    },
  ];

  const additionalSkills = [
    {
      category: "Web Hosting",
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      description: "cPanel, WordPress Management",
    },
    {
      category: "Responsive Design",
      icon: <Smartphone className="w-8 h-8 text-blue-600" />,
      description: "Mobile-first approach",
    },
    {
      category: "UI/UX Design",
      icon: <Palette className="w-8 h-8 text-blue-600" />,
      description: "User-centered design principles",
    },
  ];

  const technologies = [
    "WordPress",
    "Elementor",
    "ReactJS",
    "HTML5",
    "CSS3",
    "JavaScript",
    "PHP",
    "MySQL",
    "Google Ads",
    "Facebook Ads",
    "Social Media Marketing",
    "Email Campaigns",
    "WooCommerce",
    "SEO",
    "Figma",
    "Git",
    "VS Code",
  ];

  const experience = [
    {
      title: "Freelance Web Developer / SEO Consultant",
      company: "SiteGuru",
      location: "Remote",
      period: "Jan 2023 - Present",
      status: "Current",
      achievements: [
        "Built and managed 20+ websites using WordPress, Elementor, and WooCommerce",
        "Created and maintained Google PPC campaigns for local businesses",
        "Improved organic search rankings through on-page SEO, content optimization, and schema",
        "Projects: cheapestiles.com.au, bellaskinclinic.com.au, kamal.cc",
      ],
      technologies: [
        "WordPress",
        "Elementor",
        "WooCommerce",
        "SEO",
        "Google Ads",
        "PPC",
      ],
    },
    {
      title: "Web Developer / SEO Specialist",
      company: "Show Tile",
      location: "Sydney, Australia",
      period: "Jun 2023 - Mar 2024",
      status: "Full-time",
      achievements: [
        "Rebuilt and optimized the company's e-commerce website using WordPress & WooCommerce",
        "Managed Google Ads campaigns, tracked conversions, and reduced CPC",
        "Improved local SEO, implemented structured data, and boosted Google rankings",
        "Collaborated with internal teams to enhance UX, mobile responsiveness, and speed",
      ],
      technologies: [
        "WordPress",
        "WooCommerce",
        "Google Ads",
        "Local SEO",
        "UX Design",
      ],
    },
    {
      title: "Web Developer / SEO Specialist",
      company: "All in IT Solutions / Skaff Legal",
      location: "Sydney, Australia",
      period: "2015 - 2018",
      status: "Full-time",
      achievements: [
        "Managed business websites, landing pages, and e-commerce stores",
        "Led redesigns, WordPress migrations, site speed improvements, and SEO audits",
        "Ran Google Ads and performed lead generation for small businesses",
      ],
      technologies: [
        "WordPress",
        "SEO Audits",
        "Google Ads",
        "Lead Generation",
        "Site Migration",
      ],
    },
    {
      title: "Founder & Web Consultant",
      company: "WebQuick",
      location: "Sydney, Australia",
      period: "2012 - Present",
      status: "Founder",
      achievements: [
        "Built and maintained client websites, handling end-to-end project delivery",
        "Conducted full SEO audits, keyword targeting, and improved Google rankings",
        "Managed web hosting setups, email configurations, and PPC campaigns",
        "Provided digital growth strategies using WordPress, Elementor, and custom code",
      ],
      technologies: [
        "WordPress",
        "Elementor",
        "SEO",
        "Web Hosting",
        "Digital Strategy",
      ],
    },
  ];

  const projects = [
    {
      title: "Kamal.cc - SaaS SEO Blog Generator",
      description:
        "Advanced AI-powered SaaS platform for generating SEO-optimized blog posts. Built with React.js and hosted live with modern web technologies.",
      image:
        "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "AI Content Generation",
        "SEO Optimization",
        "React.js Frontend",
        "Analytics Dashboard",
      ],
      technologies: ["React.js", "AI/ML", "SEO", "SaaS", "Live Hosting"],
      liveUrl: "https://kamal.cc",
      githubUrl: "https://kamal.cc",
    },
    {
      title: "SiteGuru.com.au - WordPress to NextJS Migration",
      description:
        "Complete migration project from WordPress to React then NextJS, improving performance and user experience significantly.",
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "Framework Migration",
        "WordPress to React to NextJS",
        "SEO Preservation",
        "Performance Optimization",
      ],
      technologies: [
        "NextJS",
        "React",
        "WordPress",
        "Migration",
        "Performance",
      ],
      liveUrl: "https://siteguru.com.au",
      githubUrl: "https://siteguru.com.au",
    },
    {
      title: "WebQuick.com.au - Founded Web Development Platform",
      description:
        "Founded and built comprehensive web development platform for small businesses with WordPress and WHMCS integration.",
      image:
        "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "WordPress Platform",
        "WHMCS Integration",
        "Client Management",
        "Business Dashboard",
      ],
      technologies: ["WordPress", "WHMCS", "PHP", "Business Platform"],
      liveUrl: "https://webquick.com.au",
      githubUrl: "https://webquick.com.au",
    },
    {
      title: "QuickCleaners.com.au - Cleaning Business Website",
      description:
        "Professional cleaning business website built in WordPress with service management and lead generation features.",
      image:
        "https://images.pexels.com/photos/4099467/pexels-photo-4099467.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "WordPress Build",
        "Service Management",
        "Lead Generation",
        "Local SEO",
      ],
      technologies: ["WordPress", "Service Business", "Lead Generation", "SEO"],
      liveUrl: "https://quickcleaners.com.au",
      githubUrl: "https://quickcleaners.com.au",
    },
    {
      title: "SydneyStructuralSteel.com.au - Joomla to WordPress",
      description:
        "Complete platform migration from Joomla to WordPress, modernizing the website architecture and improving functionality for structural steel company.",
      image:
        "https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "Joomla to WordPress",
        "Modern Architecture",
        "Construction Industry",
        "Performance Boost",
      ],
      technologies: ["WordPress", "Joomla", "Migration", "Construction"],
      liveUrl: "https://sydneystructuralsteel.com.au",
      githubUrl: "https://sydneystructuralsteel.com.au",
    },
    {
      title: "CheapesTiles.com.au - WooCommerce Optimization",
      description:
        "Rebuilt WooCommerce site and optimized product pages for better conversion rates and user experience in tile industry.",
      image:
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "WooCommerce Rebuild",
        "Product Page Optimization",
        "Conversion Rate Boost",
        "E-commerce SEO",
      ],
      technologies: ["WooCommerce", "WordPress", "E-commerce", "Optimization"],
      liveUrl: "https://cheapestiles.com.au",
      githubUrl: "https://cheapestiles.com.au",
    },
    {
      title: "BellaSkinClinic.com.au - Beauty Clinic Website",
      description:
        "Professional beauty clinic website built in WordPress with appointment booking and service showcase for skin treatments.",
      image:
        "https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "WordPress Build",
        "Beauty Industry",
        "Service Showcase",
        "Professional Design",
      ],
      technologies: [
        "WordPress",
        "Beauty Industry",
        "Responsive Design",
        "SEO",
      ],
      liveUrl: "https://bellaskinclinic.com.au",
      githubUrl: "https://bellaskinclinic.com.au",
    },
    {
      title: "GetTilesOnline.com.au - SEO & Performance",
      description:
        "SEO and performance optimization for online tile retailer, improving search rankings and site speed for better user experience.",
      image:
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "SEO Optimization",
        "Performance Boost",
        "Search Rankings",
        "Site Speed Improvement",
      ],
      technologies: ["SEO", "Performance", "WordPress", "E-commerce"],
      liveUrl: "https://gettilesonline.com.au",
      githubUrl: "https://gettilesonline.com.au",
    },
    {
      title: "AndesMS.com.au - Security & Recovery",
      description:
        "Restored and updated hacked website, implemented security measures, and got the site approved by Google after malware removal.",
      image:
        "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "Security Restoration",
        "Malware Removal",
        "Google Approval",
        "Site Recovery",
      ],
      technologies: ["WordPress", "Security", "Malware Removal", "Recovery"],
      liveUrl: "https://andesms.com.au",
      githubUrl: "https://andesms.com.au",
    },
    {
      title: "ShowTile.com.au - SEO Category Optimization",
      description:
        "SEO optimization for category pages, improving search visibility and organic traffic for tile showroom business.",
      image:
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "Category Page SEO",
        "Search Visibility",
        "Organic Traffic Growth",
        "Local Business",
      ],
      technologies: ["SEO", "WordPress", "Local SEO", "Category Optimization"],
      liveUrl: "https://showtile.com.au",
      githubUrl: "https://showtile.com.au",
    },
    {
      title: "MintFencing.com.au - Service Pages SEO",
      description:
        "Service pages SEO optimization that ranked the fencing company in Google top 3 for major keywords, driving significant organic traffic.",
      image:
        "https://images.pexels.com/photos/209251/pexels-photo-209251.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "Service Page SEO",
        "Google Top 3 Rankings",
        "Major Keywords",
        "Organic Traffic Growth",
      ],
      technologies: ["SEO", "WordPress", "Local SEO", "Service Business"],
      liveUrl: "https://mintfencing.com.au",
      githubUrl: "https://mintfencing.com.au",
    },
    {
      title: "SkaffLegal.com - WordPress to React Migration",
      description:
        "Migrated WordPress legal website to React, achieving 50% speed improvement and modern user experience for law firm.",
      image:
        "https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "WordPress to React",
        "50% Speed Improvement",
        "Legal Industry",
        "Modern UX",
      ],
      technologies: ["React", "WordPress", "Migration", "Performance", "Legal"],
      liveUrl: "https://skafflegal.com",
      githubUrl: "https://skafflegal.com",
    },
  ];

  const certifications = [
    "Google Analytics Certified",
    "Digital Marketing Foundations",
    "WordPress SEO Mastery",
    "React Development",
  ];

  const stats = [
    {
      number: "5+",
      label: "Years Experience",
      icon: <Calendar className="w-8 h-8 text-blue-600" />,
    },
    {
      number: "50+",
      label: "Projects Completed",
      icon: <Award className="w-8 h-8 text-blue-600" />,
    },
    {
      number: "30+",
      label: "Happy Clients",
      icon: <Users className="w-8 h-8 text-blue-600" />,
    },
    {
      number: "Sydney",
      label: "Australia",
      icon: <MapPin className="w-8 h-8 text-blue-600" />,
    },
  ];

  const projectStats = [
    { number: "50+", label: "Projects Completed" },
    { number: "30+", label: "Happy Clients" },
    { number: "150%", label: "Avg Traffic Increase" },
    { number: "98%", label: "Client Satisfaction" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100 animate-slideInFromTop">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 animate-fadeInUp">
            <div className="flex items-center space-x-2 hover-scale cursor-pointer">
              <div className="bg-blue-600 text-white p-2 rounded-lg hover-glow animate-pulse-custom">
                <Code className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-300">
                Kamal Khanal
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-110 relative group"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-110 relative group"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#skills"
                className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-110 relative group"
              >
                Skills
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#experience"
                className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-110 relative group"
              >
                Experience
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#projects"
                className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-110 relative group"
              >
                Projects
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-110 relative group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>

            {/* Desktop CTA Button */}
            <button className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover-glow">
              Get In Touch
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden mobile-menu-button p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-all duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          <div
            className={`md:hidden mobile-menu transition-all duration-300 ease-in-out ${
              mobileMenuOpen
                ? "max-h-96 opacity-100 visible"
                : "max-h-0 opacity-0 invisible"
            } overflow-hidden`}
          >
            <div className="py-4 space-y-2 border-t border-gray-100">
              <a
                href="#home"
                className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Home
              </a>
              <a
                href="#about"
                className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                About
              </a>
              <a
                href="#skills"
                className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Skills
              </a>
              <a
                href="#experience"
                className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Experience
              </a>
              <a
                href="#projects"
                className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Contact
              </a>
              <div className="pt-2">
                <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-20 pb-16 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white gradient-animate"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh]">
            <div className="lg:w-1/2 mb-8 lg:mb-0 animate-fadeInLeft">
              <h1 className="text-6xl lg:text-7xl font-bold mb-6 animate-fadeInUp stagger-1">
                Hi, I'm Kamal Khanal
              </h1>
              <p className="text-2xl text-blue-100 mb-8 animate-fadeInUp stagger-2">
                Web Developer | SEO Specialist
              </p>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed max-w-2xl animate-fadeInUp stagger-3">
                React & WordPress Expert based in Sydney, Australia. I create
                exceptional web experiences that drive results and help
                businesses grow online.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fadeInUp stagger-4">
                <button
                  onClick={() =>
                    document
                      .getElementById("projects")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold hover:scale-105 hover:shadow-xl"
                >
                  View My Work
                </button>
                <a
                  href="/kamal_khanal_cv.pdf"
                  download="Kamal_Khanal_CV.pdf"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold hover:scale-105 hover:shadow-xl inline-block text-center"
                >
                  Download CV
                </a>
              </div>
              <div className="flex gap-6 animate-fadeInUp stagger-5">
                <a
                  href="https://github.com/webkamal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-200 transition-all duration-300 hover:scale-125 hover:rotate-12"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/khanalkamal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-200 transition-all duration-300 hover:scale-125 hover:rotate-12"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:hello@kamalkhanal.com"
                  className="text-white hover:text-blue-200 transition-all duration-300 hover:scale-125 hover:rotate-12"
                >
                  <Mail size={24} />
                </a>
                <a
                  href="tel:0415837036"
                  className="text-white hover:text-blue-200 transition-all duration-300 hover:scale-125 hover:rotate-12"
                >
                  <Phone size={24} />
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center animate-fadeInRight">
              <div className="relative animate-float">
                <div className="w-96 h-96 rounded-full overflow-hidden border-8 border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
                  <img
                    src="/IMG_0351 copy.jpeg"
                    alt="Kamal Khanal"
                    className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white text-blue-600 p-4 rounded-full shadow-lg animate-bounceIn hover:rotate-12 transition-transform duration-300">
                  <User className="w-8 h-8" />
                </div>
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full animate-pulse"></div>
                <div className="absolute top-10 -right-8 w-4 h-4 bg-green-400 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-8 left-10 w-6 h-6 bg-pink-400 rounded-full animate-ping"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 animate-fadeInUp">
            <h2 className="text-5xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors duration-300">
              About Me
            </h2>
            <div className="w-20 h-1 bg-blue-600 mb-8 animate-shimmer"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16 animate-fadeInUp stagger-2">
            <div className="animate-fadeInLeft">
              <p className="text-lg text-gray-600 mb-6 leading-relaxed hover:text-gray-800 transition-colors duration-300">
                I'm an experienced and versatile Web Developer & SEO Specialist
                with over 5 years of expertise in creating powerful web
                solutions. Based in Sydney, Australia, I specialize in React,
                WordPress, and modern web technologies.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed hover:text-gray-800 transition-colors duration-300">
                My background in client communication, web hosting, and digital
                marketing allows me to deliver comprehensive solutions that not
                only look great but also drive real business results. I'm
                passionate about clean code, user experience, and staying ahead
                of industry trends.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed hover:text-gray-800 transition-colors duration-300">
                Currently seeking new opportunities in Sydney to contribute my
                skills to innovative projects and collaborate with dynamic
                teams.
              </p>
            </div>
            <div className="relative animate-fadeInRight">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Kamal working"
                className="w-full h-96 object-cover rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:rotate-1"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16 animate-fadeInUp stagger-3">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center hover-lift hover-glow p-6 rounded-xl bg-white shadow-lg animate-bounceIn stagger-${
                  index + 1
                }`}
              >
                <div className="flex justify-center mb-4 animate-pulse-custom">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="animate-fadeInUp stagger-4">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 hover:text-blue-600 transition-colors duration-300">
              Certifications
            </h3>
            <div className="flex flex-wrap gap-4 animate-fadeInUp stagger-5">
              {certifications.map((cert, index) => (
                <span
                  key={index}
                  className={`bg-white px-6 py-3 rounded-full border border-gray-200 text-gray-700 font-medium hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg animate-fadeInUp stagger-${
                    index + 1
                  }`}
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors duration-300">
              Skills & Expertise
            </h2>
            <p className="text-xl text-gray-600 hover:text-gray-800 transition-colors duration-300">
              A comprehensive set of technical skills and tools I use to create
              exceptional web experiences
            </p>
          </div>

          {/* Main Skills */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16 animate-fadeInUp stagger-2">
            {skills.map((skillGroup, index) => (
              <div
                key={index}
                className={`bg-gray-50 p-8 rounded-2xl hover-lift hover-glow transition-all duration-500 animate-fadeInUp stagger-${
                  index + 1
                }`}
              >
                <div className="flex items-center mb-6 animate-fadeInLeft">
                  {skillGroup.icon}
                  <h3 className="text-xl font-bold text-gray-900 ml-3 hover:text-blue-600 transition-colors duration-300">
                    {skillGroup.category}
                  </h3>
                </div>
                <div className="space-y-4">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="animate-fadeInUp"
                      style={{ animationDelay: `${skillIndex * 0.1}s` }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-700 hover:text-gray-900 transition-colors duration-300">
                          {skill.name}
                        </span>
                        <span className="text-blue-600 font-medium hover:text-blue-800 transition-colors duration-300">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 progress-bar overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000 hover:from-blue-600 hover:to-purple-600"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16 animate-fadeInUp stagger-3">
            {additionalSkills.map((skill, index) => (
              <div
                key={index}
                className={`text-center p-6 hover-lift hover-glow bg-gray-50 rounded-xl transition-all duration-500 animate-bounceIn stagger-${
                  index + 1
                }`}
              >
                <div className="flex justify-center mb-4 animate-pulse-custom">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors duration-300">
                  {skill.category}
                </h3>
                <p className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>

          {/* Tools & Technologies */}
          <div className="animate-fadeInUp stagger-4">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center hover:text-blue-600 transition-colors duration-300">
              Tools & Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-4 animate-fadeInUp stagger-5">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className={`bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-200 hover:text-blue-900 transition-all duration-300 hover:scale-110 hover:shadow-lg animate-fadeInUp stagger-${
                    (index % 6) + 1
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors duration-300">
              Professional Experience
            </h2>
            <p className="text-xl text-gray-600 hover:text-gray-800 transition-colors duration-300">
              My journey in web development and digital marketing across
              Australia
            </p>
          </div>

          <div className="space-y-12 animate-fadeInUp stagger-2">
            {experience.map((job, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border-l-4 border-blue-600 hover-lift hover-glow animate-fadeInUp stagger-${
                  index + 1
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="animate-fadeInLeft">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors duration-300">
                      {job.title}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-600 mb-2">
                      <span className="font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-300">
                        {job.company}
                      </span>
                      <span>•</span>
                      <span className="flex items-center hover:text-gray-800 transition-colors duration-300">
                        <MapPin className="w-4 h-4 mr-1" />
                        {job.location}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mt-4 lg:mt-0 animate-fadeInRight">
                    <span className="text-gray-600 flex items-center hover:text-gray-800 transition-colors duration-300">
                      <Calendar className="w-4 h-4 mr-2" />
                      {job.period}
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        job.status === "Current"
                          ? "bg-green-100 text-green-800"
                          : job.status === "Founder"
                          ? "bg-purple-100 text-purple-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {job.status}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {job.achievements.map((achievement, achIndex) => (
                    <li
                      key={achIndex}
                      className={`flex items-start group animate-fadeInLeft stagger-${
                        achIndex + 1
                      }`}
                    >
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:bg-blue-800 transition-colors"></div>
                      <span className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3">
                  {job.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium hover:from-blue-100 hover:to-blue-200 transition-all duration-300 hover:scale-105 hover:shadow-lg animate-fadeInUp stagger-${
                        techIndex + 1
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="mt-20 text-center animate-fadeInUp stagger-6">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 hover:text-blue-600 transition-colors duration-300">
              Education
            </h3>
            <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto hover-lift hover-glow transition-all duration-500 animate-bounceIn">
              <h4 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors duration-300">
                Master in Information Technology
              </h4>
              <p className="text-blue-600 font-semibold mb-2 hover:text-blue-800 transition-colors duration-300">
                Melbourne Institute of Technology (2008-2010)
              </p>
              <p className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
                Specialized in Software Engineering and Web Development
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors duration-300">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 hover:text-gray-800 transition-colors duration-300">
              A showcase of my recent work in web development, SEO, and digital
              marketing
            </p>
          </div>

          {/* Project Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16 animate-fadeInUp stagger-2">
            {projectStats.map((stat, index) => (
              <div
                key={index}
                className={`text-center hover-lift hover-glow p-6 rounded-xl bg-gray-50 transition-all duration-500 animate-bounceIn stagger-${
                  index + 1
                }`}
              >
                <div className="text-4xl font-bold text-blue-600 mb-2 hover:text-blue-800 transition-colors duration-300 animate-pulse-custom">
                  {stat.number}
                </div>
                <div className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8 animate-fadeInUp stagger-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 hover-lift hover-glow animate-fadeInUp stagger-${
                  (index % 4) + 1
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed hover:text-gray-800 transition-colors duration-300">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 hover:text-blue-600 transition-colors duration-300">
                      Key Features:
                    </h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-sm text-gray-600 hover:text-gray-800 transition-colors duration-300"
                        >
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-200 hover:text-blue-900 transition-all duration-300 hover:scale-105"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center gap-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      <Github size={16} />
                      Details
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white gradient-animate"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl font-bold mb-4 hover:text-blue-200 transition-colors duration-300">
              Let's Work Together
            </h2>
            <p className="text-xl text-blue-100 hover:text-white transition-colors duration-300">
              Ready to start your next project? I'm available for freelance work
              and new opportunities.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover-glow transition-all duration-500 animate-fadeInUp stagger-2">
            {formSubmitted ? (
              <div className="text-center py-12 animate-bounceIn">
                <div className="flex justify-center mb-6">
                  <CheckCircle className="w-20 h-20 text-green-400 animate-pulse-custom" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  Thank you for contacting, I will get back to you shortly 🙏
                </h3>
                <p className="text-blue-100 text-lg">
                  Your message has been sent successfully!
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-6 bg-white/20 text-white px-6 py-2 rounded-lg hover:bg-white/30 transition-all duration-300 hover:scale-105"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                className="grid md:grid-cols-2 gap-6 animate-fadeInUp stagger-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  // For demo purposes, show success message immediately
                  // In production, this will be handled by Netlify
                  setFormSubmitted(true);
                }}
              >
                {/* Honeypot field for spam protection */}
                <input type="hidden" name="form-name" value="contact" />
                <div style={{ display: "none" }}>
                  <input name="bot-field" />
                </div>

                <div className="animate-fadeInLeft stagger-1">
                  <label className="block text-sm font-medium text-blue-100 mb-2">
                    Name <span className="text-red-300">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent text-white placeholder-blue-200 transition-all duration-300 hover:bg-white/30 focus:scale-105"
                    placeholder="Your full name"
                  />
                </div>
                <div className="animate-fadeInRight stagger-2">
                  <label className="block text-sm font-medium text-blue-100 mb-2">
                    Email <span className="text-red-300">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent text-white placeholder-blue-200 transition-all duration-300 hover:bg-white/30 focus:scale-105"
                    placeholder="your@email.com"
                  />
                </div>
                <div className="animate-fadeInLeft stagger-3">
                  <label className="block text-sm font-medium text-blue-100 mb-2">
                    Phone <span className="text-red-300">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent text-white placeholder-blue-200 transition-all duration-300 hover:bg-white/30 focus:scale-105"
                    placeholder="Your phone number"
                  />
                </div>
                <div className="animate-fadeInRight stagger-4">
                  <label className="block text-sm font-medium text-blue-100 mb-2">
                    Subject <span className="text-red-300">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent text-white placeholder-blue-200 transition-all duration-300 hover:bg-white/30 focus:scale-105"
                    placeholder="Project inquiry"
                  />
                </div>
                <div className="md:col-span-2 animate-fadeInUp stagger-5">
                  <label className="block text-sm font-medium text-blue-100 mb-2">
                    Message <span className="text-red-300">*</span>
                  </label>
                  <textarea
                    rows={6}
                    name="message"
                    required
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent text-white placeholder-blue-200 transition-all duration-300 hover:bg-white/30 focus:scale-105"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <div className="md:col-span-2 animate-fadeInUp stagger-6">
                  <button
                    type="submit"
                    className="w-full bg-white text-blue-600 py-3 px-6 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold hover:scale-105 hover:shadow-xl animate-pulse-custom"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>

          <div className="text-center mt-12 animate-fadeInUp stagger-6">
            <div className="flex justify-center gap-6 mb-6 animate-fadeInUp stagger-1">
              <a
                href="https://github.com/webkamal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-200 transition-all duration-300 hover:scale-125 hover:rotate-12"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/khanalkamal/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-200 transition-all duration-300 hover:scale-125 hover:rotate-12"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:hello@kamalkhanal.com"
                className="text-white hover:text-blue-200 transition-all duration-300 hover:scale-125 hover:rotate-12"
              >
                <Mail size={24} />
              </a>
              <a
                href="tel:0415837036"
                className="text-white hover:text-blue-200 transition-all duration-300 hover:scale-125 hover:rotate-12"
              >
                <Phone size={24} />
              </a>
            </div>
            <div className="bg-green-500 text-white px-4 py-2 rounded-full inline-block animate-pulse-custom hover:scale-105 transition-transform duration-300">
              ✅ Available for work
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center animate-fadeInUp">
            {/* Left Section - Name and Description */}
            <div className="lg:col-span-1 animate-fadeInLeft">
              <h3 className="text-3xl font-bold mb-3 hover:text-blue-200 transition-colors duration-300">
                Kamal Khanal
              </h3>
              <p className="text-blue-100 mb-2 hover:text-white transition-colors duration-300">
                Web Developer & SEO Specialist
              </p>
              <p className="text-blue-100 hover:text-white transition-colors duration-300">
                Creating exceptional digital experiences in Sydney
              </p>
            </div>

            {/* Center Section - Contact Info */}
            <div className="lg:col-span-1 text-center animate-fadeInUp">
              <div className="flex items-center justify-center mb-4 text-blue-100 hover:text-white transition-colors duration-300">
                <MapPin className="w-5 h-5 mr-2" />
                <span>Sydney, Australia</span>
              </div>
              <div className="mb-4">
                <a
                  href="mailto:hello@kamalkhanal.com"
                  className="text-blue-100 hover:text-white transition-colors duration-300 hover:scale-105 inline-block"
                >
                  hello@kamalkhanal.com
                </a>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                <span className="text-green-300 font-medium">
                  Available for work
                </span>
              </div>
            </div>

            {/* Right Section - Social Links */}
            <div className="lg:col-span-1 flex justify-center lg:justify-end gap-6 animate-fadeInRight">
              <a
                href="https://github.com/webkamal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-100 hover:text-white transition-all duration-300 hover:scale-125 hover:rotate-12 p-2"
              >
                <Github size={28} />
              </a>
              <a
                href="https://www.linkedin.com/in/khanalkamal/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-100 hover:text-white transition-all duration-300 hover:scale-125 hover:rotate-12 p-2"
              >
                <Linkedin size={28} />
              </a>
              <a
                href="mailto:hello@kamalkhanal.com"
                className="text-blue-100 hover:text-white transition-all duration-300 hover:scale-125 hover:rotate-12 p-2"
              >
                <Mail size={28} />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-blue-500/30 mt-12 pt-8 text-center animate-fadeInUp stagger-2">
            <p className="text-blue-100 hover:text-white transition-colors duration-300">
              &copy; 2025 Kamal Khanal. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

var _c;
$RefreshReg$(_c, "App");
