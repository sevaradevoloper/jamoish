import React from 'react'
<<<<<<< HEAD
import { Navigation } from 'swiper/modules';
=======

import tailwindcss from '@tailwindcss/vite'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

>>>>>>> 2d44b8e6a811313010a030d11f69d574c31b29e8
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


<<<<<<< HEAD
const PhotoCourts = () => {
=======
const first_section = () => {
>>>>>>> 2d44b8e6a811313010a030d11f69d574c31b29e8
    return (
        <main>
            <section className="bg-black px-6 py-10">
                <h2 className="mb-6 text-3xl font-semibold text-gray-600">
                    Фото кортов
                </h2>

                <div className="border border-white p-5">
                    <Swiper
                        modules={[Navigation]}
                        navigation
                        loop
                        className="w-full"
                    >
                        <SwiperSlide>
                            <div className="relative">
                                <img
<<<<<<< HEAD
                                    src={require('./img/cord1.png')}
                                    alt="court"
                                    className="h-105 w-full object-cover"
=======
                                    src="/img/cord1.png"
                                    alt="court"
                                    className="h-[420px] w-full object-cover"
>>>>>>> 2d44b8e6a811313010a030d11f69d574c31b29e8
                                />
                                <span className="absolute bottom-6 left-6 rounded bg-violet-500 px-4 py-2 text-sm text-white">
                                    Летний корт
                                </span>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="relative">
                                <img
<<<<<<< HEAD
                                    src={require('./img/cord2.png')}
                                    alt="court"
                                    className="h-105 w-full object-cover"
=======
                                    src="/img/cord2.png"
                                    alt="court"
                                    className="h-[420px] w-full object-cover"
>>>>>>> 2d44b8e6a811313010a030d11f69d574c31b29e8
                                />
                                <span className="absolute bottom-6 left-6 rounded bg-violet-500 px-4 py-2 text-sm text-white">
                                    Закрытый корт
                                </span>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </main>
    )
}

<<<<<<< HEAD
export default PhotoCourts
=======
export default first_section
>>>>>>> 2d44b8e6a811313010a030d11f69d574c31b29e8
