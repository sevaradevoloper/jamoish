import React, { useRef, useState } from "react"; 
import { GoArrowLeft, GoArrowRight, GoChevronDown } from "react-icons/go";
import Slider from "react-slick"; 

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Rasmlar (Importlar o'zgarishsiz qoladi)
import Cafe from './images/cafe.png';
import Aa from './images/aa.jpg';
import Dd from './images/dd.jpg';
import Uu from './images/uu.jpg';
import Ww from './images/ww.jpg';

const Article = () => {
  const sliderRef = useRef(null);
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const goToPrev = () => sliderRef.current?.slickPrev();
  const goToNext = () => sliderRef.current?.slickNext();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true, // Kontentga qarab balandlikni moslash
  };

  const accordionData = [
    { title: "Зимний сезон 2021-2022", content: "Bu yerda mavsumiy narxlar haqida ma'lumot." },
    { title: "Абонементы", content: "Kattalar va bolalar uchun turli xil abonementlar mavjud." },
    { title: "Скидки", content: "Talabalar va nafaqaxo'rlar uchun 20% gacha chegirmalar." },
    { title: "Дополнительные услуги", content: "Ijara, kafelar va boshqa xizmatlar." },
  ];

  return (
    <article className="article py-6 lg:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        
        {/* Sarlavha qismi - Mobilda flex-col, Kompyuterda flex-row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 lg:mb-12">
          <div className="space-y-2">
            <h1 className="text-3xl lg:text-5xl text-blue-950 font-bold">Цены и абонементы</h1>
            <p className="text-xl lg:text-3xl text-blue-900/70 font-semibold">Услуги</p>
          </div>
          
          {/* Tugmalar mobilda o'ngga suriladi yoki markazda bo'ladi */}
          <div className="flex items-center gap-3 self-end md:self-center">
            <button 
              onClick={goToPrev}
              className="w-10 h-10 lg:w-14 lg:h-14 flex items-center justify-center text-white rounded-full bg-gradient-to-r from-purple-600 to-blue-500 hover:scale-110 active:scale-95 transition-all shadow-lg"
              aria-label="Previous"
            >
              <GoArrowLeft className="text-xl lg:text-2xl" />
            </button>
            <button 
              onClick={goToNext}
              className="w-10 h-10 lg:w-14 lg:h-14 flex items-center justify-center text-white rounded-full bg-gradient-to-r from-purple-600 to-blue-500 hover:scale-110 active:scale-95 transition-all shadow-lg"
              aria-label="Next"
            >
              <GoArrowRight className="text-xl lg:text-2xl" />
            </button>
          </div>
        </div>

        {/* Asosiy kontent - Mobilda teskari tartib (Rasm tepada, matn pastda) qilish uchun flex-col-reverse ishlatish mumkin */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          
          {/* Akkordeon qismi */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            {accordionData.map((item, index) => (
              <div key={index} className="mb-4">
                <button 
                  onClick={() => toggleAccordion(index)}
                  className={`flex items-center justify-between w-full p-4 lg:p-6 rounded-2xl transition-all duration-300 ${
                    openAccordion === index ? 'bg-purple-600 shadow-inner' : 'bg-purple-500 hover:bg-purple-550'
                  }`}
                >
                  <span className="text-lg lg:text-xl text-white font-semibold text-left">{item.title}</span>
                  <GoChevronDown className={`text-white text-2xl transition-transform duration-300 ${openAccordion === index ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Akkordeon ochilganda chiqadigan matn */}
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openAccordion === index ? 'max-h-40 opacity-100 mt-1' : 'max-h-0 opacity-0'
                }`}>
                  <div className="p-5 bg-white border border-purple-100 rounded-2xl shadow-sm">
                    <p className="text-blue-950 leading-relaxed">{item.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Slider qismi */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Slider ref={sliderRef} {...settings}>
                {[Cafe, Aa, Dd, Uu, Ww].map((img, idx) => (
                  <div key={idx} className="outline-none">
                    <img 
                      src={img} 
                      alt={`Slide ${idx}`} 
                      className="w-full h-[250px] md:h-[350px] lg:h-[450px] object-cover" 
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>

        </div>
      </div>
    </article>
  );
};

export default Article;