import React from 'react'
import court1 from './images/court1.png'
import court2 from './images/court2.png'
import court3 from './images/court3.png'

const Section = () => {
  return (
    <div className="py-[80px]">
      <div className="container mx-auto px-[20px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">

         
          <div
            className="h-[450px] rounded-[20px] bg-cover bg-center flex items-end p-[30px]"
            style={{ backgroundImage: `url(${court1})` }}
          >
            <h1 className="text-white text-[27px] font-bold leading-[34px] max-w-[300px]">
              5 летних грунтовых кортов
            </h1>
          </div>

         
          <div
            className="h-[450px] rounded-[20px] bg-cover bg-center flex items-end p-[30px]"
            style={{ backgroundImage: `url(${court2})` }}
          >
            <h1 className="text-white text-[27px] font-bold leading-[34px] max-w-[300px]">
              Зал с покрытием “Искусственная трава”
            </h1>
          </div>

         
          <div
            className="h-[450px] rounded-[20px] bg-cover bg-center flex items-end p-[30px]"
            style={{ backgroundImage: `url(${court3})` }}
          >
            <h1 className="text-white text-[27px] font-bold leading-[34px] max-w-[300px]">
              Зал с покрытием “Хард”
            </h1>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Section
