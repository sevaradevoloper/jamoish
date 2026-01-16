import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Header/img/Logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Главная", path: "/" },
    { name: "Новости", path: "/news" },
    { name: "Наш клуб", path: "/club" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-[10000] px-4 py-6">
      <div className="container max-w-[1200px] mx-auto bg-gray-500/50 backdrop-blur-xl border border-white/20 rounded-[50px] px-8 py-4 flex justify-between items-center relative">
        
        {/* Logo */}
        <Link to="/" className="z-[10001]">
          <img src={Logo} alt="tennis-logo" className="w-[140px]" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className="text-white text-sm font-medium hover:text-orange-400 transition-colors relative group py-1"
            >
              {link.name}
              {/* --- UNDERLINE ANIMATSIYASI --- */}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
              {/* ----------------------------- */}
            </Link>
          ))}
        </nav>

        {/* Burger Button */}
        <button 
          className="flex md:hidden flex-col justify-between w-7 h-5 z-[10001] relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`w-full h-[3px] bg-white rounded transition-all duration-300 origin-left ${isOpen ? "rotate-[40deg]" : ""}`}></span>
          <span className={`w-full h-[3px] bg-white rounded transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
          <span className={`w-full h-[3px] bg-white rounded transition-all duration-300 origin-left ${isOpen ? "-rotate-[40deg]" : ""}`}></span>
        </button>

        {/* Mobile Overlay */}
        <div className={`fixed top-0 left-0 w-full h-screen bg-[#1a1a1a] flex flex-col items-center justify-center gap-10 transition-all duration-500 ease-in-out md:hidden ${isOpen ? "opacity-100 visible" : "opacity-0 invisible -translate-y-10"}`}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-white text-3xl font-medium hover:text-orange-500 transition-all relative group py-2"
            >
              {link.name}
              {/* Mobile uchun ham chiziq (ixtiyoriy) */}
              <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          <button className="bg-orange-600 text-white px-10 py-4 rounded-full font-bold text-lg active:scale-95 transition-transform">
              Связаться
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;