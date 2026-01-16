import React, { useRef } from 'react';
import Slider from 'react-slick';
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import Aa from './images/aa.png';
import Bb from './images/bb.png';
import Cc from './images/cc.png';
import Dd from './images/dd.png';
import Ee from './images/ee.png';
import Ff from './images/ff.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComponent = () => {
  const sliderRef = useRef(null);

 
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
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

  return (
    <>
      <section className='silder mb-20'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-col md:flex-row justify-between items-center mb-12'>
            <h1 className='text-blue-950 text-3xl md:text-5xl font-bold mb-6 md:mb-0 text-center md:text-left'>Тренерский состав</h1>
            <div className='flex text-white gap-4'>
              <GoArrowLeft 
                className='w-12 h-12 p-3 text-white rounded-full bg-gradient-to-r from-purple-600 to-blue-500 cursor-pointer hover:from-purple-700 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl' 
                onClick={goToPrev}
              />
              <GoArrowRight 
                className='w-12 h-12 p-3 text-white rounded-full bg-gradient-to-r from-purple-600 to-blue-500 cursor-pointer hover:from-purple-700 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl' 
                onClick={goToNext}
              />
            </div>
          </div>
          
          <div className='silder__container px-2'>
            <Slider ref={sliderRef} {...settings}>
              <div className='px-3 focus:outline-none'>
                <div className='slider__item bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-6 text-center shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 border border-gray-700'>
                  <div className='relative mb-6'>
                    <img className='mx-auto w-48 h-60 object-cover rounded-xl shadow-lg' src={Aa} alt="Coach" />
                    <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center'>
                      <span className='text-white font-bold'>1</span>
                    </div>
                  </div>
                  <h1 className='text-2xl text-white font-bold mb-2'>Pulvinar <br /> aliquam</h1>
                  <p className='text-gray-300 text-base mb-4'>Arcu elit massa amet turpis vel consequat pellentesque sit.</p>
                 
                </div>
              </div>

              <div className='px-3 focus:outline-none'>
                <div className='slider__item bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-6 text-center shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 border border-gray-700'>
                  <div className='relative mb-6'>
                    <img className='mx-auto w-48 h-60 object-cover rounded-xl shadow-lg' src={Bb} alt="Coach" />
                    <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center'>
                      <span className='text-white font-bold'>2</span>
                    </div>
                  </div>
                  <h1 className='text-2xl text-white font-bold mb-2'>Pretium <br />odio</h1>
                  <p className='text-gray-300 text-base mb-4'>Bibendum aliquam volutpat nisl a duis in nisi. In sed commodo lorem. </p>
                  
                </div>
              </div>

              <div className='px-3 focus:outline-none'>
                <div className='slider__item bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-6 text-center shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 border border-gray-700'>
                  <div className='relative mb-6'>
                    <img className='mx-auto w-48 h-60 object-cover rounded-xl shadow-lg' src={Cc} alt="Coach" />
                    <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center'>
                      <span className='text-white font-bold'>3</span>
                    </div>
                  </div>
                  <h1 className='text-2xl text-white font-bold mb-2'>Aliquet <br />consectetur</h1>
                  <p className='text-gray-300 text-base mb-4'>Id sapien sed nibh fermentum massa posuere ipsum.  Diam in.</p>
                  
                </div>
              </div>

              <div className='px-3 focus:outline-none'>
                <div className='slider__item bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-6 text-center shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 border border-gray-700'>
                  <div className='relative mb-6'>
                    <img className='mx-auto w-48 h-60 object-cover rounded-xl shadow-lg' src={Dd} alt="Coach" />
                    <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center'>
                      <span className='text-white font-bold'>4</span>
                    </div>
                  </div>
                  <h1 className='text-2xl text-white font-bold mb-2'>Blandit <br />augue</h1>
                  <p className='text-gray-300 text-base mb-4'>Scelerisque accumsan pretium justo, vitae elit. Dolor semper morbi sit auctor vel.</p>
                  
                </div>
              </div>

              <div className='px-3 focus:outline-none'>
                <div className='slider__item bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-6 text-center shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 border border-gray-700'>
                  <div className='relative mb-6'>
                    <img className='mx-auto w-48 h-60 object-cover rounded-xl shadow-lg' src={Ee} alt="Coach" />
                    <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center'>
                      <span className='text-white font-bold'>5</span>
                    </div>
                  </div>
                  <h1 className='text-2xl text-white font-bold mb-2'>Lorem <br />lacus</h1>
                  <p className='text-gray-300 text-base mb-4'>Adipiscing amet, viverra dignissim egestas. Sed nibh egestas venenatis faucibus. </p>
                  
                </div>
              </div>

              <div className='px-3 focus:outline-none'>
                <div className='slider__item bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-6 text-center shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 border border-gray-700'>
                  <div className='relative mb-6'>
                    <img className='mx-auto w-48 h-60 object-cover rounded-xl shadow-lg' src={Ff} alt="Coach" />
                    <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center'>
                      <span className='text-white font-bold'>6</span>
                    </div>
                  </div>
                  <h1 className='text-2xl text-white font-bold mb-2'>Sed <br />erat</h1>
                  <p className='text-gray-300 text-base mb-4'>Quis ullamcorper pretium lacus risus tellus dolor  etiam. </p>
                  
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  )
}

export default SliderComponent;