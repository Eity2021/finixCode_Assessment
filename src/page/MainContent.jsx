import React from "react";
import { Heart, MoreVertical, Share2 } from "lucide-react";
import FootballImageSlider from "../assets/image/mainContent/Football_Image_slider.png";
import BackgroundPart1 from "../assets/image/mainContent/BackgroundPart1.png";
import BackgroundPart2 from "../assets/image/mainContent/BackgroundPart2.png";

export default function MainContent() {
  return (
    <div>
      <main className="container ">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Left Column - Main Image and Event Details */}
          <div className="lg:col-span-2 space-y-3">
            <div className="relative rounded-xl overflow-hidden w-full">
              <img
                src={FootballImageSlider}
                alt="Football field at night"
                fill
                className=" rounded-[25px]"
              />
            </div>

            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">
                  Road to the Football Finals
                </h1>
                <p className="text-gray-600">Bashundhara Sports Complex</p>
                <p className="text-gray-600 text-sm mt-1">
                  Mar 14 from 7:30 PM - 9:30 PM
                </p>
              </div>

              <div className="flex gap-2">
                <button variant="outline" size="icon" className="rounded-full">
                  <Share2 className="h-4 w-4" />
                </button>
                <button variant="outline" size="icon" className="rounded-full">
                  <Heart className="h-4 w-4" />
                </button>
                <button variant="outline" size="icon" className="rounded-full">
                  <MoreVertical className="h-4 w-4" />
                </button>
              </div>
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
                  className="object-cover w-full "
                />
              </div>

              <div
                className="relative rounded-xl overflow-hidden w-full h-[190px] bg-cover  flex items-center justify-center no-repeat"
                style={{ backgroundImage: `url(${BackgroundPart2})` }}
              ></div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <div className="text-emerald-600">
                  <span className="font-semibold">6</span> spots left
                </div>
                <div>
                  <span className="font-bold text-lg">320tk</span>
                  <span className="text-gray-500 text-sm">/player</span>
                  <span className="text-xs text-gray-400 ml-1">(price)</span>
                </div>
              </div>
              <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white">
                Join event
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
