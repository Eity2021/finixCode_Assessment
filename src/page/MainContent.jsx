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
    <main className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          <div className="relative rounded-xl overflow-hidden w-full">
            <img
              src={FootballImageSlider}
              alt="Football field at night"
              className="rounded-[25px] w-full h-auto object-cover"
            />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="font-extrabold text-3xl md:text-4xl lg:text-[48px] text-[#171717] leading-tight">
                Road to the Football Finals
              </h1>
              <p className="text-[#4A4A4A] text-lg md:text-xl font-normal mt-2">
                Bashundhara Sports Complex
              </p>
              <p className="text-[#4A4A4A] text-lg md:text-xl font-normal mt-1">
                Mar 14 from 7:30 PM - 9:30 PM
              </p>
            </div>

            <div className="flex gap-3">
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
        <div className="space-y-4">
          <div className="space-y-4">
            <div className="rounded-xl overflow-hidden w-full">
              <img
                src={BackgroundPart1}
                alt="Football field thumbnail"
                className="object-cover w-full h-auto"
              />
            </div>
            <div className="rounded-xl overflow-hidden w-full">
              <img
                src={BackgroundPart2}
                alt="Football field thumbnail"
                className="object-cover w-full h-auto"
              />
            </div>
          </div>
          <JoinEvent />
        </div>
      </div>
    </main>
  );
}
