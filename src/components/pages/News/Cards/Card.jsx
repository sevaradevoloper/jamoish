import React from "react";
import rasm1 from "./images/rasm1.svg";
import rasm2 from "./images/rasm2.svg";
import rasm3 from "./images/rasm3.svg";
import rasm4 from "./images/rasm4.svg";
import rasm5 from "./images/rasm5.svg";
import rasm6 from "./images/rasm6.svg";

const Card = () => {
  // Kartalar ma'lumotlari
  const newsData = [
    { id: 1, img: rasm1, date: "22 июля 2022 года", title: "Consequat consequat augue quis urna arcu scelerisque ac montes, sed." },
    { id: 2, img: rasm2, date: "22 июля 2022 года", title: "Arcu orci quam lectus orci in. Consequat consequat augue quis urna." },
    { id: 3, img: rasm3, date: "22 июля 2022 года", title: "Suspendisse orci fermentum congue enim risus velit neque. Mi." },
    { id: 4, img: rasm4, date: "22 июля 2022 года", title: "Consequat consequat augue quis urna arcu scelerisque ac montes, sed." },
    { id: 5, img: rasm5, date: "22 июля 2022 года", title: "Arcu orci quam lectus orci in. Consequat consequat augue quis urna." },
    { id: 6, img: rasm6, date: "22 июля 2022 года", title: "Consequat consequat augue quis urna arcu scelerisque ac montes, sed." },
  ];

  return (
    <section className="bg-gray-100 py-16 pt-40">
      <div className="max-w-7xl mx-auto px-4">
        {/* ASOSIY GRID: bu yerda 1ta qatorda 3ta karta chiqishi belgilanadi */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {newsData.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 flex flex-col"
            >
              {/* Rasm qismi */}
              <img src={item.img} alt="news" className="w-full h-56 object-cover" />

              {/* Kontent qismi */}
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-sm text-blue-600 font-medium hover:underline cursor-pointer">
                  {item.date}
                </span>

                <h1 className="mt-3 text-lg font-semibold text-gray-800 line-clamp-3 flex-grow">
                  {item.title}
                </h1>

                <button className="mt-5 w-fit inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition">
                  Подробнее →
                </button>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Card;