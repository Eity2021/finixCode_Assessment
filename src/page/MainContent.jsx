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
    <>
      <main className="container py-[40px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Left Column - Main Image and Event Details */}
          <div className="lg:col-span-2 space-y-3 ">
            <div className="relative rounded-xl overflow-hidden w-full">
              <img
                src={FootballImageSlider}
                alt="Football field at night"
                fill
                className=" rounded-[25px] w-full"
              />
            </div>

            <div className="flex justify-between items-start mt-[30px]">
              <div>
                <h1 className="font-[900] leading-[64px] text-[48px] text-[#171717]">
                  Road to the Football Finals
                </h1>
                <p className="text-[#4A4A4A] text-[24px] space-y-3 leading-[20px] font-[400]">
                  Bashundhara Sports Complex
                </p>
                <p className="text-[#4A4A4A] text-[24px] space-y-3 leading-[40px] font-[400] mt-1">
                  Mar 14 from 7:30 PM - 9:30 PM
                </p>
              </div>

              <div className="flex gap-2 ">
                <button
                  variant="outline"
                  size="icon"
                  className="rounded-full p-[8px] border border-[#E5E5E5] bg-[#F6F6F6]"
                >
                  <img src={downloadIcon} alt="downloadIcon" />
                </button>
                <button
                  variant="outline"
                  size="icon"
                  className="rounded-full p-[8px] border border-[#E5E5E5] bg-[#F6F6F6]"
                >
                  <img src={wishListIcon} alt="wishListIcon" />
                </button>
                <button variant="outline" size="icon" className="rounded-full">
                  <img src={dotsVertical} alt="dotsVertical" />
                </button>
              </div>
            </div>
            <div className="mt-[100px]">
              <Tabs></Tabs>
            </div>
          </div>

          {/* Right Column - Thumbnails and Event Info */}
          <div className="">
            <div className="grid grid-cols-1 gap-2">
              <div className="relative rounded-xl overflow-hidden ">
                <img
                  src={BackgroundPart1}
                  alt="Football field thumbnail"
                  fill
                  className="object-cover w-full h-full py-1"
                />
              </div>
              <div
                className="relative rounded-xl overflow-hidden w-full h-[200px] bg-cover  flex items-center justify-center no-repeat"
                style={{ backgroundImage: `url(${BackgroundPart2})` }}
              ></div>
            </div>
            <JoinEvent ></JoinEvent>
          </div>
        </div>
      </main>
    
    </>
  );
}
