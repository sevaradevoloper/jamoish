import React, { useRef, useState } from "react"; 
import { GoArrowLeft, GoArrowRight, GoChevronDown } from "react-icons/go";
import Slider from "react-slick"; 


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

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

  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, 
  };

  const accordionData = [
    { title: "Зимний сезон 2021-2022", content: "Bu yerda mavsumiy narxlar haqida ma'lumot." },
    { title: "Абонементы", content: "Kattalar va bolalar uchun turli xil abonementlar mavjud." },
    { title: "Скидки", content: "Talabalar va nafaqaxo'rlar uchun 20% gacha chegirmalar." },
    { title: "Дополнительные услуги", content: "Ijara, kafelar va boshqa xizmatlar." },
  ];

  return (
    <article className="article py-10">
      <div className="container mx-auto px-4">
       
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-5xl text-blue-950 font-bold">Цены и абонементы</h1>
          <p className="text-4xl text-blue-950 font-bold">Услуги</p>
          <span className="flex items-center gap-4">
            <GoArrowLeft
              className="w-12 h-12 p-3 text-white rounded-full bg-gradient-to-r from-purple-600 to-blue-500 cursor-pointer hover:from-purple-700 hover:to-blue-600 transition-all duration-300 shadow-lg"
              onClick={goToPrev}
            />
            <GoArrowRight
              className="w-12 h-12 p-3 text-white rounded-full bg-gradient-to-r from-purple-600 to-blue-500 cursor-pointer hover:from-purple-700 hover:to-blue-600 transition-all duration-300 shadow-lg"
              onClick={goToNext}
            />
          </span>
        </div>

        
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          
          
          <div className="w-full lg:w-1/2">
            {accordionData.map((item, index) => (
              <div key={index} className="mb-4">
                <div 
                  onClick={() => toggleAccordion(index)}
                  className="bg-purple-500 flex items-center justify-between w-full h-20 p-5 rounded-2xl cursor-pointer hover:bg-purple-600 transition-colors"
                >
                  <h1 className="text-[24px] text-white font-[600] ">{item.title}</h1>
                  <GoChevronDown className={`text-white text-3xl font-bold transition-transform duration-300 ${openAccordion === index ? 'rotate-180' : ''}`} />
                </div>
                
               
                {openAccordion === index && (
                  <div className="p-5 bg-purple-50 rounded-b-2xl mt-[-10px] pt-7 shadow-inner">
                    <p className="text-blue-950">{item.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

         
          <div className="w-full lg:w-1/2 overflow-hidden rounded-3xl shadow-2xl">
            <Slider ref={sliderRef} {...settings}>
              <div><img src={Cafe} alt="Cafe" className="w-full h-[400px] object-cover" /></div>
              <div><img src={Aa} alt="Aa" className="w-full h-[400px] object-cover" /></div>
              <div><img src={Dd} alt="Dd" className="w-full h-[400px] object-cover" /></div>
              <div><img src={Uu} alt="Uu" className="w-full h-[400px] object-cover" /></div>
              <div><img src={Ww} alt="Ww" className="w-full h-[400px] object-cover" /></div>
            </Slider>
          </div>

        </div>
      </div>
    </article>
  );
};

export default Article;