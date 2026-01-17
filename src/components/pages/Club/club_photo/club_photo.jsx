import React, { useState } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';

import cord1 from '../img/cord1.png';
import cord2 from '../img/cord2.png';


const PhotoCourts = () => {
  const [activeSection, setActiveSection] = useState(1);
  const [open, setOpen] = useState(null);

  return (
    <>
      {/* ===== FOTO KORTLAR ===== */}
       <main>
        <section className="bg-gray-300 px-6 py-10 pt-30">
          <h2 className="mb-6 text-2xl font-semibold text-gray-600">
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
                    src={cord1}
                    alt="court"
                    className="h-105 w-full object-cover"
                  />
                  <span className="absolute bottom-6 left-6 rounded bg-violet-500 px-4 py-2 text-sm text-white">
                    Летний корт
                  </span>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="relative">
                  <img
                    src={cord2}
                    alt="court"
                    className="h-105 w-full object-cover"
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

      {/* ===== QOIDALAR ===== */}
      <section className="max-w-6xl mx-auto p-10">
        <h1 className="text-5xl font-bold text-center mb-12">
          Правила
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* ===== CHAP MENYU ===== */}
          <div className="bg-white rounded-2xl shadow p-8">
            <ul className="space-y-4 text-xl font-medium">
              {[
                'Общие положения',
                'Основные определения',
                'Порядок предоставления игрового времени',
                'Оплата услуг',
                'Правила поведения',
                'Прочие положения'
              ].map((title, i) => (
                <li
                  key={i}
                  onClick={() => setActiveSection(i + 1)}
                  className={`cursor-pointer transition ${
                    activeSection === i + 1
                      ? 'text-violet-600 font-semibold'
                      : 'text-gray-700 hover:text-violet-500'
                  }`}
                >
                  {i + 1}. {title}
                </li>
              ))}
            </ul>
          </div>

          {/* ===== O‘NG CONTENT ===== */}
          <div className="md:col-span-2 bg-white rounded-2xl shadow p-10 text-xl">

            {activeSection === 1 && (
              <p>Общие положения клуба. Здесь будет текст…</p>
            )}

            {activeSection === 2 && (
              <p>Основные определения и термины…</p>
            )}

            {activeSection === 3 && (
              <div className="space-y-6">

                <div>
                  <h2
                    onClick={() => setOpen(open === 1 ? null : 1)}
                    className="text-2xl font-semibold cursor-pointer"
                  >
                    3.1. ТК предоставляет Членам клуба
                  </h2>
                  {open === 1 && (
                    <ul className="list-disc pl-8 mt-3">
                      <li>Посещение комплекса</li>
                      <li>Абонементы</li>
                      <li>Индивидуальные занятия</li>
                    </ul>
                  )}
                </div>

                <div>
                  <h2
                    onClick={() => setOpen(open === 2 ? null : 2)}
                    className="text-2xl font-semibold cursor-pointer"
                  >
                    3.2. Минимальное время
                  </h2>
                  {open === 2 && (
                    <ul className="list-disc pl-8 mt-3">
                      <li>Разовое — 60 мин</li>
                      <li>Абонемент — 90 мин</li>
                    </ul>
                  )}
                </div>

                <div>
                  <h2
                    onClick={() => setOpen(open === 3 ? null : 3)}
                    className="text-2xl font-semibold cursor-pointer"
                  >
                    3.3. Игровое время
                  </h2>
                  {open === 3 && (
                    <ol className="list-decimal pl-8 mt-3">
                      <li>Бронирование заранее</li>
                      <li>Отмена вовремя</li>
                    </ol>
                  )}
                </div>

              </div>
            )}

            {activeSection === 4 && (
              <p>Информация об оплате услуг…</p>
            )}

            {activeSection === 5 && (
              <p>Правила поведения в клубе…</p>
            )}

            {activeSection === 6 && (
              <p>Прочие положения…</p>
            )}

          </div>
        </div>
      </section>
    </>
  );
};

export default PhotoCourts;
