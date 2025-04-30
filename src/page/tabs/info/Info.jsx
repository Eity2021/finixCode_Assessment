import React from 'react'

import DifficultyIcons from "../../../assets/image/tabs/Difficulty_Icons.png"
import Location from './Location';
import GoodToKnow from './GoodToKnow';
export default function Info() {
  return (
    <div className="">
    <div className="flex flex-wrap gap-2 my-[60px]">
      <span className="bg-blue-100  px-[24px] py-[16px] rounded-[48px] text-[24px] font-[400]  text-[#4a4a4a]">Football</span>
      <span className="bg-cyan-100  px-[24px] py-[16px] rounded-[48px] text-[24px] font-[400]  text-[#4a4a4a]">Relay</span>
      <span className="bg-pink-100  px-[24px] py-[16px] rounded-[48px] text-[24px] font-[400]  text-[#4a4a4a]">Female</span>
      <span className="bg-purple-100  px-[24px] py-[16px] rounded-[48px] text-[24px] font-[400]  text-[#4a4a4a]">Age: Below 25</span>
      <div className="flex items-center gap-2 ml-auto">
        <img src={DifficultyIcons} />
        <span className="text-[24px] font-[400] text-[#4a4a4a] leading-[40px]">Beginner</span>
      </div>
    </div>

    {/* <div className="relative">
      <div className="absolute right-0 -top-2">
        <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm">Rejad karim</span>
      </div>
    </div> */}

    <section className='pr-36'>
      <div className='mb-[60px]'>
        <h2 className="text-[32px] font-[700]   text-[#171717] leading-[28px] mb-[28px] ">About this event</h2>
      <p className="text-[16px] font-[400] text-[#171717] leading-relaxed">
        Learn about the capital's first beavers in 400 years from the Ealing Beaver project, make your own
        mushroom growing starter kit with urban agricultural experts, before joining Roma the Engineer to get into
        the nuts and bolts of tomorrow's high-rise buildings.
      </p>
      <button className="text-[16px] font-[400] text-[#0096ED] mt-1 underline">Read more</button>
     </div>
     <Location></Location>
     <GoodToKnow></GoodToKnow>
    </section>


  </div>
  )
}
