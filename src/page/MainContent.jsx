import React from "react";
import FootballImageSlider from "../assets/image/mainContent/Football_Image_slider.png";
import BackgroundPart1 from "../assets/image/mainContent/BackgroundPart1.png";
import BackgroundPart2 from "../assets/image/mainContent/BackgroundPart2.png";
import downloadIcon from "../assets/image/mainContent/downloadIcon.png";
import wishListIcon from "../assets/image/mainContent/wishListIcon.png";
import dotsVertical from "../assets/image/mainContent/dots-vertical.png";
import JoinEvent from "./JoinEvent";
import Tabs from "./tabs/Tabs";

export default function MainContent() {
  return (
<div className="bg-[#F4F5EF]">
<main className="md:container  mx-auto py-10 xl:px-0 px-[10px] bg-[#F4F5EF]">
      <div className="grid grid-cols-1  md:grid-cols-3 md:gap-6 gap-0">
        {/* Left Column */}
        <div className="col-span-2 ">
          <div className="w-full">
            <img
              src={FootballImageSlider}
              alt="Football field at night"
              className="rounded-[25px] w-full "
            />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center  pt-[30px]">
            <div>
              <h1 className="font-[900] text-[30px] md:text-[26px] lg:text-[40px] xl-[48px] text-[#171717] leading-tight ">
                Road to the Football Finals
              </h1>
              <p className="text-[#4A4A4A] text-lg lg:text-[24px] font-normal mt-2">
                Bashundhara Sports Complex
              </p>
              <p className="text-[#4A4A4A] text-lg lg:text-[24px] font-normal mt-1">
                Mar 14 from 7:30 PM - 9:30 PM
              </p>
            </div>

            <div className="flex gap-3 md:mt-[0px] mt-[20px]">
              <button className="rounded-full p-2 border border-[#E5E5E5] bg-[#F6F6F6]">
                <img src={downloadIcon} alt="downloadIcon" className="w-5 h-5" />
              </button>
              <button className="rounded-full p-2 border border-[#E5E5E5] bg-[#F6F6F6]">
                <img src={wishListIcon} alt="wishListIcon" className="w-5 h-5" />
              </button>
              <button className="rounded-full p-2 border border-[#E5E5E5] bg-[#F6F6F6]">
                <img src={dotsVertical} alt="dotsVertical" className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="mt-10">
            <Tabs />
          </div> 
        </div>

        {/* Right Column */}
        <div >
          <div className="space-y-4">
            <div className="">
              <img
                src={BackgroundPart1}
                alt="Football field thumbnail"
                className="w-full"
              />
            </div>
            <div className="">
              <img
                src={BackgroundPart2}
                alt="Football field thumbnail"
                className="w-full"
              />
            </div>
          </div>
          <JoinEvent />
        </div>
      </div>
    </main>
</div>
  );
}
