import React from "react";
import tennisImg from "./images/tennis.png"; 

const Main = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">

          <div className="relative">
            <img
              src={tennisImg}
              alt="Sport Club"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="bg-[#f6efe8] p-10 lg:p-14 h-full flex flex-col justify-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
              Спортивный клуб
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Imperdiet lorem ipsum, pulvinar aliquet ut ultrices in sit turpis.
              Ultrices orci pretium risus tincidunt non viverra porttitor.
              Sollicitudin enim nunc in nisl donec vel. Blandit mauris vitae amet
              aliquet ultrices malesuada.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Condimentum hac adipiscing purus in augue nisi. Convallis ut nisi.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Ornare orci ut dictum nulla fames.
            </h3>

            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-600">
                <span className="w-2 h-2 mt-2 bg-indigo-500 rounded-full"></span>
                Euismod diam, vel venenatis bibendum sodales sem hendrerit
                vulputate sagittis.
              </li>
              <li className="flex items-start gap-3 text-gray-600">
                <span className="w-2 h-2 mt-2 bg-indigo-500 rounded-full"></span>
                Nisl senectus sed malesuada donec. Interdum malesuada bibendum
                imperdiet elementum auctor vitae in.
              </li>
              <li className="flex items-start gap-3 text-gray-600">
                <span className="w-2 h-2 mt-2 bg-indigo-500 rounded-full"></span>
                Quam purus ornare dictum pharetra. Sed viverra tellus
                sollicitudin urna, sagittis.
              </li>
              <li className="flex items-start gap-3 text-gray-600">
                <span className="w-2 h-2 mt-2 bg-indigo-500 rounded-full"></span>
                Scelerisque urna senectus commodo, nam. Donec nibh tempus
                imperdiet nisi, tincidunt mus egestas nisl nullam.
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Main;
