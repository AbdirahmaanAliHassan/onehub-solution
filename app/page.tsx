"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock, Rocket, Users, Trophy, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"; 

// --- Interfaces ---
interface ServiceDetails {
  features: string[];
  price: string;
  duration: string;
  warranty: string;
}

interface Service {
  id: number;
  name: string;
  description: string;
  image: string;
  details: ServiceDetails;
}

export default function Page() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  // State for Contact Form
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "", 
    message: "",
  });

  // Data for Services
  const services: Service[] = [
    {
      id: 1,
      name: "CCTV Camera Installation",
      description:
        "Professional security camera installation for homes and businesses with 24/7 monitoring solutions. We ensure optimal camera placement and configuration for maximum coverage and reliability.",
      image:
        "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=600&q=80",
      details: {
        features: [
          "HD Quality Cameras",
          "24/7 Remote Monitoring",
          "Night Vision",
          "Motion Detection Alerts",
          "Mobile App Access",
          "One-year maintenance check",
        ],
        price: "Installation $25",
        duration: "2–4 hours installation",
        warranty: "2 Years Warranty",
      },
    },
    {
      id: 2,
      name: "Fingerprint Installation",
      description:
        "Advanced biometric access control systems for enhanced security and convenience. Secure your premises with fast, reliable, and keyless entry.",
      image:
        "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=600&q=80",
      details: {
        features: [
          "Multi-user Support (50+ users)",
          "Fast Recognition Speed (< 0.5s)",
          "Backup Key Access",
          "Weather Resistant Casing",
          "Emergency Power Supply",
          "Integration with smart home systems",
        ],
        price: "Starting from $25",
      duration: "1–2 hours installation",
        warranty: "3 Years Warranty",
      },
    },
    {
      id: 3,
      name: "Web Development",
      description:
        "Custom websites and web applications built with modern technologies and responsive design. We create powerful digital platforms tailored to your business needs.",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
      details: {
        features: [
          "Fully Responsive Design",
          "Optimized for Fast Loading",
          "SEO Friendly Structure",
          "Custom Features & Integrations",
          "1 Year Free Maintenance Support",
          "Content Management System (CMS)",
        ],
        price: "Starting from $399",
        duration: "2–6 weeks development",
        warranty: "1 Year Support",
      }, 
    },
    {
        id: 4,
        name: "Network Setup (Office)",
        description:
          "Complete office network installation and configuration services, ensuring fast, secure, and reliable connectivity for all your business operations.",
        image:
          "https://imgs.search.brave.com/aGoMThn8XSTmXu6wDfC9tskDiuiWXiYmkwx8b_zX9gk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9uZXR3/b3JrLXN3aXRjaC1z/ZXR1cC1hZG1pbmlz/dHJhdG9yLXRvLXNl/dC0xMDQwMzQxOTgu/anBn",
        details: {
          features: [
            "High-speed LAN/WiFi Setup",
            "Secure Firewall and VPN Configuration",
            "Server Rack Installation",
            "Structured Cabling",
            "IP Telephony (VoIP) Integration",
            "Network Monitoring and Support",
          ],
          price: "Quote based on size",
          duration: "1–3 days setup",
          warranty: "6 Months Support",
        },
    },

    {
      id: 5,
      name: "Digital Marketing",
      description:
        "Comprehensive digital marketing services including SEO, social media management, and online advertising to boost your brand's online presence and drive sales.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
      details: {
        features: [
          "SEO Optimization",
          "Social Media Campaigns",
          "Pay-Per-Click Advertising",
          "Content Creation",
          "Email Marketing",
          "Monthly Performance Reports",
        ],
        price: "Starting from $199/month",
        duration: "Ongoing Service",
        warranty: "Satisfaction Guaranteed",
      },
    },
    
    {
      id: 6,
      name: "App Development",
      description:
        "Custom mobile applications for iOS and Android platforms, designed to provide seamless user experiences and robust functionality tailored to your business needs.",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80",
      details: {
        features: [
          "Cross-Platform Compatibility",
          "User-Centric Design",
          "Push Notifications",
          "In-App Purchases",
          "Analytics Integration",
          "1 Year Free Updates",
        ],
        price: "Starting from $499",
        duration: "4–12 weeks development",
        warranty: "1 Year Support",
      },
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", contactForm);
    // Halkan ku dar code-kaaga dhabta ah ee u diraya API-ga ama Email-ka.
    alert(`Message for service: "${contactForm.subject}" from ${contactForm.name} sent successfully! (Tijaabo)`);
    setContactForm({ name: "", email: "", subject: "", message: "" }); // Clear form
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };
  
  // FUNCTION CUSUB: Maareynta badhanka "Contact Me"
  const handleContactFromModal = (serviceName: string) => {
      setSelectedService(null); // Xir Modal-ka
      
      // Xaqiiji in Subject-ka uu noqdo magaca Adeegga
      setContactForm(prev => ({
          ...prev, 
          subject: `Inquiry about: ${serviceName}`,
          message: `Hello, I'm interested in the ${serviceName} service. Could you please provide more details?` // Fariin horudhac ah
      }));
      
      // Soo qaado Contact Section-ka oo ku dhaqaaji
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };


  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen bg-blue-600 text-white text-2xl font-semibold">
        Loading OneHub...
      </div>
    );

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* 🚀 Navbar (Hogaanka) */}
      <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
        <div className="container mx-auto flex justify-between items-center p-4">
          <Image src="/logo onehub.jpeg" alt="OneHub Logo" width={75} height={40} />


          {/* Mobile toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col space-y-1"
          >
            <span className="w-6 h-0.5 bg-gray-800"></span>
            <span className="w-6 h-0.5 bg-gray-800"></span>
            <span className="w-6 h-0.5 bg-gray-800"></span>
          </button>

          {/* Navbar Links */}
          <nav
            className={`${
              isMenuOpen
                ? "flex flex-col absolute top-full left-0 w-full bg-white shadow-md md:static md:flex md:flex-row md:space-x-6 md:shadow-none"
                : "hidden md:flex md:space-x-6"
            } text-center py-2 md:py-0`}
          >
            <a href="#home" className="block py-2 hover:text-blue-600">
              Home
            </a>
            <a href="#services" className="block py-2 hover:text-blue-600">
              Services
            </a>
            <a href="#about" className="block py-2 hover:text-blue-600">
              About
            </a>
            <a href="#contact" className="block py-2 hover:text-blue-600">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* ⭐ Hero (Qaybta Koowaad) */}
      <section
        id="home"
        className="pt-28 text-center bg-linear-to-r from-blue-600 to-indigo-600 text-white py-20"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Your All-in-One Tech & Security Partner
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
          Innovative solutions for digital transformation and protection.
        </p>
        <div className="space-x-4">
          <a
            href="#services"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100"
          >
            Get Started
          </a>
          <a
            href="#about"
            className="border border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* ⚙️ Services (Adeegyada) */}
      <section id="services" className="py-16 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.id}
              onClick={() => setSelectedService(s)}
              className="rounded-2xl shadow-md hover:shadow-xl cursor-pointer transition p-4 bg-white"
            >
              <img
                src={s.image}
                alt={s.name}
                className="rounded-xl w-full h-48 object-cover"
              />
              <h3 className="text-xl font-semibold mt-4">{s.name}</h3>
              <p className="opacity-80 mt-2 text-sm">{s.description.substring(0, 100)}...</p>
            </div>
          ))}
        </div>
      </section>

      {/* ℹ️ About Section (Sida Sawirka Cusub) */}
      <section id="about" className="py-20 bg-white px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-extrabold mb-10 text-gray-900">
            About OneHub
          </h2>

          <div className="flex flex-col md:flex-row gap-12 items-center">
            
            {/* Qaybta Bidix: Qoraalka & Faahfaahinta */}
            <div className="md:w-1/2 space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong className="font-semibold">OneHub</strong> is your trusted partner for comprehensive technology solutions.
                With years of experience in the industry, we bring together expertise 
                in security systems, digital marketing, and software development to 
                provide seamless services under one roof.
              </p>

              {/* Mission */}
              <div className="flex items-start space-x-3 pt-4">
                <Rocket className="w-6 h-6 text-blue-600 shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-1">Mission</h3>
                  <p className="text-gray-600">
                    To provide innovative technology solutions that empower businesses
                    and enhance security.
                  </p>
                </div>
              </div>

              {/* Team */}
              <div className="flex items-start space-x-3">
                <Users className="w-6 h-6 text-blue-600 shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-1">Team</h3>
                  <p className="text-gray-600">
                    Certified professionals with expertise in their respective fields.
                  </p>
                </div>
              </div>

              {/* Experience */}
              <div className="flex items-start space-x-3">
                <Trophy className="w-6 h-6 text-blue-600 shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-1">Experience</h3>
                  <p className="text-gray-600">
                    Over 5 years of satisfied customers with quality services.
                  </p>
                </div>
              </div>

            </div>

            {/* Qaybta Midig: Sawirka */}
            <div className="md:w-1/2 w-full flex justify-center md:justify-end">
              <img
                src="https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&q=80&w=800"
                alt="Our Team Working"
                className="rounded-2xl shadow-xl w-full max-w-md h-auto object-cover" 
              />
            </div>

          </div>
        </div>
      </section>
      
      {/* 📞 Contact Section (Sida Sawirka Hore) */}
      <section id="contact" className="py-20 bg-gray-100 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-extrabold text-center mb-2">
            Contact Us
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Get in touch with our team for inquiries and quotes
          </p>

          <div className="flex flex-col md:flex-row gap-10 bg-white p-8 rounded-2xl shadow-lg">
            
            {/* Qaybta bidix: Faahfaahinta Xiriirka */}
            <div className="md:w-1/2 space-y-8 p-4">
              
              {/* Email */}
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-blue-600 mt-1" /> 
                <div>
                  <h3 className="text-xl font-semibold">Email</h3>
                  <p className="text-gray-600">Onehub801@gmail.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold">Phone</h3>
                  <p className="text-gray-600">65-9163815</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-blue-600 mt-1" /> 
                <div>
                  <h3 className="text-xl font-semibold">Address</h3>
                  <p className="text-gray-600">Somaliland Innovation Zone</p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold">Business Hours</h3>
                  <p className="text-gray-600">Saturday - Friday: 7:00 AM - 6:00 PM</p>
                </div>
              </div>

            </div>

            {/* Qaybta midig: Foomka Xiriirka */}
            <form onSubmit={handleSubmit} className="md:w-1/2 space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={contactForm.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={contactForm.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={contactForm.subject} // Adeegga la doortay ayaa halkan ku soo muuqanaya
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5} 
                value={contactForm.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-blue-600 text-white w-full py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 🔍 Modal (service details - oo si qurux badan loo hagaajiyay) */}
      {selectedService && (
        <div
          className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-4 overflow-y-auto" // Added overflow-y-auto to allow scrolling of the whole modal container
          onClick={() => setSelectedService(null)}
        >
          <div
            className="p-8 rounded-2xl w-full max-w-xl bg-white text-gray-900 shadow-2xl transform transition-all duration-300 scale-100 my-8" // Added my-8 for vertical space
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-3xl font-extrabold text-blue-600">
                {selectedService.name}
              </h2>
              <button
                onClick={() => setSelectedService(null)}
                className="text-gray-500 hover:text-gray-900 text-3xl ml-4 transition-transform hover:rotate-90"
              >
                ×
              </button>
            </div>

            {/* Sawirka */}
            <img
              src={selectedService.image}
              alt={selectedService.name}
              className="rounded-xl mb-6 w-full h-48 object-cover shadow-md"
            />

            {/* Faahfaahin Guud */}
            <p className="mb-6 text-gray-700 leading-relaxed border-b pb-4">
              {selectedService.description}
            </p>

            {/* Feature-yada & Qiimaha */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Features List */}
                <div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">Key Features:</h3>
                    <ul className="space-y-2 text-sm">
                      {selectedService.details.features.map((f, i) => (
                        <li key={i} className="flex items-center text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-green-500 mr-2 shrink-0">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            {f}
                        </li>
                      ))}
                    </ul>
                </div>
                
                {/* Price & Warranty */}
                <div className="bg-blue-50 p-4 rounded-lg space-y-3">
                    <h3 className="text-xl font-bold text-blue-700">Service Details</h3>
                    <p className="text-lg font-semibold">💰 Price: <span className="text-2xl text-red-600">{selectedService.details.price}</span></p>
                    <p>⏳ Duration: <span className="font-medium">{selectedService.details.duration}</span></p>
                    <p>🛡️ Warranty: <span className="font-medium">{selectedService.details.warranty}</span></p>
                </div>
            </div>
            
            {/* Badhanka Cusub: "Contact Me" */}
            <button
                onClick={() => handleContactFromModal(selectedService.name)}
                className="w-full bg-blue-600 text-white text-lg font-bold py-3 rounded-xl hover:bg-blue-700 transition transform hover:scale-[1.01]"
            >
                I'm Interested! Contact Me
            </button>
          </div>
        </div>
      )}

      {/* ⬇️ Footer (Naqshadda Cusub ee Quruxda Badan) */}
      <footer className="bg-gray-800 text-white pt-12 pb-6">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-700 pb-8">
            
            {/* Column 1: Magaca & Sharaxaad */}
            <div className="col-span-1 md:col-span-2 space-y-4">
              <h3 className="text-3xl font-bold text-blue-400">OneHub</h3>
              <p className="text-gray-400 text-sm max-w-sm">
                Your trusted partner for comprehensive security systems, web development, and biometric solutions. Innovation and reliability under one roof.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div className="space-y-3">
              <h4 className="text-xl font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-blue-400 transition">Home</a></li>
                <li><a href="#services" className="hover:text-blue-400 transition">Services</a></li>
                <li><a href="#about" className="hover:text-blue-400 transition">About Us</a></li>
                <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
              </ul>
            </div>

            {/* Column 3: Social Media */}
            <div className="space-y-3">
              <h4 className="text-xl font-semibold mb-3">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition" aria-label="Facebook">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition" aria-label="Twitter">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition" aria-label="Instagram">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition" aria-label="LinkedIn">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="text-center pt-6 text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} OneHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}