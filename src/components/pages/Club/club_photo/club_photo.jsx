import React from 'react'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const first_section = () => {
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
                                    src="/img/cord1.png"
                                    alt="court"
                                    className="h-[420px] w-full object-cover"
                                />
                                <span className="absolute bottom-6 left-6 rounded bg-violet-500 px-4 py-2 text-sm text-white">
                                    Летний корт
                                </span>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="relative">
                                <img
                                    src="/img/cord2.png"
                                    alt="court"
                                    className="h-[420px] w-full object-cover"
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

export default first_section