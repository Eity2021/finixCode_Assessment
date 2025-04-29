import React from "react";
import { ChevronDown, Heart, MoreVertical, Search, Share2, Trophy, User } from "lucide-react";
import FootballImageSilder from "../assets/image/mainContent/Football_Image_silder";

 export default function MainContent() {
  return (
    <div>
 <main className="container mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Left Column - Main Image and Event Details */}
          <div className="lg:col-span-2 space-y-4">
            <div className="relative rounded-xl overflow-hidden aspect-[16/9]">
              <img
                src={FootballImageSilder}
                alt="Football field at night"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">Road to the Football Finals</h1>
                <p className="text-gray-600">Bashundhara Sports Complex</p>
                <p className="text-gray-600 text-sm mt-1">Mar 14 from 7:30 PM - 9:30 PM</p>
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
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
              <div className="relative rounded-xl overflow-hidden aspect-[16/9]">
                <img
                  src="/placeholder.svg?height=300&width=500"
                  alt="Football field thumbnail"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative rounded-xl overflow-hidden aspect-[16/9] bg-gray-800 flex items-center justify-center">
                <div className="text-white text-xl font-semibold">+2 photos</div>
              </div>
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
              <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white">Join event</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

