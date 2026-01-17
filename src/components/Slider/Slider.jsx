import React, { useRef } from 'react';
import Slider from 'react-slick';
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

// Rasmlar
import Aa from './images/aa.png';
import Bb from './images/bb.png';
import Cc from './images/cc.png';
import Dd from './images/dd.png';
import Ee from './images/ee.png';
import Ff from './images/ff.png';

// Stil fayllari
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComponent = () => {
  const sliderRef = useRef(null);

  // Murabbiylar ma'lumotlari
  const coaches = [
    { id: 1, img: Aa, name: "Pulvinar aliquam", desc: "Arcu elit massa amet turpis vel consequat pellentesque sit." },
    { id: 2, img: Bb, name: "Pretium odio", desc: "Bibendum aliquam volutpat nisl a duis in nisi. In sed commodo lorem." },
    { id: 3, img: Cc, name: "Aliquet consectetur", desc: "Id sapien sed nibh fermentum massa posuere ipsum. Diam in." },
    { id: 4, img: Dd, name: "Blandit augue", desc: "Scelerisque accumsan pretium justo, vitae elit. Dolor semper morbi sit auctor vel." },
    { id: 5, img: Ee, name: "Lorem lacus", desc: "Adipiscing amet, viverra dignissim egestas. Sed nibh egestas venenatis faucibus." },
    { id: 6, img: Ff, name: "Sed erat", desc: "Quis ullamcorper pretium lacus risus tellus dolor etiam." },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640, // Kichik mobil qurilmalar uchun
        settings: {
          slidesToShow: 1,
          dots: true,
        }
      }
    ]
  };

  const goToPrev = () => sliderRef.current?.slickPrev();
  const goToNext = () => sliderRef.current?.slickNext();

  return (
    <section className='slider-section py-10 lg:py-20 overflow-hidden'>
      <div className='container mx-auto px-4'>
        
        {/* Header qismi */}
        <div className='flex flex-col sm:flex-row justify-between items-center mb-8 lg:mb-12 gap-6'>
          <h1 className='text-blue-950 text-3xl md:text-5xl font-bold text-center sm:text-left'>
            Тренерский состав
          </h1>
          <div className='flex gap-4'>
            <button 
              onClick={goToPrev}
              className='w-12 h-12 flex items-center justify-center text-white rounded-full bg-gradient-to-r from-purple-600 to-blue-500 hover:scale-110 transition-all duration-300 shadow-lg'
              aria-label="Previous slide"
            >
              <GoArrowLeft className='text-2xl' />
            </button>
            <button 
              onClick={goToNext}
              className='w-12 h-12 flex items-center justify-center text-white rounded-full bg-gradient-to-r from-purple-600 to-blue-500 hover:scale-110 transition-all duration-300 shadow-lg'
              aria-label="Next slide"
            >
              <GoArrowRight className='text-2xl' />
            </button>
          </div>
        </div>
        
        {/* Slider qismi */}
        <div className='slider-wrapper pb-10'> {/* Dots uchun pastdan joy */}
          <Slider ref={sliderRef} {...settings}>
            {coaches.map((coach) => (
              <div key={coach.id} className='px-2 lg:px-4 focus:outline-none py-4'>
                <div className='bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl p-6 lg:p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-700 h-full'>
                  
                  <div className='relative mb-8 inline-block'>
                    <img 
                      className='w-40 h-52 lg:w-48 lg:h-64 object-cover rounded-2xl shadow-md border-2 border-gray-600' 
                      src={coach.img} 
                      alt={coach.name} 
                    />
                    <div className='absolute -bottom-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center border-4 border-gray-800 shadow-lg'>
                      <span className='text-white text-sm font-bold'>{coach.id}</span>
                    </div>
                  </div>

                  <h3 className='text-xl lg:text-2xl text-white font-bold mb-3 min-h-[64px] flex items-center justify-center'>
                    {coach.name}
                  </h3>
                  
                  <p className='text-gray-400 text-sm lg:text-base leading-relaxed'>
                    {coach.desc}
                  </p>
                  
                </div>
              </div>
            ))}
          </Slider>
        </div>

      </div>

      {/* Nuqtalar (dots) rangini sozlash uchun CSS */}
      <style jsx global>{`
        .slick-dots li button:before { color: #8b5cf6 !important; }
        .slick-dots li.slick-active button:before { color: #3b82f6 !important; }
        .slick-dots { bottom: -20px; }
      `}</style>
    </section>
  );
};

export default SliderComponent;