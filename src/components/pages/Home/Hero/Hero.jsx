import React, { useState } from "react";
import { Play, ArrowRight } from "lucide-react"; // Ikonkalar uchun lucide-react (yoki istagan icon pack)

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative h-screen w-full mb-10 flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-10 w-auto min-w-full min-h-full max-w-none object-cover"
      >
        <source src="/videos/herouchun.mp4" type="video/mp4" />
        Sizning brauzeringiz videoni qo'llab-quvvatlamaydi.
      </video>

      {/* Overlay (Videoni biroz xiralashtirish va matn o'qilishini yaxshilash uchun) */}
      <div className="absolute z-20 w-full h-full bg-black/50"></div>

      {/* Content */}
      <div className="container mx-auto px-5 relative z-30 text-white ">
        <div className="max-w-[800px] mb-20 my-28">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-8 uppercase max-w-[500px]">
            Петербургский теннисный клуб имени М.А. Пасечникова
          </h1>

          <button
            onClick={() => setIsModalOpen(true)}
            className=" w-[450px] flex items-center gap-4   hover:bg-[#8D86C9] transition-all px-10 py-4 rounded-full font-medium active:scale-95"
          >
            <div className="flex items-center justify-center border-2 border-[#8D86C9] rounded-full p-1.5 w-fit">
              {/* Tashqi border: border-2 va p-1.5 (bo'shliq miqdori) */}

              <span className="bg-[#8D86C9] p-3 rounded-full flex items-center justify-center">
                {/* Ichki binafsha doira */}
                <Play fill="white" size={24} className="ml-1" />
                {/* ml-1: Play ikonkasi markazda ko'rinishi uchun biroz suriladi */}
              </span>
            </div>
            Посмотрите видео о нашем клубе
          </button>
        </div>

        {/* Hero Cards List */}
        <div className="flex gap-10 mb-4 z-20 justify-center">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl flex flex-col justify-between h-[130px] hover:bg-white/20 transition-all group">
            <h5 className="text-gray-300 font-medium">Услуги</h5>
            <div className="flex justify-between items-center  gap-4">
              <h3 className="text-xl font-bold">Аренда кортов</h3>
              <a
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#8D86C9] rounded-lg group-hover:translate-x-1 transition-transform"
              >
                <ArrowRight size={15} />
              </a>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl flex flex-col justify-between h-[130px] hover:bg-white/20 transition-all group">
            <h5 className="text-gray-300 font-medium">Услуги</h5>
            <div className="flex justify-between items-center gap-4">
              <h3 className="text-xl font-bold">Детский теннис</h3>
              <a
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#8D86C9] rounded-lg group-hover:translate-x-1 transition-transform"
              >
                <ArrowRight size={15} />
              </a>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl flex flex-col justify-between h-[130px] hover:bg-white/20 transition-all group">
            <h5 className="text-gray-300 font-medium">Услуги</h5>
            <div className="flex justify-between items-center gap-4">
              <h3 className="text-xl font-bold">Сборы команд</h3>
              <a
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#8D86C9] rounded-lg group-hover:translate-x-1 transition-transform"
              >
                <ArrowRight size={15} />
              </a>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl flex flex-col justify-between h-[130px] hover:bg-white/20 transition-all group">
            <h5 className="text-gray-300 font-medium">Услуги</h5>
            <div className="flex justify-between items-center gap-4">
              <h3 className="text-xl font-bold">Расписание</h3>
              <a
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#8D86C9] rounded-lg group-hover:translate-x-1 transition-transform"
              >
                <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/90 p-4">
          <div className="relative w-full max-w-[900px] aspect-video">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-12 right-0 text-white text-xl hover:text-orange-500"
            >
              Закрыть ✕
            </button>
            <iframe
              className="w-full h-full rounded-xl shadow-2xl"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
