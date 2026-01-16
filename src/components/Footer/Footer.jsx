import React from 'react';
import { Youtube, Send } from 'lucide-react'; // Lucide-react piktogrammalari
import { FaVk } from 'react-icons/fa'; // VK uchun react-icons

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    "Главная", "О клубе", "Турниры", "Услуги", 
    "Детский теннис", "Галерея", "Цены", "Контакты"
  ];

  return (
    <footer className="bg-[#F7ECE1] py-8 border-t border-gray-200 mt-auto">
      <div className="max-w-[1440px] mx-auto px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Copyright qismi */}
          <div className="text-gray-500 text-sm font-light order-3 md:order-1">
            2022 © Все права защищены.
          </div>

          {/* Navigatsiya linklari */}
          <nav className="order-1 md:order-2">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3">
              {navLinks.map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-[#333] text-sm font-medium hover:text-blue-600 transition-all duration-300 relative group"
                  >
                    {link}
                    {/* Pastki chiziq animatsiyasi */}
                    <span className="absolute bottom-[-2px] left-0 w-0 h-[1px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Media - Ijtimoiy tarmoqlar */}
          <div className="flex items-center gap-5 order-2 md:order-3">
            <a 
              href="https://youtube.com" 
              target="_blank" 
              className="text-[#8e8e8e] hover:text-[#FF0000] hover:scale-125 transition-all duration-300 transform"
            >
              <Youtube size={24} />
            </a>
            <a 
              href="https://vk.com" 
              target="_blank" 
              className="text-[#8e8e8e] hover:text-[#4C75A3] hover:scale-125 transition-all duration-300 transform"
            >
              <FaVk size={24} />
            </a>
            <a 
              href="https://t.me" 
              target="_blank" 
              className="text-[#8e8e8e] hover:text-[#0088cc] hover:scale-125 transition-all duration-300 transform"
            >
              <Send size={22} />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;